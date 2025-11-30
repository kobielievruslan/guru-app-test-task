export interface RowData {
  id: number;
  text: string;
  number: number;
  select: string;
  status: string;
  category: string;
  priority: number;
  flagged: boolean;
  owner: string;
  rating: number;
  tag: string;
  description: string;
  note: string;
  email: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number;
  percentage: number;
  isActive: boolean;
}

export type RowField = Exclude<keyof RowData, "id">;

export type OnUpdateFunction = <K extends RowField>(
  id: number,
  field: K,
  value: RowData[K]
) => void;