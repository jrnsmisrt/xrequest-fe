export interface XRequest {
  id:string,
  author:string,
  dateTime:string,
  category:string,
  title:string,
  content:string,
  photos?: string[];
  tags?: string[];
}
