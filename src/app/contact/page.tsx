'use client'

import { Box, Container, Typography, Paper, TextField, Button, Grid } from '@mui/material';

export default function ContactPage() {
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
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Typography variant="h2" style={{ fontWeight: 700, marginBottom: '16px', color: '#000' }}>
            Contact Us
          </Typography>
          <Typography variant="h5" style={{ color: '#666', marginBottom: '16px' }}>
            We're here to help
          </Typography>
          <Typography variant="body1" style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Reach out to our team for support, inquiries, or feedback
          </Typography>
        </div>

        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper style={{ padding: '56px', borderRadius: '20px', boxShadow: '0 12px 40px rgba(0,0,0,0.12)', height: '100%' }}>
              <Typography variant="h4" style={{ fontWeight: 700, color: '#000', marginBottom: '32px' }}>
                Send us a message
              </Typography>
              
              <form style={{ maxWidth: '100%' }}>
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
                    Subject
                  </Typography>
                  <TextField 
                    fullWidth 
                    variant="outlined" 
                    placeholder="What is this regarding?"
                  />
                </div>
                
                <div style={{ marginBottom: '32px' }}>
                  <Typography variant="body2" style={{ color: '#666', marginBottom: '8px' }}>
                    Message
                  </Typography>
                  <TextField 
                    fullWidth 
                    variant="outlined" 
                    multiline
                    rows={6}
                    placeholder="How can we help you?"
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
                    fontSize: '16px',
                    borderRadius: '12px'
                  }}
                >
                  Send Message
                </Button>
              </form>
            </Paper>
          </Grid>
          
          <Grid size={{ xs: 12, md: 6 }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Paper style={{ padding: '56px', borderRadius: '20px', boxShadow: '0 12px 40px rgba(0,0,0,0.12)', marginBottom: '24px', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: '#f0f0f0', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                    <div style={{ width: '24px', height: '24px', backgroundColor: '#000', borderRadius: '4px' }}></div>
                  </div>
                  <div>
                    <Typography variant="h6" style={{ fontWeight: 600, color: '#000', marginBottom: '4px' }}>
                      General Inquiries
                    </Typography>
                    <Typography variant="body2" style={{ color: '#666' }}>
                      hello@joint.com
                    </Typography>
                  </div>
                </div>
                <Typography variant="body2" style={{ color: '#666', lineHeight: 1.7 }}>
                  For general questions about our services, partnerships, or other business inquiries, email us directly.
                </Typography>
              </Paper>
              
              <Paper style={{ padding: '56px', borderRadius: '20px', boxShadow: '0 12px 40px rgba(0,0,0,0.12)', marginBottom: '24px', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: '#f0f0f0', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                    <div style={{ width: '24px', height: '24px', backgroundColor: '#000', borderRadius: '4px' }}></div>
                  </div>
                  <div>
                    <Typography variant="h6" style={{ fontWeight: 600, color: '#000', marginBottom: '4px' }}>
                      Professional Support
                    </Typography>
                    <Typography variant="body2" style={{ color: '#666' }}>
                      pros@joint.com
                    </Typography>
                  </div>
                </div>
                <Typography variant="body2" style={{ color: '#666', lineHeight: 1.7 }}>
                  For professionals using our platform, including account questions, payment issues, and technical support.
                </Typography>
              </Paper>
              
              <Paper style={{ padding: '56px', borderRadius: '20px', boxShadow: '0 12px 40px rgba(0,0,0,0.12)', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: '#f0f0f0', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                    <div style={{ width: '24px', height: '24px', backgroundColor: '#000', borderRadius: '4px' }}></div>
                  </div>
                  <div>
                    <Typography variant="h6" style={{ fontWeight: 600, color: '#000', marginBottom: '4px' }}>
                      Emergency Support
                    </Typography>
                    <Typography variant="body2" style={{ color: '#666' }}>
                      1-800-JOINT-HELP
                    </Typography>
                  </div>
                </div>
                <Typography variant="body2" style={{ color: '#666', lineHeight: 1.7 }}>
                  For urgent issues requiring immediate assistance. Available 24/7 for critical platform issues.
                </Typography>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}