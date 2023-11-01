/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from './Data'

const CategoryList = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-4 mt-10'>
      {categories.map(categories =>
        <Link
          to={`/quiz-app/category/${categories.category}`}
          className={`flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2x1 overflow-hidden bg-gradient-to-r ${categories.color} transition -all hover:scale-105`}
        >
          <div className='p-5 flex justify-center items-center'>
            <img
              src={categories.img}
              alt={`Category ${categories.science}`}
              className='w-36'
            />'
          </div>
          <h1 className='text-2x1 font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5'>
            {categories.category}
          </h1>
        </Link>
      )}
    </div>
  )
}

export default CategoryList
