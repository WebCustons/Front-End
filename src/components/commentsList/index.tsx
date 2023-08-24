import { List } from "@chakra-ui/react";
import { ContainerList } from "./style";
import { useComments } from "../../hooks/useComments";
import { useEffect } from "react";

export const CommentsList = () => {
  const { comments, getComments } = useComments();

  useEffect(() => {
    getComments();
  }, []);
  return (
    <>
      <ContainerList>
        <List>
          {comments?.map((comment) => (
            <li key={comment.id}>
              {comment.comment}
              {comment.creted_at}
              {comment.user}
            </li>
          ))}
        </List>
      </ContainerList>
    </>
  );
};
