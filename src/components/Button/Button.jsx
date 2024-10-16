import { useState } from "react";



const Button = ({text, color}) => {

  const [count, setCount] = useState(0);


  return(

    <button style={{backgroundColor:color}} onClick={ () => setCount(count + 1) }>{text + ' ' + count}</button>

  )
}

export default Button 


