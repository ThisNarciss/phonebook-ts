import { nanoid } from 'nanoid';
import {
  UserForm,
  InputBox,
  Label,
  FormInput,
  Error,
  Bar,
} from '../FormStyle.styled';
import { Formik, FormikHelpers } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import {
  failureNameNotify,
  failureNumberNotify,
} from '../../utils/notification';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { AppDispatch } from '../../redux/store';
import { FC } from 'react';

const schema = yup.object().shape({
  name: yup.string().min(2).max(30).trim().required(),
  number: yup.string().min(12).max(13).trim().required(),
});

const nameInputId = nanoid();
const numberInputId = nanoid();

type InitialValueType = {
  name: string;
  number: string;
};

const initialValue: InitialValueType = {
  name: '',
  number: '',
};

export const ContactForm: FC = () => {
  const contacts = useSelector(selectContacts);
  const dispatch: AppDispatch = useDispatch();

  const addNewContact = (obj: InitialValueType) => {
    const findName = contacts.find(
      ({ name }) => name.toLowerCase() === obj.name.toLowerCase()
    );
    const findNumber = contacts.find(
      ({ number }) => number.toLowerCase() === obj.number.toLowerCase()
    );

    if (findName) {
      failureNameNotify(findName);
      return;
    }
    if (findNumber) {
      failureNumberNotify(findNumber);
      return;
    }

    dispatch(addContact(obj));
  };

  const handleFormSubmit = (
    values: InitialValueType,
    { resetForm }: FormikHelpers<InitialValueType>
  ) => {
    addNewContact(values);
    resetForm();
  };

  return (
    <Formik
      validationSchema={schema}
      initialValues={initialValue}
      onSubmit={handleFormSubmit}
    >
      <UserForm>
        <InputBox>
          <FormInput
            id={nameInputId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <Bar />
          <Label htmlFor={nameInputId}>Name</Label>
          <Error name="name" component="p" />
        </InputBox>

        <InputBox>
          <FormInput
            id={numberInputId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <Bar />
          <Label htmlFor={numberInputId}>Number</Label>
          <Error name="number" component="p" />
        </InputBox>
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{
            transitionProperty: 'all',
            transitionDuration: '250ms',
            transitionTimingFunction: 'linear',
          }}
          endIcon={<AddCircleIcon fontSize="large" />}
        >
          Add
        </Button>
      </UserForm>
    </Formik>
  );
};
