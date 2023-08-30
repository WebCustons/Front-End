import {
  Card,
  CardBody,
  CardHeader,
  Box,
  ListItem,
  Text,
} from "@chakra-ui/react";

interface ICommentItemProps {
  name: string;
  created_at: string;
  comment: string;
}
export const CommentItem = ({
  name,
  created_at,
  comment,
}: ICommentItemProps) => {
  const dataISO8601 = created_at;

  const dataFornecida = new Date(dataISO8601);

  const dataAtual = new Date().getTime();

  const diferencaEmMilissegundos = dataAtual - dataFornecida.getTime();

  const diasPassados = Math.floor(
    diferencaEmMilissegundos / (1000 * 60 * 60 * 24)
  );
  let dia = "dias";

  if (diasPassados > 1) {
    dia = "dias";
  } else {
    dia = "dia";
  }

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
          justifyContent={"space-between"}
        >
          <Box
            display="flex"
            flexDirection="row"
            alignItems={"center"}
            gap={"0.5rem"}
          >
            <Box
              backgroundColor="var(--random2)"
              borderRadius="50%"
              display="flex"
              width={"30px"}
              height={"30px"}
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="mg">{name[0].toUpperCase()}</Text>
            </Box>
            <Text>{name}</Text>
          </Box>
          <Text>{`Há ${diasPassados} ${dia}`}</Text>
        </CardHeader>
        <CardBody>
          <Text>{comment}</Text>
        </CardBody>
      </Card>
    </ListItem>
  );
};
