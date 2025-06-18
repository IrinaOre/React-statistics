import ItemStatistics from "./ItemStatistics";
import ItemProps from "./Item";

interface StatisticsProps {
  list: ItemProps[];
  onUpdate: (item: ItemProps) => void;
  onRemove: (date: string) => void;
}

const Statistics = ({ list, onUpdate, onRemove }: StatisticsProps) => {
  const statItems = list.map((obj) => (
    <ItemStatistics
      key={obj.date}
      item={obj}
      onUpdate={onUpdate}
      onRemove={onRemove}
    />
  ));

  return (
    <div className="stats">
      <ul className="stats__title-list">
        <li className="stats__title-item">Дата (ДД.ММ.ГГ)</li>
        <li className="stats__title-item">Пройдено км</li>
        <li className="stats__title-item">Действия</li>
      </ul>
      <ul className="stats__info-list">{statItems}</ul>
    </div>
  );
};

export default Statistics;
