import { Box, Button } from "@chakra-ui/react"

export type ITypeView = "owner" | "admin" | "visitor"

interface IBottomLogicViewProps {
  typeView: ITypeView
}

export const BottomLogicView = ({ typeView }: IBottomLogicViewProps) => {
  if (typeView == "owner") {
    return (
      <Box className="buttonsOwner">
        <Button variant="outline" marginRight={"16px"}>
          Editar
        </Button>
        <Button variant="outline">Ver detalhes</Button>
      </Box>
    )
  } else if (typeView == "admin") {
    return (
      <Box className="buttonsAdmin">
        <Button variant="outline" marginRight={"16px"}>
          Desativar
        </Button>
      </Box>
    )
  } else {
    return <></>
  }
}
