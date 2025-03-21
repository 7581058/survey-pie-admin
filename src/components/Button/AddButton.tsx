import { PlusOutlined } from '@ant-design/icons'
import { css } from '@emotion/react'
import { Button, Popover } from 'antd'
import { useState } from 'react'

import { QuestionInputType } from '../../types'

interface AddButtonProps {
  onClick: (type: QuestionInputType) => void
}
const AddButton = ({ onClick }: AddButtonProps) => {
  const [visible, setVisible] = useState(false)

  const hide = () => {
    setVisible(false)
  }
  const handleVisibleChange = (visible: boolean) => {
    setVisible(visible)
  }
  return (
    <div css={AddbuttonWrap}>
      <Popover
        trigger="click"
        content={
          <div css={{ display: 'flex', flexDirection: 'column' }}>
            <Button
              type="text"
              onClick={() => {
                hide()
                onClick('select')
              }}
            >
              객관식
            </Button>
            <Button
              type="text"
              onClick={() => {
                hide()
                onClick('text')
              }}
            >
              단답식
            </Button>
            <Button
              type="text"
              onClick={() => {
                hide()
                onClick('textarea')
              }}
            >
              서술식
            </Button>
          </div>
        }
        open={visible}
        onOpenChange={handleVisibleChange}
        placement="right"
      >
        <button css={addbuttonStyle}>
          <PlusOutlined />
        </button>
      </Popover>
    </div>
  )
}

export default AddButton

const AddbuttonWrap = css`
  text-align: center;
`

const addbuttonStyle = css`
  cursor: pointer;

  width: 2.3rem;
  height: 2.3rem;
  border: none;
  border-radius: 8px;

  font-size: 1.2rem;
  color: #1677ff;

  background: none;
  background-color: #fff;
  outline: none;

  &:hover {
    background-color: #e6f4ff;
  }
`
