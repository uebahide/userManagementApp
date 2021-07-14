import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack
} from "@chakra-ui/react";
import { memo, VFC, useContext, useState, useEffect, ChangeEvent } from "react";
import { User } from "../../type/User";
import { LoginUserContext } from "../../../provider/LoginUserProvider";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
};

export const UserModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose, user } = props;
  const { loginUser } = useContext(LoginUserContext);
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const onChangeFullName = (e: ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  useEffect(() => {
    setUserName(user?.username!);
    setFullName(user?.name!);
    setEmail(user?.email!);
    setPhone(user?.phone!);
  }, [user]);

  const onClickUpdate = () => alert("更新しました");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p={4}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={6}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input
                value={userName}
                onChange={onChangeUserName}
                isReadOnly={!loginUser?.isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input
                value={fullName}
                onChange={onChangeFullName}
                isReadOnly={!loginUser?.isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>MAIL</FormLabel>
              <Input
                value={email}
                onChange={onChangeEmail}
                isReadOnly={!loginUser?.isAdmin}
              />
            </FormControl>
            <FormControl paddingBottom={4}>
              <FormLabel>TEL</FormLabel>
              <Input
                value={phone}
                onChange={onChangePhone}
                isReadOnly={!loginUser?.isAdmin}
              />
            </FormControl>
          </Stack>
        </ModalBody>
        {loginUser?.isAdmin && (
          <ModalFooter>
            <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
});
