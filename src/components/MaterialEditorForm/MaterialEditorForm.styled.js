import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Forma = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal};

  button {
    margin-left: auto;
    margin-right: ${p => p.theme.space[3]}px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Input = styled(Field)`
  margin-top: ${p => p.theme.space[3]}px;
  padding: 0 ${p => p.theme.space[3]}px;
  width: 90%;
  font-size: ${p => p.theme.fontSizes.m};
`;
