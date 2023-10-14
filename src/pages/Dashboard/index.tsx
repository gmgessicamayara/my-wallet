import { useState, useMemo } from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import { Container, Content } from "./styles";
import listOfMonths from "../../utils/months";
import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import Walletbox from "../../components/walletbox";

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

  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  );
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  );

  const [selectedFrequency, setSelectedFrequency] = useState<string[]>([
    "recorrente",
  ]);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    [...expenses, ...gains].forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year,
      };
    });
  }, []);

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      };
    });
  }, []);

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month);
      setMonthSelected(parseMonth);
    } catch (error) {
      throw new Error("invalid month value. Is accept 0 - 12");
    }
  };

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year);
      setYearSelected(parseYear);
    } catch (error) {
      throw new Error("invalid year value");
    }
  };

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#F79310">
        <SelectInput
          options={months}
          onChange={(e) => handleMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={(e) => handleYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>

      <Content>
        <Walletbox
          title="Balance"
          amount={2000}
          footerlabel="atualizado com base nas
          entradas"
          icon="dollar"
          color="#4E41F0"
        />

        <Walletbox
          title="Entry"
          amount={5000}
          footerlabel="atualizado com base nas
          entradas"
          icon="arrowUp"
          color="#F7931B"
        />

        <Walletbox
          title="Exit"
          amount={3000}
          footerlabel="atualizado com base nas
          saídas"
          icon="arrowDown"
          color="#E44C4E"
        />
      </Content>
    </Container>
  );
};
export default Dashboard;
