import React from 'react'

function Button_borderless({text}:{text:string}) {
  return (
    <button className='box-content p-2 text-sm flex item-center text-stone-800' >
     {text}
     </button>
  )
}

export default Button_borderless