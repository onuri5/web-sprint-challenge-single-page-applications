import React, {useState, useEffect} from "react";
import HomePage from './homepage'
import Pizza from './PizzaCreator'
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
import * as yup from 'yup';
import schema from './validation/formSchema';

// Styling for the title
const StyledTitle = styled.div `
  display: flex;
  justify-content: center;
  border-bottom: solid black 1px;
  color: #414a4c;
`
// Initial values for the data
const initialFormValues = {
  name: '', 
  size: '',
  pepperoni: false,
  mushroom: false,
  sausage: false,
  olives: false,
  instructions: ''
}

// Initial error messages
const initialFormErrors = {
  name: '', 
  size: ''
}

const initialDisabled = true

// Img array for images on homepage
const imgArr = [
  'https://images.unsplash.com/photo-1572829329047-dce11ac5aaab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1620374228995-ec4e9e8fc79e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80',
  'https://images.unsplash.com/photo-1621334953222-c60c19143b0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1578338243320-b9fefa086ef8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
]

const App = () => {
  // setting our initial order array to an empty array
  const [order, setOrder] = useState([]);
  // setting our form values to empty strings or false depending on type
  const [formValues, setFormValues] = useState(initialFormValues);
  // setting our form values to empty strings
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  // setting up disabled
  const [disabled, setDisabled] = useState(initialDisabled) 

  // This posts our form data to the api where we then set our order and console.log() our new arr
  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setOrder([res.data, ...order])
        console.log([res.data, ...order])
  
      }).catch(err => console.error(err));

      // Resets form values
      setFormValues(initialFormValues);
  }

  // validates whether or not something is required or not
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: '' }))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value)
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



  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid));
  }, [formValues])


  return (
    <>
      <Router>
        <StyledTitle><h1>Dominick's</h1></StyledTitle>
            <Route path="/" exact><HomePage imgArr={imgArr}/></Route>
            <Route path='/pizza'>
              <Pizza 
              values={formValues} 
              change={inputChange} 
              submit={formSubmit}
              disabled={disabled}
              errors={formErrors}
              />
            </Route>
      </Router>
    </>
  );
};
export default App;
