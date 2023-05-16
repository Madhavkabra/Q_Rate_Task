'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import PropTypes from 'prop-types';
import '@/styles/globals.css';
import {
  Typography,
  Breadcrumbs,
  Link,
  Box,
} from '../../components/Mui/material';
import data from '../../public/course.json';

export default function CourseLayout({ children }) {
  const params = useParams();
  const [courseName, setCourseName] = useState('');
  const [lessonName, setLessonName] = useState('');

  // Getting the course name and lesson name for breadcrumbs.
  useEffect(() => {
    const course = data.find((f) => f.course_id === params.course);
    const lesson = course?.lessons.find(
      (f) => f.lesson_id === params.lesson
    )?.lesson_name;
    setCourseName(course?.course_name);
    setLessonName(lesson);
  }, [params]);

  return (
    <Box ml='250px'>
      <Typography variant='h1'>Course</Typography>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link underline='hover' color='inherit'>
          {courseName}
        </Link>
        <Typography color='text.primary'>{lessonName}</Typography>
      </Breadcrumbs>
      {children}
    </Box>
  );
}

CourseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
