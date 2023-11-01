import React from 'react'
import CategoryList from '../components/CategoryList'
export const HomePage = () => {
  return (
    <div className='container'>
      <h1 className='text-4xl text-center mt-5 font-medium text-blue-800 font-bold'>Welcome to this quiz section</h1>
      <h3 className='text-2xl text-center'>Play around and have fun, everytime you would like to change subject just press the Quiz header</h3>
      <CategoryList />
      <div className='my-10 text-center text-bold text-brown-100 text-3xl'>Good Luck 👍🏽</div>
    </div>
  )
}
