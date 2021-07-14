import { Button } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  loading?: boolean;
  disabled?: boolean;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, onClick, loading, disabled } = props;
  return (
    <Button
      bg="teal"
      color="white"
      _hover={{ opacity: 0.7 }}
      onClick={onClick}
      isLoading={loading}
      disabled={disabled || loading}
    >
      {children}
    </Button>
  );
});
