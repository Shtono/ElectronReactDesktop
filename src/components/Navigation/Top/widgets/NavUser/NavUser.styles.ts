import { SxProps } from '@mui/material'

const innerContainer: SxProps = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  border: '1px solid #FFF',
}

const outerContainer = {
  ...innerContainer,
  width: '50px',
  height: '50px',
  border: '1px solid #FFF',
  overflow: 'visible',
  justifyContent: 'center',
  alignItems: 'center',
}

export default { innerContainer, outerContainer }
