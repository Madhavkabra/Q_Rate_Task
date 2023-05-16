# Q-Rate Learning Web

This application features a course catalog with a list of available courses and their respective lessons. You can check out a live demo [here](https://q-rate-task.vercel.app/).

## Features

1. Display the list of available courses.
2. Show the list of lessons for a selected course.
3. Play the video lesson when selected.
4. Provide a Q&A session upon completing a lesson.
5. Automatically move to the next lesson upon completion of the active lesson.
6. If a lesson is not successfully completed, users can restart it.
7. Store progress locally using local storage.
8. Display progress tracking for courses and lessons.

## Limitations

1. Currently, only YouTube URLs are supported for lesson videos, but the URL support can be changed as needed.

## Tech Stack

1. Next.js (v13.4.2)
2. Material UI (v5.12.0)
3. React Player (v2.12.0)
4. Redux Toolkit (v1.9.5)
5. Redux Persist (v6.0.0)

## Requirements to Run the Application Locally

1. Node Package Manager (npm) must be installed on your machine.

## How to Run the Application Locally

In the project directory:

1. Run the `npm install --legacy-peer-deps` command.
2. Run the `npm run dev` command. This will start the app in development mode. Open [http://localhost:3000](http://localhost:3000) in your browser to view it.
