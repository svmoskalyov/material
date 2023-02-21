// import { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
// import { Box } from './Box';
// import { Section } from './Section/Section';
// import { Loader } from './Loader/Loader';
// import { MaterialEditorForm } from './MaterialEditorForm/MaterialEditorForm';
// import { MaterialList } from './MaterialList/MaterialList';
// import * as API from 'services/api';

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

// export class App extends Component {
//   state = {
//     materials: [],
//     isLoading: false,
//     error: false,
//   };

//   async componentDidMount() {
//     try {
//       this.setState({ isLoading: true });
//       const materials = await API.getMaterials();
//       this.setState({ materials, isLoading: false });
//     } catch (error) {
//       this.setState({ error: true, isLoading: false });
//       console.log(error);
//     }
//   }

//   addMaterial = async values => {
//     try {
//       // this.setState({ isLoading: true });
//       const material = await API.addMaterial(values);
//       this.setState(state => ({
//         materials: [...state.materials, material],
//         // isLoading: false,
//       }));
//     } catch (error) {
//       this.setState({ error: true, isLoading: false });
//       console.log(error);
//     }
//   };

//   deleteMaterial = async id => {
//     try {
//       await API.deleteMaterial(id);
//       this.setState(state => ({
//         materials: state.materials.filter(material => material.id !== id),
//       }));
//     } catch (error) {
//       this.setState({ error: true });
//       console.log(error);
//     }
//   };

//   updateMaterial = async fields => {
//     try {
//       const updatedMaterial = await API.updateMaterial(fields);
//       this.setState(state => ({
//         materials: state.materials.map(material =>
//           material.id === fields.id ? updatedMaterial : material
//         ),
//       }));
//     } catch (error) {
//       this.setState({ error: true });
//       console.log(error);
//     }
//   };

//   render() {
//     const { materials, isLoading, error } = this.state;

//     return (
//       <Box width="500px" mx="auto" p={4}>
//         {error && (
//           <p>Oh! Something went wrong. Reload the page and try again time.</p>
//         )}
//         <Section title="ADD MATERIAL">
//           <MaterialEditorForm onSubmit={this.addMaterial} />
//         </Section>

//         {isLoading ? (
//           <Loader />
//         ) : (
//           <Section title="LIST MATERIALS">
//             <MaterialList
//               items={materials}
//               onDelete={this.deleteMaterial}
//               onUpdate={this.updateMaterial}
//             />
//           </Section>
//         )}
//         <ToastContainer autoClose={3000} />
//       </Box>
//     );
//   }
// }
