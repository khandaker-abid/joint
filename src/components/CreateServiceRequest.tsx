'use client'

import { useState } from 'react'
import { useAuth } from '@/components/AuthProvider'
import { 
  Box, 
  Typography, 
  Container, 
  TextField, 
  Button, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Alert 
} from '@mui/material'
import { supabase } from '@/lib/supabase'

const CreateServiceRequest = () => {
  const { user } = useAuth()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [budget, setBudget] = useState('')
  const [serviceType, setServiceType] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const serviceTypes = [
    'Plumbing', 'Electrical', 'Carpentry', 'HVAC', 
    'Painting', 'Landscaping', 'Cleaning', 'Other'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      // First, we need to get the service ID from our services table
      let serviceId = null
      if (serviceType) {
        const { data: service, error: serviceError } = await supabase
          .from('services')
          .select('id')
          .eq('name', serviceType)
          .single()

        if (serviceError) {
          // If the service doesn't exist, create it
          const { data: newService, error: createError } = await supabase
            .from('services')
            .insert([{ name: serviceType }])
            .select('id')
            .single()

          if (createError) throw createError
          serviceId = newService.id
        } else {
          serviceId = service.id
        }
      }

      // Create the service request
      const { error: requestError } = await supabase
        .from('service_requests')
        .insert([{
          customer_id: user?.id,
          service_id: serviceId,
          title,
          description,
          location,
          budget: budget ? parseFloat(budget) : null,
          status: 'open'
        }])

      if (requestError) throw requestError

      setSuccess(true)
      // Reset form
      setTitle('')
      setDescription('')
      setLocation('')
      setBudget('')
      setServiceType('')
    } catch (error) {
      console.error('Error creating service request:', error)
      setError('Failed to create service request')
    } finally {
      setLoading(false)
    }
  }

  if (!user) {
    return (
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="h5">Please sign in to create a service request</Typography>
        </Box>
      </Container>
    )
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" gutterBottom>Create Service Request</Typography>
        
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">Service request created successfully!</Alert>}
        
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Request Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            margin="normal"
            required
          />
          
          <TextField
            fullWidth
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            margin="normal"
            multiline
            rows={4}
            required
          />
          
          <TextField
            fullWidth
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            margin="normal"
            required
          />
          
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Service Type</InputLabel>
            <Select
              value={serviceType}
              label="Service Type"
              onChange={(e) => setServiceType(e.target.value)}
            >
              {serviceTypes.map((type) => (
                <MenuItem key={type} value={type}>{type}</MenuItem>
              ))}
            </Select>
          </FormControl>
          
          <TextField
            fullWidth
            label="Budget ($)"
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            margin="normal"
            inputProps={{ min: "0", step: "0.01" }}
          />
          
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Create Request'}
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default CreateServiceRequest