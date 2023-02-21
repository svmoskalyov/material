import { ToastContainer } from 'react-toastify';
import { Box } from './Box';
import { MaterialData } from './MaterialData/MaterialData';

export const App = () => {
  return (
    <Box width="500px" mx="auto" p={4}>
      <MaterialData />
      <ToastContainer autoClose={3000} />
    </Box>
  );
};
