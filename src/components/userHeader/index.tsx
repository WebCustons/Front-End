import { Box, Text } from "@chakra-ui/react"
import { useUser } from "../../hooks/useUser"
import { useEffect } from "react"

export const UserHeader = () => {
  const { user, getUser } = useUser()

  useEffect(() => {
    getUser()
  }, [])

  return (
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
        <Text fontSize="xs" color={`var(--grey10)`}>
          {user?.name[0].toUpperCase()}
        </Text>
      </Box>
      <Text fontSize="xs" color={`var(--grey0)`}>
        {user?.name}
      </Text>
    </Box>
  )
}
