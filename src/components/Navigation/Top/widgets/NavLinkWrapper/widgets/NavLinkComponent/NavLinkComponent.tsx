import { NavLink } from 'react-router-dom'
import { Typography } from '@mui/material'
import styles from './NavLinkComponent.styles'
import { PropsType } from './NavLinkComponent.types'

const { navLink, text } = styles

const NavLinkComponent = (props: PropsType) => {
  const { to, name } = props
  return (
    <NavLink style={navLink} to={to}>
      <Typography sx={text} variant="subtitle1">
        {name}
      </Typography>
    </NavLink>
  )
}

export default NavLinkComponent
