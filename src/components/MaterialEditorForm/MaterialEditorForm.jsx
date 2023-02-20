import { Formik } from 'formik';
import * as yup from 'yup';
import { AiFillFileAdd } from 'react-icons/ai';
import { Button } from 'components/Button/Button';
import { Forma, Input, Label } from './MaterialEditorForm.styled';

const personSchema = yup.object({
  title: yup.string().required(),
  link: yup.string().url().nullable(),
});

const initialValues = {
  title: '',
  link: '',
};

export const MaterialEditorForm = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={personSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Forma>
          <Label>
            Description
            <Input type="text" name="title" required />
          </Label>
          <Label>
            URL
            <Input
              type="url"
              name="link"
              required
              placeholder="https://example.com"
            />
          </Label>
          <Button type="submit" icon={AiFillFileAdd} disabled={isSubmitting}>
            Add material
          </Button>
        </Forma>
      )}
    </Formik>
  );
};
