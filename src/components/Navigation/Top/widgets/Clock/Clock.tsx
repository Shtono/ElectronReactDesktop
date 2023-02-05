import { useState, useEffect } from 'react'
import { Typography, Box } from '@mui/material'

const Clock = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Box width={50}>
      <Typography color="white" variant="subtitle2">
        {date.toLocaleTimeString()}
      </Typography>
    </Box>
  )
}

export default Clock
