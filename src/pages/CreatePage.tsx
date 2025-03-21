import { Col, Input, Row } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import OptionSection from '../components/Section/OptionSection'
import PreviewSection from '../components/Section/PreviewSection'
import {
  addQuestion,
  deleteQuestion,
  moveDownQuestion,
  moveUpQuestion,
  setTitle,
} from '../stores/surveySlice'
import { QuestionDataType, QuestionInputType, QuestionType } from '../types'
interface SurveyState {
  survey: QuestionDataType
  questions: QuestionType[]
}
const CreatePage = () => {
  const survey = useSelector((state: SurveyState) => state.survey)
  const dispatch = useDispatch()
  return (
    <Row>
      <Col flex="auto">
        <Input
          placeholder="설문 제목을 입력해주세요."
          value={survey.title}
          onChange={(e) => {
            dispatch(setTitle(e.target.value))
          }}
        />
        <PreviewSection
          questions={survey.questions}
          addQuestion={(type: QuestionInputType) => {
            dispatch(addQuestion(type))
          }}
          moveUpQuestion={(index: number) => {
            if (index === 0) return
            dispatch(moveUpQuestion(index))
          }}
          moveDownQuestion={(index: number) => {
            if (index === survey.questions.length - 1) return
            dispatch(moveDownQuestion(index))
          }}
          deleteQuestion={(index: number) => {
            dispatch(deleteQuestion(index))
          }}
        />
      </Col>
      <Col flex="350px">
        <OptionSection />
      </Col>
    </Row>
  )
}

export default CreatePage
