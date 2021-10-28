import { LI } from './styles';

interface Props {
  children: React.ReactNode;
}

export default function Card({
  children,
}: Props): JSX.Element {
  return (
    <LI>
      {children}
    </LI>
  );
}
