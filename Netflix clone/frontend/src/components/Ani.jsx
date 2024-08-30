import React, { useState } from 'react'

const Ani = () => {

    const [isOpen,setIsOpen] = useState(false)
    const handler = ()=>{
        setIsOpen(!isOpen);
    }
    return (
        <div>

        </div>
    )
}

export default Ani
