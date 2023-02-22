import { Box, Stack } from '@mui/material'
import ProfileIronMan from 'assets/user/user_profile_iron.png'
import styles from './NavUser.styles'
const { innerContainer, outerContainer } = styles

const NavUser = () => {
  return <Box sx={{ ...innerContainer, backgroundImage: `url(${ProfileIronMan})` }} />
}

export default NavUser
