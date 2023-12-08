
import React  from 'react'
import Products from './products'
import Background from '../../Images/background.jpg';
export default function Home() {
   
  return (
    <div>
      <div className='relative'>
      <img src={Background} alt="backgroundimage"className='w-full '/>
      <h1 className='absolute top-[200px] font-semibold text-[#fff] text-8xl ml-6'>Hot Offers For<br/>Cold Winters!!</h1>
      <h2 className='absolute top-[450px] font-semibold text-[#fff] text-4xl ml-6'>25% Off On All Products</h2>
      <button className='absolute top-[550px] border-2 font-semibold bg-[#fff] text-sm ml-6 p-2 rounded'>SHOP NOW</button>
      </div>
        <h1 className='font-semibold text-lg my-4'>Welcome to Redux Toolkit Store</h1>
        <section>
            <h3 className='font-medium mb-2'>Products</h3>
            <Products/>
        </section>
    </div>
  )
}
