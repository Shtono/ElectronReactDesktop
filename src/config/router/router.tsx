import { createBrowserRouter } from 'react-router-dom'
import App from '../../App'

const router = [
  {
    path: '/',
    element: <App />,
    errorElement: <div>404</div>,
  },
]

export default createBrowserRouter(router)
