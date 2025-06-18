import ItemProps from "./Item";

const SortDates = (dateList: ItemProps[]) => {
  dateList.sort((first: ItemProps, second: ItemProps) => {
    const firstDate = 20 + first.date.split(".").reverse().join("-");
    const secondDate = 20 + second.date.split(".").reverse().join("-");
    return Date.parse(secondDate) - Date.parse(firstDate);
  });
};

export default SortDates;
