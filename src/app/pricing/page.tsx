'use client'

import { Box, Container, Typography, Paper, Grid, Button } from '@mui/material';

export default function PricingPage() {
  const pricingPlans = [
    {
      id: 1,
      name: "Basic",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with our platform",
      features: [
        "Find and contact professionals",
        "Basic profile access",
        "Standard booking system",
        "Email support"
      ],
      cta: "Get Started",
      featured: false
    },
    {
      id: 2,
      name: "Professional",
      price: "$29",
      period: "per month",
      description: "Ideal for regular users who need professional services",
      features: [
        "Priority matching with professionals",
        "Detailed profile information",
        "Advanced booking options",
        "Dedicated support",
        "Project tracking tools"
      ],
      cta: "Start Free Trial",
      featured: true
    },
    {
      id: 3,
      name: "Enterprise",
      price: "Custom",
      period: "quote",
      description: "For businesses and high-volume users",
      features: [
        "Unlimited service requests",
        "Custom integration options",
        "Dedicated account manager",
        "24/7 premium support",
        "Advanced analytics dashboard"
      ],
      cta: "Contact Sales",
      featured: false
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
            Simple, Transparent Pricing
          </Typography>
          <Typography variant="h5" style={{ color: '#666', marginBottom: '16px' }}>
            Choose the plan that works best for you
          </Typography>
          <Typography variant="body1" style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            No hidden fees. No long-term commitments. All plans include our core features.
          </Typography>
        </div>

        <Grid container spacing={4} style={{ marginBottom: '40px' }}>
          {pricingPlans.map((plan) => (
            <Grid size={{ xs: 12, md: 4 }} key={plan.id}>
              <Paper 
                style={{ 
                  padding: '48px 40px',
                  borderRadius: '20px', 
                  boxShadow: plan.featured ? '0 24px 48px rgba(0,0,0,0.18)' : '0 12px 40px rgba(0,0,0,0.12)',
                  border: plan.featured ? '2px solid #000' : '1px solid #e0e0e0',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  height: '100%'
                }}
              >
                {plan.featured && (
                  <div 
                    style={{ 
                      position: 'absolute', 
                      top: '20px', 
                      right: '-30px', 
                      backgroundColor: '#000', 
                      color: 'white', 
                      padding: '4px 40px', 
                      transform: 'rotate(45deg)',
                      fontSize: '12px',
                      fontWeight: 600
                    }}
                  >
                    POPULAR
                  </div>
                )}
                
                <div style={{ marginBottom: '24px' }}>
                  <Typography variant="h5" style={{ fontWeight: 700, color: '#000', marginBottom: '8px' }}>
                    {plan.name}
                  </Typography>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', marginBottom: '16px' }}>
                    <Typography variant="h3" style={{ fontWeight: 800, color: '#000', marginRight: '4px' }}>
                      {plan.price}
                    </Typography>
                    {plan.period && (
                      <Typography variant="body2" style={{ color: '#666', marginBottom: '4px' }}>
                        /{plan.period}
                      </Typography>
                    )}
                  </div>
                  <Typography variant="body2" style={{ color: '#666', marginBottom: '24px' }}>
                    {plan.description}
                  </Typography>
                </div>
                
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px', textAlign: 'left' }}>
                  {plan.features.map((feature, index) => (
                    <li key={index} style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: '#000', fontWeight: 600, marginRight: '8px' }}>✓</span>
                      <span style={{ color: '#666' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant={plan.featured ? "contained" : "outlined"}
                  style={{
                    backgroundColor: plan.featured ? '#000' : 'transparent',
                    color: plan.featured ? 'white' : '#000',
                    borderColor: plan.featured ? '#000' : '#000',
                    fontWeight: 600,
                    padding: '12px 24px',
                    width: '100%',
                    borderRadius: '12px',
                    textTransform: 'none',
                    fontSize: '16px'
                  }}
                >
                  {plan.cta}
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Paper style={{ padding: '56px', borderRadius: '20px', boxShadow: '0 12px 40px rgba(0,0,0,0.12)', marginBottom: '48px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <Typography variant="h4" style={{ fontWeight: 700, color: '#000', marginBottom: '16px' }}>
              Frequently Asked Questions
            </Typography>
            <Typography variant="body1" style={{ color: '#666' }}>
              Everything you need to know about our pricing
            </Typography>
          </div>
          
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h6" style={{ fontWeight: 600, color: '#000', marginBottom: '12px' }}>
                Do you offer custom plans?
              </Typography>
              <Typography variant="body2" style={{ color: '#666', marginBottom: '24px', lineHeight: 1.7 }}>
                Yes, we offer custom plans for businesses and high-volume users. Contact our sales team to discuss your specific needs and get a personalized quote.
              </Typography>
              
              <Typography variant="h6" style={{ fontWeight: 600, color: '#000', marginBottom: '12px' }}>
                Can I change my plan later?
              </Typography>
              <Typography variant="body2" style={{ color: '#666', lineHeight: 1.7 }}>
                Absolutely! You can upgrade, downgrade, or cancel your subscription at any time. Changes take effect immediately with prorated billing for the current period.
              </Typography>
            </Grid>
            
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h6" style={{ fontWeight: 600, color: '#000', marginBottom: '12px' }}>
                Are there any setup fees?
              </Typography>
              <Typography variant="body2" style={{ color: '#666', marginBottom: '24px', lineHeight: 1.7 }}>
                No, there are no setup fees for any of our plans. You only pay for the subscription itself, with no hidden charges or activation fees.
              </Typography>
              
              <Typography variant="h6" style={{ fontWeight: 600, color: '#000', marginBottom: '12px' }}>
                What payment methods do you accept?
              </Typography>
              <Typography variant="body2" style={{ color: '#666', lineHeight: 1.7 }}>
                We accept all major credit cards including Visa, Mastercard, American Express, and Discover. We also support PayPal and bank transfers for enterprise customers.
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        <div style={{ textAlign: 'center' }}>
          <Typography variant="h5" style={{ fontWeight: 600, color: '#000', marginBottom: '16px' }}>
            Still have questions?
          </Typography>
          <Typography variant="body1" style={{ color: '#666', marginBottom: '24px' }}>
            Our team is ready to help you find the perfect plan
          </Typography>
          <Button
            variant="contained"
            style={{
              backgroundColor: '#000',
              color: 'white',
              fontWeight: 600,
              padding: '14px 32px',
              borderRadius: '12px',
              textTransform: 'none',
              fontSize: '16px'
            }}
          >
            Contact Sales
          </Button>
        </div>
      </Container>
    </Box>
  );
}