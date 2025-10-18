'use client'

import { Box, Container, Typography, Paper, Card, CardContent, Grid } from '@mui/material';

export default function BlogPage() {
  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Choosing the Right Contractor for Your Home Project",
      excerpt: "Learn how to evaluate contractors based on experience, licensing, insurance, and reviews to ensure your home improvement project is a success.",
      date: "May 15, 2024",
      readTime: "5 min read",
      category: "Home Improvement"
    },
    {
      id: 2,
      title: "Spring Cleaning: When to Call a Professional",
      excerpt: "Discover which spring cleaning tasks are best left to the professionals and how to find reliable service providers in your area.",
      date: "April 22, 2024",
      readTime: "4 min read",
      category: "Home Maintenance"
    },
    {
      id: 3,
      title: "Electrical Safety: What Every Homeowner Should Know",
      excerpt: "Essential electrical safety tips and when it's crucial to call a licensed electrician instead of attempting DIY repairs.",
      date: "March 30, 2024",
      readTime: "6 min read",
      category: "Safety Tips"
    },
    {
      id: 4,
      title: "Preparing Your Home for Winter: A Professional's Guide",
      excerpt: "Get expert advice on winterizing your home and which seasonal maintenance tasks require professional attention.",
      date: "November 10, 2023",
      readTime: "7 min read",
      category: "Seasonal Maintenance"
    },
    {
      id: 5,
      title: "The Benefits of Regular HVAC Maintenance",
      excerpt: "Learn why scheduling regular HVAC maintenance can save you money, improve efficiency, and extend the life of your system.",
      date: "October 5, 2023",
      readTime: "4 min read",
      category: "HVAC Tips"
    },
    {
      id: 6,
      title: "How to Verify a Tradesperson's Credentials",
      excerpt: "A comprehensive guide to checking licenses, insurance, and references when hiring a professional for your project.",
      date: "September 18, 2023",
      readTime: "5 min read",
      category: "Hiring Tips"
    }
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
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Typography variant="h2" style={{ fontWeight: 700, marginBottom: '16px', color: '#000' }}>
            Joint Blog
          </Typography>
          <Typography variant="h5" style={{ color: '#666', marginBottom: '16px' }}>
            Tips, insights, and stories from the home services industry
          </Typography>
          <Typography variant="body1" style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Expert advice on home maintenance, improvement, and working with professionals
          </Typography>
        </div>

        <Grid container spacing={4} style={{ marginBottom: '40px' }}>
          {blogPosts.slice(0, 3).map((post) => (
            <Grid size={{ xs: 12, md: 4 }} key={post.id}>
              <Card 
                style={{ 
                  height: '100%', 
                  borderRadius: '16px', 
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => { 
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => { 
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{ height: '180px', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '60px', height: '60px', backgroundColor: '#000', borderRadius: '12px' }}></div>
                </div>
                <CardContent style={{ padding: '32px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ backgroundColor: '#f0f0f0', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600 }}>
                      {post.category}
                    </span>
                    <span style={{ color: '#999', fontSize: '14px' }}>{post.date}</span>
                  </div>
                  <Typography variant="h6" style={{ fontWeight: 700, marginBottom: '12px', color: '#000' }}>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" style={{ color: '#666', marginBottom: '16px', lineHeight: 1.6 }}>
                    {post.excerpt}
                  </Typography>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#999', fontSize: '14px' }}>{post.readTime}</span>
                    <button 
                      style={{ 
                        backgroundColor: 'transparent', 
                        color: '#000', 
                        border: '1px solid #000', 
                        padding: '6px 16px', 
                        borderRadius: '8px',
                        fontSize: '14px',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      Read more
                    </button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <Typography variant="h4" style={{ fontWeight: 600, marginBottom: '16px', color: '#000' }}>
            More Articles
          </Typography>
          <div style={{ height: '2px', width: '60px', backgroundColor: '#000', margin: '0 auto' }}></div>
        </div>

        <Grid container spacing={3}>
          {blogPosts.slice(3).map((post) => (
            <Grid size={{ xs: 12, md: 6 }} key={post.id}>
              <Card 
                style={{ 
                  borderRadius: '16px', 
                  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease',
                  display: 'flex'
                }}
                onMouseEnter={(e) => { 
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => { 
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ width: '120px', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: '#000', borderRadius: '8px' }}></div>
                </div>
                <CardContent style={{ padding: '28px', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ backgroundColor: '#f0f0f0', padding: '2px 8px', borderRadius: '16px', fontSize: '11px', fontWeight: 600 }}>
                      {post.category}
                    </span>
                    <span style={{ color: '#999', fontSize: '12px' }}>{post.date}</span>
                  </div>
                  <Typography variant="h6" style={{ fontWeight: 700, marginBottom: '8px', color: '#000' }}>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" style={{ color: '#666', marginBottom: '12px', lineHeight: 1.6 }}>
                    {post.excerpt}
                  </Typography>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#999', fontSize: '12px' }}>{post.readTime}</span>
                    <button 
                      style={{ 
                        backgroundColor: 'transparent', 
                        color: '#000', 
                        border: '1px solid #000', 
                        padding: '4px 12px', 
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      Read
                    </button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}