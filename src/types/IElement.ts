export interface ISelectData extends IValueLabel {
  disabled?: boolean;
  [id: string]: any;
}

export interface IValueLabel {
  value: any;
  label: string;
}
