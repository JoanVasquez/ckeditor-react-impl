import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ImageBrowser from './containers/ImageBrowser';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/img-browser' component={ImageBrowser} />
        <Route path='/' component={MyEditor} />
      </Switch>
    </BrowserRouter>
  );
}

const MyEditor = () => {
  const [ckEditorContent, setCkEditorContent] = useState('');

  useEffect(() => {
    window.CKEDITOR.replace('myCkEditor', {
      filebrowserBrowseUrl: `${window.location.origin}/img-browser`,
      filebrowserUploadUrl: '/sss'
    });
    window.CKEDITOR.instances.myCkEditor.on('change', () => {
      let content = window.CKEDITOR.instances.myCkEditor.getData();
      setCkEditorContent(content);
    });
  }, [setCkEditorContent]);

  return (
    <div className='container'>
      <form action='#'>
        <textarea name='' id='myCkEditor' cols='30' rows='30'></textarea>
      </form>
    </div>
  );
};

export default App;
