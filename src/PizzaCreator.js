import React from 'react';
import NavBar from './components/navbar';
import styled from 'styled-components';

const Positioner = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Temp = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #adb5bd;
    width: 100%;
    margin: 10px;
`
const Error = styled.p `
    color: red;
`

const temp = (props) => {
    const {values, change, submit, errors, disabled} = props;

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit();
    }

    return (
        <>
         <form onSubmit={onSubmit} id='pizza-form'>
            <NavBar />
            <Positioner>
                <Temp>
                    <h2>Pick Your Pizza Size</h2>
                    <p>Required!</p>
                    <Error>{errors.size}</Error>
                </Temp>
                    <select
                        value={values.size}
                        name='size'
                        id="size-dropdown"
                        onChange={onChange}
                    >
                        <option value=''>- Select an option -</option>
                        <option value='small'>small</option>
                        <option value='medium'>medium</option>
                        <option value='large'>large</option>
                        </select>
            </Positioner>

            <Positioner className='checkboxes'>
                <Temp><h2>Toppings</h2></Temp>

                    <label>Pepperoni
                        <input 
                            type='checkbox'
                            name='pepperoni'
                            checked={values.pepperoni}
                            onChange={onChange}
                            
                        />
                    </label>

                    <label>Mushroom
                        <input 
                            type='checkbox'
                            name='mushroom'
                            checked={values.mushroom}
                            onChange={onChange}
                        />
                    </label>

                    <label>Sausage
                        <input 
                            type='checkbox'
                            name='sausage'
                            checked={values.sausage}
                            onChange={onChange}
                        />
                    </label>

                    <label>Olives
                        <input 
                            type='checkbox'
                            name='olives'
                            checked={values.olives}
                            onChange={onChange}
                        />
                    </label>
                </Positioner>

                <Positioner>
                <Temp><h2>Special Instructions</h2></Temp>
                    <input id='special-text'
                        name='instructions'
                        type='text'
                        value={values.instructions}
                        onChange={onChange}
                    />
                </Positioner>

                <Positioner>
                    <Temp>
                        <h2>Name for the order</h2>
                        <p>Required!</p>
                        <Error>{errors.name}</Error>
                    </Temp>
                    <input id='name-input'
                        name='name'
                        type='text'
                        value={values.name}
                        onChange={onChange}
                    />
                </Positioner>

                <Positioner><button id='order-button' disabled={disabled}>Add to Order</button></Positioner>
            </form>
        </>
    )
}


export default temp;