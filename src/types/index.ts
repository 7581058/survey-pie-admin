export interface QuestionType {
  title: string
  desc: string
  type: 'select' | 'text' | 'textarea'
  required: boolean
  options: QuestionOptionsType
}

export interface QuestionOptionsType {
  max?: number
  min?: number
  placeholder?: string
  items?: string[]
}

export interface InputProps {
  options: QuestionOptionsType
}

export interface QuestionDataType {
  id: number
  title: string
  questions: QuestionType[]
  createdAt: number
}
