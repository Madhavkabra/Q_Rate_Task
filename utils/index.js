import data from '../public/course.json';
import SchoolIcon from '@mui/icons-material/School';

export const mapCourse = () => {
  const items = data.map((m) => {
    return {
      ['name']: m.course_name,
      ['Icon']: SchoolIcon,
      ['items']: m.lessons.map((l) => {
        return {
          ['name']: l.lesson_name,
          ['id']: l.lesson_id,
          ['link']: `/${m.course_id}/${l.lesson_id}`,
        };
      }),
    };
  });

  return items;
};
