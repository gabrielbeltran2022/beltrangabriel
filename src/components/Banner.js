import Carousel from 'react-bootstrap/Carousel'
import '../styles/banner.css'
import {Reveal} from 'react-reveal';
export default function Banner(){

	return(

		<>

	<Carousel fade>
    <Carousel.Item>
        <img
          className="img-banner d-block w-100"
          src="images/house-1.jpg"
          alt="Second slide"
        />
        
         <Carousel.Caption>
         <div className="banner-text">
          <Reveal effect="fadeInUp">
          <h3>INVEST IN YOUR FUTURE</h3>
          <p>Find your next home in Metro Manila through the most trusted and reliable real estate advisors.</p>
          </Reveal>
          </div>    
        </Carousel.Caption>

 
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="img-banner d-block w-100"
          src="images/house-2.jpg"
          alt="Second slide"
        />
         <Carousel.Caption>
         <div className="banner-text">
         <Reveal effect="fadeInUp">
          <h3>INVEST IN YOUR FUTURE</h3>
          <p>Find your next home in Metro Manila through the most trusted and reliable real estate advisors.</p>
          </Reveal>
          </div>
        </Carousel.Caption>

 
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-banner d-block w-100"
          src="images/house-3.jpg"
          alt="Third slide"
        />
         <Carousel.Caption>
         <div className="banner-text">
          <h3>INVEST IN YOUR FUTURE</h3>
          <p>Find your next home in Metro Manila through the most trusted and reliable real estate advisors.</p>
          </div>
        </Carousel.Caption>

  
      </Carousel.Item>
    </Carousel>
     		
		</>

		)
}