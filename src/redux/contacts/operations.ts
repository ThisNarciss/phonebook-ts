import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addData,
  deleteData,
  editData,
  fetchData,
} from '../../api/phonebook-api';
import { IEditContact } from '../../ts/interfaces/IEditContact';
import { IEditContactFulfilledAction } from '../../ts/interfaces/IEditContactFulfilledAction';
import { IAddContact } from '../../ts/interfaces/IContacts';
import { IAddContactFulfilledAction } from '../../ts/interfaces/IAddContactFulfilledAction';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  (_, thunkAPI) => {
    return fetchData()
      .then(contacts => contacts)
      .catch(error => thunkAPI.rejectWithValue(error.message));
  }
);

export const addContact = createAsyncThunk<
  IAddContactFulfilledAction,
  IAddContact
>('contacts/addContact', (obj, thunkAPI) => {
  return addData(obj)
    .then(contacts => contacts)
    .catch(error => thunkAPI.rejectWithValue(error.message));
});
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  (id: string, thunkAPI) => {
    return deleteData(id)
      .then(contacts => contacts)
      .catch(error => thunkAPI.rejectWithValue(error.message));
  }
);

export const editContact = createAsyncThunk<
  IEditContactFulfilledAction,
  IEditContact
>('contacts/editContact', (obj, thunkAPI) => {
  return editData(obj)
    .then(contact => contact)
    .catch(error => thunkAPI.rejectWithValue(error.message));
});
