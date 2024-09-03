
import { Dialog, DialogTitle, DialogContent, IconButton, Typography, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import parse from 'html-react-parser';
export const InfoModal = ({ open, handleClose, title, content }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="lg"
      PaperProps={{
        sx: {
          borderRadius: '8px',
          backgroundColor: 'white', // Light blue background
          padding: '0px',
          paddingTop:"0px"
        }
      }}
    >
      <DialogTitle sx={{background:"#117BA3",paddingBottom:"8px"}}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
            {title}
          </Typography>
          <IconButton sx={{color:"white"}}onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent sx={{marginTop:"26px",background:"white",color: '#117BA3', marginBottom: 2,fontSize:"19px",fontWeight:'400',lineHeight:'1.7em  ' }}>
       
          {parse(content)}
       
      </DialogContent>
    </Dialog>
  );
};