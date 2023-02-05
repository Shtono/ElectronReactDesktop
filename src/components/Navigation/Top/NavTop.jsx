import { Stack, Button, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import React from 'react'

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
    <Stack>
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
