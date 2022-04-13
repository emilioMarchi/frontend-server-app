import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Card from '../components/Card'

export default function Cart(){

    const email = sessionStorage.getItem('email')
    const [userCart, setUserCart] = useState([])

    useEffect(()=>{
        getUser()
    }, [])
    const getUser = async () => {
        await axios({
            method: 'GET',
            url:`http://localhost:8080/cart`,
            params: {'email':`${email}`}
          })
          .then((res)=>{
                const data = res.data.user
                
                if(data.cart.length > 0){
                    setUserCart(data.cart )
                } else {
                    console.log('error')
                }

            })
        }

    return(
        <div>
            {   userCart.length > 0 ?
                userCart.map((item) => {
                    return(
                        <Card title={item.title} />
                    )
                }) : ''
            }
        </div>
    )
}
    