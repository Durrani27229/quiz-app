// import { useEffect, useState } from 'react'

// import './App.css'
// import '@fontsource/roboto'; // Defaults to weight 400
// import { Card, Typography } from '@mui/material';
// import MultiActionAreaCard from './Components/Card';

// function App() {
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)
//   const [product, setProduct] = useState(null)

//   const url = 'https://fakestoreapi.com/products';
  
//   useEffect(() => {
//     const products = async () => {
//       try {
//         const response = await fetch(url);
//       const data = await response.json();
//       setProduct(data)
//       }
//       catch (error) {
//         setError(true)
//         console.log(error);
        
//       }
//       finally {
//         setLoading(false)
//         console.log(loading);
        
//       }
//     }

//     products()
//   }, [])

 

//   return (
//     <>
//      <Typography variant="h1" align='center'> Card Using Material Ui</Typography>
//      {loading && <p>Loading...</p>}
//      {error && <p>{error}</p>}
//      <div className='main'>
//      {
//       product && product.map((item,index) => {
//         return (
        
//             <MultiActionAreaCard key={index} title={item.title} image={item.image} description={item.description} price={item.price} />
           
         
//         )
//       })
//      }
//      </div>

//     </>
//   )
// }


// export default App


import { useEffect, useState , useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import { Box, Button, Typography } from '@mui/material'

function App() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [questions, setQuestions] = useState(null)
  const [index, setIndex] = useState(0)
  const [result, setresult] = useState(0)

  const url = 'https://the-trivia-api.com/v2/questions';

  useEffect(() => {
    const quiz = async () => {
      try{
        const response = await fetch(url);
      const data = await response.json();
      setQuestions(data)
      
      }
      catch(error){
        setError(true)
        // console.log(error);
        
      }
      finally{
        setLoading(false)
        // console.log(loading);
        
      }
      
      
    }

    quiz()
  },[])

  const input = useRef([]);
  const nextQuestion = () => {

    const selectedOption = input.current.find(item => item && item.checked);
    console.log(selectedOption.value);

    if(questions[index].correctAnswer === selectedOption.value){
      setresult(result + 10);
    }

    // if(index < questions.length - 1){
    //   setIndex(index + 1)
    // }
    index < questions.length - 1 ? setIndex(index + 1) : null;
    
    index >= questions.length - 1 ? console.log('quiz completed')
    : null;
    
  }

  const shuffleArray = (arr) => {
    const emptyArray = [];  
    const shuffleArr = [];
    for (let i = 0; i < arr.length; i++) {
      const randomNumber = Math.floor(Math.random() * arr.length);
      if(emptyArray.includes(randomNumber)){
        i--;
      }else{
        emptyArray.push(randomNumber);
        shuffleArr[randomNumber] = arr[i];
      }
    }
    return shuffleArr;
    
  }
  

 
  
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p> }
      {
        questions && 
        <div>
              <h1 className='text-center'>{result}/100</h1>
              <Typography variant="h1" align='center'> Quiz Using Material Ui</Typography>
              <Typography variant="h4" align='center'>Question {index + 1} : {questions[index].question.text}</Typography>
               
                {shuffleArray([...questions[index].incorrectAnswers,questions[index].correctAnswer]).map((item,index) => {
                  return (
                    <Box key={index} >
                     <input type="radio" name="question" value={item} id={index} ref={el => input.current[index] = el} />
                     <label htmlFor={index}>{item}</label>
                     
                    </Box>
                  )
                })}
               
                <Button variant="contained" onClick={nextQuestion} className='mt-2' >Next</Button>
                {console.log(questions)}
        </div> 

      }
    </>
  )
}

export default App;