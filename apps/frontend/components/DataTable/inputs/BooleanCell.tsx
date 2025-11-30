import styled from "@emotion/styled";

interface Props {
  value: boolean;
  onCommit: (v: boolean) => void;
}

const Checkbox = styled.input`
  transform: scale(1.3);
  cursor: pointer;
`;

export default function BooleanCell({ value, onCommit }: Props) {
  return (
    <Checkbox
      type="checkbox"
      checked={value}
      onChange={(e) => onCommit(e.target.checked)}
    />
  );
}