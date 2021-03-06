import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';

import Card from 'src/landing-page/components/Card';
import DeleteCardButton from 'src/landing-page/components/DeleteCardButton';
import { UL } from './styles';

export interface CardProps {
  id: number;
  value: string;
}
interface Props {
  values: CardProps[];
  onClick: (index: number) => void;
}

export default function Cards({
  values,
  onClick,
}: Props): JSX.Element {
  return (
    <UL>
      {
        values.map(({ id, value }) => (
          <Card key={id}>
            <Typography>
              {value}
            </Typography>
            <CardActions>
              <DeleteCardButton onClick={() => onClick(id)} />
            </CardActions>
          </Card>
        ))
      }
    </UL>
  );
}
