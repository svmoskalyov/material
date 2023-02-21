import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { AiFillFileAdd } from 'react-icons/ai';
import { Button } from 'components/Button/Button';
import { Forma, Input, Label } from './MaterialForm.styled';

const personSchema = yup.object({
  title: yup.string().required(),
  link: yup.string().url().nullable(),
});

const initialValues = {
  title: '',
  link: '',
};

export const MaterialForm = ({ onSubmit }) => {
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
            <Input name="title" type="text" required />
            <ErrorMessage name="title" />
          </Label>
          <Label>
            URL
            <Input
              name="link"
              type="url"
              required
              placeholder="https://example.com"
            />
            <ErrorMessage name="link" />
          </Label>
          <Button type="submit" icon={AiFillFileAdd} disabled={isSubmitting}>
            Add material
          </Button>
        </Forma>
      )}
    </Formik>
  );
};
