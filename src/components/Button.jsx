import React from 'react';

export const Button = (props) => {
  const {title} = props;

  return (
 <span className='contant'>  
        <h2 className='styles'>{title}</h2>
   <span className='btncont'>
      <button className='ratebtn'>10/10 stars</button>
      <button className='dltbtn'>DELETE</button>
      <button className='edbtn'>EDIT</button>  
    </span>  
 </span>

  );
}

export default Button;