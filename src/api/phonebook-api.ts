import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export function userData() {
  return axios.get('/users/current').then(response => response.data);
}

export function signUpUserData(obj) {
  return axios.post('/users/signup', obj).then(response => response.data);
}

export function loginUserData(obj) {
  return axios.post('/users/login', obj).then(response => response.data);
}

export function logoutUserData() {
  return axios.post('/users/logout').then(response => response.data);
}

export function fetchData() {
  return axios.get('/contacts').then(response => response.data);
}

export function addData(obj) {
  return axios.post('/contacts', obj).then(response => response.data);
}

export function deleteData(contactId) {
  return axios.delete(`/contacts/${contactId}`).then(response => response.data);
}

export function editData(contactId, obj) {
  return axios
    .patch(`/contacts/${contactId}`, obj)
    .then(response => response.data);
}
