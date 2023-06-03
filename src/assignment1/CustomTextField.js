import React from 'react'
import { TextField } from '@mui/material'
const CustomTextField = (props) => {
   const {type, value, variant, label, name, error, helperText,onChange,inputProps,sx}=props
  return (
    <>
      
        <TextField
        type={type}
        value={value}
        variant={variant}
        label={label}
        name={name}
        error={error}
        onChange={onChange}
        helperText={helperText}
        inputProps={inputProps}
        sx={sx}
        required
        />
      
    </>
  )
}

export default CustomTextField
