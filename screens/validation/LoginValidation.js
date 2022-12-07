import * as yup from 'yup';


export const userSchema = yup.object().shape({
    email : yup.string().email('Please enter valid email').required('Email is required'),
    password : yup.string().min(4,({min})=>`Password must be minimim 4 characters`).max(8).required('Password is required').matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
})


