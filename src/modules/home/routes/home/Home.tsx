import useDocumentTitle from "@/shared/hooks/useDocumentTitle";
import Card from "@/shared/ui/card";
import Container from "@/shared/ui/container/Container";
import Text from "@/shared/ui/text";

const Home = () => {
  useDocumentTitle("Home - Tuition");
  return (
    <Container width="md">
      <Card>
        <Card.CardBody>
          <Text color="white">Home</Text>
        </Card.CardBody>
      </Card>
    </Container>
  );
};
export default Home;
