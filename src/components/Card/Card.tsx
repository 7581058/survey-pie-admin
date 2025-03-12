import { DeleteOutlined, DownOutlined, UpOutlined } from '@ant-design/icons'
import { css } from '@emotion/react'
import { Button } from 'antd'

interface CardProps {
  title: string
  desc: string
  children: React.ReactNode
  onUpButtonClick: () => void
  onDownButtonClick: () => void
  onDeleteButtonClick: () => void
}
const Card = ({
  title,
  desc,
  children,
  onUpButtonClick,
  onDownButtonClick,
  onDeleteButtonClick,
}: CardProps) => {
  return (
    <div css={CardWrap}>
      <div css={CardHeadStyle}>
        <div css={CardTitleStyle}>{title}</div>
        <div css={CardDescStyle}>{desc}</div>
      </div>
      <div css={CardBodyStyle}>{children}</div>
      <div css={ButtonGroupWrap} className="button-group">
        <div css={ButtonWrap}>
          <Button type="text" icon={<UpOutlined />} onClick={onUpButtonClick} />
          <Button
            type="text"
            icon={<DownOutlined />}
            onClick={onDownButtonClick}
          />
          <Button
            type="text"
            icon={<DeleteOutlined />}
            onClick={onDeleteButtonClick}
          />
        </div>
      </div>
    </div>
  )
}

export default Card

const CardWrap = css`
  position: relative;

  width: 400px;
  margin: 30px auto;
  border: 1px solid #ddd;

  background-color: #fff;

  &:hover .button-group {
    display: block;
  }
`

const CardHeadStyle = css`
  padding: 15px;
  border-bottom: 1px solid #ddd;
`

const CardTitleStyle = css`
  font-weight: 600;
`

const CardDescStyle = css`
  margin-left: 5px;
  color: #666;
`

const CardBodyStyle = css`
  padding: 15px;
`

const ButtonGroupWrap = css`
  position: absolute;
  top: 0;
  left: 100%;
  display: none;
`

const ButtonWrap = css`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-left: 10px;
`
