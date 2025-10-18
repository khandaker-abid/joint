'use client'

import { Card, CardContent, Box, Typography, Avatar, Rating, Chip, Button } from '@mui/material'
import { CheckCircle, ArrowRight, LocationOn } from '@mui/icons-material'
import { motion } from 'framer-motion'

interface ProfessionalCardProps {
  name: string
  trade: string
  rating: number
  reviews: number
  location: string
  avatar: string
  verified: boolean
  onViewProfile?: () => void
}

export default function ProfessionalCard({
  name,
  trade,
  rating,
  reviews,
  location,
  avatar,
  verified,
  onViewProfile,
}: ProfessionalCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card
        style={{
          height: '100%',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)'
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.12)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = 'none'
        }}
        onClick={onViewProfile}
      >
        <CardContent style={{ padding: '24px' }}>
          <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
            <Avatar
              src={avatar}
              style={{ width: 50, height: 50, marginRight: '16px' }}
            />
            <Box style={{ flex: 1 }}>
              <Typography variant="h6" style={{ fontWeight: 600, marginBottom: '4px' }}>
                {name}
              </Typography>
              <Box style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <Chip
                  label={trade}
                  size="small"
                  color="primary"
                  variant="outlined"
                  style={{ fontSize: '0.75rem' }}
                />
                {verified && (
                  <CheckCircle style={{ color: 'green', fontSize: 16 }} />
                )}
              </Box>
            </Box>
          </Box>
          
          <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <Rating value={rating} readOnly size="small" />
            <Typography variant="body2" style={{ marginLeft: '8px', color: '#666' }}>
              {rating} ({reviews} reviews)
            </Typography>
          </Box>
          
          <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
            <LocationOn style={{ fontSize: 16, color: '#666', marginRight: '4px' }} />
            <Typography variant="body2" style={{ color: '#666' }}>
              {location}
            </Typography>
          </Box>
          
          <Button
            variant="outlined"
            fullWidth
            endIcon={<ArrowRight />}
            style={{
              borderColor: 'black',
              color: 'black',
            }}
          >
            View Profile
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}