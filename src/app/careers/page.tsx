'use client'

import { Box, Container, Typography, Paper, Button, List, ListItem, ListItemText } from '@mui/material';

export default function CareersPage() {
  // Sample job listings
  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      id: 3,
      title: 'Customer Success Manager',
      department: 'Operations',
      location: 'New York, NY',
      type: 'Full-time',
    },
    {
      id: 4,
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'San Francisco, CA',
      type: 'Full-time',
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
              Join Our Team
            </Typography>
            <Typography variant="h5" style={{ color: '#666', marginBottom: '24px' }}>
              Build the future of home services with us
            </Typography>
            <Typography variant="body1" style={{ color: '#666', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
              At Joint, we're building a platform that connects homeowners with trusted professionals. 
              We're looking for passionate individuals who share our vision of transforming the home services industry.
            </Typography>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <Typography variant="h4" style={{ fontWeight: 600, marginBottom: '24px', color: '#000', textAlign: 'center' }}>
              Why Work at Joint?
            </Typography>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px', marginTop: '24px' }}>
              <div style={{ maxWidth: '300px', textAlign: 'center' }}>
                <Typography variant="h6" style={{ fontWeight: 600, marginBottom: '12px', color: '#000' }}>
                  Impact
                </Typography>
                <Typography variant="body2" style={{ color: '#666' }}>
                  Work on products that make a real difference in people's daily lives by solving real problems.
                </Typography>
              </div>
              
              <div style={{ maxWidth: '300px', textAlign: 'center' }}>
                <Typography variant="h6" style={{ fontWeight: 600, marginBottom: '12px', color: '#000' }}>
                  Growth
                </Typography>
                <Typography variant="body2" style={{ color: '#666' }}>
                  Opportunity to grow with a fast-growing startup and take on increasing responsibilities.
                </Typography>
              </div>
              
              <div style={{ maxWidth: '300px', textAlign: 'center' }}>
                <Typography variant="h6" style={{ fontWeight: 600, marginBottom: '12px', color: '#000' }}>
                  Culture
                </Typography>
                <Typography variant="body2" style={{ color: '#666' }}>
                  Join a collaborative, inclusive, and supportive team that values creativity and innovation.
                </Typography>
              </div>
            </div>
          </div>

          <div>
            <Typography variant="h4" style={{ fontWeight: 600, marginBottom: '24px', color: '#000', textAlign: 'center' }}>
              Open Positions
            </Typography>
            
            <List style={{ maxWidth: '800px', margin: '0 auto' }}>
              {jobs.map((job) => (
                <ListItem 
                  key={job.id} 
                  style={{ 
                    borderBottom: '1px solid #eee', 
                    padding: '20px 0',
                    transition: 'background-color 0.3s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f9f9f9'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                >
                  <ListItemText 
                    primary={job.title}
                    secondary={`${job.department} • ${job.location} • ${job.type}`}
                    primaryTypographyProps={{ style: { fontWeight: 600, color: '#000' } }}
                    secondaryTypographyProps={{ style: { color: '#666', marginTop: '4px' } }}
                  />
                  <Button 
                    variant="outlined" 
                    style={{ 
                      borderColor: '#000', 
                      color: '#000',
                      textTransform: 'none',
                      fontWeight: 500
                    }}
                  >
                    Apply
                  </Button>
                </ListItem>
              ))}
            </List>
          </div>

          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <Typography variant="h5" style={{ fontWeight: 600, marginBottom: '16px', color: '#000' }}>
              Don't see a role that fits?
            </Typography>
            <Typography variant="body1" style={{ color: '#666', marginBottom: '24px' }}>
              We're always looking for talented individuals to join our team.
            </Typography>
            <Button 
              variant="contained" 
              style={{ 
                backgroundColor: '#000', 
                color: 'white',
                textTransform: 'none',
                fontWeight: 600,
                padding: '10px 24px'
              }}
            >
              Send Us Your Resume
            </Button>
          </div>
        </Paper>
      </Container>
    </Box>
  );
}