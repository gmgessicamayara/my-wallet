import { Container, ToggleLabel, ToggleSelector } from "./styles";
const Toggle: React.FC = () => {
  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector
        checked
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={() => console.log("Changed")}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  );
};

export default Toggle;
