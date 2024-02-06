import './App.css';
import MovieList from './MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './Filter';
import movies from "./Movies";
import { Fragment, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { Routes,Route, Link } from 'react-router-dom';
import Details from './Details';


function App() {
  const   [data,setData]=useState(movies)
 
  function add (newtitle,newdescription,newrating){
    setData([...data,{title:newtitle,description:newdescription,rating:newrating}])
}

function search(srch){

  setData(data.filter(el=>el.title.toLowerCase().includes(srch.toLowerCase())))
   
}
const [searchrating, setRating] = useState(0)

    // Catch Rating value
    const handleRating = (rate) => {
      console.log('object')
      setRating(rate)
      setData(data.filter(el=>el.rating>=searchrating))
   }
    
  return (
    
   
      
    
      <Routes>
         <Route path="/" exact element={
             <>
                  <Link to={'/add'}    > <button className='ziw'>click here to add a new movie</button></Link>  
                  <div className="hij"> Filter</div>
                  <label>Filter by Title:</label>
                  <input type="text" onChange={(e)=>search(e.target.value)}/>
                  <Rating className='rate'   iconsCount={5}   onClick={handleRating} />
                   <MovieList data={data}/>
           </>}/>
         <Route path="/add" exact element={<>  <Filter add={add} /><Link to={'/'} > 
                  <button className='glow-on-hover'>Return</button></Link> </>} />
        
        <Route path='/details/:id'   element={<Details  data={data}  />}   ></Route>

         </Routes>
     
         

    
  );
}


export default App;