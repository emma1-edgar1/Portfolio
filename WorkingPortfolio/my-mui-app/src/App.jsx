import { AppBar, Toolbar, Typography, Button, Box, CssBaseline, Card, CardContent, CardMedia, Container } from '@mui/material';
import { useState } from 'react';
import dogImage from './assets/dog.svg';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import CardPage from './pages/CardPage';
import { cardData } from './data/cardData';

// Color constants
const darkBgcolor = '#5659E5';
const lightBgcolor = '#FFBFB5';
const primaryColor = '#3E4AEC';
const secondaryColor = '#8E7AD5';
const cardBgcolor = '#7338A0';

function App() {
  const navigate = useNavigate();
  // Track which cards have been hovered for one-time animation
  const [hoveredCards, setHoveredCards] = useState(new Set());
  // Track current hover state for blur effect
  const [currentHover, setCurrentHover] = useState(null);

  // Handle first-time hover animation for each card
  const handleFirstHover = (index) => {
    if (!hoveredCards.has(index)) {
      setHoveredCards(prev => new Set([...prev, index]));
    }
  };

  // Handle card click
  const handleCardClick = (cardId) => {
    navigate(`/project/${cardId}`);
  };

  return (
    <>
      {/* Reset default CSS */}
      <CssBaseline />
      
      {/* Main container with soft white background */}
      <Box sx={{ 
        width: '100%', 
        margin: 0, 
        padding: 0, 
        minHeight: '100vh',
        background: `linear-gradient(180deg, ${darkBgcolor} 0%, ${lightBgcolor} 100%)`, // Dark to light gradient
        overflow: 'hidden'
      }}>
        {/* Navigation bar */}
        <AppBar 
          position="static" 
          sx={{ 
            bgcolor: '#4A2574', // Dark purple nav
            boxShadow: 0,
            width: '100%',
            position: 'absolute',
            left: 0,
            right: 0,
          }}
        >
          <Toolbar>
            {/* Left-aligned button */}
            <Button 
              color="inherit" 
              sx={{ 
                textTransform: 'none',
                '&:hover': {
                  color: '#9E72C3' // Light purple hover
                }
              }}
            >
              Lorem
            </Button>
            <Box sx={{ flexGrow: 1 }} /> {/* Spacer */}
            {/* Right-aligned link */}
            <Typography 
              component="a" 
              href="#" 
              sx={{ 
                color: '#9E72C3', // Light purple text
                textDecoration: 'none',
                '&:hover': {
                  color: '#924DBF', // Medium purple hover
                  textDecoration: 'underline'
                }
              }}
            >
              ipsum
            </Typography>
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={
            <>
              {/* Cards Section */}
              <Container maxWidth={false} sx={{ py: 8, mt: 8, px: { xs: 2, sm: 3 } }}>
                <Box sx={{ 
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 4,
                  px: 30
                }}>
                  {cardData.map((card, index) => (
                    <Box 
                      key={card.id}
                      onClick={() => handleCardClick(card.id)}
                      sx={{
                        flexGrow: 1,
                        flexBasis: {
                          xs: '100%',
                          sm: 'calc(50% - 16px)',
                          md: 'calc(25% - 16px)'
                        },
                        cursor: 'pointer'
                      }}
                      onMouseEnter={() => {
                        handleFirstHover(index);
                        setCurrentHover(index);
                      }}
                      onMouseLeave={() => setCurrentHover(null)}
                    >
                      {/* Card with hover animations and color styling */}
                      <Card sx={{ 
                        height: '100%', 
                        p: 2,
                        display: 'flex', 
                        flexDirection: 'column',
                        bgcolor: cardBgcolor,
                        color: '#FBFEF9', // White text
                        boxShadow: '12px 12px 0px rgba(0, 0, 0, 0.15)',
                        overflow: 'hidden',
                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.02)', 
                          boxShadow: '15px 15px 0px rgba(0, 0, 0, 0.2)'
                        }
                      }}>
                        {/* Image with slide-in and blur effects */}
                        <CardMedia
                          component="img"
                          image={card.image}
                          alt={card.title}
                          sx={{
                            p: 2,
                            bgcolor: '#fff',
                            transform: hoveredCards.has(index) ? 'translateX(0)' : 'translateX(100%)', // Slide in from right
                            transition: 'all 0.5s ease-out',
                            // filter: currentHover === index ? 'blur(0)' : 'blur(5px)', // Blur effect
                            '@media (prefers-reduced-motion: reduce)': {
                              transition: 'none'
                            }
                          }}
                        />
                        {/* Card content with conditional text colors */}
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2" sx={{ 
                            color: cardBgcolor === '#E9C46A' ? '#264653' : '#fff' // Dark text on yellow
                          }}>
                            {card.title}
                          </Typography>
                          <Typography sx={{ 
                            color: cardBgcolor === '#E9C46A' ? '#264653' : '#fff'
                          }}>
                            {card.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  ))}
                </Box>
              </Container>

              {/* Projects Section */}
              <Container maxWidth={false} sx={{ py: 8, px: { xs: 2, sm: 3 } }}>
                <Typography 
                  variant="h2" 
                  component="h2" 
                  sx={{ 
                    color: '#FBFEF9', // Changed to white for better contrast
                    mb: 4,
                    px: 20,
                    fontWeight: 'bold'
                  }}
                >
                  Projects
                </Typography>

                {/* Project cards container */}
                <Box sx={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                  px: 20
                }}>

                  {/* Individual project cards with consistent styling */}
                  <Card sx={{ 
                    bgcolor: cardBgcolor,
                    color: '#FBFEF9',
                    boxShadow: '12px 12px 0px rgba(15, 5, 41, 0.3)' // Darker shadow
                  }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h3" sx={{ color: '#FBFEF9' }}>
                        Lorem Ipsum Project
                      </Typography>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ 
                    bgcolor: cardBgcolor,
                    color: '#FBFEF9',
                    boxShadow: '12px 12px 0px rgba(15, 5, 41, 0.3)' // Darker shadow
                  }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h3" sx={{ color: '#FBFEF9' }}>
                        Dolor Sit Project
                      </Typography>
                      <Typography>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Container>
            </>
          } />
          <Route path="/project/:id" element={<CardPage />} />
        </Routes>
      </Box>
    </>
  );
}

// Wrap the App component with Router
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper; 