import React from 'react'
import { useState } from 'react'
import { Container, Stack, TextField, Button, Typography } from '@mui/material'
import LogoImg from '../../assets/logo.svg'
import ImageEl from '../../components/utils/imageEl'
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

const initForm = {
    email:'',
    password:'',
}
const AuthScreen = () => {
  const [loading, setLoading]=useState(false)
  const [isLogin, setIsLogin]=useState(true)
  const [form, setForm] = useState(initForm)
  const authText = isLogin ? 'Don\'t have an account?' : 'Already have an account?'
  const handleChange = event => setForm(oldForm => ({...oldForm,[event.target.name]:event.target.value}));
  const handleAuth=async()=>{
    try{
        setLoading(true)
        if(isLogin){
            // Login
            await signInWithEmailAndPassword(auth,form.email,form.password)
        }else{
            // Register
            await createUserWithEmailAndPassword(auth,form.email,form.password)
        }
    }catch(err){
        const msg = err.code.split('auth/')[1].split('-').join(' ')
        console.log(msg)
        setLoading(false)
    }
  }
  return (
    <Container 
        maxWidth='xs'
        sx={{
            mt:10,
        }}
    >
        <Stack mb={6} spacing={4} alignItems={'center'} textAlign={'center'}>
            <ImageEl src={LogoImg} alt="Logo" />   
            <Typography color='rgba(255,255,255,0.6)'>
                Visualize Your Workflow for Increased Productivity.
                <br/>
                Access Your Tasks Anytime, Anywhere.
            </Typography>
        </Stack>
        <Stack spacing={2} mt={4}>
            <TextField value={form.email} name='email' onChange={handleChange} label='Email'/>
            <TextField value={form.password} name='password' onChange={handleChange} label='Password'/>
            <Button onClick={handleAuth} disabled={loading || !form.email.trim() || !form.password.trim()} size="large" variant='contained'>
                {isLogin ? 'Login' : 'Register'}
            </Button>
        </Stack>
        <Typography
            sx={{
                cursor:'pointer',
            }}
            onClick={()=> setIsLogin(oldState => !oldState)}
            textAlign={'center'}
            mt={3}
        >
            {authText}
        </Typography>
    </Container>
  )
}

export default AuthScreen