import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';

const Quiz = ({ handleQuizFinish, questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [wrongAnswer, setWrongAnswer] = useState(false);

  const onAnswerSelect = (e) => {
    setWrongAnswer(false);
    setSelectedAnswer(e.target.value);
  };

  const handleClickNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setWrongAnswer(false);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      return;
    }
    setWrongAnswer(true);
    setSelectedAnswer('');
  };

  const handleClickFinish = () => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setWrongAnswer(false);
      handleQuizFinish();
      return;
    }
    setWrongAnswer(true);
  };

  return (
    <Box p={2}>
      <Card>
        <CardContent>
          <Box mb={2}>
            <Typography variant='h6'>
              Question {currentQuestionIndex + 1} of {questions.length}
            </Typography>
          </Box>
          <Typography variant='h5'>
            {questions[currentQuestionIndex].question}
          </Typography>
          <Box mt='10px'>
            <FormControl component='fieldset' fullWidth={true}>
              <RadioGroup
                aria-label='answer'
                name='answer'
                value={selectedAnswer}
                onChange={onAnswerSelect}
              >
                {questions[currentQuestionIndex].answers.map((answer) => (
                  <FormControlLabel
                    key={answer}
                    value={answer}
                    control={<Radio />}
                    label={answer}
                  />
                ))}
              </RadioGroup>
              {wrongAnswer && (
                <FormHelperText error={wrongAnswer}>
                  You have selected the wrong answer.
                </FormHelperText>
              )}
            </FormControl>
          </Box>
        </CardContent>
        <CardActions>
          <Grid container spacing={2}>
            <Grid item>
              {currentQuestionIndex > 0 && (
                <Button
                  variant='contained'
                  onClick={() =>
                    setCurrentQuestionIndex(currentQuestionIndex - 1)
                  }
                >
                  Previous
                </Button>
              )}
            </Grid>
            <Grid item>
              {currentQuestionIndex < questions.length - 1 ? (
                <Button
                  variant='contained'
                  color='primary'
                  onClick={handleClickNextQuestion}
                >
                  Next
                </Button>
              ) : (
                <Button
                  variant='contained'
                  style={{ backgroundColor: 'green', color: 'white' }}
                  onClick={handleClickFinish}
                >
                  Finish
                </Button>
              )}
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Quiz;
