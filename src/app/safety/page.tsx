'use client'

import { Box, Container, Typography, Paper, Grid, Card, CardContent } from '@mui/material';

export default function SafetyPage() {
  const safetyGuidelines = [
    {
      title: "Verified Professionals",
      description: "All professionals on our platform undergo thorough background checks, license verification, and insurance validation.",
      icon: "✓"
    },
    {
      title: "Secure Payments",
      description: "Your payment information is protected with bank-level security. We hold payments until services are completed to your satisfaction.",
      icon: "🔒"
    },
    {
      title: "Identity Verification",
      description: "Professionals must verify their identity with government-issued ID and professional credentials.",
      icon: "🆔"
    },
    {
      title: "Real Reviews",
      description: "Access genuine reviews and ratings from previous customers who have used each professional's services.",
      icon: "⭐"
    }
  ];

  const safetySteps = [
    {
      step: 1,
      title: "Verify Professional Credentials",
      description: "Check the professional's profile for verified badges, licenses, insurance, and customer reviews before booking."
    },
    {
      step: 2,
      title: "Use in-App Communication",
      description: "Communicate with professionals only through our app to maintain records of all agreements and messages."
    },
    {
      step: 3,
      title: "Secure Payment Process",
      description: "Make all payments through our platform to ensure protection and secure handling of your financial information."
    },
    {
      step: 4,
      title: "Review Service Before Completion",
      description: "Inspect the completed work before finalizing payment to ensure it meets your expectations."
    }
  ];

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
            Safety First
          </Typography>
          <Typography variant="h5" style={{ color: '#666', marginBottom: '16px' }}>
            Your security is our top priority
          </Typography>
          <Typography variant="body1" style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            We implement comprehensive safety measures to protect both customers and professionals on our platform.
          </Typography>
        </div>

        <Grid container spacing={4} style={{ marginBottom: '48px' }}>
          {safetyGuidelines.map((item, index) => (
            <Grid size={{ xs: 12, md: 3 }} key={index}>
              <Card 
                style={{ 
                  textAlign: 'center', 
                  padding: '40px 32px', 
                  borderRadius: '20px',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                  height: '100%',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => { 
                  e.currentTarget.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={(e) => { 
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>
                  {item.icon}
                </div>
                <Typography variant="h6" style={{ fontWeight: 700, color: '#000', marginBottom: '12px' }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" style={{ color: '#666', lineHeight: 1.6 }}>
                  {item.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Paper style={{ padding: '56px', borderRadius: '20px', boxShadow: '0 12px 40px rgba(0,0,0,0.12)', marginBottom: '56px' }}>
          <Typography variant="h4" style={{ fontWeight: 700, color: '#000', marginBottom: '32px', textAlign: 'center' }}>
            How to Stay Safe When Booking Services
          </Typography>
          
          <Grid container spacing={4}>
            {safetySteps.map((step, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{ 
                    backgroundColor: '#000', 
                    color: 'white', 
                    width: '36px', 
                    height: '36px', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    fontWeight: 700,
                    marginRight: '20px',
                    flexShrink: 0
                  }}>
                    {step.step}
                  </div>
                  <div>
                    <Typography variant="h6" style={{ fontWeight: 600, color: '#000', marginBottom: '8px' }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" style={{ color: '#666', lineHeight: 1.6 }}>
                      {step.description}
                    </Typography>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Paper>

        <div style={{ backgroundColor: '#000', color: 'white', padding: '56px', borderRadius: '20px', marginBottom: '48px' }}>
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <Typography variant="h4" style={{ fontWeight: 700, marginBottom: '16px' }}>
              Report Safety Concerns
            </Typography>
            <Typography variant="body1" style={{ marginBottom: '24px', opacity: 0.9 }}>
              If you encounter any safety issues or have concerns about a professional or customer, please report it immediately.
            </Typography>
            <button 
              style={{ 
                backgroundColor: 'white', 
                color: '#000', 
                border: 'none', 
                padding: '14px 32px', 
                borderRadius: '12px',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              Report an Issue
            </button>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Typography variant="h5" style={{ fontWeight: 600, color: '#000', marginBottom: '16px' }}>
            Need Help?
          </Typography>
          <Typography variant="body1" style={{ color: '#666', marginBottom: '24px' }}>
            Our safety team is available 24/7 to address your concerns
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button 
              style={{ 
                backgroundColor: '#000', 
                color: 'white', 
                border: 'none', 
                padding: '12px 24px', 
                borderRadius: '12px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Call Safety Team
            </button>
            <button 
              style={{ 
                backgroundColor: 'transparent', 
                color: '#000', 
                border: '1px solid #000', 
                padding: '12px 24px', 
                borderRadius: '12px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Live Chat
            </button>
          </div>
        </div>
      </Container>
    </Box>
  );
}