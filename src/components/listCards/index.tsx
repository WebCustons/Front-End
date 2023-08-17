import { List } from "@chakra-ui/react";
import { ContainerList } from "./style";
import { TAdvert } from "../../schemas/advert.schema";
import { CardAdvert } from "../cardAdvert";

interface ListCardsProps {
  advertsList: TAdvert[] | undefined;
}

export const ListCards = ({ advertsList }: ListCardsProps) => {
  return (
    <ContainerList>
      <List>
        {advertsList?.map((advert) => (
          <CardAdvert advert={advert} key={advert.id} />
        ))}
      </List>
    </ContainerList>
  );
};
