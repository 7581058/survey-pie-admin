import { configureStore } from '@reduxjs/toolkit'

import surveySlice from './surveySlice'

export default configureStore({
  reducer: { survey: surveySlice },
})
