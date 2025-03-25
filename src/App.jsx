import { useEffect, useState } from 'react'

import './App.css'
import '@fontsource/roboto'; // Defaults to weight 400
import { Card, Typography } from '@mui/material';
import MultiActionAreaCard from './Components/Card';

function App() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [product, setProduct] = useState(null)

  // const url = 'https://fakestoreapi.com/products';
  
  // useEffect(() => {
  //   const products = async () => {
  //     try {
  //       const response = await fetch(url);
  //     const data = await response.json();
  //     setProduct(data)
  //     }
  //     catch (error) {
  //       setError(error)
  //       console.log(error);
        
  //     }
  //     finally {
  //       setLoading(false)
        
  //     }
  //   }

  //   products()
  // }, [])

 

  return (
    <>
     {/* <Typography variant="h1" align='center'> Hello World</Typography>
     {loading && <p>Loading...</p>}
     {error && <p>{error}</p>}
     <div className='main'>
     {
      product && product.map((item,index) => {
        return (
        
            <MultiActionAreaCard key={index} title={item.title} image={item.image} description={item.description} price={item.price} />
           
         
        )
      })
     }
     </div> */}

    </>
  )
}


export default App
