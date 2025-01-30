import { useEffect,useState } from "react";
import Footer from "./footer";
import axios from "axios";
import ReactLoading from 'react-loading';
import { useParams } from "react-router-dom";

function ProductDetail() {
  
 const {id} = useParams()

  const[product ,setProduct] =useState([]);
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=> {
      setProduct(res.data);
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    })
  },[])
  return (
  <div>
    <header className="bg-primary text-white text-center py-3">
      <h1>Product Details</h1>
    </header>
    <div className="container my-4">
{ product.length != 0 ? (<div className="row productdetail-container">
    <div class="col-sm-6 product-image-container">
                    <img src={product?.image} alt=""/>
                </div>
                <div className="col-sm-6">
                    <h2>{product?.title}</h2>
                    <p className="text-muted">{product?.category}</p>
                    <p>{product?.description}</p>
                    <h3 class="text-primary">${product?.price}</h3>
                    <button class="btn btn-success">Buy Now</button>
                    </div>
                </div>):(<div className='d-flex justify-content-center align-items-center loading-container'><ReactLoading type={'spin'} color={`fff`} height={100} width={100} /></div>)}
    
                </div>
                <Footer/>
                </div>
                
  );
}

export default ProductDetail;


