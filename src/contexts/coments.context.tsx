import { ReactNode, createContext, useState } from "react";
import { api } from "../services/api";
import { TAllCommentsResponse } from "../interfaces/comment.interface";

interface ICommentsContextProps {
  children: ReactNode;
}

interface ICommentsProvider {
  getComments: () => void;
  comments: TAllCommentsResponse | [];
}

export const CommentsContext = createContext({} as ICommentsProvider);

export const CommentsProvider = ({ children }: ICommentsContextProps) => {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    try {
      const id = localStorage.getItem("@ID-ADVERT");
      const response = await api.get(`/comments/${id}`);
      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CommentsContext.Provider value={{ getComments, comments }}>
      {children}
    </CommentsContext.Provider>
  );
};
