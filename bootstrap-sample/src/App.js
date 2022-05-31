import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem, Card
} from 'reactstrap';
import { useState } from 'react';

function App() {
  const AVATAR = 'https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg';

  const formOnSubmit = (event) => {
    alert("This the submit function call "+ event.target.value)
    event.preventDefault();
  };

  const onSubmit = (data) => {
    console.log(data);
    
}

  const [myname, setMyname] = useState();
  const [fruit, setFruit] = useState('');

  const [formObj, setFormObj] = useState({ name:'' , fruit:''  });


  //const onNameChange = function(name){};

  const onNameChange = (event) => { setMyname(event.target.value)}; 
  const onFruitChange = (event) => { setFruit(event.target.value)};

  return (
    <div className="App">
      <Card>

      <Button className='btn-danger' style={{ width: 100 }}>This is button</Button>


     <Container>
        <Row noGutters className="position-relative w-100 align-items-center">
        
          <Col className="d-none d-lg-flex justify-content-start">
            <Nav className="mrx-auto" navbar>
            
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">
                  <img src={AVATAR} alt="avatar" className="img-fluid rounded-circle" style={{ width: 36 }} />
                </NavLink>
              </NavItem>
              
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">Home</NavLink>
              </NavItem>
              
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">Electronics</NavLink>
              </NavItem>
              
              <UncontrolledDropdown className="d-flex align-items-center" nav inNavbar>
                <DropdownToggle className="font-weight-bold" nav caret>fashion</DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="font-weight-bold text-secondary text-uppercase" header disabled>Learn React</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Men</DropdownItem>
                  <DropdownItem>Women</DropdownItem>
                  <DropdownItem>Baby and Kids</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              
            </Nav>
          </Col>
          
          <Col className="d-flex justify-content-xs-start justify-content-lg-center">
            <NavbarBrand className="d-inline-block p-0" href="/" style={{ width: 80 }}>
              <img src={logo} alt="logo" className="position-relative img-fluid" />
            </NavbarBrand>
          </Col>
          
          <Col className="d-none d-lg-flex justify-content-end">
            <Form inline>
              <Input type="search" className="mr-3" placeholder="Search React Courses" />
              <Button type="submit" color="info" outline>Search</Button>
            </Form>
          </Col>
          
        </Row>
      </Container>
      {myname} -- {fruit}
      </Card>

      <Row style={{width:'200px'}}>
          <Form onSubmit={formOnSubmit}> 
          Enter the Name: <Input type='text' name="myname" value={myname} onChange={onNameChange} >  </Input>
          <select value={fruit} onChange={onFruitChange}>
            <option key="apple">Apple</option>
            <option key="Mango">Mango </option>
            <option key="Pineapple">Pine</option>
            <option key="Grapes">Grape</option>
          </select>
            <Input type='submit'></Input>
          </Form>




        </Row>
      </div>
  );
}

export default App;
