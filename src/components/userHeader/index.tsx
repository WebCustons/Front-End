import { Box, Button, Text } from "@chakra-ui/react"
import { useUser } from "../../hooks/useUser"
import { useEffect } from "react"

export const UserHeader = () => {
  const { user, getUser } = useUser()

  useEffect(() => {
    getUser()
  }, [])

  return (
    <Button
      colorScheme="messenger"
      variant="ghost"
      height={"100%"}
      paddingRight={"30px"}
      borderRadius={"0"}
      borderLeft={"solid 2px var(--grey6)"}
    >
      <Box
        className="icon"
        backgroundColor={`var(--random2)`}
        borderRadius={"20px"}
        display={"flex"}
        width={"30px"}
        height={"30px"}
        alignItems={"center"}
        justifyContent={"center"}
        fontWeight={"bold"}
        marginRight={"5px"}
      >
        <Text fontSize="mg" color={`var(--grey10)`}>
          {user?.name[0].toUpperCase()}
        </Text>
      </Box>
      <Text fontSize="sm" color={`var(--grey0)`}>
        {user?.name}
      </Text>
    </Button>
  )
}
