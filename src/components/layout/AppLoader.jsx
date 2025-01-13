import { Stack, CircularProgress } from '@mui/material'
import React from 'react'

const AppLoader = () => {
  return (
    <Stack alignItems="center" mt={10}>
        <CircularProgress/>
    </Stack>
  )
}

export default AppLoader