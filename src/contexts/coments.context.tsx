import { ReactNode, createContext, useState } from "react";
import { api } from "../services/api";
import {
  TAllCommentsResponse,
  TCommentRequest,
} from "../interfaces/comment.interface";

interface ICommentsContextProps {
  children: ReactNode;
}

interface ICommentsProvider {
  getComments: () => void;
  comments: TAllCommentsResponse | [];
  setComment: (comment: TCommentRequest) => void;
}

export const CommentsContext = createContext({} as ICommentsProvider);

export const CommentsProvider = ({ children }: ICommentsContextProps) => {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    try {
      const id = localStorage.getItem("@ID-ADVERT");
      const response = await api.get(`/comments/advert/${id}`);
      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const setComment = async (comment: TCommentRequest) => {
    try {
      const id = localStorage.getItem("@ID");
      await api.post(`/comments/advert/${id}`, comment);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CommentsContext.Provider value={{ getComments, comments, setComment }}>
      {children}
    </CommentsContext.Provider>
  );
};
