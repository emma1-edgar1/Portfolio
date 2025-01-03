import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Container, Button, Chip, CardMedia } from '@mui/material';
import { cardData } from '../data/cardData';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function CardPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the card data based on the ID
  const card = cardData.find(card => card.id === id);

  // Handle if card is not found
  if (!card) {
    return (
      <Container sx={{ pt: 8 }}>
        <Typography variant="h4">Project not found</Typography>
        <Button 
          startIcon={<ArrowBackIcon />} 
          onClick={() => navigate('/')}
          sx={{ mt: 2 }}
        >
          Back to Home
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 8 } }}>
      <Button 
        startIcon={<ArrowBackIcon />} 
        onClick={() => navigate('/')}
        sx={{ 
          mb: 4,
          color: '#FBFEF9'
        }}
      >
        Back to Projects
      </Button>

      <Box sx={{ 
        bgcolor: cardBgcolor,
        borderRadius: 2,
        p: 4,
        color: '#FBFEF9',
        boxShadow: '12px 12px 0px rgba(15, 5, 41, 0.3)'
      }}>
        <Typography variant="overline" display="block" sx={{ mb: 2 }}>
          Project ID: {id}
        </Typography>

        <Typography variant="h3" component="h1" gutterBottom>
          {card.title}
        </Typography>

        <CardMedia
          component="img"
          image={card.image}
          alt={card.title}
          sx={{
            height: 300,
            objectFit: 'contain',
            bgcolor: '#fff',
            borderRadius: 1,
            mb: 4
          }}
        />

        <Typography variant="body1">
          {card.fullDescription || card.description}
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Technologies Used:
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {card.technologies.map((tech, index) => (
              <Chip 
                key={index} 
                label={tech} 
                sx={{ 
                  bgcolor: primaryColor,
                  color: '#FBFEF9'
                }} 
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default CardPage; 