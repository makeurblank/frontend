import { Button } from './styles';

interface Props {
  onClick: () => void;
}

export default function DeleteCardButton({
  onClick,
}: Props): JSX.Element {
  return (
    <Button onClick={onClick}>
      Delete
    </Button>
  );
}
