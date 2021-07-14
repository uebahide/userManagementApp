import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay
} from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
  const {
    isOpen,
    onClose,
    onClickHome,
    onClickUserManagement,
    onClickSetting
  } = props;

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody p="0">
          <Button onClick={onClickHome} w="100%">
            ホーム
          </Button>
          <Button onClick={onClickUserManagement} w="100%">
            ユーザー一覧
          </Button>
          <Button onClick={onClickSetting} w="100%">
            設定
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});
