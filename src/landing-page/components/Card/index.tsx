import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { LI } from './styles';

interface Props {
  children: React.ReactNode;
}

export default function Card({
  children,
}: Props): JSX.Element {
  return (
    <LI>
      <MuiCard>
        <CardContent>
          {children}
        </CardContent>
      </MuiCard>
    </LI>
  );
}
