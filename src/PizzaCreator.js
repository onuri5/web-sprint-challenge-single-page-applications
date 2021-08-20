import React from 'react';

const temp = (props) => {
    const {values} = props;
    const onSubmit = evt => {
        evt.preventDefault()
      }

    return (
        <>
            <form onSubmit={onSubmit} id='pizza-form'>
                <label>Name: &nbsp;
                    <input id='name-input'
                        name='name'
                        type='text'
                        value={values.name}
                    />
                </label>

                <label>Pizza Size
                    <select
                        value={values.size}
                        name='size'
                    >
                        <option value=''>- Select an option -</option>
                        <option value='small'>small</option>
                        <option value='medium'>medium</option>
                        <option value='large'>large</option>
                    </select>
                </label>

                <div className='checkboxes'>
                    <h4>Toppings</h4>

                    <label>Pepperoni
                        <input 
                            type='checkbox'
                            name='pepperoni'
                            checked={values.pepperoni}
                        />
                    </label>

                    <label>Mushroom
                        <input 
                            type='checkbox'
                            name='mushroom'
                            checked={values.mushroom}
                        />
                    </label>

                    <label>Sausage
                        <input 
                            type='checkbox'
                            name='sausage'
                            checked={values.sausage}
                        />
                    </label>

                    <label>Olives
                        <input 
                            type='checkbox'
                            name='olives'
                            checked={values.olives}
                        />
                    </label>
                </div>

            </form>
        </>
    )
}


export default temp;