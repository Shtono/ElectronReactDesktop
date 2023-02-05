import { Stack, Typography } from '@mui/material'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'

export type Controller = { name: string; id: number }

export type PropsType = {
  connectedControllers: Controller[]
}

const ConnectedControllers = (props: PropsType) => {
  return (
    <Stack direction="row" spacing={2}>
      {props.connectedControllers.map((controller) => (
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          key={controller.id}
          color="white"
        >
          <SportsEsportsIcon />
          <Typography variant="subtitle2">{controller.name}</Typography>
        </Stack>
      ))}
    </Stack>
  )
}

export default ConnectedControllers
