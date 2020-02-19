import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [ckEditorContent, setCkEditorContent] = useState('');

  useEffect(() => {
    window.CKEDITOR.replace('myCkEditor');
    window.CKEDITOR.instances.myCkEditor.on('change', () => {
      let content = window.CKEDITOR.instances.myCkEditor.getData();
      setCkEditorContent(content);
    });
  }, [setCkEditorContent]);
  console.log(ckEditorContent);
  return (
    <div className='container'>
      <form action='#'>
        <textarea name='' id='myCkEditor' cols='30' rows='30'></textarea>
      </form>
    </div>
  );
}

export default App;
