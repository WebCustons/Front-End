import { Box, Button } from "@chakra-ui/react"
import { useProduct } from "../../../hooks/useProduct"

export type ITypeView = "admin" | "owner" | "visitor" | null

interface IBottomLogicViewProps {
  typeView: ITypeView
  idAdvert:number
  idUser:string
}

export const BottomLogicView = ({ typeView,idAdvert,idUser}: IBottomLogicViewProps) => {
  const { adminDeleteAdvert } = useProduct()

  if (typeView == "admin") {
    return (
      <Box className="buttonsAdmin">
        <Button variant="outline" marginRight={"16px"} onClick={(e)=> {e.stopPropagation(); adminDeleteAdvert(idAdvert,idUser)}}>
          Desativar
        </Button>
      </Box>
    )
  } else {
    return <></>
  }
}
