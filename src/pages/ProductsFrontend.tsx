import React, {useEffect, useState} from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Products from "./Products";
import axios from "axios";

const ProductsFrontend = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get("/products/frontend");
                setProducts(data);
            }
        )
        ();
    }, []);

    return (
        <Layout><Products products={products}/></Layout>
    );

};

export default ProductsFrontend;
