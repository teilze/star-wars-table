import { AppBar, Box, Toolbar, Typography } from '@mui/material'

import { Filter } from "./components/Filter"

const Header = ({ column }) => {
  return (
    <Box>
      <AppBar position="static" >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#071D49' }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            PLANETS
          </Typography>
          <Filter column={column} />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export { Header }
