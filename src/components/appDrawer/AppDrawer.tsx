import useLogout from "@/shared/hooks/useLogout";
import Button from "@/shared/ui/button";
import Card from "@/shared/ui/card";
import Text from "@/shared/ui/text";
import { Link } from "react-router-dom";

const AppDrawer = () => {
  const { handleLogout } = useLogout();

  return (
    <Card className="w-[180px]" radius="sm" bgColor="theme">
      <Card.CardHeader bgColor="theme">
        <Text size="md" color="theme">
          <Link to={"/profile"} className="w-100 flex">
            Profile
          </Link>
        </Text>
      </Card.CardHeader>
      <Card.CardBody bgColor="theme" border="top">
        <Button
          variant="text"
          className=" h-auto md:h-auto py-0 lg:cursor-pointer"
          width="full"
          onClick={handleLogout}
        >
          <Text size="md" color="theme">
            Log out
          </Text>
        </Button>
      </Card.CardBody>
    </Card>
  );
};

export default AppDrawer;
