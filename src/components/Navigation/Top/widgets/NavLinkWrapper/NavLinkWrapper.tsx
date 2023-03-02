import { Stack } from '@mui/material'
import NavLinkComponent from './widgets/NavLinkComponent/NavLinkComponent'
import { PropsType } from './NavLinkWrapper.types'

const NavLinkWrapper = (props: PropsType) => {
  const { components } = props
  return (
    <Stack spacing={2} direction="row">
      {components.map((component) => (
        <NavLinkComponent to={component.to} name={component.name} key={component.name} />
      ))}
    </Stack>
  )
}

export default NavLinkWrapper
