import React, { Component } from 'react';
import MaterialButton from '@material-ui/core/Button';

const buttonStyle = {
    margin: '1em',
    borderRadius: '5px',
    minHeight: '2em'
};

export default function Button(props) {
    let {children, onClick, disabled, color} = props;
    return <MaterialButton style={{margin: '1em'}} variant="contained" type="button" onClick={onClick} disabled={disabled} color={color}>{children}</MaterialButton>;
}