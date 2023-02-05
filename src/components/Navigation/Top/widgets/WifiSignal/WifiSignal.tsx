import { useEffect, useState } from 'react'
import WifiIcon from '@mui/icons-material/Wifi'
import Wifi1BarIcon from '@mui/icons-material/Wifi1Bar'
import Wifi2BarIcon from '@mui/icons-material/Wifi2Bar'
import { Box, Typography } from '@mui/material'

const wifiIcons = [
  <Wifi1BarIcon />,
  <Wifi2BarIcon />,
  <WifiIcon />,
  <Typography color="white" variant="subtitle2">
    Fix me...
  </Typography>,
]

const WifiSignal = () => {
  const [displayWifiIcon, setDisplayWifiIcon] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayWifiIcon((prevState) => {
        if (prevState > 3) {
          return 0
        }
        return prevState + 1
      })
    }, 500)
    return () => clearInterval(interval)
  }, [])
  return (
    <Box width={100} color="white">
      {wifiIcons[displayWifiIcon]}
    </Box>
  )
}

export default WifiSignal
