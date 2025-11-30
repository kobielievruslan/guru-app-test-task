import styled from "@emotion/styled";
import { useState } from "react";

interface Props {
  value: string;
  onCommit: (v: string) => void;
}

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  padding: 4px;
`;

export default function TextCell({ value, onCommit }: Props) {
  const [val, setVal] = useState(value);

  return (
    <Input
      value={val}
      onChange={(e) => setVal(e.target.value)}
      onBlur={() => onCommit(val)}
    />
  );
}
