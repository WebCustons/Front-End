import { Box, Button } from "@chakra-ui/react"

export type ITypeView = "admin" | "owner" | "visitor" | null

interface IBottomLogicViewProps {
  typeView: ITypeView
}

export const BottomLogicView = ({ typeView }: IBottomLogicViewProps) => {
  if (typeView == "admin") {
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
