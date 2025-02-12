import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Grid2, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import FlutterIcon from '../svg/flutter';
import AppleIcon from '../svg/apple';
import AndroidIcon from '../svg/android';

const emails = ['Add account', 'Profile', 'Logout'];

interface SimpleDialogProps {
  open: boolean;
  handleClose: () => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { handleClose, open } = props;

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <Dialog open={open}
      onClose={handleClose}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      maxWidth="xl" 
      fullWidth
      >
      <DialogTitle id="scroll-dialog-title">Images</DialogTitle>
      <DialogContent dividers>
        <Grid2 container id="scroll-dialog-description"
        rowSpacing={2} columnSpacing={2}
          style={{ overflowY: 'auto' }}>
          {Array.from({ length: 10 }).map((_, index) => (
            <Grid2 size={12/5} key={index}>
              <Box
                sx={{
                  height: 400,
                  backgroundColor: 'red',
                  display: 'block',
                  margin: 'auto'
                }}
              />
            </Grid2>
          ))}
        </Grid2>
      </DialogContent>
      <DialogActions>
        <Button style={{ fontWeight: 'bold', color: 'black' }} onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}


const BasicCard = ({ title, description, link }: {
  title: string;
  description: string;
  link: string;
}) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            <FlutterIcon width={40} height={40} />
            <AppleIcon width={40} height={40} />
            <AndroidIcon width={40} height={40} />
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
          <Button
            variant='outlined'
            sx={{
              width: '48%',
              color: 'primary',
              fontWeight: 'bold'
            }}
            onClick={() => handleClickOpen()}
          >
            Images
          </Button>
          <SimpleDialog
            open={open}
            handleClose={handleClose}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default BasicCard;