import { AppBar, Box, Toolbar, Typography } from '@mui/material'

import { DebouncedInput } from './components/DebouncedInput'

const Header = ({ column }) => {
  const columnFilterValue = column.getFilterValue()

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
          <DebouncedInput
            type="text"
            value={(columnFilterValue ?? '')}
            onChange={value => column.setFilterValue(value)}
            list={column.id + 'list'}
          />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export { Header }
