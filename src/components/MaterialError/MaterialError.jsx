import PropTypes from 'prop-types';
import { Box } from 'components/Box';

export const MaterialError = ({ message }) => {
  return <Box color="red">{message}</Box>;
};

MaterialError.propTypes = {
  message: PropTypes.string.isRequired,
};
