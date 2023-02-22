import React from 'react'
import { Stack } from '@mui/material'
import {
  Clock,
  WifiSignal,
  ConnectedControllers,
  NavLinkWrapper,
  NavSearch,
  NavSettings,
  NavUser,
} from './widgets'
import styles from './NavTop.styles'

const { root } = styles

const connectedControllersMock = [
  { name: '1', id: 1 },
  { name: '2', id: 2 },
]

const mockComponents = [
  { to: '/', name: 'Home' },
  { to: '/about', name: 'About' },
]

const NavTop = () => {
  return (
    <Stack sx={root} direction="row" spacing={2}>
      <NavLinkWrapper components={mockComponents} />
      <ConnectedControllers connectedControllers={connectedControllersMock} />
      <Stack direction="row" alignItems="center" spacing={3}>
        <Stack mr={3} direction="row" alignItems="center" spacing={3}>
          <NavSearch />
          <NavSettings />
          <NavUser />
        </Stack>
        <Clock />
        <WifiSignal />
      </Stack>
    </Stack>
  )
}

export default NavTop
