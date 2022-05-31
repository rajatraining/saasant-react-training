import {React,useState} from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function HeaderComponent(props) {

    const {name, setName} = useState();


    return (
        <div>
            This is Header Welcome -- {props.name}
        </div>
    );
}

export default HeaderComponent; 