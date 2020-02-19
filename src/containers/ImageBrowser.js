import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const ImageBrowser = props => {
  const [images, setImages] = useState([]);
  console.log(window);
  useEffect(() => {
    async function fetchData() {
      let result = await Axios.get('https://picsum.photos/v2/list');
      let urlImgs = result.data.map(img => img.download_url);
      setImages(preImages => [...preImages, ...urlImgs]);
    }
    fetchData();
  }, [setImages]);

  const returnImageUrl = url => {
    let funcNum = getUrlParam('CKEditorFuncNum');
    window.opener.CKEDITOR.tools.callFunction(funcNum, url);
    window.close();
  };

  const getUrlParam = paramName => {
    let reParam = new RegExp('(?:[?&]|&)' + paramName + '=([^&]+)', 'i');
    let match = window.location.search.match(reParam);
    return match && match.length > 1 ? match[1] : null;
  };

  return (
    <div className='row'>
      {images.map((url, index) => (
        <div className='col-3' key={index}>
          <a href='javascript:void(0)'>
            <div className='img-thumbnail'>
              <img
                src={url}
                alt=''
                className='img-fluid'
                onClick={() => returnImageUrl(url)}
              />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ImageBrowser;

/*
(
        <div className='col-3' key={index}>
          <a href={url}>
            <div className='img-thumbnail'>
              <img src={url} alt='' />
            </div>
          </a>
        </div>
      )*/
