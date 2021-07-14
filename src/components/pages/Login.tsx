import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useLogin } from "../../hooks/useLogin";

export const Login: VFC = memo(() => {
  const [userId, setUserId] = useState("");
  const { getUser, loading } = useLogin();

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const onClickLoginButton = () => {
    getUser(userId);
  };

  return (
    <Flex justify="center" align="center" w="100%" h="100vh">
      <Box
        textAlign="center"
        p={4}
        w="sm"
        bg="white"
        borderRadius="md"
        shadow="md"
      >
        <Heading as="h2" fontSize="20px">
          ユーザー管理アプリ
        </Heading>
        <Divider my={6} />
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="ユーザーID"
            value={userId}
            onChange={onChangeUserId}
          />
          <PrimaryButton
            onClick={onClickLoginButton}
            loading={loading}
            disabled={userId === ""}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
