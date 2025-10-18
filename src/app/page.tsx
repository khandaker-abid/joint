'use client'

import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardContent,
} from '@mui/material'
import { 
  AccessTime, 
  Shield, 
  CheckCircle,
  Build,
  Bolt,
  Carpenter,
  Home as HomeIcon
} from '@mui/icons-material'
import { motion } from 'framer-motion'
import SearchBar from '@/components/SearchBar'
import ProfessionalCard from '@/components/ProfessionalCard'
import Footer from '@/components/Footer'

const tradeCategories = [
  { name: 'Plumbing', icon: <Build />, color: '#00D4AA' },
  { name: 'Electrical', icon: <Bolt />, color: '#FF6B35' },
  { name: 'Carpentry', icon: <Carpenter />, color: '#8B4513' },
  { name: 'HVAC', icon: <HomeIcon />, color: '#4169E1' },
]

const featuredProfessionals = [
  {
    name: 'Mike Johnson',
    trade: 'Plumbing',
    rating: 4.9,
    reviews: 127,
    location: '2 miles away',
    avatar: '/api/placeholder/60/60',
    verified: true,
  },
  {
    name: 'Sarah Chen',
    trade: 'Electrical',
    rating: 4.8,
    reviews: 89,
    location: '1.5 miles away',
    avatar: '/api/placeholder/60/60',
    verified: true,
  },
  {
    name: 'David Rodriguez',
    trade: 'Carpentry',
    rating: 4.9,
    reviews: 156,
    location: '3 miles away',
    avatar: '/api/placeholder/60/60',
    verified: true,
  },
]

const benefits = [
  {
    icon: <AccessTime />,
    title: 'Quick Response',
    description: 'Get matched with professionals in minutes, not days',
  },
  {
    icon: <Shield />,
    title: 'Verified Professionals',
    description: 'All tradespeople are background checked and licensed',
  },
  {
    icon: <CheckCircle />,
    title: 'Quality Guaranteed',
    description: 'Work is backed by our satisfaction guarantee',
  },
]

export default function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        id="hero"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '80px 0', // Reduced padding to account for navbar
          position: 'relative',
          overflow: 'hidden',
          minHeight: 'calc(100vh - 72px)', // Account for navbar height
          display: 'flex',
          alignItems: 'center' // Center content vertically
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              style={{
                fontSize: '3.5rem',
                fontWeight: 700,
                marginBottom: '32px',
                textAlign: 'center',
              }}
            >
              Find the right tradesperson for your home
            </Typography>
            <Typography
              variant="body1"
              style={{
                fontSize: '1.25rem',
                marginBottom: '40px',
                textAlign: 'center',
                maxWidth: '600px',
                margin: '0 auto 40px auto',
                opacity: 0.9,
              }}
            >
              Connect with skilled professionals in your area. From emergency repairs to home improvements, get quality work done quickly and reliably.
            </Typography>
            
            {/* Search Bar */}
            <SearchBar onSearch={(query, location) => {
              console.log('Search:', query, location)
              // Handle search logic here
            }} />

            {/* Trade Categories */}
            <Grid container spacing={2} justifyContent="center">
              {tradeCategories.map((category, index) => (
                <Grid size={{ xs: 'auto' }} key={category.name}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card
                      style={{
                        minWidth: 120,
                        textAlign: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        borderRadius: '16px', // Square with rounded corners
                        width: '120px',
                        height: '120px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)'
                        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.15)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    >
                      <CardContent style={{ padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Box
                          style={{
                            color: category.color,
                            marginBottom: '8px',
                            fontSize: '3rem', // Larger icons
                          }}
                        >
                          {category.icon}
                        </Box>
                        <Typography variant="body2" style={{ fontWeight: 600 }}>
                          {category.name}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* How It Works Section */}
      <Box id="how-it-works" style={{ padding: '64px 0', backgroundColor: '#f8f9fa', scrollMarginTop: '80px' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            style={{
              textAlign: 'center',
              marginBottom: '48px',
              fontSize: '2.5rem',
            }}
          >
            How Joint Works
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                step: '1',
                title: 'Describe Your Project',
                description: 'Tell us what you need done and when you need it completed.',
              },
              {
                step: '2',
                title: 'Get Matched',
                description: 'We connect you with qualified professionals in your area.',
              },
              {
                step: '3',
                title: 'Choose & Book',
                description: 'Review profiles, compare quotes, and book the right professional.',
              },
            ].map((step, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Box style={{ textAlign: 'center' }}>
                    <Box
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        backgroundColor: 'black',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        margin: '0 auto 24px auto',
                      }}
                    >
                      {step.step}
                    </Box>
                    <Typography variant="h3" style={{ marginBottom: '16px', fontSize: '1.5rem' }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body1" style={{ color: '#666' }}>
                      {step.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Featured Professionals */}
      <Box id="professionals" style={{ padding: '64px 0', scrollMarginTop: '80px' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            style={{
              textAlign: 'center',
              marginBottom: '48px',
              fontSize: '2.5rem',
            }}
          >
            Top-Rated Professionals
          </Typography>
          <Grid container spacing={3}>
            {featuredProfessionals.map((professional, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <ProfessionalCard
                  name={professional.name}
                  trade={professional.trade}
                  rating={professional.rating}
                  reviews={professional.reviews}
                  location={professional.location}
                  avatar={professional.avatar}
                  verified={professional.verified}
                  onViewProfile={() => {
                    console.log('View profile:', professional.name)
                    // Handle profile view logic here
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section for Customers */}
      <Box id="customers" style={{ padding: '64px 0', backgroundColor: '#f8f9fa', scrollMarginTop: '80px' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            style={{
              textAlign: 'center',
              marginBottom: '48px',
              fontSize: '2.5rem',
            }}
          >
            Why Choose Joint?
          </Typography>
          <Grid container spacing={4}>
            {benefits.map((benefit, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box style={{ textAlign: 'center' }}>
                    <Box
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        backgroundColor: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 24px auto',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                        fontSize: '2rem',
                        color: '#000',
                      }}
                    >
                      {benefit.icon}
                    </Box>
                    <Typography variant="h3" style={{ marginBottom: '16px', fontSize: '1.5rem' }}>
                      {benefit.title}
                    </Typography>
                    <Typography variant="body1" style={{ color: '#666' }}>
                      {benefit.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        id="get-started"
        style={{
          minHeight: 'calc(50vh - 72px)', // Account for navbar height
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          scrollMarginTop: '80px'
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box style={{ textAlign: 'center' }}>
              <Typography
                variant="h2"
                style={{
                  marginBottom: '24px',
                  fontSize: '2.5rem',
                }}
              >
                Ready to get started?
              </Typography>
              <Typography
                variant="body1"
                style={{
                  marginBottom: '32px',
                  fontSize: '1.125rem',
                  opacity: 0.9,
                  maxWidth: '500px',
                  margin: '0 auto 32px auto',
                }}
              >
                Join thousands of homeowners who trust Joint for their home improvement needs.
              </Typography>
              <Box style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: 'white',
                    color: 'black',
                    padding: '12px 32px',
                    fontWeight: 600,
                    boxShadow: 'none',
                    '&:hover': {
                      backgroundColor: '#f5f5f5',
                      boxShadow: 'none',
                    }
                  }}
                >
                  Find a Professional
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: '#000',
                    color: 'white',
                    padding: '12px 32px',
                    fontWeight: 600,
                    boxShadow: 'none',
                    '&:hover': {
                      backgroundColor: '#333',
                      boxShadow: 'none',
                    }
                  }}
                >
                  Become a Professional
                </Button>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  )
}