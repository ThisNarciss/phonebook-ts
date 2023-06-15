import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/operations';
import Button from '@mui/material/Button';
import { Section } from 'components/Section/Section';
import { Container } from '@mui/system';
import {
  Bar,
  Error,
  FormRegLog,
  InputLabelBox,
  InputRegLog,
  LabelRegLog,
  Title,
} from 'components/FormStyle.styled';
import { Formik } from 'formik';
import { BiRegistered } from 'react-icons/bi';

const nameId = nanoid();
const emailId = nanoid();
const passwordId = nanoid();

const schema = yup.object().shape({
  name: yup.string().min(2).max(30).trim().required(),
  email: yup.string().trim().required(),
  password: yup.string().min(7).trim().required(),
});

const initialValue = {
  name: '',
  email: '',
  password: '',
};

export function RegisterForm() {
  const dispatch = useDispatch();

  const registeredUser = values => {
    dispatch(registerUser(values));
  };

  const handleFormSubmit = (values, { resetForm }) => {
    registeredUser(values);
    resetForm();
  };
  return (
    <Section title="Sign Up">
      <Container maxWidth="xl">
        <Formik
          validationSchema={schema}
          initialValues={initialValue}
          onSubmit={handleFormSubmit}
        >
          <FormRegLog>
            <BiRegistered
              size={100}
              style={{
                color: 'white',
                textAlign: 'center',
                marginBottom: '5px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
            <Title>Registration</Title>
            <InputLabelBox>
              <InputRegLog type="text" name="name" id={nameId} required />
              <Bar />
              <LabelRegLog htmlFor={nameId}>Name</LabelRegLog>
              <Error name="name" component="p" />
            </InputLabelBox>
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
              Register
            </Button>
          </FormRegLog>
        </Formik>
      </Container>
    </Section>
  );
}
