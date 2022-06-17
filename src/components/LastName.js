import React from 'react'
import{useSelector} from 'react-redux'


const LastName = () => {
    const LastName = useSelector((state) => state.user.lastName)
    return <div className='font-bold'>{LastName}</div>
}

export default LastName
