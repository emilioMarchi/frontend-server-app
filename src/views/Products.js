import React, {useEffect, useState} from 'react'
import axios from 'axios'

import Card from '../components/Card'

export default function Products() {

    const [db, setDb] = useState()

    const getData = async () => {

        const email = sessionStorage.getItem('email')
        
        if(email===null){
            alert('no acces')
            console.log(email)
        } else {
            await axios({
                method: 'GET',
                url:`http://localhost:8080/products`,
                params: {'email':`${email}`}
              })
              .then((res)=>{
                  const data = res.data
                  setDb({db:data.db})
                  console.log(res.data.db)
                })
        }

    }

    useEffect(()=>{
        getData()
    }, [])
    return(
        <div className='products-content'>
            <h1>Productos</h1>
            <div className='products-list'>
                {   db != undefined ? 
                    db.db.map((item) => {
                        return(
                            <Card title={item.title} description={item.description} title={item.price}/>
                        )
                    }) : <h2>No products</h2>
                }
            </div>
        </div>
    )
}

