import { css } from '@emotion/react'

interface CardProps {
  title: string
  desc: string
  children: React.ReactNode
}
const Card = ({ title, desc, children }: CardProps) => {
  return (
    <div css={CardWrap}>
      <div css={CardHeadStyle}>
        <div css={CardTitleStyle}>{title}</div>
        <div css={CardDescStyle}>{desc}</div>
      </div>
      <div css={CardBodyStyle}>{children}</div>
    </div>
  )
}

export default Card

const CardWrap = css`
  width: 400px;
  margin: 30px auto;
  border: 1px solid #ddd;
  background-color: #fff;
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
