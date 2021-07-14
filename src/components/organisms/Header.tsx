import {
  Box,
  Flex,
  Heading,
  IconButton,
  Link,
  useDisclosure
} from "@chakra-ui/react";
import { memo, VFC } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { MenuDrawer } from "../molecules/MenuDrawer";
import { useHistory } from "react-router-dom";

export const Header: VFC = memo(() => {
  const history = useHistory();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const onClickIconButton = () => onOpen();

  const onClickHome = () => {
    history.push("/home");
  };

  const onClickUserManagement = () => {
    history.push("/home/userManagement");
  };
  const onClickSetting = () => {
    history.push("/home/setting");
  };

  return (
    <>
      <Flex bg="teal" align="center" justify="space-between" h="50px" w="100%">
        <Heading
          as="h1"
          color="gray.200"
          fontSize={{ base: "md", md: "lg" }}
          onClick={onClickHome}
          _hover={{ cursor: "pointer" }}
        >
          ユーザー管理アプリ
        </Heading>
        <Flex
          align="center"
          flexGrow={1}
          display={{ base: "none", md: "flex" }}
        >
          <Box mx="5">
            <Link color="white" onClick={onClickUserManagement}>
              ユーザー一覧
            </Link>
          </Box>
          <Link color="white" onClick={onClickSetting}>
            設定
          </Link>
        </Flex>
        <IconButton
          color="white"
          aria-label="mobile-icon"
          icon={<HamburgerIcon />}
          variant="unstyled"
          onClick={onClickIconButton}
          display={{ base: "block", md: "none" }}
        />
      </Flex>

      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickSetting={onClickSetting}
        onClickUserManagement={onClickUserManagement}
        onClickHome={onClickHome}
      />
    </>
  );
});
