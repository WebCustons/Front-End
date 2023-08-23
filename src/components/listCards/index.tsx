import { List } from "@chakra-ui/react"
import { ContainerList } from "./style"
import { TAdvert } from "../../schemas/advert.schema"
import { CardAdvert } from "../cardAdvert"
import { ITypeView } from "../cardAdvert/BottomLogicView"

interface ListCardsProps {
  advertsList: TAdvert[] | undefined
  typeView: ITypeView
}

export const ListCards = ({ advertsList, typeView }: ListCardsProps) => {
  return (
    <ContainerList>
      <List>
        {advertsList?.map((advert) => (
          <CardAdvert typeView={typeView} advert={advert} key={advert.id} />
        ))}
      </List>
    </ContainerList>
  )
}
