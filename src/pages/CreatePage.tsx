import { Col, Input, Row } from 'antd'
import { produce } from 'immer'
import { useState } from 'react'

import OptionSection from '../components/Section/OptionSection'
import PreviewSection from '../components/Section/PreviewSection'
import { DEFAULT_MOCK_DATA, QUESTIONS_MOCK_DATA } from '../mocks'
import { QuestionDataType } from '../types'

const CreatePage = () => {
  const [data, setData] = useState<QuestionDataType>(QUESTIONS_MOCK_DATA)

  return (
    <Row>
      <Col flex="auto">
        <Input
          placeholder="설문 제목을 입력해주세요."
          value={data.title}
          onChange={(e) => {
            setData(
              produce((draft) => {
                draft.title = e.target.value
              }),
            )
          }}
        />
        <PreviewSection
          questions={data.questions}
          addQuestion={() => {
            setData(
              produce((draft) => {
                draft.questions.push(DEFAULT_MOCK_DATA)
              }),
            )
          }}
          moveUpQuestion={(index: number) => {
            if (index === 0) return
            setData(
              produce((draft) => {
                const target = draft.questions[index]
                draft.questions[index] = draft.questions[index - 1]
                draft.questions[index - 1] = target
              }),
            )
          }}
          moveDownQuestion={(index: number) => {
            if (index === data.questions.length - 1) return
            setData(
              produce((draft) => {
                const target = draft.questions[index]
                draft.questions[index] = draft.questions[index + 1]
                draft.questions[index + 1] = target
              }),
            )
          }}
          deleteQuestion={(index: number) => {
            setData(
              produce((draft) => {
                draft.questions.splice(index, 1)
              }),
            )
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
