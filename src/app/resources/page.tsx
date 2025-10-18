'use client'

import { Box, Container, Typography, Paper, Grid, Card, CardContent } from '@mui/material';

export default function ResourcesPage() {
  const resources = [
    {
      title: "Professional Guidelines",
      description: "Best practices and standards for service professionals on our platform",
      category: "Guidelines"
    },
    {
      title: "Insurance Requirements",
      description: "Learn about insurance requirements for professionals in your area",
      category: "Requirements"
    },
    {
      title: "Equipment Safety",
      description: "Essential safety equipment and protocols for common home service tasks",
      category: "Safety"
    },
    {
      title: "Customer Communication",
      description: "Tips for effective communication with customers before, during, and after services",
      category: "Communication"
    },
    {
      title: "Pricing Strategies",
      description: "How to price your services competitively while maintaining quality",
      category: "Business"
    },
    {
      title: "Legal Resources",
      description: "Important legal documents and resources for service professionals",
      category: "Legal"
    }
  ];

  const supportOptions = [
    {
      title: "Professional Help Center",
      description: "Find answers to common questions about using our professional platform",
      linkText: "Visit Help Center"
    },
    {
      title: "Live Support",
      description: "Get real-time assistance from our professional support team",
      linkText: "Contact Support"
    },
    {
      title: "Community Forum",
      description: "Connect with other professionals and share experiences",
      linkText: "Join Community"
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
            Professional Resources
          </Typography>
          <Typography variant="h5" style={{ color: '#666', marginBottom: '16px' }}>
            Tools and information to help you succeed
          </Typography>
          <Typography variant="body1" style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Access guides, tools, and resources designed specifically for professionals on our platform
          </Typography>
        </div>

        <Grid container spacing={4} style={{ marginBottom: '48px' }}>
          {resources.map((resource, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
              <Card 
                style={{ 
                  height: '100%', 
                  borderRadius: '20px', 
                  boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease',
                  backgroundColor: 'white'
                }}
                onMouseEnter={(e) => { 
                  e.currentTarget.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={(e) => { 
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ height: '8px', backgroundColor: '#000' }}></div>
                <CardContent style={{ padding: '32px' }}>
                  <span style={{ 
                    backgroundColor: '#f0f0f0', 
                    padding: '4px 12px', 
                    borderRadius: '20px', 
                    fontSize: '12px', 
                    fontWeight: 600,
                    marginBottom: '16px',
                    display: 'inline-block'
                  }}>
                    {resource.category}
                  </span>
                  <Typography variant="h6" style={{ fontWeight: 700, marginBottom: '12px', color: '#000' }}>
                    {resource.title}
                  </Typography>
                  <Typography variant="body2" style={{ color: '#666', lineHeight: 1.6 }}>
                    {resource.description}
                  </Typography>
                  <button 
                    style={{ 
                      marginTop: '20px',
                      backgroundColor: 'transparent', 
                      color: '#000', 
                      border: '1px solid #000', 
                      padding: '8px 20px', 
                      borderRadius: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}
                  >
                    Learn More
                  </button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Paper style={{ padding: '56px', borderRadius: '20px', boxShadow: '0 12px 40px rgba(0,0,0,0.12)', marginBottom: '48px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Typography variant="h4" style={{ fontWeight: 700, color: '#000', marginBottom: '16px' }}>
              Support Resources
            </Typography>
            <Typography variant="body1" style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Get the support you need to run your business effectively
            </Typography>
          </div>
          
          <Grid container spacing={4}>
            {supportOptions.map((option, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <div style={{ textAlign: 'center', padding: '24px' }}>
                  <div style={{ 
                    width: '60px', 
                    height: '60px', 
                    backgroundColor: '#f0f0f0', 
                    borderRadius: '16px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    margin: '0 auto 20px'
                  }}>
                    <div style={{ width: '30px', height: '30px', backgroundColor: '#000', borderRadius: '6px' }}></div>
                  </div>
                  <Typography variant="h6" style={{ fontWeight: 700, color: '#000', marginBottom: '12px' }}>
                    {option.title}
                  </Typography>
                  <Typography variant="body2" style={{ color: '#666', marginBottom: '20px', lineHeight: 1.6 }}>
                    {option.description}
                  </Typography>
                  <button 
                    style={{ 
                      backgroundColor: '#000', 
                      color: 'white', 
                      border: 'none', 
                      padding: '10px 24px', 
                      borderRadius: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}
                  >
                    {option.linkText}
                  </button>
                </div>
              </Grid>
            ))}
          </Grid>
        </Paper>

        <div style={{ textAlign: 'center' }}>
          <Typography variant="h5" style={{ fontWeight: 600, color: '#000', marginBottom: '16px' }}>
            Need More Help?
          </Typography>
          <Typography variant="body1" style={{ color: '#666', marginBottom: '24px', maxWidth: '500px', margin: '0 auto' }}>
            Our professional support team is available to answer your questions
          </Typography>
          <button 
            style={{ 
              backgroundColor: '#000', 
              color: 'white', 
              border: 'none', 
              padding: '14px 32px', 
              borderRadius: '12px',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Contact Professional Support
          </button>
        </div>
      </Container>
    </Box>
  );
}