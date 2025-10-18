'use client'

import { Box, Container, Typography, Paper } from '@mui/material';

export default function PrivacyPage() {
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
            Privacy Policy
          </Typography>
          
          <Typography variant="body1" style={{ marginBottom: '16px', color: '#666', lineHeight: 1.7 }}>
            At Joint, we are committed to protecting your privacy and securing your personal information. 
            This Privacy Policy explains how we collect, use, and protect your information when you use our services.
          </Typography>

          <Typography variant="h4" style={{ fontWeight: 600, marginTop: '24px', marginBottom: '16px', color: '#000' }}>
            Information We Collect
          </Typography>
          
          <Typography variant="body1" style={{ marginBottom: '16px', color: '#666', lineHeight: 1.7 }}>
            We collect information you provide directly to us, such as when you create an account, use our services, 
            or communicate with us. This may include your name, email address, phone number, location, and payment information.
          </Typography>

          <Typography variant="h4" style={{ fontWeight: 600, marginTop: '24px', marginBottom: '16px', color: '#000' }}>
            How We Use Your Information
          </Typography>
          
          <Typography variant="body1" style={{ marginBottom: '16px', color: '#666', lineHeight: 1.7 }}>
            We use the information we collect to provide, maintain, and improve our services, to communicate with you, 
            to process transactions, and to comply with legal obligations. We may also use your information to send you 
            promotional materials and updates about our services.
          </Typography>

          <Typography variant="h4" style={{ fontWeight: 600, marginTop: '24px', marginBottom: '16px', color: '#000' }}>
            Information Sharing and Disclosure
          </Typography>
          
          <Typography variant="body1" style={{ marginBottom: '16px', color: '#666', lineHeight: 1.7 }}>
            We do not sell, trade, or rent your personal information to third parties. We may share your information 
            with service providers who perform services on our behalf, with your consent, or as required by law.
          </Typography>

          <Typography variant="h4" style={{ fontWeight: 600, marginTop: '24px', marginBottom: '16px', color: '#000' }}>
            Data Security
          </Typography>
          
          <Typography variant="body1" style={{ marginBottom: '16px', color: '#666', lineHeight: 1.7 }}>
            We implement appropriate technical and organizational measures to protect your personal information against 
            unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the 
            internet or method of electronic storage is 100% secure.
          </Typography>

          <Typography variant="h4" style={{ fontWeight: 600, marginTop: '24px', marginBottom: '16px', color: '#000' }}>
            Contact Us
          </Typography>
          
          <Typography variant="body1" style={{ marginBottom: '16px', color: '#666', lineHeight: 1.7 }}>
            If you have any questions about this Privacy Policy, please contact us at privacy@joint.com or 
            by mail at Joint Inc., 123 Service Street, San Francisco, CA 94105.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}