import { useState } from 'react';
import { bandList } from './Data.tsx';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import './index.css';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const hasNext = index < bandList.length - 1;
  const hasPrev = index > 0;

  function handleNextClick() {
    setIndex(hasNext ? index + 1 : 0);
  }

  function handlePrevClick() {
    setIndex(hasPrev ? index - 1 : bandList.length - 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  const band = bandList[index];

  return (
    <Box 
      sx={{
        width: '400px',
        margin: 'auto',
        padding: '20px',
        textAlign: 'center',
        borderRadius: '10px',
        boxShadow: 3,
        bgcolor: 'white'
      }}
    >
      <Typography variant="h4" fontWeight="bold">PH BANDS</Typography>
      <Typography variant="h5" >SHERWIN SANTOS - CPEITEL 3</Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
      <Button variant="contained" color="error" onClick={handlePrevClick} disabled={!hasPrev}>
          Back
      </Button>
      <Button variant="contained" color="error" onClick={handleNextClick}>
           Next
      </Button>

      </Box>

      <Typography variant="h5" sx={{ mt: 2 }}>{band.name}</Typography>
      <Typography variant="subtitle1">({index + 1} of {bandList.length})</Typography>

      <IconButton onClick={handleMoreClick} sx={{ mt: 1 }}>
        {showMore ? <ExpandLess /> : <ExpandMore />}
      </IconButton>

      {showMore && (
        <Typography variant="body1" sx={{ mt: 1, px: 2 }}>
          {band.description}
        </Typography>
      )}

      <Box sx={{ mt: 2 }}>
        <img 
          className="band"
          src={band.url} 
          alt={`Image of ${band.name}`} 
          style={{ width: '100%', borderRadius: '10px' }}
        />
      </Box>
    </Box>
  );
}
