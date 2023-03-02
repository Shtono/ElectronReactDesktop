import { createBrowserRouter } from 'react-router-dom'
import App from 'App'
import NotFound from 'components/Error/NotFound/NotFound'

const router = [
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
  },
]

export default createBrowserRouter(router)
