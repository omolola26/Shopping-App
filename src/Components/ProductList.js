import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../Components/redux/action/ProductActions"
const ProductList = () =>{
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

const fetchProduct = async () => {
    const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
        console.log("Err", err);
    });
    dispatch(setProducts(response.data));
};

    useEffect(() =>{
fetchProduct();
    }, []);
    console.log("Products: ", products);
return (
    <div className="ui grid container product-list">
<ProductComponent />
    </div>
);
}

export default ProductList;