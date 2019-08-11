import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Select from 'react-select';
import Dropzone, { DropzoneProps, DropzoneState } from 'react-dropzone';

export const CustomInput = ({
                              input,
                              label,
                              type,
                              className,
                              meta: { touched, error }
                            }: any) => {
  return (
    <>
      <TextField
        {...input}
        label={label}
        type={type}
        className={className}
        style={{ marginBottom: '10px', width: '100%' }}
      />
      <br/>
      {touched &&
      ((error && <div style={{ marginBottom: '10px', marginTop: '5' }}>{error}</div>))}
    </>
  )
};


export const CustomSelectCode = ({
                                   input,
                                   label,
                                   type,
                                   data,
                                   meta: { touched, error }
                                 }: any) => {
  const option: any = () => {
    let res: any = [];
    for (let item in data) {
      res.push({ value: data[ item ].code, label: `${data[ item ].shortName} ${data[ item ].code}` })
    }
    return res;
  };

  return (
    <>
      <Select
        options={option()}
        {...input}
        onChange={input.onChange}
        placeholder='code'
        onBlur={() => input.onBlur(input.value)}
        label={label}
        type={type}
      />
      <br/>
      {touched &&
      ((error && <div style={{ marginBottom: '10px', marginTop: '5' }}>{error}</div>))}
    </>
  )
};

interface State {
  files: any
}

export class Basic extends Component<any, State> {
  public onDrop: any;
  constructor(props: any) {
    super(props);
    this.onDrop = (files: any) => {
      this.setState({files})
    };
    this.state = {
      files: []
    };
  }
  componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<State>, snapshot?: any): void {
    console.log(this.props.input.value)
  }

  public input = this.props && this.props.input;

  render() {
    const files = this.state.files.map((file: any) => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    ));

    return (
      <Dropzone onDrop={( filesToUpload: any ) => {this.input.onChange(filesToUpload); this.onDrop(filesToUpload)}} >
        {({getRootProps, getInputProps}) => (
          <section className="container">
            <div {...getRootProps({className: 'dropzone'})}>
              <input {...getInputProps({...this.input})}   />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <aside>
              <h4>Files</h4>
              <ul>{files}</ul>
            </aside>
          </section>
        )}
      </Dropzone>
    );
  }
}
