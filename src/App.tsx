import { css } from '@emotion/react'
import { RouterProvider } from 'react-router'

import router from './router'

function App() {
  return (
    <div css={ContainerStyle}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

const ContainerStyle = css`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
`
