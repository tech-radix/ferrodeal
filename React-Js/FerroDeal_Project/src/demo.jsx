import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import FadeMenu from "./Hamburger";
import "./home.css"
import { Link } from 'react-router-dom';



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {

    imgPath:
      'https://raw.githubusercontent.com/sakshimawar117/img/master/availability2.jpg',
  },
  {

    imgPath:
      'https://raw.githubusercontent.com/sakshimawar117/img/master/qualityland2.jpg',
  },
  {

    imgPath:
      'https://raw.githubusercontent.com/sakshimawar117/img/master/materialland2.jpg',
  },

  {

    imgPath:
      'https://raw.githubusercontent.com/sakshimawar117/img/master/flexible.jpg',
  },
  {

    imgPath:
      'https://raw.githubusercontent.com/sakshimawar117/img/master/orderland.jpg',
  },

  {
   
    imgPath:
      'https://raw.githubusercontent.com/sakshimawar117/img/master/lowestland.jpg',
  },
  {

    imgPath:
      'https://raw.githubusercontent.com/sakshimawar117/img/master/nominland2.jpg',
  },
  {

    imgPath:
      'https://raw.githubusercontent.com/sakshimawar117/img/master/transporterland.jpg',
  },
  {

    imgPath:
      'https://raw.githubusercontent.com/sakshimawar117/img/master/nojoiningland.jpg',
  }
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
  <main>
      <div className="nav_bar">

        <nav>
        
        <div className='nav_image'>
          <div className='logo'></div>
        </div>
        <div class="menu">
        <li><Link to="/SwipeableTextMobileStepper">Home</Link></li>
          <li>Cart</li>
          <li>Order history</li>
          <li><Link to='/Contact'>Contact</Link></li>
        
          </div>
       
         <FadeMenu></FadeMenu>
     
     <li><i class='fas fa-sign-out-alt'></i></li>
          </nav>
      </div>
      <div className="deals"> Ferocious <b> Deals</b> </div>
      <center className="line_hr"><hr></hr><div className='box'></div><hr></hr></center>

      <Box sx={{ width: '100%',flexGrow: 1  }}  >

        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}

          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: "auto",
                    display: 'inline-block',
                    maxWidth: "100vw",
                    overflow: 'hidden',
                    width: '100%',
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: 0,
                    marginTop:0,


                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"



          activeStep={activeStep}
          nextButton={
            <Button

              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >

              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={

            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight


                />
              ) : (
                <KeyboardArrowLeft />
              )}

            </Button>
          }
        />
      </Box>

      <div className='product'>
     

        <div class="heading">Our <b>Services</b></div>
        <center className="line_hr"><hr></hr><div className='box'></div><hr></hr></center>

        <div className='block'>
          <span className='service_box_1'><Link to="/getquote"><div className='box_1'></div><h3>Get Quote </h3></Link></span>
          <span className='service_box_1'><Link to="/buy_sell_scrap"><div className='box_2'></div><h3> Buy/Sell Scrap </h3></Link></span>
          <span className='service_box_1'><Link to="/updloadstock"><div className='box_3'></div><h3>Upload Stock</h3></Link></span>
        </div>
        <div className='block_2'>
          <span className='service_box_1'><Link to="/updatedstock"><div className='box_4'></div><h3> Updated Stock </h3></Link></span>
        <span className='service_box_1'>  <Link to="/be_a_partner" ><div className='box_5'></div><h3> Be A Partner </h3></Link></span>

        </div>
      </div>


      <div className='market_news'>

        <div className='heading_2'> <h2>  MARKET <b>NEWS </b> </h2></div>

        <center className="line_hr"><hr></hr><div className='box'></div><hr></hr></center>
      </div>

      <div className='news'>
      
     

        <div className='news_block'>

          <img src='https://raw.githubusercontent.com/sakshimawar117/img/master/clearance-04.png'></img>
        <br></br>    
        <span className='news_text'>  Steel Price further Slashed</span> 
        </div>
        

        <div className='news_block_2'>
          <img src='https://raw.githubusercontent.com/sakshimawar117/img/master/jsw2.jpg'></img>
          <span className='news_text'>   SPOT benchmark iron Ore Prices in dollar/t CFR..</span> 
  
        </div>

        <div className='news_block_3'> 
        <img src='https://raw.githubusercontent.com/sakshimawar117/img/master/scrap2.jpg'></img>
        <span className='news_text'> Scrap prices</span> 
        </div>
    
      </div>

      <footer>
      <div className='first_side'>
      <div className='footer_image'> </div>
      <div className='address'><i class='fas fa-map-marker-alt'></i> Our Address : <span className='footer_text'>105, Rituraj Buisness Park, Bicholi Mardana Indore (MP)</span></div>
      <div className='mail'> <i class="fa fa-envelope"></i>Mail us at : <span className='footer_text'>support@ferrodeal.com</span></div>
      <div className='contact'><i class="fa fa-phone"></i> Contact number : <span className='footer_text'>+91 9685642619  </span></div>
     

      </div>
</footer>
</main>
    </>
  );
}

export default SwipeableTextMobileStepper;
