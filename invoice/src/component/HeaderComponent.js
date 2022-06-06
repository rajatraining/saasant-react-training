import {React,useState} from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TypeContext } from "../App";
import { valueToPercent } from "@mui/base";

function HeaderComponent(props) {

    const {name, setName} = useState();


    return (
        <div>
            <TypeContext.Consumer>
                {value =>
                 <h1>{value['location']}</h1>
                 
                 }
            </TypeContext.Consumer>
            This is Header Welcome -- {props.name}
        </div>
    );
}

export default HeaderComponent; 