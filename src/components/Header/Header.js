import { AppBar, Box, Toolbar, Typography, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const Header = () => {
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
          <Box sx={{ display: "flex", alignItems: "flex-end" }} >
            <SearchIcon sx={{ mr: 1, my: 0.5, transform: 'scaleX(-1)' }} />
            <TextField
              id="input-with-sx"
              label="Search By Name..."
              variant="standard"
              InputLabelProps={{ style: { color: "white" } }}
              sx={{
                input: {
                  color: "#ffffff",
                  borderBottom: "1px solid #ffffff",
                },
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export { Header }
