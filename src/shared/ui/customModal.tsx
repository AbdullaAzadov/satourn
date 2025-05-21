import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/shared/cn/components/ui/dialog';
import { FC } from 'react';
import { cn } from '../cn/lib/utils';

export type TModalProps = {
  header: React.ReactNode;
  children: React.ReactNode;
  trigger: React.ReactNode;
  footer?: React.ReactNode;
  footerCanClose?: boolean;
  // blockModal?: boolean;
  onOpenChange?: () => void;
  className?: string;
};

export const CustomModal: FC<TModalProps> = ({
  header,
  children,
  trigger,
  footer,
  footerCanClose = true,
  // blockModal,
  onOpenChange,
  className,
}) => {
  return (
    <Dialog onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
      // blockModal={blockModal}
      >
        <DialogHeader className={className}>
          <DialogTitle>{header}</DialogTitle>
        </DialogHeader>
        <div
          className='overflow-y-auto max-h-[67vh] scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-stone-300 scrollbar-track-transparent'
          style={{
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {children}
        </div>
        {footer && (
          <DialogFooter className='justify-start!'>
            {footerCanClose && <DialogClose asChild>{footer}</DialogClose>}
            {!footerCanClose && footer}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
