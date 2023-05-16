import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Button } from '../Mui/material';

const LessonCompleted = ({
  lessonsData,
  currentLesson,
  handleNextLesson,
  handleNextCourse,
}) => {
  return (
    <Box
      height='50%'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      gap='25px'
    >
      <Box mt='20rem' width='20rem' component='img' src='/congrats.png'></Box>
      <Typography variant='h3'>Congratulations !!!</Typography>
      <Typography variant='h3'>You Have Completed The Lesson</Typography>

      {lessonsData?.indexOf(currentLesson) !== lessonsData?.length - 1 ? (
        <Button variant='contained' onClick={handleNextLesson}>
          Next Lesson
        </Button>
      ) : (
        <Button variant='contained' onClick={handleNextCourse}>
          Next Course
        </Button>
      )}
    </Box>
  );
};

LessonCompleted.propTypes = {
  lessonsData: PropTypes.array,
  currentLesson: PropTypes.object,
  handleNextLesson: PropTypes.func,
  handleNextLesson: PropTypes.func,
};

export default LessonCompleted;
