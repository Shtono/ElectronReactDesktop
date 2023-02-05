import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Stack justifyContent="center" alignItems="center" sx={{ height: '100vh' }} width={1}>
      <Link to="/">
        <Typography variant="h1">{`<404> Go Back Home </404>`}</Typography>
      </Link>
    </Stack>
  )
}

export default NotFound
