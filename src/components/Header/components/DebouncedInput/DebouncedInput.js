import { useState, useEffect } from "react"

import { Box, TextField } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

const DebouncedInput = ({ value: initialValue, onChange, debounce = 500, ...props }) => {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
  }, [value])

  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }} >
      <SearchIcon sx={{ mr: 1, my: 0.5 }} />
      <TextField
        {...props}
        id="input-with-sx"
        label="Search By Name..."
        value={value}
        variant="standard"
        InputLabelProps={{ style: { color: "white" } }}
        sx={{
          input: {
            color: "#ffffff",
            borderBottom: "1px solid #ffffff",
          },
        }}
        onChange={(e) => setValue(e.target.value)}
      />
    </Box>
  )
}

export { DebouncedInput }
