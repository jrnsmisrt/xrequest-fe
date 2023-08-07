import {Author} from "./author";

export interface XRequest {
  id:string,
  author:string,
  authorData?: Author,
  dateTime:string,
  category:string,
  title:string,
  content:string,
  photos?: string[];
  tags?: string[];
}
