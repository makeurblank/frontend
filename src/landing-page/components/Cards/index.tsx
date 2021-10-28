import Card from 'src/landing-page/components/Card';
import { UL } from './styles';

interface Props {
  values: string[];
}

export default function Cards({
  values,
}: Props): JSX.Element {
  return (
    <UL>
      {
        values.map((value: string) => (
          <Card key={value} value={value} />
        ))
      }
    </UL>
  );
}
