import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Slices/counterSlice'
// import Button1 from './Button1'

const Parent = () => {

  const data=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch()

  // const handleSubmit = () => {
  //   console.log('clicked')
  // }
  return (
    <>
      {/* <Button1 buttonText={handleSubmit}/> */}
      <div className="flex gap-[20px]">
        <button onClick={() => dispatch(decrement())} className='text-xl font-bold text-black bg-[#FF6969] px-[25px] py-[10px] rounded-[10px] '>Remove</button>
        <h1 className='text-2xl font-bold  text-black '>{data}</h1>
        <button onClick={() => dispatch(increment())} className='text-xl font-bold text-black bg-[#B3E2A7] px-[25px] py-[10px] rounded-[10px]'>Add</button>
      </div>
      
          
    </>
  )
}

export default Parent