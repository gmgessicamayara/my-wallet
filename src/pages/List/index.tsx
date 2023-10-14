import { useParams } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import { Container, Filters } from "./styles";
import Content from "../../components/Content";
import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";
import listOfMonths from "../../utils/months";
import uuid from "react-uuid";

interface IData {
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}
const List: React.FC = () => {
  const [data, setData] = useState<IData[]>([]);
  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

  const [selectedFrequency, setSelectedFrequency] = useState<string[]>([
    "recorrente",
  ]);

  const { type } = useParams();

  const pageData = useMemo(() => {
    return type === "entry-balance"
      ? { title: "Entry Balance", lineColor: "#4E41F0", listData: gains }
      : { title: "Exit Balance", lineColor: "#e44c45", listData: expenses };
  }, [type]);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    pageData.listData.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year
      };
    });
  }, [pageData.listData]);

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month
      };
    });
  }, []);

  const handleFrequencyClick = (frenquency: string) => {
    const alredySelectted = selectedFrequency.findIndex(
      (item) => item === frenquency
    );

    if (alredySelectted >= 0) {
      const filtered = selectedFrequency.filter((item) => item != frenquency);
      setSelectedFrequency(filtered);
    } else {
      setSelectedFrequency((prev) => [...prev, frenquency]);
    }
  };

  useEffect(() => {
    const filteredDate = pageData.listData.filter((item) => {
      const date = new Date(item.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return (
        month === monthSelected &&
        year === yearSelected &&
        selectedFrequency.includes(item.frequency)
      );
    });

    const formattedDate = filteredDate.map((item) => {
      return {
        id: uuid(),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === "recorrente" ? "#4E41F0" : "#E44C4E",
      };
    });
    setData(formattedDate);
  }, [
    pageData.listData,
    monthSelected,
    yearSelected,
    data.length,
    selectedFrequency,
  ]);

  const handleMonthSelected = (month: string) =>{
    try{
        const parseMonth = Number(month);
        setMonthSelected(parseMonth);
    }catch(error){
        throw new Error('invalid month value. Is accept 0 - 12')
    }
}

const handleYearSelected = (year: string) =>{
    try{
        const parseYear = Number(year);
        setYearSelected(parseYear);
    }catch(error){
        throw new Error('invalid year value')
    }
}

  return (
    <Container>
      <ContentHeader title={pageData.title} lineColor={pageData.lineColor}>
        <SelectInput
          options={months}
          onChange={(e) => handleMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={(e) =>  handleYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>

      <Filters>
        <button
          type="button"
          className={`tag-filter tag-filter-recurrent 
          ${selectedFrequency.includes("recorrente") && "tag-actived"}`}
          onClick={() => handleFrequencyClick("recorrente")}
        >
          Recurrents
        </button>
        <button
          type="button"
          className={`tag-filter tag-filter-eventual
          ${selectedFrequency.includes("eventual") && "tag-actived"}`}
          onClick={() => handleFrequencyClick("eventual")}
        >
          Eventual
        </button>
      </Filters>

      <Content>
        {data.map((item) => (
          <HistoryFinanceCard
            key={item.id}
            tagColor={item.tagColor}
            title={item.description}
            subtitle={item.dateFormatted}
            amount={item.amountFormatted}
          />
        ))}
      </Content>
    </Container>
  );
};
export default List;
