import React, {useState} from "react";
import HomePage from './homepage'
import PizzaCreator from './PizzaCreator'
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

const StyledTitle = styled.div `
  display: flex;
  justify-content: center;
  border-bottom: solid black 1px;
  color: #414a4c;
`
const initialFormValues = {
  name: '', 
  size: '',
  pepperoni: false,
  mushroom: false,
  sausage: false,
  olives: false,
  instructions: ''
}

const initialFormErrors = {
  name: '', 
}

const initialDisabled = true

const imgArr = [
  'https://images.unsplash.com/photo-1572829329047-dce11ac5aaab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1620374228995-ec4e9e8fc79e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80',
  'https://images.unsplash.com/photo-1621334953222-c60c19143b0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1578338243320-b9fefa086ef8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
]

const App = () => {
  const [order, setOrder] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setOrder([res.data, ...order])
        console.log(order)
      }).catch(err => console.error(err));

      setFormValues(initialFormValues);
  }

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues, [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      pepperoni: !!formValues.pepperoni,
      mushroom: !!formValues.mushroom,
      sausage: !!formValues.sausage,
      olives: !!formValues.olives,
      instructions: formValues.instructions
    }
   
    postNewOrder(newOrder)
  }


  return (
    <>
      <Router>
        <StyledTitle><h1>Dominick's</h1></StyledTitle>
            <Route path="/" exact><HomePage imgArr={imgArr}/></Route>
            <Route path='/pizza'><PizzaCreator values={formValues} change={inputChange} submit={formSubmit}/></Route>
      </Router>
      <div>{order.map((item, index) => {
        return <p key={index}>{item.name}</p>
      })}</div>
      
    </>
  );
};
export default App;
