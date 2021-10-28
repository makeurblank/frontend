import type { CardProps } from 'src/landing-page/components/Cards';

import { useState } from 'react';

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
    <>
      <TodoInput value={value} onChange={setValue} />
      <CreateCardButton onClick={onCreate} />
      <Cards values={values} onClick={onDelete} />
    </>
  );
}
