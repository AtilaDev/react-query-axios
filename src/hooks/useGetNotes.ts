import { useQuery, useMutation } from 'react-query';
import { getNotes, addNote } from '../services/getNotes';

const queryKeys = {
  getNotes: 'getNotes',
};

export const useGetNotes = () => {
  return useQuery([queryKeys.getNotes], getNotes);
};

export const useAddNotes = () => {
  const { mutate, isLoading } = useMutation(addNote);

  return {
    mutate,
    isLoading,
  };
};
