import React from 'react';
import TextField from '@material-ui/core/TextField';

export const CustomInput = ({
                                input,
                                label,
                                type,
                                className,
                                meta: {touched, error}
                            }: any) => {
    return (
        <>
        <TextField
            {...input}
            label={label}
            type={type}
            style={{marginBottom: '10px', width: '100%'}}
        />
            <br/>
            {touched &&
            ((error && <div  style={{marginBottom: '10px', marginTop: '5'}}>{error}</div>))}
        </>
    )
}
