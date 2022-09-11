import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Fade} from 'react-reveal';
import '../styles/cards.css'








export default function Cards(){
	return(
		<>
		<div className="card">
		<div className="card-featured">
     <Fade top>
			<h1>Feautured House</h1>
      </Fade>
		</div>
		<div className="cards-list">
    <Fade left>
	 <Card style={{ width: '20rem' }} className="card-container">
      <Card.Img variant="top" src="images/house-4.jpg" className="card-img" />
      <Card.Body className="card-body">
        <Card.Title card-title>Japanese Inspired Ranch Home</Card.Title>
        <Card.Text card-text>
         This Japanese inspired ranch home in Lake Creek is LEED® Gold certified.
		Huge brown three-story mixed siding exterior home idea in Denver with a shed roof - Houzz
        </Card.Text>
        <Button className="btn">Add to compare</Button>
      </Card.Body>
    </Card>
    </Fade>
    <Fade left>
    <Card style={{ width: '20rem' }} className="card-container">
      <Card.Img variant="top" src="images/house-5.webp" className="card-img" />
      <Card.Body className="card-body">
        <Card.Title className="card-title">Asian-Inspired in Wayzata</Card.Title>
        <Card.Text class="card-text">
          Jennifer Hedberg of Exquisite Interiors | Photography: Jim Kruger of Landmark Photography
         Example of a beige one-story mixed siding exterior home design in Minneapolis - Houzz
        </Card.Text>

        <Button className="btn">Add to compare</Button>
      </Card.Body>
    </Card>
    </Fade>
    <Fade left>
    <Card style={{ width: '20rem' }} className="card-container">
      <Card.Img variant="top" src="images/house-6.webp" className="card-img" />
      <Card.Body className="card-body">
        <Card.Title className="card-title">Hillside House with Japanese Influences</Card.Title>
        <Card.Text class="card-text">
           Kruger of Landmark Photography Example Inspiration for a small white two-story stucco exterior home remodel in Hawaii with a hip roof - Houzz
        </Card.Text>
        
        <Button className="btn">Add to compare</Button>
      </Card.Body>
    </Card>
   </Fade>
    </div>

    </div>
    
		</>
		)
}