import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  ListItem,
  Text,
} from "@chakra-ui/react";

interface ICommentItemProps {
  key: string;
  name: string;
  created_at: string;
  comment: string;
}
export const CommentItem = ({
  key,
  name,
  created_at,
  comment,
}: ICommentItemProps) => {
  return (
    <ListItem>
      <Card
        display={"flex"}
        flexDirection={"column"}
        gap={"1rem"}
        width={"100%"}
        height={"100%"}
        transition={"0.5s"}
        cursor={"pointer"}
        borderRadius={"10px"}
      >
        <CardHeader
          display="flex"
          flexDirection="row"
          gap="0.5rem"
          alignItems="center"
        >
          <Heading>{name}</Heading>
          <Text>{created_at}</Text>
        </CardHeader>
        <CardBody>
          <Text>{comment}</Text>
        </CardBody>
      </Card>
    </ListItem>
  );
};
