
import { sendCreated } from '../../utils/apiResponse';
import catchAsync from '../../utils/catchAsync';
import { CourseServices } from './course.service';



const createCourse = catchAsync(async (req, res) => {
  const payload = req.body;
  const userId =  "67d544812ae90118dbc3d05f"
  payload.createdBy=userId;
//   console.log({payload});
  const result = await CourseServices.createCourse(req.body);
  return sendCreated(res, result, 'Course created successfully');
});



export const CourseControllers = {
  createCourse,
};
