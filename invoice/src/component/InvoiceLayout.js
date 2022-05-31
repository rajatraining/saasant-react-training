import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import HeaderComponent from "./HeaderComponent";
import LeftNavComponent from "./LeftNavComponent";
import { Button, ButtonGroup, Chip } from "@mui/material";
import StateComponent from "./StateComponent";
import Example from "./StateFunctional";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function InvoiceLayout(props) {
  return (
    <div className="container">
        <button className="btn btn-danger">Bootstrap Button</button>
      <div>{props.type} Invoice</div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
             <div style={{float:"left"}}> <HeaderComponent name="Joel"/></div>
             <div style={{float:"right"}}> <HeaderComponent /></div>
             <StateComponent/>
            </Item>
            <Item>
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              {" "}
              <LeftNavComponent />
             <Example />
            </Item>
            <Item>
              {" "}
              <Chip label="Clickable" />{" "}
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
              <TextField id="filled-basic" label="Filled" variant="filled" />
              <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default InvoiceLayout;
