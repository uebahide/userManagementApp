import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

type Props = {
  title: string;
  status: "info" | "warning" | "success" | "error";
};

export const useMessage = () => {
  const toast = useToast();

  const showMessage = useCallback((props: Props) => {
    const { title, status } = props;
    toast({
      title: title,
      status: status,
      isClosable: true,
      duration: 2000,
      position: "top"
    });
  }, []);

  return { showMessage };
};
