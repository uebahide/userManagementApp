import {
  Spinner,
  Wrap,
  Center,
  WrapItem,
  useDisclosure
} from "@chakra-ui/react";
import { memo, useEffect, useState, VFC } from "react";
import { UseGetAllUsers } from "../../hooks/useGetAllUsers";

import { UserCard } from "../organisms/user/UserCard";
import { UserModal } from "../organisms/user/UserModal";
import { User } from "../type/User";

export const UserManagement: VFC = memo(() => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { getAllUsers, allUsers, loading } = UseGetAllUsers();
  const [userProfile, setUserProfile] = useState<User | null>(null);

  useEffect(() => {
    getAllUsers();
  }, []);

  const onClickUserProfile = (id: number) => {
    setUserProfile(allUsers.find((user) => user.id === id)!);
    onOpen();
  };

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap
          spacing={{ base: "10px", md: "20px" }}
          w={{ base: "230px", sm: "470px", md: "730px" }}
          my="10px"
          mx="auto"
        >
          {allUsers?.map((user) => (
            <WrapItem key={user.id}>
              <UserCard
                user={user}
                onClick={() => onClickUserProfile(user.id)}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}

      <UserModal isOpen={isOpen} onClose={onClose} user={userProfile} />
    </>
  );
});
