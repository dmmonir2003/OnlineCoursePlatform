
import { TCourse, TCourseMilestone, TCourseModule } from './course.interface';
import { Course, CourseMilestone, CourseModule } from './course.model';

const createCourse = async (payload:{payload:TCourse} ) => {
  const result = await Course.create(payload);
  return result
};
const createCourseMilestone = async (payload:{payload:TCourseMilestone} ) => {
  const result = await CourseMilestone.create(payload);
  return result
};


const createCourseModule = async (payload:{payload:TCourseModule} ) => {
  const result = await CourseModule.create(payload);
  return result
};


export const CourseServices = {
    createCourse,
    createCourseMilestone,
    createCourseModule
};
