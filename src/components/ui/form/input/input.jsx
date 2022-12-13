import * as React from 'react'
import { input_class } from './input.module.css'

const Input = ( props ) => {
  return (
    <div>
      <input type="text" name={props.name} placeholder='hhhh' className={input_class} value="" />
    </div>
  )
}

export default Input