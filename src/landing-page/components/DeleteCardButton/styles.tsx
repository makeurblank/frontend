import styled from '@emotion/styled';
import { Button as MuiButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const Button = styled(MuiButton)`

`;
Button.defaultProps = {
  variant: 'contained',
  color: 'error',
  startIcon: <DeleteIcon />,
};

export default Button;
