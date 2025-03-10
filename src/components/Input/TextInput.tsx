import { Input } from 'antd'

import { InputProps } from '../../types'

const TextInput = ({ options }: InputProps) => {
  return (
    <>
      <Input placeholder={options.placeholder} maxLength={options.max} />
    </>
  )
}

export default TextInput
