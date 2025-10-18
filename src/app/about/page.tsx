'use client'

import { Box, Container, Typography, Paper, Grid } from '@mui/material';

export default function AboutPage() {
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
            About Joint
          </Typography>
          
          <Typography variant="body1" style={{ marginBottom: '24px', color: '#666', lineHeight: 1.7, textAlign: 'center' }}>
            Connecting homeowners with skilled tradespeople for quality home improvement projects since 2024.
          </Typography>

          <Grid container spacing={4} style={{ marginTop: '24px' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h4" style={{ fontWeight: 600, marginBottom: '16px', color: '#000' }}>
                Our Mission
              </Typography>
              
              <Typography variant="body1" style={{ marginBottom: '16px', color: '#666', lineHeight: 1.7 }}>
                At Joint, we're on a mission to transform the home services industry by connecting homeowners 
                with skilled and reliable tradespeople. We believe that finding quality service providers 
                shouldn't be a stressful, time-consuming process.
              </Typography>
              
              <Typography variant="body1" style={{ marginBottom: '16px', color: '#666', lineHeight: 1.7 }}>
                Our platform provides a seamless experience for both homeowners and service professionals, 
                making it easier to find, book, and deliver quality home services.
              </Typography>
            </Grid>
            
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h4" style={{ fontWeight: 600, marginBottom: '16px', color: '#000' }}>
                Our Vision
              </Typography>
              
              <Typography variant="body1" style={{ marginBottom: '16px', color: '#666', lineHeight: 1.7 }}>
                We envision a world where every homeowner can easily find trusted professionals for their 
                home improvement needs, and every skilled tradesperson has access to meaningful work opportunities.
              </Typography>
              
              <Typography variant="body1" style={{ marginBottom: '16px', color: '#666', lineHeight: 1.7 }}>
                By leveraging technology and data, we're building a platform that brings transparency, 
                reliability, and convenience to the home services industry.
              </Typography>
            </Grid>
          </Grid>

          <div style={{ marginTop: '40px' }}>
            <Typography variant="h4" style={{ fontWeight: 600, marginBottom: '24px', color: '#000', textAlign: 'center' }}>
              Our Values
            </Typography>
            
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Typography variant="h6" style={{ fontWeight: 600, marginBottom: '12px', color: '#000', textAlign: 'center' }}>
                  Trust
                </Typography>
                <Typography variant="body2" style={{ color: '#666', textAlign: 'center' }}>
                  We prioritize safety and reliability in every connection we make.
                </Typography>
              </Grid>
              
              <Grid size={{ xs: 12, md: 4 }}>
                <Typography variant="h6" style={{ fontWeight: 600, marginBottom: '12px', color: '#000', textAlign: 'center' }}>
                  Quality
                </Typography>
                <Typography variant="body2" style={{ color: '#666', textAlign: 'center' }}>
                  We ensure all professionals meet high standards of workmanship.
                </Typography>
              </Grid>
              
              <Grid size={{ xs: 12, md: 4 }}>
                <Typography variant="h6" style={{ fontWeight: 600, marginBottom: '12px', color: '#000', textAlign: 'center' }}>
                  Convenience
                </Typography>
                <Typography variant="body2" style={{ color: '#666', textAlign: 'center' }}>
                  We make it easy to find and book quality services from your home.
                </Typography>
              </Grid>
            </Grid>
          </div>

          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <Typography variant="h4" style={{ fontWeight: 600, marginBottom: '16px', color: '#000' }}>
              Join Our Community
            </Typography>
            
            <Typography variant="body1" style={{ marginBottom: '16px', color: '#666', lineHeight: 1.7 }}>
              Whether you're a homeowner looking for reliable service or a professional tradesperson 
              looking for opportunities, Joint is your trusted platform. Together, we're building 
              better homes and stronger communities.
            </Typography>
          </div>
        </Paper>
      </Container>
    </Box>
  );
}