import { Button } from './styles';

interface Props {
  onClick: () => void;
}

export default function CreateCardButton({
  onClick,
}: Props): JSX.Element {
  return (
    <Button onClick={onClick}>
      Create
    </Button>
  );
}
