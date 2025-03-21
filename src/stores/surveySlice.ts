import { createSlice } from '@reduxjs/toolkit'

import { DEFAULT_MOCK_DATA, QUESTIONS_MOCK_DATA } from '../mocks'

const initialState = QUESTIONS_MOCK_DATA

export const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload
    },
    addQuestion: (state) => {
      state.questions.push(DEFAULT_MOCK_DATA)
    },
    moveUpQuestion: (state, action) => {
      const index = action.payload
      const target = state.questions[index]
      state.questions[index] = state.questions[index - 1]
      state.questions[index - 1] = target
    },
    moveDownQuestion: (state, action) => {
      const index = action.payload
      const target = state.questions[index]
      state.questions[index] = state.questions[index + 1]
      state.questions[index + 1] = target
    },
    deleteQuestion: (state, action) => {
      state.questions.splice(action.payload, 1)
    },
  },
})

export const {
  setTitle,
  addQuestion,
  moveUpQuestion,
  moveDownQuestion,
  deleteQuestion,
} = surveySlice.actions

export default surveySlice.reducer
