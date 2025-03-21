import { QuestionInputType, QuestionOptionsType } from '../../types'
import SelectInput from '../Input/SelectInput'
import TextAreaInput from '../Input/TextAreaInput'
import TextInput from '../Input/TextInput'

interface CardBodyProps {
  type: QuestionInputType
  options: QuestionOptionsType
}
const CardBody = ({ type, options }: CardBodyProps) => {
  let InputComponent: React.ElementType | null = null
  if (type === 'select') {
    InputComponent = SelectInput
  } else if (type === 'text') {
    InputComponent = TextInput
  } else if (type === 'textarea') {
    InputComponent = TextAreaInput
  }

  return InputComponent ? <InputComponent options={options} /> : null
}

export default CardBody
