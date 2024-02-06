import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';



function MovieCard({data}) {
  const  {title,description,posterUrl,rating,trailerSrc,id }=data 
  return (
    
    <Card className='boubaker'>
      <Card.Img variant="top" src={posterUrl}   style={{height:'200px'}} />
      <Card.Body>
        <Card.Title> {title}</Card.Title>
        
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush"  >
        
        
        <Rating readonly={true} iconsCount={5} initialValue={rating}/>
        
        
      </ListGroup>
      <Card.Body>
            <Link  to={`/details/${id}`}  ><button>details</button> </Link>   
      </Card.Body>
    </Card>
    
    
  );
}


export default MovieCard;