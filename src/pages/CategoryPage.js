/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { questions, imgs } from '../components/Data'
import Question from '../components/Question'
import quiz from '../assets/quiz.jpg'

const shuffleArray = (array) => {
  const RandomQuestions = array.sort(() => Math.random() - 0.5)
  return RandomQuestions.slice(0, 10)
}
export const CategoryPage = () => {
  const { category } = useParams()

  const [questionsFiltered, setQuestionsFiltered] = useState(
    // eslint-disable-next-line eqeqeq
    questions.filter(question => question.category == category))

  const [indexQuestion, setIndexQuestion] = useState(0)
  const [activeQuiz, setActiveQuiz] = useState(false)

  useEffect(() => {
    const newQuestions = shuffleArray(questionsFiltered)
    setQuestionsFiltered(newQuestions)
    console.log(questions)
    console.log(questionsFiltered)
  }, [])
  return (
    <div
      className='container flex flex-col items-center justify-center gap-10'
      style={{ height: 'calc(100vh - 5rem)' }}
    >
      {activeQuiz
        ? (
          <Question
            filteredQuestion={questionsFiltered[indexQuestion]}
            setIndexQuestion={setIndexQuestion}
            indexQuestion={indexQuestion}
            questionsFiltered={questionsFiltered}
            setActiveQuiz={setActiveQuiz}
          />)
        : (
          <>
            <h1 className='text-3xl text-teal-900 font-bold'>
              {category}
            </h1>
            <div className='flex justify-center items-center'>
              <img src={quiz} alt={category} className='w-72' />
            </div>
            <button
              className='text-white bg-gray-900 py-2 rounded-lg font-bold px-5 transition-all hover:bg-yellow-500 hover:text-gray-900'
              onClick={() => setActiveQuiz(true)}
            >
              Start Quiz
            </button>
          </>
          )}
    </div>
  )
}
