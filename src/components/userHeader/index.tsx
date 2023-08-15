import { Box, Text } from "@chakra-ui/react"

export const UserHeader = () => {
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
          {advert.user.name[0].toUpperCase()}
        </Text>
      </Box>
      <Text fontSize="xs" color={`var(--grey2)`}>
        {advert.user.name}
      </Text>
    </Box>
  )
}
