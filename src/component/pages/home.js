
import React  from 'react'
import Products from './products'

export default function Home() {
   
  return (
    <div>
        <h1 className='font-semibold text-lg my-4'>Welcome to Redux Toolkit Store</h1>
        <section>
            <h3 className='font-medium mb-2'>Products</h3>
            <Products/>
        </section>
    </div>
  )
}
