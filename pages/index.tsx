import type { CardProps } from 'src/landing-page/components/Cards';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Cards from 'src/landing-page/components/Cards';
import CreateCardButton from 'src/landing-page/components/CreateCardButton';
import TodoInput from 'src/landing-page/components/TodoInput';

export default function LandingPage(): JSX.Element {
  const [value, setValue] = useState<string>('');
  const [values, setValues] = useState<CardProps[]>([]);

  const onCreate = () => {
    setValues([...values, { id: values.length, value }]);
    setValue('');
  };
  const onDelete = (givenID: number) => {
    setValues(values.filter(({ id }) => givenID !== id));
  };

  return (
    <Container sx={{ padding: '4rem 0' }}>
      <Box sx={{ marginBottom: '1rem' }}>
        <TodoInput value={value} onChange={setValue} />
        <CreateCardButton onClick={onCreate} />
      </Box>
      <Cards values={values} onClick={onDelete} />
    </Container>
  );
}
