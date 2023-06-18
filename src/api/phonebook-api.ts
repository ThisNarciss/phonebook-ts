import axios from 'axios';
import { ILogin, IRegister } from '../ts/interfaces/IAuth';
import { IAddContact } from '../ts/interfaces/IContacts';
import { IEditContact } from '../ts/interfaces/IEditContact';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export function userData() {
  return axios.get('/users/current').then(response => response.data);
}

export function signUpUserData(obj: IRegister) {
  return axios.post('/users/signup', obj).then(response => response.data);
}

export function loginUserData(obj: ILogin) {
  return axios.post('/users/login', obj).then(response => response.data);
}

export function logoutUserData() {
  return axios.post('/users/logout').then(response => response.data);
}

export function fetchData() {
  return axios.get('/contacts').then(response => response.data);
}

export function addData(obj: IAddContact) {
  return axios.post('/contacts', obj).then(response => response.data);
}

export function deleteData(contactId: string) {
  return axios.delete(`/contacts/${contactId}`).then(response => response.data);
}

export function editData({ id: contactId, value: obj }: IEditContact) {
  return axios
    .patch(`/contacts/${contactId}`, obj)
    .then(response => response.data);
}
