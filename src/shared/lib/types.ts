export type TSelectOptions = ISelectOption[];

export interface ISelectOption {
  value: string;
  label: string;
  node?: React.ReactNode;
}

export type TScreenTypes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
