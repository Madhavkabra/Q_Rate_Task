import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';

const Quiz = ({ handleQuizFinish, questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelection = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedAnswer('');
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleFinishQuiz = async () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      handleQuizFinish(score + 1);

      await setScore(score + 1);
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Box p={2}>
      <Card>
        <CardContent>
          <Box mb={2}>
            <Typography variant='h6'>
              Question {currentQuestion + 1} of {questions.length}
            </Typography>
          </Box>
          <Typography variant='h5'>
            {questions[currentQuestion].question}
          </Typography>
          <Box mt='10px'>
            <FormControl component='fieldset' fullWidth={true}>
              <RadioGroup
                aria-label='answer'
                name='answer'
                value={selectedAnswer}
                onChange={handleAnswerSelection}
              >
                {questions[currentQuestion].answers.map((answer) => (
                  <FormControlLabel
                    key={answer}
                    value={answer}
                    control={<Radio />}
                    label={answer}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
        </CardContent>
        <CardActions>
          <Grid container spacing={2}>
            <Grid item>
              {currentQuestion > 0 && (
                <Button
                  variant='contained'
                  onClick={() => setCurrentQuestion(currentQuestion - 1)}
                >
                  Previous
                </Button>
              )}
            </Grid>
            <Grid item>
              {currentQuestion < questions.length - 1 ? (
                <Button
                  variant='contained'
                  color='primary'
                  onClick={handleNextQuestion}
                >
                  Next
                </Button>
              ) : (
                <Button
                  variant='contained'
                  style={{ backgroundColor: 'green', color: 'white' }}
                  onClick={handleFinishQuiz}
                >
                  Finish
                </Button>
              )}
            </Grid>
          </Grid>
        </CardActions>
      </Card>
      {loading && (
        <Box mt={2} display='flex' justifyContent='center'>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default Quiz;
