'use client'

import { Box, Container, Typography, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

export default function HelpPage() {
  const helpTopics = [
    {
      question: "How do I find a professional?",
      answer: "Use our search tool to find professionals in your area. Enter your location and the type of service you need, then browse profiles, reviews, and pricing to choose the right professional for your project."
    },
    {
      question: "How do I book a service?",
      answer: "Once you've found a professional you trust, click the 'Book Now' button on their profile. Select your preferred date and time, provide project details, and confirm your booking."
    },
    {
      question: "What if I need to cancel a booking?",
      answer: "You can cancel a booking through your account dashboard up to 24 hours before the scheduled service time. Cancellations made less than 24 hours before the appointment may be subject to fees."
    },
    {
      question: "How are professionals verified?",
      answer: "All professionals on our platform undergo a rigorous verification process including background checks, license verification, insurance verification, and quality assessments."
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "We stand behind the quality of our professionals. If you're not satisfied, please contact our support team within 48 hours of the service completion for assistance."
    },
    {
      question: "How do I become a professional on Joint?",
      answer: "Visit our 'Become a Professional' page and fill out the application form. Our team will review your credentials and contact you with next steps."
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
      <Container maxWidth="md">
        <Paper style={{ padding: '56px', borderRadius: '20px', boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Typography variant="h2" style={{ fontWeight: 700, marginBottom: '16px', color: '#000' }}>
              Help Center
            </Typography>
            <Typography variant="h5" style={{ color: '#666', marginBottom: '8px' }}>
              How can we help you today?
            </Typography>
            <Typography variant="body1" style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Find answers to common questions about using the Joint platform
            </Typography>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <div style={{ position: 'relative', marginBottom: '24px' }}>
              <input 
                type="text" 
                placeholder="Search for help topics..." 
                style={{ 
                  width: '100%', 
                  padding: '16px 24px', 
                  border: '1px solid #ddd', 
                  borderRadius: '12px',
                  fontSize: '16px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }} 
              />
            </div>
          </div>

          <div>
            {helpTopics.map((item, index) => (
              <Accordion 
                key={index} 
                style={{ 
                  marginBottom: '16px', 
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  border: '1px solid #eee'
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore style={{ color: '#000' }} />}
                  style={{ padding: '0 24px' }}
                >
                  <Typography style={{ fontWeight: 600, color: '#000' }}>
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails style={{ padding: '0 24px 24px' }}>
                  <Typography style={{ color: '#666', lineHeight: 1.7 }}>
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Typography variant="body1" style={{ color: '#666', marginBottom: '20px' }}>
              Still need help? Our support team is ready to assist you.
            </Typography>
            <button 
              style={{ 
                backgroundColor: '#000', 
                color: 'white', 
                border: 'none', 
                padding: '14px 32px', 
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              Contact Support
            </button>
          </div>
        </Paper>
      </Container>
    </Box>
  );
}