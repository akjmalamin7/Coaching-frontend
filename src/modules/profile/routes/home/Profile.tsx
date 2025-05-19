import useDocumentTitle from "@/shared/hooks/useDocumentTitle";
import Card from "@/shared/ui/card";
import Container from "@/shared/ui/container/Container";
import Text from "@/shared/ui/text";

const Profile = () => {
  useDocumentTitle("Profile - Tuition");
  return (
    <Container width="md">
      <Card>
        <Card.CardBody>
          <Text color="white">Profile</Text>
        </Card.CardBody>
      </Card>
    </Container>
  );
};
export default Profile;
