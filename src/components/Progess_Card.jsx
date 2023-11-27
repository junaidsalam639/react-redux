import * as React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';

const card = (
  <React.Fragment>
    <CardContent>
      <Typography className='fw-normal' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Revenue
      </Typography>
      <Typography variant="h5" className='fw-bold' component="div">
        $2400,50
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function Progress_Card() {
  return (
    <>
      <Box
        sx={{
          minWidth: 275,
          borderRadius: '5px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
        }}
      >
        <CardMedia
          sx={{ height: 140 , borderRadius: 1 }}
          image="https://pngimg.com/d/credit_card_PNG70.png"
          title="green iguana"
        />
        <Card>{card}
          <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
            <LinearProgress color="secondary" sx={{ height: '10px', padding: '8px' }} />
            <LinearProgress color="success" sx={{ height: '10px', padding: '8px' }} />
            <LinearProgress color="inherit" sx={{ height: '10px', padding: '8px' }} />
          </Stack>
        </Card>
      </Box>
    </>
  );
}
