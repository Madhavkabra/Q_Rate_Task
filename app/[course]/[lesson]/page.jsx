'use client';
import React, { useCallback, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import ReactPlayer from 'react-player/youtube';
import { useDispatch, useSelector } from 'react-redux';
import Quiz from '@/components/Quiz';
import {
  setLessonsCompleted,
  setActiveCourse,
  setVideoTime,
} from '@/store/progress';
import LessonCompleted from '@/components/LessonCompleted';
import courseData from '../../../public/course.json';
import { Box } from '../../../components/Mui/material';

export default function RootPage({ params }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const completedLessons = useSelector(
    (state) => state.progress.lessonsCompleted
  );
  const [currentLesson, setCurrentLesson] = React.useState();
  const [courses, setCourses] = React.useState([]);
  const [isVideoCompleted, setIsVideoCompleted] = React.useState(false);
  const [isLessonCompleted, setIsLessonCompleted] = React.useState(false);
  const [lessonsData, setLessonsData] = React.useState();
  const currentCourse = courses.find((f) => f.course_id === params.course);
  const totalCourseLessons = currentCourse?.lessons.length;
  const videoRef = useRef();
  const time = useSelector((state) => state.progress.videoTime);
  let played = 0;
  let seek = Math.floor(time[params.lesson] || 0);

  // fetching course data.
  const fetchCourses = useCallback(() => {
    const { course: courseId, lesson: lessonId } = params;
    dispatch(setActiveCourse(courseId));

    const lessons = courseData.find(
      (user) => user.course_id === courseId
    )?.lessons;
    const lesson = lessons?.find((les) => lessonId === les.lesson_id);

    setLessonsData(lessons);
    setCurrentLesson(lesson);
    setCourses(courseData);
  }, [params]);

  useEffect(() => {
    fetchCourses();

    return () => {
      clearInterval(playInterval);

      if (!isLessonCompleted) {
        dispatch(setVideoTime([params.lesson, played]));
      }
    };
  }, []);

  // Storing video progress in a interval.
  const playInterval = setInterval(() => {
    if (videoRef.current !== null) {
      played = videoRef?.current?.getCurrentTime();
    }
  }, 1000);

  // Callback on video end.
  const handleVideoEnd = () => {
    setIsVideoCompleted(true);
  };

  // Handling result after completing quiz.
  const handleQuizFinish = (marks) => {
    const result = marks === currentLesson?.questions.length;
    if (result) {
      dispatch(
        setLessonsCompleted([
          params.course,
          params.lesson,
          completedLessons[params.course]
            ? completedLessons[params.course][0] + 1
            : 1,
          totalCourseLessons,
        ])
      );
    }
    setIsLessonCompleted(result);
  };

  // Next lesson button click.
  const handleNextLesson = () => {
    const index = lessonsData.indexOf(currentLesson);
    const nextLesson = lessonsData[index + 1];
    router.push(`/${params.course}/${nextLesson.lesson_id}`);
  };

  // Next course button click.
  const handleNextCourse = () => {
    const currentCourse = courses.find(
      (user) => user.course_id === params.course
    );
    const courseIndex = courses.indexOf(currentCourse);
    const nextCourse = courses[courseIndex + 1];

    if (nextCourse?.course_id)
      router.push(`${nextCourse.course_id}/${nextCourse.lessons[0].lesson_id}`);
    else alert('You Have Completed The Learning');
  };

  return (
    <>
      {!isVideoCompleted && (
        <Box
          width='100%'
          display='flex'
          justifyContent='center'
          alignContent='center'
          mt='50px'
        >
          <ReactPlayer
            ref={videoRef}
            config={{
              youtube: {
                playerVars: {
                  start: seek,
                },
              },
            }}
            controls={true}
            playing={true}
            url={currentLesson?.video_url}
            onEnded={handleVideoEnd}
            style={{ width: '80%', height: '50vh' }}
          />
        </Box>
      )}

      {isVideoCompleted && isLessonCompleted && (
        <LessonCompleted
          currentLesson={currentLesson}
          lessonsData={lessonsData}
          handleNextLesson={handleNextLesson}
          handleNextCourse={handleNextCourse}
        />
      )}

      {isVideoCompleted && !isLessonCompleted && (
        <Box mt='50px'>
          {currentLesson && (
            <Quiz
              handleQuizFinish={handleQuizFinish}
              questions={currentLesson.questions}
            />
          )}
        </Box>
      )}
    </>
  );
}
