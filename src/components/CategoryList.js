/* eslint-disable no-undef */
import React from 'react'
import { Link } from 'react-router-dom'

const CategoryList = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-4 mt-10'>
      <Link
        to={`/category/${algo}`}
        className='flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2x1 overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 transition -all hover:scale-105'
      >
        <div className='p-5 flex justify-center items-center'>
          <img src={algo} alt='Categoria' className='x-36' />'
        </div>
        <h1 className='text-2x1 font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5'>
          {algo}
        </h1>
      </Link>
    </div>
  )
}

export default CategoryList
