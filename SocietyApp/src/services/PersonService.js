import axios from "axios";

const REST_API_URL = 'http://localhost:8080/person';

export const listPersons = () => axios.get(`${REST_API_URL}/getAll`);

export const getPerson = (personId) => axios.get(`${REST_API_URL}/get/${personId}`);

export const createPerson = (person) => axios.post(`${REST_API_URL}/add`, person);

export const updatePerson = (person) => axios.put(`${REST_API_URL}/update`, person); // ID goes in body

export const deletePerson = (personId) => axios.delete(`${REST_API_URL}/delete/${personId}`);