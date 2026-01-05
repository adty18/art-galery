import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: 1100,
  maxHeight: '85vh',
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 0,
  overflow: 'hidden',
  display: 'flex',
};

interface Artwork {
  image: string;
  title: string;
  description: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
  artwork?: Artwork | null;
}

export default function ArtworkModal({ open, onClose, artwork }: Props) {
  return (
    <Modal
      keepMounted
      open={open}
      onClose={onClose}
      aria-labelledby="artwork-modal-title"
      aria-describedby="artwork-modal-description"
    >
      <Box sx={style}>
        {artwork ? (
          <>
            {/* Left: image (60%) */}
            <Box sx={{ width: '60%', minWidth: 300, backgroundColor: '#000' }}>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${artwork.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  aspectRatio: '4/3',
                  borderRadius: '8px',
                }}
              />
            </Box>

            {/* Right: details (40%) */}
            <Box sx={{ width: '40%', p: 3, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <Typography id="artwork-modal-title" variant="h5" component="h2">
                  {artwork.title}
                </Typography>
                <Button onClick={onClose} variant="outlined" size="small">Close</Button>
              </div>

              <Typography id="artwork-modal-description" sx={{ mt: 1 }}>
                {artwork.description}
              </Typography>

              {/* Additional space for future metadata */}
              <div style={{ marginTop: 'auto' }}>
                {/* placeholder - artist, year, dimensions could go here */}
              </div>
            </Box>
          </>
        ) : (
          <Box sx={{ p: 4 }}>
            <Typography id="artwork-modal-empty">No artwork selected</Typography>
            <Button onClick={onClose} sx={{ mt: 2 }}>Close</Button>
          </Box>
        )}
      </Box>
    </Modal>
  );
}
