
import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary';
import { TCourse, TCourseContent, TCourseMilestone, TCourseModule } from './course.interface';
import { Course, CourseContent, CourseMilestone, CourseModule } from './course.model';

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


// #TODO  course content create korary somoy milestone module soho create karte hbe akhne

const createCourseContent = async (file: any, payload:TCourseContent) => {

  // photo upload in Cloudinary
  if (file) {
    const path = file?.path
    const imageName = `${new Date()} ${payload?.title}`
   
    //send image to cloudinary
    const { secure_url } = await sendImageToCloudinary(imageName, path)
    console.log(payload,file,secure_url);
    payload.url = secure_url as string
    payload.type=file?.type||"document"
  }

  const result = await CourseContent.create(payload)
  return result
}


export const CourseServices = {
    createCourse,
    createCourseMilestone,
    createCourseModule,
    createCourseContent
};
