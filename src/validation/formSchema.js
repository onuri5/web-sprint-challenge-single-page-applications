import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Your name is required to complete this order')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .required('Pizza size is required'),
    pepperoni: yup
        .boolean(),
    mushroom: yup
        .boolean(),
    sausage: yup
        .boolean(),
    olives: yup
        .boolean(),
    instructions: yup
        .string()
        .trim()
    
});


export default formSchema