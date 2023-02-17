import { Component } from 'react';
import { Box } from './Box';

export class App extends Component {
  state = {};

  render() {
    return (
      <Box width="500px" mx="auto" p={4}>
        APP
      </Box>
    );
  }
}
