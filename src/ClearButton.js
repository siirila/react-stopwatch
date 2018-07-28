import React, { Component } from 'react';
import Button from './Button';

export default function ClearButton(props) {
    return <Button onClick={props.onClear} disabled={props.isDisabled} color="secondary" >Clear</Button>;
}
