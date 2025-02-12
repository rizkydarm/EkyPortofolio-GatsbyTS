import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import FlutterIcon from '../svg/flutter';

const BasicCard = ({ title, description, link }: {
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <Card variant='outlined' sx={{ height: 280 }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        <div> 
          <Typography variant="h5" component="div" fontWeight={'bold'}>
            {title}
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {description}
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <FlutterIcon />
            <Typography variant="body2" component="div" fontWeight={'bold'}>
              Flutter
            </Typography>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Button href={`https://${link}`} target="_blank" rel="noopener noreferrer" variant='outlined'
            sx={{
              width: '48%',
              color: 'primary', fontWeight: 'bold'
            }}
          >
            Source Code
          </Button>
          <Button variant='outlined'
            sx={{
              width: '48%',
              color: 'primary', fontWeight: 'bold'
            }}
          >
            Images
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default BasicCard;