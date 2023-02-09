import React, { useState } from 'react'
import Button from '../../atoms/Button/Button'
import { questions } from '../../../data/questions'
import { Wrapper, Counter, Question, Answer } from './QuestionBody.styles'

const QuestionBody = () => {
  let [indexQuestion, setIndexQuestion] = useState(0)

  const nextQuestion = () => {
    indexQuestion < questions.length - 1
      ? setIndexQuestion((indexQuestion += 1))
      : setIndexQuestion((indexQuestion = 0))
  }

  return (
    <Wrapper>
      <Counter>
        {indexQuestion + 1}/{questions.length}
      </Counter>
      <Question>{questions[indexQuestion].question}</Question>
      <Answer>{questions[indexQuestion].answer}</Answer>
      <Button onClick={nextQuestion} buttonText="Next Question"></Button>
    </Wrapper>
  )
}

export default QuestionBody
