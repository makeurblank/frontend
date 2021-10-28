import styled from '@emotion/styled';
import { Button as MuiButton } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

export const Button = styled(MuiButton)`

`;
Button.defaultProps = {
  variant: 'contained',
  startIcon: <SaveIcon />,
};

export default Button;
