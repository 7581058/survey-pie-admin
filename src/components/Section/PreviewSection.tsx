import { QuestionInputType, QuestionType } from '../../types'
import AddButton from '../Button/AddButton'
import Card from '../Card/Card'
import CardBody from '../Card/CardBody'

interface PreviewSectionProps {
  questions: QuestionType[]
  addQuestion: (type: QuestionInputType) => void
  moveUpQuestion: (index: number) => void
  moveDownQuestion: (index: number) => void
  deleteQuestion: (index: number) => void
}
const PreviewSection = ({
  questions,
  addQuestion,
  moveUpQuestion,
  moveDownQuestion,
  deleteQuestion,
}: PreviewSectionProps) => {
  return (
    <div>
      {questions.map((question, index) => (
        <Card
          key={index}
          title={question.title}
          desc={question.desc}
          onUpButtonClick={() => moveUpQuestion(index)}
          onDownButtonClick={() => moveDownQuestion(index)}
          onDeleteButtonClick={() => deleteQuestion(index)}
        >
          <CardBody type={question.type} options={question.options} />
        </Card>
      ))}
      <AddButton onClick={addQuestion} />
    </div>
  )
}

export default PreviewSection
