import { useContext } from "react";
import { CommentsContext } from "../contexts/coments.context";

export const useComments = () => {
  const comments = useContext(CommentsContext);
  return comments;
};
