import styled from "@emotion/styled";
import { useState } from "react";

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  padding: 0;
`;

interface DateCellProps {
  value: Date;
  onCommit: (value: Date) => void;
}

export default function DateCell({ value, onCommit }: DateCellProps) {
  const [internal, setInternal] = useState(
    value.toISOString().slice(0, 10) // YYYY-MM-DD
  );

  const handleBlur = () => {
    const newDate = new Date(internal);
    if (!isNaN(newDate.getTime())) {
      onCommit(newDate);
    }
  };

  return (
    <Input
      type="date"
      value={internal}
      onChange={(e) => setInternal(e.target.value)}
      onBlur={handleBlur}
    />
  );
}
