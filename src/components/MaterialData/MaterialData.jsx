import { Component } from 'react';
import { toast } from 'react-toastify';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { Section } from 'components/Section/Section';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { MaterialError } from 'components/MaterialError/MaterialError';
import { MaterialForm } from 'components/MaterialForm/MaterialForm';
import { MaterialList } from 'components/MaterialList/MaterialList';
import * as API from 'services/api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

export class MaterialData extends Component {
  state = {
    materials: [],
    error: null,
    status: Status.IDLE,
  };

  getMaterial = async () => {
    try {
      this.setState({ status: Status.PENDING });
      const materials = await API.getMaterials();
      this.setState({ materials, status: Status.RESOLVED });
    } catch (error) {
      this.setState({ error, status: Status.REJECTED });
      toast.error(error.message);
    }
  };

  addMaterial = async values => {
    try {
      const material = await API.addMaterial(values);
      this.setState(state => ({
        materials: [...state.materials, material],
      }));
    } catch (error) {
      this.setState({ error, status: Status.REJECTED });
      toast.error(error.message);
    }
  };

  deleteMaterial = async id => {
    try {
      await API.deleteMaterial(id);
      this.setState(state => ({
        materials: state.materials.filter(material => material.id !== id),
      }));
    } catch (error) {
      this.setState({ error, status: Status.REJECTED });
      toast.error(error.message);
    }
  };

  updateMaterial = async fields => {
    try {
      const updatedMaterial = await API.updateMaterial(fields);
      this.setState(state => ({
        materials: state.materials.map(material =>
          material.id === fields.id ? updatedMaterial : material
        ),
      }));
    } catch (error) {
      this.setState({ error, status: Status.REJECTED });
      toast.error(error.message);
    }
  };

  render() {
    const { materials, error, status } = this.state;

    if (status === 'idle') {
      return (
        <Section title="ADD MATERIAL">
          <MaterialForm onSubmit={this.addMaterial} />
          <Button
            type="button"
            icon={AiOutlineCloudDownload}
            onClick={this.getMaterial}
          >
            Dowload list materials...
          </Button>
        </Section>
      );
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <MaterialError message={error.message} />;
    }

    if (status === 'resolved') {
      return (
        <Section title="LIST MATERIALS">
          <MaterialList
            items={materials}
            onDelete={this.deleteMaterial}
            onUpdate={this.updateMaterial}
          />
        </Section>
      );
    }
  }
}
