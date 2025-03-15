import express from 'express';
import validateSchema from '../../middlewares/zodValidation';
import { CourseControllers } from './course.controller';
import { CourseValidations } from './course.validation';

const router = express.Router();


router.post(
  '/create-course',
  validateSchema(CourseValidations.CourseValidationSchema),
  CourseControllers.createCourse
);


export const CourseRoutes = router;
