import React from 'react'
import {Radio} from '@mui/material'
const CustomRadioButton = (props) => {
    const{ ...restProps}=props
  return (
    <div>
      <Radio  {...restProps}/>
    </div>
  )
}

export default CustomRadioButton
