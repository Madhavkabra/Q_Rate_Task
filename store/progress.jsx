import { createSlice } from "@reduxjs/toolkit";

export const progressSlice = createSlice({
  name: "progress",
  initialState: {
    lessonsCompleted: {},
    completedLessons: [],
    activeCourse: '',
    videoTime: {},
  },
  reducers: {
    setLessonsCompleted: (state, action) => {
      const [courseId, lessonId, lessonCount, totalLessons] = action.payload;
      console.log(courseId, lessonId, lessonCount);
      state.lessonsCompleted[courseId] = [lessonCount, totalLessons];
      state.completedLessons.push(lessonId);
    },
    setActiveCourse: (state, action) => {
        state.activeCourse = action.payload;
    },
    setVideoTime: (state, action) => {
      const [lessonId, time] = action.payload;
      state.videoTime[lessonId] = time;
    }
  },
});

export const { setOverall, setLessonsCompleted, setActiveCourse, setVideoTime } = progressSlice.actions;

export default progressSlice.reducer;
