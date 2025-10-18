'use client'

import { Box, Container, Typography, Paper, Grid, Card, CardContent } from '@mui/material';

export default function PressPage() {
  // Sample press releases
  const pressReleases = [
    {
      id: 1,
      title: 'Joint Announces $50M Series B Funding',
      date: 'March 15, 2024',
      excerpt: 'Joint secures additional funding to expand its platform connecting homeowners with skilled tradespeople nationwide.',
    },
    {
      id: 2,
      title: 'Joint Partners with National Home Builder Association',
      date: 'January 22, 2024',
      excerpt: 'Strategic partnership to bring more quality professionals to the Joint platform.',
    },
    {
      id: 3,
      title: 'Joint Launches New Safety Verification Program',
      date: 'November 8, 2023',
      excerpt: 'Enhanced safety measures for all service bookings to ensure customer and professional safety.',
    },
  ];

  // Sample media contacts
  const mediaContacts = [
    {
      name: 'Sarah Johnson',
      title: 'Director of Communications',
      email: 'press@joint.com',
      phone: '(555) 123-4567',
    },
    {
      name: 'Michael Chen',
      title: 'PR Manager',
      email: 'media@joint.com',
      phone: '(555) 987-6543',
    },
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
        <Paper style={{ padding: '48px', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Typography variant="h2" style={{ fontWeight: 700, marginBottom: '16px', color: '#000' }}>
              Press & Media
            </Typography>
            <Typography variant="h5" style={{ color: '#666', marginBottom: '24px' }}>
              News, announcements, and resources for journalists
            </Typography>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <Typography variant="h4" style={{ fontWeight: 600, marginBottom: '24px', color: '#000' }}>
              Press Releases
            </Typography>
            
            <Grid container spacing={3}>
              {pressReleases.map((release) => (
                <Grid size={{ xs: 12, md: 4 }} key={release.id}>
                  <Card 
                    style={{ 
                      height: '100%', 
                      borderRadius: '8px', 
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                    onMouseEnter={(e) => { 
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.12)';
                    }}
                    onMouseLeave={(e) => { 
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                    }}
                  >
                    <CardContent style={{ padding: '24px' }}>
                      <Typography variant="body2" style={{ color: '#000', fontWeight: 600, marginBottom: '8px' }}>
                        {release.date}
                      </Typography>
                      <Typography variant="h6" style={{ fontWeight: 600, marginBottom: '12px', color: '#000' }}>
                        {release.title}
                      </Typography>
                      <Typography variant="body2" style={{ color: '#666', lineHeight: 1.6 }}>
                        {release.excerpt}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <Typography variant="h4" style={{ fontWeight: 600, marginBottom: '24px', color: '#000' }}>
              Media Kit
            </Typography>
            
            <div style={{ backgroundColor: '#f9f9f9', padding: '24px', borderRadius: '8px' }}>
              <Typography variant="body1" style={{ color: '#666', marginBottom: '16px' }}>
                Download our media kit containing brand assets, company information, high-resolution logos, and executive photos.
              </Typography>
              <button 
                style={{ 
                  backgroundColor: '#000', 
                  color: 'white', 
                  border: 'none', 
                  padding: '10px 20px', 
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: 500,
                  textTransform: 'none',
                }}
              >
                Download Media Kit
              </button>
            </div>
          </div>

          <div>
            <Typography variant="h4" style={{ fontWeight: 600, marginBottom: '24px', color: '#000' }}>
              Media Contacts
            </Typography>
            
            <Grid container spacing={3}>
              {mediaContacts.map((contact, index) => (
                <Grid size={{ xs: 12, md: 6 }} key={index}>
                  <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '8px' }}>
                    <Typography variant="h6" style={{ fontWeight: 600, marginBottom: '4px', color: '#000' }}>
                      {contact.name}
                    </Typography>
                    <Typography variant="body2" style={{ color: '#666', marginBottom: '12px' }}>
                      {contact.title}
                    </Typography>
                    <Typography variant="body2" style={{ color: '#666', marginBottom: '4px' }}>
                      {contact.email}
                    </Typography>
                    <Typography variant="body2" style={{ color: '#666' }}>
                      {contact.phone}
                    </Typography>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </Paper>
      </Container>
    </Box>
  );
}