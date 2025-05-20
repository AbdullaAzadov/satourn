'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../cn/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../cn/components/ui/command';
import { cn } from '../cn/lib/utils';
import { TSelectOptions } from '../lib/types';

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
];

type Props = {
  options: TSelectOptions;
  trigger: React.ReactNode;
  value: string;
  setValue: (value: string) => void;
  emptyPlaceholder?: string;
  searchPlaceholder?: string;
  defaultOpen?: boolean;
  parentClassName?: string;
  inputClassName?: string;
  itemClassName?: string;
};

export function CustomSearchSelect({
  options,
  trigger,
  value,
  setValue,
  emptyPlaceholder,
  searchPlaceholder,
  defaultOpen,
  ...cls
}: Props) {
  const [open, setOpen] = React.useState(defaultOpen);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent
        className={cn('w-[100vw]! max-w-[400px] p-0', cls.parentClassName)}
      >
        <Command>
          <CommandInput
            placeholder={searchPlaceholder ?? 'Введите...'}
            className={cn('h-9', cls.inputClassName)}
          />
          <CommandList>
            <CommandEmpty>
              {emptyPlaceholder ?? 'Ничего не найдено'}
            </CommandEmpty>
            <CommandGroup>
              {options.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  className={cls.itemClassName}
                  onSelect={(value) => {
                    setValue(value);
                    setOpen(false);
                  }}
                >
                  {item.node ? item.node : item.label}
                  <Check
                    className={cn(
                      'ml-auto',
                      value === item.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
