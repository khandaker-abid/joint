'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/components/AuthProvider'
import { 
  Box, 
  Typography, 
  Container, 
  Card, 
  CardContent, 
  Button,
  TextField,
  Alert
} from '@mui/material'
import { supabase } from '@/lib/supabase'

const ProfilePage = () => {
  const { user, signOut } = useAuth()
  const [profile, setProfile] = useState<{id: string, full_name: string | null, phone: string | null, updated_at: string | null} | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    if (user) {
      fetchProfile()
    }
  }, [user])

  const fetchProfile = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user?.id)
        .single()

      if (error) throw error

      setProfile(data)
      setName(data?.full_name || '')
      setPhone(data?.phone || '')
    } catch (error) {
      setError('Failed to fetch profile')
      console.error('Error fetching profile:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateProfile = async () => {
    try {
      const { error } = await supabase
        .from('profiles')
        .upsert({
          id: user?.id,
          full_name: name,
          phone: phone,
          updated_at: new Date().toISOString(),
        })

      if (error) throw error

      setEditing(false)
      fetchProfile()
    } catch (error) {
      setError('Failed to update profile')
      console.error('Error updating profile:', error)
    }
  }

  if (!user) {
    return (
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="h5">Please sign in to view your profile</Typography>
        </Box>
      </Container>
    )
  }

  if (loading) {
    return (
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="h5">Loading profile...</Typography>
        </Box>
      </Container>
    )
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h3">Your Profile</Typography>
          <Button variant="outlined" color="secondary" onClick={() => signOut()}>
            Sign Out
          </Button>
        </Box>

        {error && <Alert severity="error">{error}</Alert>}

        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Account Information
            </Typography>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary">Email</Typography>
              <Typography>{user.email}</Typography>
            </Box>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary">User ID</Typography>
              <Typography>{user.id}</Typography>
            </Box>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary">Created At</Typography>
              <Typography>{new Date(user.created_at).toLocaleString()}</Typography>
            </Box>
            
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              Profile Information
            </Typography>
            
            {editing ? (
              <Box>
                <TextField
                  fullWidth
                  label="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  margin="normal"
                />
                <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                  <Button variant="contained" onClick={updateProfile}>
                    Save
                  </Button>
                  <Button variant="outlined" onClick={() => setEditing(false)}>
                    Cancel
                  </Button>
                </Box>
              </Box>
            ) : (
              <Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" color="text.secondary">Full Name</Typography>
                  <Typography>{name || 'Not set'}</Typography>
                </Box>
                
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" color="text.secondary">Phone Number</Typography>
                  <Typography>{phone || 'Not set'}</Typography>
                </Box>
                
                <Button 
                  variant="contained" 
                  onClick={() => setEditing(true)}
                >
                  Edit Profile
                </Button>
              </Box>
            )}
          </CardContent>
        </Card>
      </Box>
    </Container>
  )
}

export default ProfilePage