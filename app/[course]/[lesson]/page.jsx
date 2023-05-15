"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ReactPlayer from "react-player/youtube";
import { useDispatch, useSelector } from "react-redux";
import Quiz from "@/components/Quiz";
import {
  setLessonsCompleted,
  setActiveCourse,
  setVideoTime,
} from "@/store/progress";
import { Box, Button, Typography } from "../../../components/Mui/material";

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
  const time = useSelector((state) => state.progress.videoTime)
  console.log(time)
  let played = 0;

  const fetchJson = useCallback(() => {
    fetch("../data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const { course, lesson } = params;
        dispatch(setActiveCourse(course));

        const courseData = data.find(
          (user) => user.course_id === course
        )?.lessons;
        const lessonData = courseData?.find((les) => lesson === les.lesson_id);

        setLessonsData(courseData);
        setCurrentLesson(lessonData);
        setCourses(data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [params]);

  useEffect(() => {
    fetchJson();
    // videoRef.current.seekTo(time[params.lesson] || 0)
    return () => {
      clearInterval(playInterval)
      if (!isLessonCompleted) {
        dispatch(setVideoTime([params.lesson, played]));
      }
    };
  }, []);

  console.log(videoRef.current)

  const playInterval = setInterval(()=>{
    if (videoRef.current !== null) {
      played = videoRef.current.getCurrentTime()
    }
  }, 1000)

  const handleVideoEnd = () => {
    setIsVideoCompleted(true);
  };

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

  const handleNextLesson = () => {
    const index = lessonsData.indexOf(currentLesson);
    const nextLesson = lessonsData[index + 1];
    router.push(`/${params.course}/${nextLesson.lesson_id}`);
  };

  const handleNextCourse = () => {
    const currentCourse = courses.find(
      (user) => user.course_id === params.course
    );
    const courseIndex = courses.indexOf(currentCourse);
    const nextCourse = courses[courseIndex + 1];

    if (nextCourse?.course_id)
      router.push(`${nextCourse.course_id}/${nextCourse.lessons[0].lesson_id}`);
    else alert("You Have Completed The Learning");
  };

  return (
    <>
      <Typography mb="25px" variant="h3" textAlign="center">
        {courses.find((user) => user.course_id === params.course)?.course_name}{" "}
        Course
      </Typography>
      {!isVideoCompleted ? (
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          alignContent="center"
          mt="50px"
        >
          <ReactPlayer
            ref={videoRef}
            url={currentLesson?.video_url}
            onEnded={handleVideoEnd}
            style={{ width: "80%", height: "50vh" }}
          />
        </Box>
      ) : isLessonCompleted ? (
        <Box
          height="50%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="25px"
        >
          <Box
            mt="20rem"
            width="20rem"
            component="img"
            src="/congrats.png"
          ></Box>
          <Typography variant="h3">Congratulations !!!</Typography>
          <Typography variant="h3">You Have Completed The Lesson</Typography>
          {lessonsData?.indexOf(currentLesson) !== lessonsData?.length - 1 ? (
            <Button variant="contained" onClick={handleNextLesson}>
              Next Lesson
            </Button>
          ) : (
            <Button variant="contained" onClick={handleNextCourse}>
              Next Course
            </Button>
          )}
        </Box>
      ) : (
        <Box mt="50px">
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
