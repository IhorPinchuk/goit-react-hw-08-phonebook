import { CircularProgress } from '@mui/material';

export const Loader = ({ size }) => {
  return (
    <CircularProgress
      size={size}
      sx={{
        display: 'block',
        marginTop: '50px',
        marginRight: 'auto',
        marginLeft: 'auto',
      }}
    />
  );
};
