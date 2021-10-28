import { LI } from './styles';

interface Props {
  value: string;
}

export default function Card({
  value,
}: Props): JSX.Element {
  return (
    <LI>
      {value}
    </LI>
  );
}
