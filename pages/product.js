
export async function getStaticProps() {
    const data = [
        {
            id: 1,
            product_name: 'Laptop',
            product_code: 'Laptop110',
            product_icon: '/laptop.svg',
            product_price: '10,000',
            product_category: 'Laptop',
            product_remarks: 'Asus',

        },
        {
            id: 4,
            product_name: 'Laptop',
            product_code: 'Laptop110',
            product_icon: '/laptop.svg',
            product_price: '10,000',
            product_category: 'Laptop',
            product_remarks: 'Asus',
        },
        {
            id: 6,
            product_name: 'Laptop',
            product_code: 'Laptop110',
            product_icon: '/laptop.svg',
            product_price: '10,000',
            product_category: 'Laptop',
            product_remarks: 'Asus',
        },
        {
            id: 10,
            product_name: 'Laptop',
            product_code: 'Laptop110',
            product_icon: '/laptop.svg',
            product_price: '10,000',
            product_category: 'Laptop',
            product_remarks: 'Asus',
        },

    ]

    return {
        props:{
            dataTable:data,
        }
    }


}


import React, { Component } from 'react';
import NavMenuDesktop from '../components/NavMenuDesktop';
// import ProductList from '../components/ProductList';

class product extends Component {
    render() {
        return (
            <div>
                <NavMenuDesktop/>
                
            </div>
        );
    }
}

export default product;