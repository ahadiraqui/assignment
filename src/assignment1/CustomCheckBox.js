import React from 'react'
import {Checkbox} from '@mui/material'
const CustomCheckBox = (props) => {
    const{onChange}=props;
  return (
    <>
    <Checkbox onChange={onChange}/>
    </>
  )
}

export default CustomCheckBox
