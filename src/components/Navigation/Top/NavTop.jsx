import React from 'react'
import { Stack, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import Clock from './widgets/Clock/Clock'
import WifiSignal from './widgets/WifiSignal/WifiSignal'
import ConnectedControllers from './widgets/ConnectedControllers/ConnectedControllers'

const styles = {
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 3,
  },
}

const linkStyles = {
  navLink: {
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'default',
  },
  text: {
    color: '#fff',
  },
}

const connectedControllersMock = [
  { name: '1', id: 1 },
  { name: '2', id: 1 },
]

const NavLinkComponent = (props) => {
  const { to, name } = props
  return (
    <NavLink style={linkStyles.navLink} to={to}>
      <Typography sx={linkStyles.text} variant="subtitle1">
        {name}
      </Typography>
    </NavLink>
  )
}

const NavLinkWrapper = (props) => {
  const { components } = props
  return (
    <Stack spacing={2} direction="row">
      {components.map((component) => (
        <NavLinkComponent to={component.to} name={component.name} key={component.name} />
      ))}
    </Stack>
  )
}

const { root } = styles
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
