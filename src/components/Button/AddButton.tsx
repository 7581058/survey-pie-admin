import { PlusOutlined } from '@ant-design/icons'
import { css } from '@emotion/react'

interface AddButtonProps {
  onClick: () => void
}
const AddButton = ({ onClick }: AddButtonProps) => {
  return (
    <div css={AddbuttonWrap}>
      <button css={addbuttonStyle} onClick={onClick}>
        <PlusOutlined />
      </button>
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
