import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import { Container,  Filters } from './styles';
import Content from "../../components/Content";


const List: React.FC = () => {
  const months = [
    { value: 7, label: "Julho" },
    { value: 8, label: "Agosto" },
    { value: 9, label: "Setembro" },
    { value: 10, label: "Outubro" },
    { value: 11, label: "Novembro" },
    { value: 12, label: "Dezembro" },
  ];

  const years = [
    { value: 2023, label: 2023 },
    { value: 2022, label: 2022 },
  ];

  return (
    <Container>
      <ContentHeader title="OUT" lineColor="#E44C4E">
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <Filters>
        <button type="button" className="tag-filter tag-filter-recurrent">
           Recurrents
        </button>
        <button type="button" className="tag-filter tag-filter-eventual">
           Eventual
        </button>
      </Filters>

      <Content>
        <HistoryFinanceCard
          tagColor="#E44C5E"
          title="Conta de luz"
          subtitle="09/09/2023"
          amount="R$ 230"
        />

        <HistoryFinanceCard
          tagColor="#E44C5E"
          title="Conta de água"
          subtitle="09/09/2023"
          amount="R$ 130"
        />

        <HistoryFinanceCard
          tagColor="#E44C5E"
          title="Conta de gás"
          subtitle="09/09/2023"
          amount="R$ 100"
        />

        <HistoryFinanceCard
          tagColor="#E44C5E"
          title="Conta de gás"
          subtitle="09/09/2023"
          amount="R$ 100"
        />

        <HistoryFinanceCard
          tagColor="#E44C5E"
          title="Conta de gás"
          subtitle="09/09/2023"
          amount="R$ 100"
        />
        <HistoryFinanceCard
          tagColor="#E44C5E"
          title="Conta de gás"
          subtitle="09/09/2023"
          amount="R$ 100"
        />
        <HistoryFinanceCard
          tagColor="#E44C5E"
          title="Conta de gás"
          subtitle="09/09/2023"
          amount="R$ 100"
        />
        <HistoryFinanceCard
          tagColor="#E44C5E"
          title="Conta de gás"
          subtitle="09/09/2023"
          amount="R$ 100"
        />
        <HistoryFinanceCard
          tagColor="#E44C5E"
          title="Conta de gás"
          subtitle="09/09/2023"
          amount="R$ 100"
        />
        <HistoryFinanceCard
          tagColor="#E44C5E"
          title="Conta de gás"
          subtitle="09/09/2023"
          amount="R$ 100"
        />
        <HistoryFinanceCard
          tagColor="#E44C5E"
          title="Conta de gás"
          subtitle="09/09/2023"
          amount="R$ 100"
        />
        <HistoryFinanceCard
          tagColor="#E44C5E"
          title="Conta de gás"
          subtitle="09/09/2023"
          amount="R$ 100"
        />
        <HistoryFinanceCard
          tagColor="#E44C5E"
          title="Conta de gás"
          subtitle="09/09/2023"
          amount="R$ 100"
        />
        <HistoryFinanceCard
          tagColor="#E44C5E"
          title="Conta de gás"
          subtitle="09/09/2023"
          amount="R$ 100"
        />
        <HistoryFinanceCard
          tagColor="#E44C5E"
          title="Conta de gás"
          subtitle="09/09/2023"
          amount="R$ 100"
        />
        <HistoryFinanceCard
          tagColor="#E44C5E"
          title="Conta de gás"
          subtitle="09/09/2023"
          amount="R$ 100"
        />
        <HistoryFinanceCard
          tagColor="#E44C5E"
          title="Conta de gás"
          subtitle="09/09/2023"
          amount="R$ 100"
        />
        <HistoryFinanceCard
          tagColor="#E44C5E"
          title="Conta de gás"
          subtitle="09/09/2023"
          amount="R$ 100"
        />
      </Content>
    </Container>
  );
};
export default List;
