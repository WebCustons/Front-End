import { List } from "@chakra-ui/react";
import { ContainerList } from "./style";
import { useComments } from "../../hooks/useComments";
import { useEffect } from "react";
import { CommentItem } from "../commentItem";

export const CommentsList = () => {
  const { comments, getComments } = useComments();

  useEffect(() => {
    getComments();
  }, []);
  return (
    <>
      <ContainerList>
        <h1>Comentários</h1>
        <List>
          {comments?.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment.comment}
              name={comment.user.name}
              created_at={comment.created_at}
            ></CommentItem>
          ))}
        </List>
      </ContainerList>
    </>
  );
};
