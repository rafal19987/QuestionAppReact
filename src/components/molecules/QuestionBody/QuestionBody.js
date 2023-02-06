import React, { useState } from 'react'
import Button from '../../atoms/Button/Button'
import { questions } from '../../../data/questions'
import { Wrapper, Counter, Question, Answer } from './QuestionBody.styles'

const QuestionBody = () => {
  let [actualIndexOfQuestion, setActualIndexOfQuestion] = useState(0)
  let [actualQuestion, setActualQuestion] = useState(
    questions[actualIndexOfQuestion]
  )
  let [actualCounterValue, setActualCounterValue] = useState(
    actualIndexOfQuestion
  )

  const nextQuestion = () => {
    if (actualIndexOfQuestion < questions.length - 1) {
      setActualIndexOfQuestion((actualIndexOfQuestion += 1))
      setActualQuestion(questions[actualIndexOfQuestion])
      setActualCounterValue(actualIndexOfQuestion)
      console.log(
        `ActualIndex: ${actualIndexOfQuestion} ActualQuestion: ${
          actualIndexOfQuestion + 1
        }`
      )
    } else {
      setActualIndexOfQuestion((actualIndexOfQuestion = 0))
      setActualQuestion(questions[actualIndexOfQuestion])
      setActualCounterValue(actualIndexOfQuestion)
      console.log(
        `END ActualIndex: ${actualIndexOfQuestion} ActualQuestion: ${
          actualIndexOfQuestion + 1
        }`
      )
    }
  }

  return (
    <Wrapper>
      <Counter>
        {actualCounterValue + 1}/{questions.length}
      </Counter>
      <Question>{actualQuestion.question}</Question>
      <Answer>{actualQuestion.answer}</Answer>
      <Button onClick={nextQuestion} buttonText="Next Question"></Button>
    </Wrapper>
  )
}

export default QuestionBody
