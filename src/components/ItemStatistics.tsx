import ItemProps from "./Item";
import update from "../img/pencil.svg";
import remove from "../img/remove.svg";

interface ItemStatisticsProps {
  item: ItemProps;
  onUpdate: (item: ItemProps) => void;
  onRemove: (date: string) => void;
}

const ItemStatistics = ({ item, onUpdate, onRemove }: ItemStatisticsProps) => {
  return (
    <>
      <div className="stats__info-date">{item.date}</div>
      <div className="stats__info-km">{item.km}</div>
      <div className="stats__info-change">
        <img
          src={update}
          className="stats__info-update"
          alt="update"
          onClick={() => onUpdate(item)}
        />
        <img
          src={remove}
          className="stats__info-remove"
          alt="remove"
          onClick={() => onRemove(item.date)}
        />
      </div>
    </>
  );
};

export default ItemStatistics;
