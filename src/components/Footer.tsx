'use client'

import { Box, Container, Typography, Grid, Link, IconButton } from '@mui/material'
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material'

export default function Footer() {
  return (
    <Box
      style={{
        backgroundColor: '#000',
        color: 'white',
        padding: '48px 0',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              variant="h6"
              style={{
                fontWeight: 700,
                fontSize: '1.5rem',
                marginBottom: '16px',
              }}
            >
              Joint
            </Typography>
            <Typography variant="body2" style={{ color: '#999', marginBottom: '24px' }}>
              Connecting homeowners with skilled tradespeople for quality home improvement projects.
            </Typography>
            <Box style={{ display: 'flex', gap: '8px' }}>
              <a href="https://facebook.com/joint" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <IconButton
                  size="small"
                  style={{
                    color: '#999',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#fff'; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#999'; }}
                >
                  <Facebook fontSize="small" />
                </IconButton>
              </a>
              <a href="https://twitter.com/joint" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <IconButton
                  size="small"
                  style={{
                    color: '#999',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#fff'; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#999'; }}
                >
                  <Twitter fontSize="small" />
                </IconButton>
              </a>
              <a href="https://instagram.com/joint" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <IconButton
                  size="small"
                  style={{
                    color: '#999',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#fff'; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#999'; }}
                >
                  <Instagram fontSize="small" />
                </IconButton>
              </a>
              <a href="https://linkedin.com/company/joint" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <IconButton
                  size="small"
                  style={{
                    color: '#999',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#fff'; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#999'; }}
                >
                  <LinkedIn fontSize="small" />
                </IconButton>
              </a>
            </Box>
          </Grid>
          
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" style={{ marginBottom: '16px', fontWeight: 600 }}>
              For Customers
            </Typography>
            <Box style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link 
                href="/#how-it-works" 
                prefetch={true}
                style={{ color: '#999', textDecoration: 'none', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#fff'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#999'; }}
              >
                How it Works
              </Link>
              <Link 
                href="/#professionals" 
                prefetch={true}
                style={{ color: '#999', textDecoration: 'none', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#fff'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#999'; }}
              >
                Find Professionals
              </Link>
              <Link 
                href="/pricing" 
                prefetch={true}
                style={{ color: '#999', textDecoration: 'none', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#fff'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#999'; }}
              >
                Pricing
              </Link>
              <Link 
                href="/safety" 
                prefetch={true}
                style={{ color: '#999', textDecoration: 'none', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#fff'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#999'; }}
              >
                Safety
              </Link>
            </Box>
          </Grid>
          
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" style={{ marginBottom: '16px', fontWeight: 600 }}>
              For Professionals
            </Typography>
            <Box style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link 
                href="/create-request" 
                prefetch={true}
                style={{ color: '#999', textDecoration: 'none', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#fff'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#999'; }}
              >
                Join as Professional
              </Link>
              <Link 
                href="/profile" 
                prefetch={true}
                style={{ color: '#999', textDecoration: 'none', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#fff'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#999'; }}
              >
                Professional Dashboard
              </Link>
              <Link 
                href="/resources" 
                prefetch={true}
                style={{ color: '#999', textDecoration: 'none', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#fff'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#999'; }}
              >
                Resources
              </Link>
              <Link 
                href="/help" 
                prefetch={true}
                style={{ color: '#999', textDecoration: 'none', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#fff'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#999'; }}
              >
                Support
              </Link>
            </Box>
          </Grid>
          
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" style={{ marginBottom: '16px', fontWeight: 600 }}>
              Company
            </Typography>
            <Box style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link 
                href="/about" 
                prefetch={true}
                style={{ color: '#999', textDecoration: 'none', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#fff'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#999'; }}
              >
                About Us
              </Link>
              <Link 
                href="/careers" 
                prefetch={true}
                style={{ color: '#999', textDecoration: 'none', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#fff'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#999'; }}
              >
                Careers
              </Link>
              <Link 
                href="/press" 
                prefetch={true}
                style={{ color: '#999', textDecoration: 'none', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#fff'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#999'; }}
              >
                Press
              </Link>
              <Link 
                href="/blog" 
                prefetch={true}
                style={{ color: '#999', textDecoration: 'none', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#fff'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#999'; }}
              >
                Blog
              </Link>
            </Box>
          </Grid>
          
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" style={{ marginBottom: '16px', fontWeight: 600 }}>
              Support
            </Typography>
            <Box style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link 
                href="/help" 
                prefetch={true}
                style={{ color: '#999', textDecoration: 'none', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#fff'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#999'; }}
              >
                Help Center
              </Link>
              <Link 
                href="/contact" 
                prefetch={true}
                style={{ color: '#999', textDecoration: 'none', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#fff'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#999'; }}
              >
                Contact Us
              </Link>
              <Link 
                href="/privacy" 
                prefetch={true}
                style={{ color: '#999', textDecoration: 'none', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#fff'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#999'; }}
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                prefetch={true}
                style={{ color: '#999', textDecoration: 'none', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#fff'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#999'; }}
              >
                Terms of Service
              </Link>
            </Box>
          </Grid>
        </Grid>
        
        <Box
          style={{
            borderTop: '1px solid #333',
            marginTop: '48px',
            paddingTop: '32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <Typography variant="body2" style={{ color: '#999' }}>
            © 2025 Joint. All rights reserved.
          </Typography>
          <Box style={{ display: 'flex', gap: '24px' }}>
            <Link 
              href="/privacy" 
              prefetch={true}
              style={{ color: '#999', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s ease' }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#fff'; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#999'; }}
            >
              Privacy
            </Link>
            <Link 
              href="/terms" 
              prefetch={true}
              style={{ color: '#999', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s ease' }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#fff'; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#999'; }}
            >
              Terms
            </Link>
            <Link 
              href="/cookies" 
              prefetch={true}
              style={{ color: '#999', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s ease' }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#fff'; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#999'; }}
            >
              Cookies
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}