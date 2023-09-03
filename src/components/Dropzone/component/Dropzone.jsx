import React from 'react';
import {useDropzone} from 'react-dropzone';
import Button from '../../Buttons/components/Button';

export default function Dropzone(props) {
  const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
    noClick: true,
    noKeyboard: true
  });


  return (
    <div className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <Button text='Click to upload' onClick={open} />
        <label>Drag & drop multiple files to upload</label>
      </div>
    </div>
  );
}