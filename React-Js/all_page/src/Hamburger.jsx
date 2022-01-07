import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import {Link} from 'react-router-dom';


export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
  
      <Button
    
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       
       <i class="fa fa-bars" ></i>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <div className='top_bar'></div>
        <MenuItem onClick={handleClose}><Link to="/home"><div className='home'><i class="fa fa-home"></i> Home</div></Link></MenuItem><br></br>
        <MenuItem onClick={handleClose}><i class="fa fa-user-circle"></i> Update Profile</MenuItem><br></br>
        <MenuItem onClick={handleClose}><i class="fa fa-history"></i>Inquiry history </MenuItem><br></br>
        <MenuItem onClick={handleClose}><i class="fa fa-list-alt"></i> order history</MenuItem><br></br>
        <MenuItem onClick={handleClose}> <i class="fa fa-credit-card"></i>Avail credit facilities</MenuItem><br></br>
        <MenuItem onClick={handleClose}> <Link to="/contact"><div className='contact_us'><i class='fas fa-address-book'></i>Contact Us </div></Link></MenuItem><br></br>
        <hr className="line"></hr>
        <MenuItem onClick={handleClose}><i class="fa fa-star"></i>Rate App</MenuItem><br></br>
        <MenuItem onClick={handleClose}><i class="fa fa-share-alt"></i>Share with others</MenuItem><br></br>
        <MenuItem onClick={handleClose}><i class="fa fa-edit"></i>Feedback</MenuItem><br></br>
        <MenuItem onClick={handleClose}><i class='fas fa-sign-out-alt'></i>logout</MenuItem>
       
      </Menu>
    </div>
  );
}
