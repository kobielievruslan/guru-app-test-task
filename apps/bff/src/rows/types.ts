export type RowEditableField = 'text' | 'number' | 'select';

export interface UpdateRowDto {
  field: RowEditableField;
  value: string | number;
}
