import styled from "@emotion/styled";
import { useState } from "react";

interface Props {
  value: number;
  onCommit: (v: number) => void;
}

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  padding: 4px;
`;

export default function NumberCell({ value, onCommit }: Props) {
  const [val, setVal] = useState(value);

  return (
    <Input
      type="number"
      value={val}
      onChange={(e) => setVal(Number(e.target.value))}
      onBlur={() => onCommit(val)}
    />
  );
}
