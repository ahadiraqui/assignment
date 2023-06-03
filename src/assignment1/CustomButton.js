import React from 'react'
import {Button} from '@mui/material'
const CustomButton = (props) => {
    const{variant, type, sx, children}=props;
  return (
    <div>
      <Button  variant={variant} type={type} sx={sx}>{children}</Button>
    </div>
  )
}

export default CustomButton
