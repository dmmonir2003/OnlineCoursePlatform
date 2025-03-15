import { Types } from "mongoose";

export interface TCourse  {
  title: string;
  description: string;
  folders: Types.ObjectId[]; 
  category: string;
  instructors: Types.ObjectId[];
  buyerStudents: Types.ObjectId[]; 
  reviews: Types.ObjectId[]; 
  announcements: Types.ObjectId[]; 
  createdBy: Types.ObjectId;
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