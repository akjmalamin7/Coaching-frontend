import Text from "../text";

interface Props {
  message?: string;
}
const Message = ({ message }: Props) => {
  return (
    <div>
      <Text element="h3" color="theme" size="2xl" textAlign="center">
        {message}
      </Text>
    </div>
  );
};

export default Message;
