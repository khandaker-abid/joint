'use client'

import { Box, TextField, Button, Typography, Chip } from '@mui/material'
import { Search, LocationOn } from '@mui/icons-material'
import { useState } from 'react'

const popularSearches = [
  'Plumber',
  'Electrician',
  'Carpenter',
  'HVAC Repair',
  'Roofing',
  'Flooring',
  'Painting',
  'Appliance Repair',
]

interface SearchBarProps {
  onSearch?: (query: string, location: string) => void
  variant?: 'hero' | 'compact'
}

export default function SearchBar({ onSearch, variant = 'hero' }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [location, setLocation] = useState('')

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchQuery, location)
    } else {
      // Default behavior: redirect to search results page
      const encodedQuery = encodeURIComponent(searchQuery)
      const encodedLocation = encodeURIComponent(location)
      window.location.href = `/search?q=${encodedQuery}&l=${encodedLocation}`
    }
  }

  if (variant === 'compact') {
    return (
      <Box
        style={{
          display: 'flex',
          gap: '8px',
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '8px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
          maxWidth: '500px',
        }}
      >
        <TextField
          fullWidth
          placeholder="What do you need help with?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          variant="standard"
          InputProps={{
            disableUnderline: true,
            startAdornment: <Search style={{ marginRight: '8px', color: '#666' }} />,
          }}
          style={{
            padding: '8px 0',
            fontSize: '1rem',
          }}
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          sx={{
            backgroundColor: '#000',
            color: 'white',
            padding: '8px 16px',
            fontWeight: 600,
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: '#333',
              boxShadow: 'none',
            }
          }}
        >
          Search
        </Button>
      </Box>
    )
  }

  return (
    <Box
      style={{
        maxWidth: '800px',
        margin: '0 auto 48px auto',
      }}
    >
      <Box
        style={{
          display: 'flex',
          gap: '8px',
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '8px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        }}
      >
        <Box style={{ display: 'flex', flex: 1, gap: '8px' }}>
          <TextField
            fullWidth
            placeholder="What do you need help with?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            variant="standard"
            InputProps={{
              disableUnderline: true,
              startAdornment: <Search style={{ marginRight: '8px', color: '#666' }} />,
            }}
            style={{
              padding: '12px 0',
              fontSize: '1.125rem',
            }}
          />
          <TextField
            fullWidth
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            variant="standard"
            InputProps={{
              disableUnderline: true,
              startAdornment: <LocationOn style={{ marginRight: '8px', color: '#666' }} />,
            }}
            style={{
              padding: '12px 0',
              fontSize: '1.125rem',
            }}
          />
        </Box>
        <Button
          variant="contained"
          onClick={handleSearch}
          sx={{
            backgroundColor: '#000',
            color: 'white',
            padding: '12px 24px',
            fontWeight: 600,
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: '#333',
              boxShadow: 'none',
            }
          }}
        >
          Search
        </Button>
      </Box>
      
      {/* Popular searches */}
      <Box style={{ marginTop: '24px' }}>
        <Typography variant="body2" style={{ marginBottom: '8px', opacity: 0.8, color: 'white' }}>
          Popular searches:
        </Typography>
        <Box style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {popularSearches.map((search) => (
            <Chip
              key={search}
              label={search}
              size="small"
              onClick={() => setSearchQuery(search)}
              style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: 'white',
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}