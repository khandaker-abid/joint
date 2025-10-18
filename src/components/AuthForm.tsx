'use client'

import { useState } from 'react'
import { useAuth } from '@/components/AuthProvider'
import { Box, Button, TextField, Typography, Container, Link } from '@mui/material'

const AuthForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const { signIn, signUp, signOut, user } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      if (isSignUp) {
        await signUp(email, password)
        alert('Check your email for confirmation!')
      } else {
        await signIn(email, password)
      }
    } catch (error) {
      console.error('Authentication error:', error)
      alert('Authentication failed')
    }
  }

  if (user) {
    return (
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="h5" gutterBottom>
            Welcome, {user.email}!
          </Typography>
          <p>User ID: {user.id}</p>
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={() => signOut()}
            sx={{ mt: 2 }}
          >
            Sign Out
          </Button>
        </Box>
      </Container>
    )
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        py: 4,
        border: '1px solid #ccc',
        borderRadius: 2,
        mt: 4
      }}>
        <Typography variant="h4" gutterBottom>
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </Typography>
        
        <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
          />
          
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth 
            sx={{ mt: 2 }}
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
        </form>
        
        <Box sx={{ mt: 2 }}>
          <Link 
            component="button" 
            variant="body2"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp 
              ? 'Already have an account? Sign In' 
              : "Don't have an account? Sign Up"}
          </Link>
        </Box>
      </Box>
    </Container>
  )
}

export default AuthForm