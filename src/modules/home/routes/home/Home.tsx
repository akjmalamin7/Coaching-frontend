import useDocumentTitle from "@/shared/hooks/useDocumentTitle";
import Card from "@/shared/ui/card";
import Container from "@/shared/ui/container/Container";

const Home = () => {
  useDocumentTitle("Home - Tuition");
  return (
    <Container width="md">
      <Card bgColor="theme">
        <Card.CardBody bgColor="theme">s</Card.CardBody>
      </Card>
    </Container>
  );
};
export default Home;
