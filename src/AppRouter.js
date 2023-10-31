import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CategoryPage } from './pages/CategoryPage'
import { HomePage } from './pages/HomePage'
import { NavBar } from './components/NavBar'

export const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/quiz-app' element={<HomePage />} />
        <Route path='/quiz-app/category/:category' element={<CategoryPage />} /> {/* ? : receives different IDs, so it is dinamic */}
      </Routes>
    </>
  )
}
