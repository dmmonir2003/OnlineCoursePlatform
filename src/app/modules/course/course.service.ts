
import { Course } from './course.model';

const createCourse = async (payload:{payload:any} ) => {
    console.log(({payload}));
  const result = await Course.create(payload);
  return result
};


export const CourseServices = {
    createCourse
};
