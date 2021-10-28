import { Textarea } from './styles';

const maxLength: number = 70;

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function TodoInput({
  value,
  onChange,
}: Props): JSX.Element {
  return (
    <Textarea
      maxLength={maxLength}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
