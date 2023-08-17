import { List } from "@chakra-ui/react";
import { ContainerList, StyledSection } from "./styles";
import { useAnnounce } from "../../hooks/useAnnounce";
import { CardAdvert } from "../cardAdvert";

export const ProfileList = () => {
  const { announceList } = useAnnounce();
  return (
    <>
      <StyledSection>
        <h3>Anúncios</h3>
        <ContainerList>
          <List>
            {announceList?.map((advert) => (
              <CardAdvert advert={advert} key={advert.id} />
            ))}
          </List>
        </ContainerList>
      </StyledSection>
    </>
  );
};
