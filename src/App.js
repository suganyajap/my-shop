
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './Navbar';
import { Header } from './Header';
import { Footer } from './Footer';
import { Main } from './Main';

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
export default App;
