import { useState } from 'react'
import './App.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Parent from './Components/Parent'
import Child from './Components/Child'
// import Button1 from './Components/Button1'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route> 
      <Route path = '/' element ={<Parent/>}/>
      {/* <Route path = '/button' element ={<Button1/>}/> */}
    </Route>
  )
)

function App() {
  

  return (
    <>
    <RouterProvider router={router}/>
      
    </>
  )
}

export default App
