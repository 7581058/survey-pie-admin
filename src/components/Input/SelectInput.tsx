import { Radio, Space } from 'antd'

import { InputProps } from '../../types'

const SelectInput = ({ options }: InputProps) => {
  return (
    <>
      <Space direction="vertical">
        {options.items?.map((item) => (
          <Radio key={item}>{item}</Radio>
        ))}
      </Space>
    </>
  )
}

export default SelectInput
