import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { User } from "../../type/User";

type Props = {
  user: User;
  onClick: () => void;
};

export const UserCard: VFC<Props> = memo((props) => {
  const { user, onClick } = props;
  return (
    <Box
      w="230px"
      h="230px"
      bg="white"
      align="center"
      direction="column"
      p={4}
      borderRadius="lg"
      shadow="lg"
      cursor="pointer"
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
    >
      <Image
        my={4}
        mx="auto"
        boxSize="100px"
        objectfit="cover"
        borderRadius="full"
        src="https://source.unsplash.com/random"
      />
      <Stack>
        <Text fontWeight="bold" fontSize="lg">
          {user.username}
        </Text>
        <Text fontSize="sm" color="gray">
          {user.name}
        </Text>
      </Stack>
    </Box>
  );
});
