import styled from "@emotion/styled";
import { useState } from "react";

interface Props {
  value: string;
  onCommit: (v: string) => void;
  options: string[];
}

const Select = styled.select`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  padding: 4px;
`;

export default function SelectCell({ value, onCommit, options }: Props) {
  const [val, setVal] = useState(value);

  return (
    <Select
      value={val}
      onChange={(e) => {
        const v = e.target.value;
        setVal(v);
        onCommit(v);
      }}
    >
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </Select>
  );
}
