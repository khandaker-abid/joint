'use client'

import { Box, Container, Typography, Paper } from '@mui/material';

export default function SearchPage() {
  return (
    <Box
      style={{
        backgroundColor: '#f8f9fa',
        minHeight: '100vh',
        paddingTop: '80px',
        paddingBottom: '40px',
      }}
    >
      <Container maxWidth="lg">
        <Paper style={{ padding: '48px', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
          <Typography variant="h2" style={{ fontWeight: 700, marginBottom: '24px', color: '#000', textAlign: 'center' }}>
            Find a Tradesperson
          </Typography>
          
          <Typography variant="h5" style={{ color: '#666', textAlign: 'center', marginBottom: '24px' }}>
            Search for skilled professionals in your area
          </Typography>

          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <Typography variant="body1" style={{ color: '#666', maxWidth: '600px', margin: '0 auto 24px', lineHeight: 1.7 }}>
              Our search functionality allows you to find the right professional for your project. 
              Filter by trade, location, availability, and ratings to find the perfect match.
            </Typography>
            
            <div style={{ display: 'inline-block', width: '100%', maxWidth: '500px', margin: '20px 0' }}>
              <div style={{ 
                backgroundColor: '#fff', 
                padding: '20px', 
                borderRadius: '12px', 
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                marginBottom: '20px'
              }}>
                <Typography variant="body2" style={{ color: '#999', marginBottom: '8px', textAlign: 'left' }}>
                  What service do you need?
                </Typography>
                <input 
                  type="text" 
                  placeholder="Plumbing, electrical, carpentry..." 
                  style={{ 
                    width: '100%', 
                    padding: '12px 16px', 
                    border: '1px solid #ddd', 
                    borderRadius: '8px',
                    fontSize: '16px'
                  }} 
                />
              </div>
              
              <div style={{ 
                backgroundColor: '#fff', 
                padding: '20px', 
                borderRadius: '12px', 
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                marginBottom: '20px'
              }}>
                <Typography variant="body2" style={{ color: '#999', marginBottom: '8px', textAlign: 'left' }}>
                  Where do you need the service?
                </Typography>
                <input 
                  type="text" 
                  placeholder="Enter your city or zip code" 
                  style={{ 
                    width: '100%', 
                    padding: '12px 16px', 
                    border: '1px solid #ddd', 
                    borderRadius: '8px',
                    fontSize: '16px'
                  }} 
                />
              </div>
              
              <button 
                style={{ 
                  backgroundColor: '#000', 
                  color: 'white', 
                  border: 'none', 
                  padding: '14px 28px', 
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  width: '100%'
                }}
              >
                Find Professionals
              </button>
            </div>
            
            <Typography variant="body2" style={{ color: '#999', marginTop: '20px' }}>
              Or browse professionals by category:
            </Typography>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginTop: '20px' }}>
              {['Plumbing', 'Electrical', 'Carpentry', 'HVAC', 'Painting', 'Cleaning'].map((category, index) => (
                <div 
                  key={index}
                  style={{ 
                    backgroundColor: '#f1f1f1', 
                    padding: '10px 20px', 
                    borderRadius: '20px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#e0e0e0'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#f1f1f1'; }}
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
        </Paper>
      </Container>
    </Box>
  );
}