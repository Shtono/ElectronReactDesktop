import React from 'react'
import { Stack } from '@mui/material'
import Clock from './widgets/Clock/Clock'
import WifiSignal from './widgets/WifiSignal/WifiSignal'
import ConnectedControllers from './widgets/ConnectedControllers/ConnectedControllers'
import NavLinkWrapper from './widgets/NavLinkWrapper/NavLinkWrapper'
import styles from './NavTop.styles'

const { root } = styles

const connectedControllersMock = [
  { name: '1', id: 1 },
  { name: '2', id: 2 },
]

const NavTop = () => {
  return (
    <Stack sx={root} direction="row" spacing={2}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Clock />
        <WifiSignal />
      </Stack>
      <ConnectedControllers connectedControllers={connectedControllersMock} />
      <NavLinkWrapper
        components={[
          { to: '/', name: 'Home' },
          { to: '/about', name: 'About' },
        ]}
      />
    </Stack>
  )
}

export default NavTop
