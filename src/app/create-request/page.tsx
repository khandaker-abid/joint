'use client'

import { Box, Container, Typography, Paper, TextField, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

export default function CreateRequestPage() {
  return (
    <Box
      style={{
        backgroundColor: '#f8f9fa',
        minHeight: '100vh',
        paddingTop: '80px',
        paddingBottom: '40px',
      }}
    >
      <Container maxWidth="md">
        <Paper style={{ padding: '48px', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
          <Typography variant="h2" style={{ fontWeight: 700, marginBottom: '8px', color: '#000', textAlign: 'center' }}>
            Become a Professional
          </Typography>
          
          <Typography variant="h5" style={{ color: '#666', textAlign: 'center', marginBottom: '32px' }}>
            Join our network of skilled tradespeople
          </Typography>

          <form style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ marginBottom: '24px' }}>
              <Typography variant="body2" style={{ color: '#666', marginBottom: '8px' }}>
                Full Name
              </Typography>
              <TextField 
                fullWidth 
                variant="outlined" 
                placeholder="Enter your full name"
              />
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <Typography variant="body2" style={{ color: '#666', marginBottom: '8px' }}>
                Email Address
              </Typography>
              <TextField 
                fullWidth 
                variant="outlined" 
                type="email"
                placeholder="Enter your email"
              />
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <Typography variant="body2" style={{ color: '#666', marginBottom: '8px' }}>
                Phone Number
              </Typography>
              <TextField 
                fullWidth 
                variant="outlined" 
                type="tel"
                placeholder="Enter your phone number"
              />
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <Typography variant="body2" style={{ color: '#666', marginBottom: '8px' }}>
                Trade Specialization
              </Typography>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Select your trade</InputLabel>
                <Select defaultValue="">
                  <MenuItem value=""><em>Select a trade</em></MenuItem>
                  <MenuItem value="plumbing">Plumbing</MenuItem>
                  <MenuItem value="electrical">Electrical</MenuItem>
                  <MenuItem value="carpentry">Carpentry</MenuItem>
                  <MenuItem value="hvac">HVAC</MenuItem>
                  <MenuItem value="painting">Painting</MenuItem>
                  <MenuItem value="cleaning">Cleaning</MenuItem>
                  <MenuItem value="landscaping">Landscaping</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <Typography variant="body2" style={{ color: '#666', marginBottom: '8px' }}>
                Years of Experience
              </Typography>
              <TextField 
                fullWidth 
                variant="outlined" 
                type="number"
                placeholder="Enter years of experience"
              />
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <Typography variant="body2" style={{ color: '#666', marginBottom: '8px' }}>
                Describe Your Services
              </Typography>
              <TextField 
                fullWidth 
                variant="outlined" 
                multiline
                rows={4}
                placeholder="Describe the services you offer, your qualifications, and any specializations"
              />
            </div>
            
            <div style={{ marginBottom: '32px' }}>
              <Typography variant="body2" style={{ color: '#666', marginBottom: '8px' }}>
                Location
              </Typography>
              <TextField 
                fullWidth 
                variant="outlined" 
                placeholder="Enter your service area (city, state)"
              />
            </div>
            
            <Button
              variant="contained"
              style={{
                backgroundColor: '#000',
                color: 'white',
                fontWeight: 600,
                padding: '14px 24px',
                width: '100%',
                fontSize: '16px'
              }}
            >
              Submit Application
            </Button>
          </form>
          
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <Typography variant="body2" style={{ color: '#666' }}>
              Our team will review your application and contact you within 2 business days.
            </Typography>
          </div>
        </Paper>
      </Container>
    </Box>
  );
}