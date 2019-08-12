import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import Ava from '../../../../assets/avatar.png';

import './previes.css';

function Previews(props: any) {
  const [ files, setFiles ] = useState<any>([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      props.input.onChange(acceptedFiles[ 0 ]);
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const thumbs = files.map((file: any) => (
    <div key={file.name} className='ava-container'>
      <img
        src={file.preview}
        className='ava'
      />
    </div>
  ));

  useEffect(() => () => {
    files.forEach((file: any) => URL.revokeObjectURL(file.preview));
  }, [ files ]);

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        {thumbs.length == 0 && <div className='ava-container'>
            <img src={Ava} alt="ava" className='ava'/>
        </div>}

        {thumbs.length !== 0 && <>
          {thumbs}
        </>}
      </div>
    </section>
  );
}

export default Previews;
