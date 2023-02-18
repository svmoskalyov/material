import { Component } from 'react';
import { Box } from './Box';
import * as API from 'services/api';
import { MaterialEditorForm } from './MaterialEditorForm/MaterialEditorForm';
import { MaterialList } from './MaterialList/MaterialList';

export class App extends Component {
  state = {
    materials: [],
    isLoading: false,
  };

  addMaterial = async values => {
    try {
      this.setState({ isLoading: true });
      const material = await API.addMaterial(values);
      this.setState(state => ({
        materials: [...state.materials, material],
        isLoading: false,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { materials } = this.state;

    return (
      <Box width="500px" mx="auto" p={4}>
        <MaterialEditorForm onSubmit={this.addMaterial} />
        <MaterialList items={materials} />
      </Box>
    );
  }
}
