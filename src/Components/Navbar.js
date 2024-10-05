import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between pt-6 font-bold text-xl'>
       <h1>
           GIRIJA 
       </h1> 
       <div className='flex gap-6'>
           <a>
              Projects
           </a>
           <a>
              Resume
           </a>
           <a>
             Contact
           </a>
       </div>
    </div>
  )
}

export default Navbar