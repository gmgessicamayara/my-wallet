import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import { Container } from "./styles";

const Dashboard: React.FC = () => {
  const options = [
    {
      value: "Gessica",
      label: "Gessica",
    },
    {
      value: "Mayara",
      label: "Mayara",
    },
  ];

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#F79310">
        <SelectInput options={options} onChange={() => {} }/>
      </ContentHeader>
    </Container>
  );
};
export default Dashboard;
