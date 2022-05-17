import { Course } from "./Course";

export interface User {
  userName: string;
  fname: string;
  lname: string;
  mail: string;
  pass: string;
  job?: string;
  admin?: boolean;
  courses: Course[];
}
