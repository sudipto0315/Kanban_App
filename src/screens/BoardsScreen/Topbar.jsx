import { AppBar, Toolbar, Button, Stack} from '@mui/material'
import React from 'react'
import ImageEl from '../../components/utils/imageEl'
import LogoImg from '../../assets/logo.svg'
import LogoutIcon from '@mui/icons-material/ExitToApp'
const Topbar = ({openModal}) => {
  return (
    <AppBar position='static'>
        <Toolbar>
            <ImageEl sx={{
                height:25,
            }} src={LogoImg} alt='FlowBoard'/>
            <Stack direction={'row'} spacing={2} sx={{flexGrow: 1}} justifyContent='flex-end'>
                <Button onClick={openModal} variant='contained'>Create Board</Button>
                <Button startIcon={<LogoutIcon/>} color='inherit'>Logout</Button>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}

export default Topbar