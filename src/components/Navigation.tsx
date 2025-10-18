'use client'

import { useState, MouseEvent } from 'react'
import { AppBar, Toolbar, Typography, Button, Box, Container, Drawer, List, ListItem, ListItemButton, ListItemText, Divider, IconButton, Menu, MenuItem, useTheme, useMediaQuery } from '@mui/material'
import { Menu as MenuIcon, Person, Close as CloseIcon, ExpandMore, ExpandLess } from '@mui/icons-material'
import { useAuth } from '@/components/AuthProvider'
import Link from 'next/link'

export default function Navigation() {
  const { user, signOut } = useAuth()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [profileMenuOpen, setProfileMenuOpen] = useState(false)
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null)
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleMenuClick = (event: MouseEvent<HTMLElement>, menuName: string) => {
    if (expandedMenu === menuName) {
      setExpandedMenu(null);
    } else {
      setExpandedMenu(menuName);
    }
  };

  const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setProfileMenuOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuOpen(false);
    setAnchorEl(null);
  };

  // Close menus when clicking outside
  const handleNavClick = () => {
    setExpandedMenu(null);
    handleProfileMenuClose();
  };

  const drawerItems = [
    { text: 'Home', href: '/' },
    { text: 'For Customers', href: '/#customers' },
    { text: 'For Professionals', href: '/#professionals' },
    { text: 'How it Works', href: '/#how-it-works' },
    { text: 'Find a Tradesperson', href: '/search' },
    { text: 'Become a Professional', href: '/create-request' },
    { text: 'Safety', href: '/safety' },
    { text: 'Help', href: '/help' },
    { text: 'Pricing', href: '/pricing' },
    { text: 'Blog', href: '/blog' },
    { text: 'About', href: '/about' },
    { text: 'Careers', href: '/careers' },
    { text: 'Press', href: '/press' },
    { text: 'Privacy', href: '/privacy' },
    { text: 'Terms', href: '/terms' },
  ]

  const drawer = (
    <Box onClick={handleNavClick} sx={{ textAlign: 'center', width: 300, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, borderBottom: '1px solid #e0e0e0' }}>
        <Link href="/" passHref prefetch={true} style={{ textDecoration: 'none' }}>
          <Typography variant="h6" sx={{ 
            fontWeight: 800, 
            fontSize: '1.75rem', 
            cursor: 'pointer',
            color: 'black',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            letterSpacing: '-0.5px'
          }}>
            Joint
          </Typography>
        </Link>
        <IconButton onClick={handleDrawerToggle} color="inherit">
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ flex: 1, overflow: 'auto' }}>
        {drawerItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <Link href={item.href} passHref prefetch={true} style={{ width: '100%', textDecoration: 'none' }}>
              <ListItemButton sx={{ textAlign: 'left', px: 3, py: 1.5 }}>
                <ListItemText primary={item.text} sx={{ typography: 'body1', fontWeight: 500, color: 'black' }} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
        <Divider sx={{ my: 2 }} />
        {user ? (
          <>
            <ListItem disablePadding>
              <Link href="/profile" passHref style={{ width: '100%', textDecoration: 'none' }}>
                <ListItemButton sx={{ textAlign: 'left', px: 3, py: 1.5 }}>
                  <ListItemText primary="Your Profile" sx={{ typography: 'body1', fontWeight: 500, color: 'black' }} />
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton 
                onClick={signOut} 
                sx={{ textAlign: 'left', px: 3, py: 1.5, color: '#d32f2f' }}
              >
                <ListItemText primary="Sign Out" sx={{ typography: 'body1', fontWeight: 500 }} />
              </ListItemButton>
            </ListItem>
          </>
        ) : (
          <>
            <ListItem disablePadding>
              <Link href="/auth#signup" passHref prefetch={true} style={{ width: '100%', textDecoration: 'none' }}>
                <ListItemButton sx={{ textAlign: 'center', px: 3, py: 1.5, bgcolor: '#000', color: 'white', borderRadius: 1, mx: 2, my: 1 }}>
                  <ListItemText primary="Sign Up" sx={{ typography: 'body1', fontWeight: 600 }} />
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <Link href="/auth" passHref style={{ width: '100%', textDecoration: 'none' }}>
                <ListItemButton sx={{ textAlign: 'center', px: 3, py: 1.5, border: '1px solid #000', borderRadius: 1, mx: 2, my: 1 }}>
                  <ListItemText primary="Sign In" sx={{ typography: 'body1', fontWeight: 600 }} />
                </ListItemButton>
              </Link>
            </ListItem>
          </>
        )}
      </List>
      <Box sx={{ p: 2, borderTop: '1px solid #e0e0e0', backgroundColor: '#f5f5f5' }}>
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Joint. All rights reserved.
        </Typography>
      </Box>
    </Box>
  )

  return (
    <>
      <AppBar 
        position="sticky" 
        elevation={1} 
        sx={{ 
          backgroundColor: 'white', 
          color: 'black',
          boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.1), 0px 4px 5px 0px rgba(0,0,0,0.05), 0px 1px 10px 0px rgba(0,0,0,0.05)',
          top: 0,
          zIndex: 1300,
          transition: 'transform 0.3s ease-in-out',
          '&.MuiPaper-root': {
            position: 'sticky',
          }
        }}
      >
        <Container maxWidth="lg">
          <Toolbar 
            style={{ 
              justifyContent: 'space-between', 
              padding: '12px 0',
              minHeight: '72px'
            }}
          >
            <Box style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
              <Link href="/" passHref style={{ textDecoration: 'none' }}>
                <Typography 
                  variant="h6" 
                  style={{ 
                    fontWeight: 800, 
                    fontSize: '1.75rem', 
                    cursor: 'pointer',
                    color: 'black',
                    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                    letterSpacing: '-0.5px'
                  }}
                >
                  Joint
                </Typography>
              </Link>
              
              {/* Desktop Navigation Links */}
              <Box style={{ display: 'flex', gap: '48px' }} className="hidden md:flex">
                <Box style={{ position: 'relative' }}>
                  <Button 
                    color="inherit" 
                    style={{ fontWeight: 500, textTransform: 'none', padding: '6px 12px', color: 'black' }}
                    onClick={(e) => handleMenuClick(e, 'for-customers')}
                  >
                    For Customers
                    {expandedMenu === 'for-customers' ? <ExpandLess style={{ marginLeft: '4px' }} /> : <ExpandMore style={{ marginLeft: '4px' }} />}
                  </Button>
                  {expandedMenu === 'for-customers' && (
                    <Box
                      sx={{
                        position: 'absolute',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        boxShadow: '0px 8px 16px rgba(0,0,0,0.1)',
                        py: 1,
                        minWidth: '200px',
                        zIndex: 1000,
                        mt: 0.5
                      }}
                    >
                      <Link href="/search" passHref>
                        <Button 
                          color="inherit" 
                          style={{ 
                            textTransform: 'none', 
                            justifyContent: 'flex-start', 
                            width: '100%', 
                            padding: '8px 16px',
                            fontWeight: 400,
                            color: 'black'
                          }}
                          onClick={handleNavClick}
                        >
                          Find a Tradesperson
                        </Button>
                      </Link>
                      <Link href="/pricing" passHref>
                        <Button 
                          color="inherit" 
                          style={{ 
                            textTransform: 'none', 
                            justifyContent: 'flex-start', 
                            width: '100%', 
                            padding: '8px 16px',
                            fontWeight: 400,
                            color: 'black'
                          }}
                          onClick={handleNavClick}
                        >
                          Pricing
                        </Button>
                      </Link>
                      <Link href="/safety" passHref>
                        <Button 
                          color="inherit" 
                          style={{ 
                            textTransform: 'none', 
                            justifyContent: 'flex-start', 
                            width: '100%', 
                            padding: '8px 16px',
                            fontWeight: 400,
                            color: 'black'
                          }}
                          onClick={handleNavClick}
                        >
                          Safety
                        </Button>
                      </Link>
                      <Link href="/help" passHref>
                        <Button 
                          color="inherit" 
                          style={{ 
                            textTransform: 'none', 
                            justifyContent: 'flex-start', 
                            width: '100%', 
                            padding: '8px 16px',
                            fontWeight: 400,
                            color: 'black'
                          }}
                          onClick={handleNavClick}
                        >
                          Help Center
                        </Button>
                      </Link>
                    </Box>
                  )}
                </Box>

                <Box style={{ position: 'relative' }}>
                  <Button 
                    color="inherit" 
                    style={{ fontWeight: 500, textTransform: 'none', padding: '6px 12px', color: 'black' }}
                    onClick={(e) => handleMenuClick(e, 'for-professionals')}
                  >
                    For Professionals
                    {expandedMenu === 'for-professionals' ? <ExpandLess style={{ marginLeft: '4px' }} /> : <ExpandMore style={{ marginLeft: '4px' }} />}
                  </Button>
                  {expandedMenu === 'for-professionals' && (
                    <Box
                      sx={{
                        position: 'absolute',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        boxShadow: '0px 8px 16px rgba(0,0,0,0.1)',
                        py: 1,
                        minWidth: '200px',
                        zIndex: 1000,
                        mt: 0.5
                      }}
                    >
                      <Link href="/create-request" passHref>
                        <Button 
                          color="inherit" 
                          style={{ 
                            textTransform: 'none', 
                            justifyContent: 'flex-start', 
                            width: '100%', 
                            padding: '8px 16px',
                            fontWeight: 400,
                            color: 'black'
                          }}
                          onClick={handleNavClick}
                        >
                          Become a Professional
                        </Button>
                      </Link>
                      <Link href="/resources" passHref>
                        <Button 
                          color="inherit" 
                          style={{ 
                            textTransform: 'none', 
                            justifyContent: 'flex-start', 
                            width: '100%', 
                            padding: '8px 16px',
                            fontWeight: 400,
                            color: 'black'
                          }}
                          onClick={handleNavClick}
                        >
                          Resources
                        </Button>
                      </Link>
                      <Link href="/pricing" passHref>
                        <Button 
                          color="inherit" 
                          style={{ 
                            textTransform: 'none', 
                            justifyContent: 'flex-start', 
                            width: '100%', 
                            padding: '8px 16px',
                            fontWeight: 400,
                            color: 'black'
                          }}
                          onClick={handleNavClick}
                        >
                          Earnings
                        </Button>
                      </Link>
                      <Link href="/help" passHref>
                        <Button 
                          color="inherit" 
                          style={{ 
                            textTransform: 'none', 
                            justifyContent: 'flex-start', 
                            width: '100%', 
                            padding: '8px 16px',
                            fontWeight: 400,
                            color: 'black'
                          }}
                          onClick={handleNavClick}
                        >
                          Support
                        </Button>
                      </Link>
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
            
            <Box style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {user ? (
                <>
                  <Link href="/profile" passHref>
                    <Button 
                      color="inherit" 
                      style={{ fontWeight: 500, textTransform: 'none', color: 'black' }}
                      onClick={handleNavClick}
                    >
                      Profile
                    </Button>
                  </Link>
                  <Box style={{ position: 'relative' }}>
                    <Button
                      onClick={handleProfileMenuOpen}
                      variant="outlined"
                      startIcon={<Person />}
                      style={{
                        borderColor: 'black',
                        color: 'black',
                        textTransform: 'none'
                      }}
                    >
                      Account
                    </Button>
                    <Menu
                      anchorEl={anchorEl}
                      open={profileMenuOpen}
                      onClose={handleProfileMenuClose}
                      onClick={handleNavClick}
                      PaperProps={{
                        elevation: 2,
                        sx: {
                          mt: 1,
                          borderRadius: '8px',
                        }
                      }}
                    >
                      <Link href="/profile" passHref>
                        <MenuItem onClick={handleProfileMenuClose}>Your Profile</MenuItem>
                      </Link>
                      <MenuItem onClick={() => { signOut(); handleProfileMenuClose(); }}>
                        Sign Out
                      </MenuItem>
                    </Menu>
                  </Box>
                </>
              ) : (
                <>
                  <Link href="/auth" passHref>
                    <Button
                      variant="outlined"
                      startIcon={<Person />}
                      style={{
                        borderColor: 'black',
                        color: 'black',
                        textTransform: 'none',
                        fontWeight: 500
                      }}
                      onClick={handleNavClick}
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/auth#signup" passHref prefetch={true}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#000',
                        color: 'white',
                        fontWeight: 600,
                        textTransform: 'none',
                        px: 2
                      }}
                      onClick={handleNavClick}
                    >
                      Sign up
                    </Button>
                  </Link>
                </>
              )}
              
              {/* Hamburger menu button - visible on all screen sizes */}
              <Button
                color="inherit"
                onClick={handleDrawerToggle}
                sx={{ ml: 1 }}
              >
                <MenuIcon />
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      
      {/* Full Menu Drawer - available on both mobile and desktop */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 300,
            backgroundColor: '#fff'
          },
        }}
      >
        {drawer}
      </Drawer>
      
      {/* Close dropdowns when clicking outside */}
      {expandedMenu && (
        <div 
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            zIndex: 999 
          }} 
          onClick={() => setExpandedMenu(null)}
        />
      )}
    </>
  )
}
