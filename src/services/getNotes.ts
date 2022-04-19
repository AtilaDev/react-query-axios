import { httpRequest } from '../api';
import { Notes } from './models';

export const getNotes = async (): Promise<Notes[]> => {
  let response = await (await httpRequest.get<Notes[]>('/notes')).data;
  return response;
};

export const addNote = async (note: Notes): Promise<void> => {
  const response = await httpRequest.post('/notes/new', note);
  return response.data;
};
