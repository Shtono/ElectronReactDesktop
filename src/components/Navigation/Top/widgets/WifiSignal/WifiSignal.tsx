import { useEffect, useState } from 'react'
import WifiIcon from '@mui/icons-material/Wifi'
import Wifi1BarIcon from '@mui/icons-material/Wifi1Bar'
import Wifi2BarIcon from '@mui/icons-material/Wifi2Bar'
import { Box, Typography } from '@mui/material'

const wifiIcons = [<Wifi1BarIcon />, <Wifi2BarIcon />, <WifiIcon />]

const WifiSignal = () => {
  const [displayWifiIcon, setDisplayWifiIcon] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayWifiIcon((prevState) => {
        if (prevState >= wifiIcons.length - 1) {
          return 0
        }
        return prevState + 1
      })
    }, 500)
    return () => clearInterval(interval)
  }, [])
  return <Box color="white">{wifiIcons[displayWifiIcon]}</Box>
}

export default WifiSignal
