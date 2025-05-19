import useDocumentTitle from "@/shared/hooks/useDocumentTitle";
import Button from "@/shared/ui/button";
import Card from "@/shared/ui/card";
import Container from "@/shared/ui/container/Container";
import Input from "@/shared/ui/input";
import InputFile from "@/shared/ui/inputFile";
import { Select } from "@/shared/ui/select";
import Text from "@/shared/ui/text";
import TextArea from "@/shared/ui/textArea";

const Home = () => {
  useDocumentTitle("Home - Tuition");
  return (
    <Container width="md">
      <Card bgColor="theme">
        <Card.CardBody bgColor="theme">
          <Text color="theme">Home</Text>
          <Input bgColor="theme" size="sm" placeholder="Input" />
          <Select size="sm" bgColor="theme" options={[{ label: "sdsafd", value: "asdfsf" }]} />
          <TextArea bgColor="theme" placeholder="Your message" />
          <InputFile bgColor="theme" size="sm" />
          <Button variant="fill" color="theme" width="full">
            Button
          </Button>
        </Card.CardBody>
      </Card>
    </Container>
  );
};
export default Home;
