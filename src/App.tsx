import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ItemProps from "./components/Item";
import Statistics from "./components/Statistics";
import SortDates from "./components/SortDates";

const App = () => {
  const [form, setForm] = useState<ItemProps>({ date: "", km: "" });
  const [list, setList] = useState<ItemProps[]>([]);

  const handleInputChange = (currentForm: ItemProps) => {
    setForm(currentForm);
  };

  const handleSubmit = (newForm: ItemProps) => {
    if (newForm.date === "" || newForm.km === "") {
      setForm(newForm);
      return;
    }

    const newList = createNewList(newForm);
    setList(newList);
    setForm({ date: "", km: "" });
  };

  const createNewList = (newForm: ItemProps) => {
    let newList: ItemProps[] = [];
    const km = (+newForm.km).toFixed(1);

    if (list.length) {
      const idx = list.findIndex((el) => el.date === newForm.date);
      if (idx === -1) {
        newList = [...list, { ...newForm, km }];
        SortDates(newList);
      } else {
        newList = list.map((item, index) => {
          if (index === idx) {
            item.km = (Number(item.km) + Number(km)).toFixed(1);
          }
          return item;
        });
      }
    } else {
      newList = [{ ...newForm, km }];
    }

    return newList;
  };

  const handleUpdateItem = (item: ItemProps) => {
    setList(list.filter((el) => el.date !== item.date));
    setForm(item);
  };

  const handleRemoveItem = (date: string) => {
    setList(list.filter((el) => el.date !== date));
  };

  return (
    <>
      <Form
        form={form}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
      <Statistics
        list={list}
        onUpdate={handleUpdateItem}
        onRemove={handleRemoveItem}
      />
    </>
  );
};

export default App;
