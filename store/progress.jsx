'use client';
import { createSlice } from '@reduxjs/toolkit';

export const progressSlice = createSlice({
  name: 'progress',
  initialState: {
    lessonsCompleted: {},
    completedLessons: [],
    activeCourse: '',
    videoTime: {},
    activeLessons: {},
    totalLessons: 0,
  },
  reducers: {
    setLessonsCompleted: (state, action) => {
      const [courseId, lessonId, lessonCount, totalLessons] = action.payload;
      state.lessonsCompleted[courseId] = [lessonCount, totalLessons];
      state.completedLessons = [
        ...new Set([...state.completedLessons, lessonId]),
      ];
      state.activeLessons[courseId] = [
        ...(state.activeLessons?.[courseId] || []),
        lessonId,
      ];
    },
    setActiveCourse: (state, action) => {
      state.activeCourse = action.payload;
    },
    setVideoTime: (state, action) => {
      const [lessonId, time] = action.payload;
      state.videoTime[lessonId] = time;
    },
    setTotalLessons: (state, action) => {
      state.totalLessons = action.payload;
    },
  },
});

export const {
  setLessonsCompleted,
  setActiveCourse,
  setVideoTime,
  setActiveLessonIndex,
  setTotalLessons,
} = progressSlice.actions;

export default progressSlice.reducer;
