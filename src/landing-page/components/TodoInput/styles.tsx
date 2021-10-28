import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';

export const Textarea = styled(TextField)`

`;
Textarea.defaultProps = {
  multiline: true,
};

export default Textarea;
