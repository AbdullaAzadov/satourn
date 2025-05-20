'use client';
import { useState, useEffect } from 'react';
import { TScreenTypes } from '../lib/types';

export type TScreenSizes = {
  [key in TScreenTypes]: boolean;
};

const getScreenSizes: (width: number) => TScreenSizes = (width: number) => {
  return {
    xs: width >= 390,
    sm: width >= 640,
    md: width >= 768,
    lg: width >= 1024,
    xl: width >= 1280,
    '2xl': width >= 1536,
  };
};

const useScreen = () => {
  const [screen, setScreen] = useState<TScreenSizes>(getScreenSizes(1920));

  useEffect(() => {
    const handleResize = () => {
      setScreen(getScreenSizes(window.innerWidth));
    };

    setScreen(getScreenSizes(window.innerWidth));
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screen;
};

export default useScreen;
