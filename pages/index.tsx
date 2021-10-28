import { useState } from 'react';
import TodoInput from 'src/landing-page/components/TodoInput';

export default function LandingPage(): JSX.Element {
  const [value, setValue] = useState('');

  return (
    <>
      <TodoInput value={value} onChange={setValue} />
    </>
  );
}
