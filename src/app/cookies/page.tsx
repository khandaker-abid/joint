'use client'

import { Box, Container, Typography, Paper } from '@mui/material';

export default function CookiesPage() {
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
        <Paper style={{ padding: '56px', borderRadius: '20px', boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}>
          <Typography variant="h2" style={{ fontWeight: 700, marginBottom: '24px', color: '#000' }}>
            Cookies Policy
          </Typography>
          
          <Typography variant="body1" style={{ marginBottom: '24px', color: '#666', lineHeight: 1.7 }}>
            This Cookies Policy explains how Joint ("we", "us", or "our") uses cookies and similar technologies when you use our website and mobile application (the "Service").
          </Typography>

          <Typography variant="h4" style={{ fontWeight: 600, marginTop: '32px', marginBottom: '16px', color: '#000' }}>
            What Are Cookies?
          </Typography>
          
          <Typography variant="body1" style={{ marginBottom: '24px', color: '#666', lineHeight: 1.7 }}>
            Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
          </Typography>

          <Typography variant="h4" style={{ fontWeight: 600, marginTop: '32px', marginBottom: '16px', color: '#000' }}>
            How We Use Cookies
          </Typography>
          
          <Typography variant="h5" style={{ fontWeight: 600, marginTop: '24px', marginBottom: '12px', color: '#000' }}>
            Essential Cookies
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '16px', color: '#666', lineHeight: 1.7 }}>
            These cookies are necessary for the proper functioning of our Service and cannot be disabled in our systems.
          </Typography>
          
          <Typography variant="h5" style={{ fontWeight: 600, marginTop: '24px', marginBottom: '12px', color: '#000' }}>
            Performance Cookies
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '16px', color: '#666', lineHeight: 1.7 }}>
            These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our Service. They help us know which pages are the most and least popular.
          </Typography>
          
          <Typography variant="h5" style={{ fontWeight: 600, marginTop: '24px', marginBottom: '12px', color: '#000' }}>
            Functionality Cookies
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '16px', color: '#666', lineHeight: 1.7 }}>
            These cookies enable our Service to provide enhanced functionality and personalization. They may be set by us or by third-party providers.
          </Typography>
          
          <Typography variant="h5" style={{ fontWeight: 600, marginTop: '24px', marginBottom: '12px', color: '#000' }}>
            Targeting Cookies
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '16px', color: '#666', lineHeight: 1.7 }}>
            These cookies may be set through our Service by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements.
          </Typography>

          <Typography variant="h4" style={{ fontWeight: 600, marginTop: '32px', marginBottom: '16px', color: '#000' }}>
            Managing Cookies
          </Typography>
          
          <Typography variant="body1" style={{ marginBottom: '24px', color: '#666', lineHeight: 1.7 }}>
            You can control and manage cookies in various ways. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. However, if you disable or refuse cookies, please note that some parts of the Service may become inaccessible or not function properly.
          </Typography>

          <Typography variant="h4" style={{ fontWeight: 600, marginTop: '32px', marginBottom: '16px', color: '#000' }}>
            Updates to This Cookies Policy
          </Typography>
          
          <Typography variant="body1" style={{ marginBottom: '24px', color: '#666', lineHeight: 1.7 }}>
            We may update this Cookies Policy from time to time. We will notify you of any changes by posting the new Cookies Policy on this page. You are advised to review this Cookies Policy periodically for any changes.
          </Typography>

          <Typography variant="h4" style={{ fontWeight: 600, marginTop: '32px', marginBottom: '16px', color: '#000' }}>
            Contact Us
          </Typography>
          
          <Typography variant="body1" style={{ marginBottom: '16px', color: '#666', lineHeight: 1.7 }}>
            If you have any questions about this Cookies Policy, please contact us at privacy@joint.com or by mail at Joint Inc., 123 Service Street, San Francisco, CA 94105.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}