import React from 'react'
import "./details.css"
import { selectedProducts, removeSelectedProducts } from "../Components/redux/action/ProductActions"
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import  { useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

const ProductDetails = () => {
     const product = useSelector((state)  => state.product);
     const {image, title, price, category, description} = product;
     const { productId } = useParams();
     const dispatch = useDispatch()
     console.log("productId");

    const fetchProductDetails = async ()  => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
            console.log("Err ", err);
        });
        dispatch(selectedProducts(response.data));
    };
    useEffect(() => {
        if(productId && productId !== "") fetchProductDetails();
            return () => {
                dispatch(removeSelectedProducts());
            };
    }, [productId]);

  return(
    <div className="ui grid container holder">
    {Object.keys(product).length === 0 ? (
        <div>....loading</div>
    ) : (
    <div className="ul placeholder segment seg">
        <div className="ui two column stakeable center aligned grid">
        <div className="ui vertical divider">AND</div>
        <div className="middle aligned row flexer">
            <div className="column lp productImg">
                <img className="ul fluid image" src={image}/>
            </div>
            <div className="column rp">
                <h1>{title}</h1>
                <h2>
                    <a className="ui teal tag label">${price}</a>
                    </h2>
                    <h3 className="ui brown block header">{category}</h3>
                    <p className="desc">{description}</p>
                    <div className="ui vertical animated button" tabIndex="0">
                    <div className="all">
                        <div className=" hidden content">
                            <i className="shop icon"></i>
                        </div>
                        <div className="visible content">Add to Cart</div>
                    </div>
                    </div>
            </div>
        </div>
        </div>
    </div>
    )}
   </div>
  )
}

export default ProductDetails;