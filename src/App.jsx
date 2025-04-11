import { useEffect, useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Box, Button, Typography, Container, Card, CardContent, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'

function App() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [questions, setQuestions] = useState(null)
  const [index, setIndex] = useState(0)
  const [result, setresult] = useState(0)

  const url = 'https://the-trivia-api.com/v2/questions';

  useEffect(() => {
    const quiz = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setQuestions(data)
      }
      catch (error) {
        setError(true)
      }
      finally {
        setLoading(false)
      }
    }

    quiz()
  }, [])

  const input = useRef([]);

  const nextQuestion = () => {
    const selectedOption = input.current.find(item => item && item.checked);
    console.log(selectedOption.value);

    if (questions[index].correctAnswer === selectedOption.value) {
      setresult(result + 10);
    }

    setIndex((prev) => prev + 1);
    index < questions.length - 1 ? setIndex(index + 1) : null;
    index >= questions.length - 1 ? console.log('quiz completed') : null;
  }

  const shuffleArray = (arr) => {
    const emptyArray = [];
    const shuffleArr = [];
    for (let i = 0; i < arr.length; i++) {
      const randomNumber = Math.floor(Math.random() * arr.length);
      if (emptyArray.includes(randomNumber)) {
        i--;
      } else {
        emptyArray.push(randomNumber);
        shuffleArr[randomNumber] = arr[i];
      }
    }
    return shuffleArr;
  }

  return (
    <Container className='my-5'>
      {loading && <Typography align="center">Loading...</Typography>}
      {error && <Typography align="center" color="error">Error loading quiz.</Typography>}

      {questions && (
        <Card elevation={4} className="p-4">
          <CardContent>
            <Typography variant="h3" align="center" gutterBottom>
              Quiz Using Material UI
            </Typography>

            <Typography variant="h5" align="center" color="primary" className="mb-4">
              Score: {result} / 100
            </Typography>

            <Typography variant="h6" className="mb-3">
              Question {index + 1}: {questions[index].question.text}
            </Typography>

            <FormControl component="fieldset" className="w-100">
              <RadioGroup>
                {shuffleArray([...questions[index].incorrectAnswers, questions[index].correctAnswer]).map((item, i) => (
                  <Box
                    key={i}
                    className="mb-2 p-2 border rounded d-flex align-items-center"
                  >
                    <input
                      type="radio"
                      name="question"
                      value={item}
                      id={`option-${i}`}
                      ref={el => input.current[i] = el}
                      className="form-check-input me-2"
                    />
                    <label htmlFor={`option-${i}`} className="form-check-label w-100">
                      {item}
                    </label>
                  </Box>
                ))}
              </RadioGroup>
            </FormControl>

            <Box className="text-end mt-4">
  <Button variant="contained" onClick={nextQuestion}>
    {index === questions.length - 1 ? 'Finish' : 'Next'}
  </Button>
</Box>

{index === questions.length - 1 && (
  <Typography variant="h2" align="center" className="mt-4 text-primary">
    Your Score: {result} / 100
  </Typography>
)}
          </CardContent>
        </Card>
      )}
    </Container>
  )
}

export default App;
