
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Card } from 'react-bootstrap';

function App() {
  const Products=[
    {
      image:"http://dummy.tcdw.org/medrect",
      name:"Fancy Product",
      rating:"",
      price:"$40.00 - $80.00"
    },
    {
      image:"http://dummy.tcdw.org/medrect",
      name:"Special Item",
      rating:"⭐⭐⭐⭐⭐",
      price:"$20.00 $18.00"
    },
    {
      image:"http://dummy.tcdw.org/medrect",
      name:"Sale Item",
      rating:"",
      price:"$50.00 $25.00"
    },
    {
      image:"http://dummy.tcdw.org/medrect",
      name:"Popular Item",
      rating:"⭐⭐⭐⭐⭐",
      price:"$40.00"
    },
    {
      image:"http://dummy.tcdw.org/medrect",
      name:"Sale Item",
      rating:"",
      price:"$50.00 $25.00"
    },
    {
      image:"http://dummy.tcdw.org/medrect",
      name:"Fancy Product",
      rating:"",
      price:"$120.00 - $280.00"
    },
    {
      image:"http://dummy.tcdw.org/medrect",
      name:"Special Item",
      rating:"⭐⭐⭐⭐⭐",
      price:"$20.00 $18.00"
    },
    {
      image:"http://dummy.tcdw.org/medrect",
      name:"Popular Item",
      rating:"⭐⭐⭐⭐⭐",
      price:"$40.00"
    },
  ]
  return (
    <div className="App">
     <Navbar /> 
     <Header />
     <section className="product-list">
       {Products.map((pr)=>(
       <Main 
       image={pr.image}  
       name={pr.name}
       rating={pr.rating}
       price={pr.price}
       />))
}
       
    </section>
    <Footer />
     
    </div>
  );
}
function Navbar(){
  return(
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="#!">start Bootstrap</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#!">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">About</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#!" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              shop
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li><a className="dropdown-item" href="#!">All Products</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#!">Popular items</a></li>
              
              <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
            </ul>
          </li>
          
        </ul>
       <form className="d-flex">
          
          <button className="btn btn-outline-dark" type="submit"><i className="bi bi-cart-fill"></i> cart <span className="badge bg-dark rounded-pill">0</span></button>
        </form> 
      </div>
    </div>
  </nav>
  </div>
  );
}


function Header() {
  return (
    <div>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4  fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}


function Footer() {
  return (
    <div>
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Your Website 2021
          </p>
        </div>
      </footer>
    </div>
  );
}


function Main({image,name,rating,price}){
  return(
    <Card style={{ width: '18rem' }} className="main-container">
      <Card.Img
      variant="top"
      src={image} 
      alt={name}
      />
      <Card.Body>
      
      <Card.Title>{name}</Card.Title>
      <Card.Text>{rating}</Card.Text>
      <Card.Text>{price}</Card.Text>
      <Button variant="outline-dark">Add Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default App;
