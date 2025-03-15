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
router.post(
  '/create-milestone',
  validateSchema(CourseValidations.CourseMilestoneValidationSchema),
  CourseControllers.createCourseMilestone
);
router.post(
  '/create-module',
  validateSchema(CourseValidations.CourseModuleValidationSchema),
  CourseControllers.createCourseModule
);


export const CourseRoutes = router;
