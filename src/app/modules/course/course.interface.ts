import { Types } from "mongoose";

export interface TCourse  {
  title: string;
  description: string;
  folders: Types.ObjectId[]; 
  category: "Programming"| "Web Development"| "Mobile Development" | "Business"| "Data Science"| "Personal Development"| "UI/UX Design" | "Machine Learning"|"Artificial Intelligence" ,"Other"
  instructors: Types.ObjectId[];
  buyerStudents: Types.ObjectId[]; 
  reviews: Types.ObjectId[]; 
  announcements: Types.ObjectId[]; 
  createdBy: Types.ObjectId;
  tags: "JavaScript"|"Python"|"React"|"Node.js"
  visibility:"public"| "private"| "draft"
  isDeleted:boolean
  createdAt: Date;
  updatedAt: Date;
}

export interface TCourseFolder {
  name: string;
  courseId: Types.ObjectId;
  position: number;
  contents: Types.ObjectId[]
  createdAt: Date;
  updatedAt: Date;
}

export interface TCourseContent  {
  folderId: Types.ObjectId;
  title: string;
  type: "video" | "text" | "document";
  url: string;
  position: number;
  createdAt: Date;
  updatedAt: Date;
}