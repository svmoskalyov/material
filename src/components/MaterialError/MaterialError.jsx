// import { toast } from 'react-toastify';
import { Box } from "components/Box";

export const MaterialError = ({ message }) => {
  return <Box color="red">{message}</Box>;
  //   return toast.error(`ERROR: ${message}`);
};
