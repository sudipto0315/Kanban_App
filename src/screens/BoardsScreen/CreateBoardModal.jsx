import React from 'react'
import { Dialog, Stack, Typography, Box, IconButton, TextField, Button} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import ModalHeader from '../../components/layout/ModalHeader'
import { colors } from '../../theme'
const CreateBoardModal = () => {
  return (
    <Dialog open fullWidth maxWidth='xs'>
        <Stack padding={2}>
            <ModalHeader title={"Create Board"}/>
            <Stack my={5} spacing={3}>
                <TextField label="Board name"/>
                <Stack spacing={1.5} direction={'row'}>
                    <Typography>Color: </Typography>
                    {colors.map(clr => <Box
                        key={clr}
                        height={25}
                        width={25}
                        backgroundColor={clr}
                        borderRadius={"50%"}
                    />)}
                </Stack>
            </Stack>
            <Button size='large' variant='contained'>Create</Button>
        </Stack>
    </Dialog>
  )
}

export default CreateBoardModal