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
    justify-content: center;
    background-color: #adb5bd;
    width: 100%;
    margin: 10px;
`

const temp = (props) => {
    const {values, change, submit} = props;

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
            <NavBar />
            <Positioner>
                <Temp><h2>Pick Your Pizza</h2></Temp>
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

            <form onSubmit={onSubmit} id='pizza-form'>
                <label>Name: &nbsp;
                    <input id='name-input'
                        name='name'
                        type='text'
                        value={values.name}
                        onChange={onChange}
                    />
                </label>

                <div className='checkboxes'>
                    <h4>Toppings</h4>

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
                </div>

                <label>Special Instructions: &nbsp;
                    <input id='special-text'
                        name='instructions'
                        type='text'
                        value={values.instructions}
                        onChange={onChange}
                    />
                </label>
                <button id='order-button'>Add to Order</button>
            </form>
        </>
    )
}


export default temp;