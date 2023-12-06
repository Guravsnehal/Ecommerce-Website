import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function Navbar() {
  const items= useSelector((state)=>state.cart)
  return (
    <div className=' flex justify-between p-4 bg-[#443D45]'>
      <span className='logo text-[#fff]'>REDUX STORE</span>
      <div>
        <Link className="px-10 text-[#fff]" to="/">Home</Link>
        <Link className="px-10 text-[#fff]" to="/cart">Cart</Link>
        <span className='px-10  font-medium text-[#fff] border p-2 rounded bg-[#F04A00]'>Cart items:{items.length}</span>
      </div>
    </div>
  )
}
