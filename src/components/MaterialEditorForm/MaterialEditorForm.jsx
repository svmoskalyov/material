import { Field, Form, Formik } from 'formik';

export const MaterialEditorForm = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ title: '', link: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="">
            Description
            <Field name="title" type="text" />
          </label>
          <br />
          <label htmlFor="">
            URL
            <Field name="link" type="text" />
            {/* true code (type="url") */}
            {/* <Field name="link" type="url" /> */}
          </label>
          <br />
          <button type="submit" disabled={isSubmitting}>
            Add material
          </button>
        </Form>
      )}
    </Formik>
  );
};
