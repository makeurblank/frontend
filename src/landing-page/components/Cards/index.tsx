import Card from 'src/landing-page/components/Card';
import DeleteCardButton from 'src/landing-page/components/DeleteCardButton';
import { UL } from './styles';

interface Props {
  values: string[];
  onClick: (index: number) => void;
}

export default function Cards({
  values,
  onClick,
}: Props): JSX.Element {
  return (
    <UL>
      {
        values.map((value: string, index: number) => (
          <Card key={value}>
            {value}
            <DeleteCardButton onClick={() => onClick(index)} />
          </Card>
        ))
      }
    </UL>
  );
}
