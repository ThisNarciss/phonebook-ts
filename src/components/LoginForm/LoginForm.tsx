import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/auth/operations';
import Button from '@mui/material/Button';
import { Section } from '../Section/Section';
import { Container } from '@mui/system';
import { Formik, FormikHelpers } from 'formik';
import { BiLogIn } from 'react-icons/bi';

import {
  Bar,
  Error,
  FormRegLog,
  InputLabelBox,
  InputRegLog,
  LabelRegLog,
  Title,
} from '../FormStyle.styled';
import { FC } from 'react';
import { AppDispatch } from '../../redux/store';

const emailId = nanoid();
const passwordId = nanoid();

const schema = yup.object().shape({
  email: yup.string().trim().required(),
  password: yup.string().min(7).trim().required(),
});

type InitialValueType = {
  email: string;
  password: string;
};

const initialValue: InitialValueType = {
  email: '',
  password: '',
};

export const LoginForm: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const signInUser = (values: InitialValueType) => {
    dispatch(loginUser(values));
  };

  const handleFormSubmit = (
    values: InitialValueType,
    { resetForm }: FormikHelpers<InitialValueType>
  ) => {
    signInUser(values);
    resetForm();
  };

  return (
    <Section title="Sign In">
      <Container maxWidth="xl">
        <Formik
          validationSchema={schema}
          initialValues={initialValue}
          onSubmit={handleFormSubmit}
        >
          <FormRegLog>
            <BiLogIn
              size={100}
              style={{
                color: 'white',
                textAlign: 'center',
                marginBottom: '5px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
            <Title>Login</Title>
            <InputLabelBox>
              <InputRegLog type="email" name="email" id={emailId} required />
              <Bar />
              <LabelRegLog htmlFor={emailId}>Email</LabelRegLog>
              <Error name="email" component="p" />
            </InputLabelBox>

            <InputLabelBox>
              <InputRegLog
                type="password"
                name="password"
                id={passwordId}
                required
              />
              <Bar />
              <LabelRegLog htmlFor={passwordId}>Password</LabelRegLog>
              <Error name="password" component="p" />
            </InputLabelBox>

            <Button
              type="submit"
              variant="contained"
              sx={{
                fontFamily: 'monospace',
                fontWeight: '700',
                letterSpacing: '1px',
              }}
            >
              Login
            </Button>
          </FormRegLog>
        </Formik>
      </Container>
    </Section>
  );
};
