import { useState } from 'react';
import { useGetNotes, useAddNotes } from './hooks/useGetNotes';

function App() {
  const [value, setValue] = useState('');
  const { data } = useGetNotes();
  const { mutate } = useAddNotes();

  const renderNotes = () => {
    return data?.map((note, index) => <li key={index}>{note.text}</li>);
  };

  return (
    <>
      {renderNotes()}
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          mutate({ text: value });
        }}
      >
        Add
      </button>
    </>
  );
}

export default App;
