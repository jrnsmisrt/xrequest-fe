export interface XRequest {
  id:string,
  authorId:string,
  dateTime:string,
  category:string,
  title:string,
  content:string,
  photos?: string[];
  tags?: string[];
}
