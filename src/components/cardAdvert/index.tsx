import {
  Card,
  CardBody,
  CardFooter,
  Image,
  ListItem,
  Box,
  Tag,
  Heading,
  Text,
} from "@chakra-ui/react";
import { TAdvert } from "../../schemas/advert.schema";
interface ICardProps {
  advert: TAdvert;
}
import discountImage from "../../assets/$.png";

export function CardAdvert({ advert }: ICardProps) {
  // const userNameIcon: string[] = advert.Users.name.split(" ");
  //const userNameIcon: string[] = advert.Users.name.split(" ");
  return (
    <ListItem color={`var(--grey1)`} width={"312px"} height={"350px"}>
      <Card
        padding={"0.5rem"}
        display={"flex"}
        flexDirection={"column"}
        gap={"1rem"}
        width={"100%"}
        height={"100%"}
        transition={"0.5s"}
        cursor={"pointer"}
      >
        <CardBody display={"flex"} flexDirection={"column"} gap={"1rem"}>
          {advert.table_fipe ? (
            <Box
              backgroundColor={"green"}
              position={"absolute"}
              top={"0"}
              right={"0"}
              zIndex={"1"}
              transition={"0.5s"}
              display={"flex"}
              gap={"0.5rem"}
              padding={"0.2rem 0.5rem"}
            >
              <Text
                display={"none"}
                color={"var(--grey9)"}
                backgroundColor={"green"}
              >
                Abaixo do preço
              </Text>
              <Image src={discountImage} width={"15px"} />
            </Box>
          ) : null}
          <Image
            src={advert.cover_image}
            alt="advert image"
            height={"144px"}
            width={"100%"}
            objectFit="contain"
            backgroundColor={`var(--grey7)`}
          />

          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"1rem"}
            width={"100%"}
          >
            <Heading as="h3" size="md">
              {advert.brand} - {advert.model}
            </Heading>

            <Text
              fontSize="md"
              color={`var(--grey2)`}
              lineHeight={"1.5rem"}
              textAlign={"left"}
            >
              {advert.description.length > 120
                ? advert.description.slice(0, 80) + "..."
                : advert.description}
            </Text>

            <Box
              display={"flex"}
              gap={"1rem"}
              justifyItems={"center"}
              alignItems={"center"}
            >
              <Box
                backgroundColor={`var(--random2)`}
                borderRadius={"20px"}
                display={"flex"}
                width={"25px"}
                height={"25px"}
                alignItems={"center"}
                justifyContent={"center"}
                fontWeight={"bold"}
              >
                {/* <Text fontSize="xs" color={`var(--grey10)`}>
                  {userNameIcon[0][0].toUpperCase() +
                    userNameIcon[1][0].toUpperCase()}
                </Text> */}
              </Box>
              <Text fontSize="xs" color={`var(--grey2)`}>
                {advert.Users.name}
              </Text>
            </Box>
          </Box>
        </CardBody>

        <CardFooter
          display={"flex"}
          justifyContent={"space-between"}
          width={"100%"}
          alignItems={"center"}
        >
          <Box display={"flex"} gap={"1rem"}>
            <Tag
              color={`var(--brand1)`}
              backgroundColor={`var(--brand4)`}
              padding={"0.4rem"}
              borderRadius={"5px"}
              size="sm"
              fontWeight={"bold"}
            >
              {advert.mileage} KM
            </Tag>

            <Tag
              color={`var(--brand1)`}
              backgroundColor={`var(--brand4)`}
              padding={"0.4rem"}
              borderRadius={"5px"}
              size="sm"
              fontSize={"sm"}
              fontWeight={"bold"}
            >
              {advert.year}
            </Tag>
          </Box>

          <Text fontSize="md" fontWeight={"bold"}>
            R$ {advert.price}
          </Text>
        </CardFooter>
      </Card>
    </ListItem>
  );
}
