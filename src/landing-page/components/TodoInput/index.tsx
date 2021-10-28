import { Textarea } from './styles';

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
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
