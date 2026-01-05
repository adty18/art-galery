import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


interface Props {
  image: string;
  title: string;
  description: string;
  onClick?: () => void;
  aspect?: string; // e.g. '4/3', '3/2', '1/1'
}

function ArtworkCard({ image, title, description, onClick, aspect = '2/3' }: Props) {
  return (
    <div className='p-2 container mx-center'>
      <div className='group'>
        <Card sx={{ maxWidth: 500, position: 'relative', overflow: 'hidden' }}>
          <CardActionArea onClick={onClick}>
            {/* Media with fixed aspect-ratio so image behaves like a canvas */}
            <div
              role="img"
              aria-label={title}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                aspectRatio: aspect,
                width: '100%',
                transition: 'transform 0.5s',
                borderRadius: '6px',
              }}
              className='group-hover:scale-105'
            />

            {/* Overlay: hidden by default, appears on hover */}
              <div className='absolute inset-0 flex items-end'>
              <div className='w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                <Typography gutterBottom variant="h6" component="div" className='text-white'>
                  {title}
                </Typography>
                <Typography variant="body2" className='text-white'>
                  {description}
                </Typography>
              </div>
            </div>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}

export default ArtworkCard;