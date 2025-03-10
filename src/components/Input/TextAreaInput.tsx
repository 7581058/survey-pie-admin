import TextArea from 'antd/es/input/TextArea'

import { InputProps } from '../../types'

const TextAreaInput = ({ options }: InputProps) => {
  return (
    <>
      <TextArea placeholder={options.placeholder} maxLength={options.max} />
    </>
  )
}

export default TextAreaInput
