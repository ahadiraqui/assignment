import React,{useState} from 'react';
import {Typography,TextField,FormControl,FormLabel,RadioGroup,FormControlLabel,Radio, Button,FormGroup,Checkbox,Box
    ,Divider

} from '@mui/material';
import formbg from "../images/formbg.jpg"
const Form = () => {
    const[inputs,setInputs]=useState({
        firstName:'',
        lastName:'',
        contactNumber:'',
        email:'',
        gender:'',
        terms:false
    })

    const[errors,setErrors]=useState({
        firstName:'',
        lastName:'',
        contactNumber:'',
        email:'' 
    })

    const inputHandler=(e)=>{
        let targetName=e.target.name;
        let targetValue=e.target.value;
        let error='';
        if(targetName==="firstName" || targetName==="lastName")
        {
            if(!/^[a-zA-Z]+$/.test(targetValue)){
                error="Only letters are allowed";
            }
        }
        else if(targetName==="contactNumber")
        {
            if (!/^[0-9]+$/.test(targetValue)) {
                error = 'Only numbers are allowed';
              }
        }
        else if (targetName === 'email') {
            
            if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(targetValue)) {
              error = 'Invalid email format';
            }
          }

        setInputs((prevState)=>({
            ...prevState,
            [targetName]:targetValue

        }))

        setErrors((prevState)=>({
            ...prevState,
            [targetName]:error
        }))
    }

    const formHandler=(e)=>{
        e.preventDefault();
        console.log(inputs);
    }

  return (
    <>
    <form onSubmit={formHandler}>
        <Box sx={{border: 2, height:"90vh", paddingTop:"10%",mt:"10%",borderRadius:"7px",borderColor:"primary.main",backgroundImage: `url(${formbg})`,backgroundSize: 'cover',
        backgroundPosition: 'center'}}>
      
      <Typography variant='h3' >Enter Your Details</Typography>
      <Divider></Divider>
      
      <TextField
       type='text'
       value={inputs.firstName} 
       variant='standard' 
       label="Your First Name" 
       name="firstName" 
       error={Boolean(errors.firstName)} 
       helperText={errors.firstName}
       sx={{margin:"15px"}} 
       inputProps={{ style: { color: "white" } }}
       onChange={inputHandler}
        required
         ></TextField>
      
      <TextField
       type='text'
        value={inputs.lastName} 
        variant='standard' 
        label="Your Last Name" 
        name="lastName" 
        sx={{margin:"15px"}} 
        onChange={inputHandler} 
        error={errors.lastName}
        helperText={errors.lastName}
        inputProps={{ style: { color: "white" } }}
        required
        ></TextField>
      <br></br>
      
      <TextField 
      type='text' 
      value={inputs.contactNumber} 
      variant='standard' 
      label="Your Contact Number" 
      name="contactNumber"  
      sx={{margin:"15px"}} 
      onChange={inputHandler} 
      error={errors.contactNumber}
      helperText={errors.contactNumber}
      inputProps={{ style: { color: "white" } }}
      required
      ></TextField>

      <TextField type='email' 
      value={inputs.email} 
      variant='standard' 
      name="email" 
      label="Your Email"  
      sx={{margin:"15px"}} 
      onChange={inputHandler} 
      error={errors.email}
      helperText={errors.email}
      inputProps={{ style: { color: "white" } }}
      required
      ></TextField>
      <br></br>

      <FormControl id="genderid" >
        <FormLabel sx={{mt:"5px", mr:"5px", fontWeight:"bold", color:"black", fontSize:"20px"}} required>Choose Gender:</FormLabel>
        <RadioGroup sx={{display:"flex", flexDirection:"row"}} name='gender' value={inputs.gender} onChange={inputHandler}>
        <FormControlLabel label="Male" value="male" control={<Radio/>}/>
        <FormControlLabel label="Female" value="female" control={<Radio/>}/>
        <FormControlLabel label="Other" value="other" control={<Radio/>}/>
        </RadioGroup>
      </FormControl>

      <br></br>

      <FormGroup sx={{display:"flex", justifyContent:"center", alignItems:"center"}} required>
        <FormControlLabel label="I Accept all Terms and Condition!" control={<Checkbox onChange={()=>
        setInputs(prevState=>({
            ...prevState,
            terms:!inputs.terms
        }))
        }/>}/>
      </FormGroup>

      <Button variant='contained' type='submit' sx={{backgroundColor:"black"}}>Submit</Button>
      </Box>
      </form>
    </>
  )
}

export default Form;
