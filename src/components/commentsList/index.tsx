import { List } from "@chakra-ui/react";
import { ContainerList } from "./style";
import { useComments } from "../../hooks/useComments";
import { useEffect } from "react";
import { CommentItem } from "../commentItem";

export const CommentsList = () => {
  const { getComments } = useComments();
  const mockComments = [
    {
      id: 1,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      user: {
        name: "Bruno Henrique",
      },
      advert: 3,
      created_at: "2023-08-24T16:36:07.001Z",
    },
    {
      id: 1,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      user: {
        name: "Bruno Henrique",
      },
      advert: 3,
      created_at: "2023-08-24T16:36:07.001Z",
    },
    {
      id: 1,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      user: {
        name: "Bruno Henrique",
      },
      advert: 3,
      created_at: "2023-08-24T16:36:07.001Z",
    },
  ];

  useEffect(() => {
    getComments();
  }, []);
  return (
    <>
      <ContainerList>
        <List>
          {mockComments.map((comment) => (
            <CommentItem
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
