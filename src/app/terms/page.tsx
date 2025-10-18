'use client'

import { Box, Container, Typography, Paper } from '@mui/material';

export default function TermsPage() {
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
          <Typography variant="h2" style={{ fontWeight: 700, marginBottom: '24px', color: '#000' }}>
            Terms of Service
          </Typography>
          
          <Typography variant="body1" style={{ marginBottom: '16px', color: '#666', lineHeight: 1.7 }}>
            These Terms of Service govern your access to and use of the Joint platform, including our website, 
            mobile application, and related services (collectively, the "Service"). By accessing or using the Service, 
            you agree to be bound by these Terms.
          </Typography>

          <Typography variant="h4" style={{ fontWeight: 600, marginTop: '24px', marginBottom: '16px', color: '#000' }}>
            Use of Service
          </Typography>
          
          <Typography variant="body1" style={{ marginBottom: '16px', color: '#666', lineHeight: 1.7 }}>
            You must be at least 18 years old to use our Service. By using the Service, you represent and warrant 
            that you meet this requirement. You agree to use the Service only for lawful purposes and in accordance 
            with these Terms.
          </Typography>

          <Typography variant="h4" style={{ fontWeight: 600, marginTop: '24px', marginBottom: '16px', color: '#000' }}>
            Account Registration
          </Typography>
          
          <Typography variant="body1" style={{ marginBottom: '16px', color: '#666', lineHeight: 1.7 }}>
            When you create an account with us, you must provide accurate and complete information. You are responsible 
            for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </Typography>

          <Typography variant="h4" style={{ fontWeight: 600, marginTop: '24px', marginBottom: '16px', color: '#000' }}>
            Service Provider Terms
          </Typography>
          
          <Typography variant="body1" style={{ marginBottom: '16px', color: '#666', lineHeight: 1.7 }}>
            If you are a service provider using our platform, you acknowledge that you are an independent contractor, 
            not an employee of Joint. You are solely responsible for your services and ensuring you have the necessary 
            licenses, insurance, and qualifications to perform your services.
          </Typography>

          <Typography variant="h4" style={{ fontWeight: 600, marginTop: '24px', marginBottom: '16px', color: '#000' }}>
            Limitation of Liability
          </Typography>
          
          <Typography variant="body1" style={{ marginBottom: '16px', color: '#666', lineHeight: 1.7 }}>
            To the extent permitted by applicable law, Joint shall not be liable for any indirect, incidental, special, 
            consequential, or punitive damages, including without limitation, loss of profits, data, use, or goodwill.
          </Typography>

          <Typography variant="h4" style={{ fontWeight: 600, marginTop: '24px', marginBottom: '16px', color: '#000' }}>
            Changes to Terms
          </Typography>
          
          <Typography variant="body1" style={{ marginBottom: '16px', color: '#666', lineHeight: 1.7 }}>
            We reserve the right to modify these Terms at any time. If we make material changes, we will notify you 
            through the Service or other means. Your continued use of the Service after such changes constitutes 
            acceptance of the updated Terms.
          </Typography>

          <Typography variant="h4" style={{ fontWeight: 600, marginTop: '24px', marginBottom: '16px', color: '#000' }}>
            Contact Us
          </Typography>
          
          <Typography variant="body1" style={{ marginBottom: '16px', color: '#666', lineHeight: 1.7 }}>
            If you have any questions about these Terms, please contact us at legal@joint.com or 
            by mail at Joint Inc., 123 Service Street, San Francisco, CA 94105.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}