import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Fade} from 'react-reveal';
import '../styles/mid.css'





export default function Mid(){
	return(
		  <>
      <Fade right>
      <div className="banner">
        <div className="mid-banner">
      <Card.Img variant="top" src="images/house-banner.jpg" className="banner-img"/>
        </div>
      </div>
      </Fade>
      </>
   

		)
}