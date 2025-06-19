import ItemProps from "./Item";

interface FormProps {
  form: ItemProps;
  onInputChange: (currentForm: ItemProps) => void;
  onSubmit: (newForm: ItemProps) => void;
}

const Form = ({ form, onInputChange, onSubmit }: FormProps) => {
  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const currentForm = { ...form, [name]: value.trim().replace(",", ".") };
    onInputChange(currentForm);
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    validateForm();
  };

  const validateForm = () => {
    if (!Number(form.km) || Number(form.km) < 0) {
      onSubmit({ ...form, km: "" });
      return;
    }

    onSubmit({ ...form });
  };

  return (
    <form className="form" onSubmit={submitForm}>
      <div className="form__date">
        <label htmlFor="date" className="form__date-label">
          Дата (ДД.ММ.ГГ):
        </label>
        <input
          id="date"
          className="form__date-input"
          type="date"
          minLength={8}
          maxLength={8}
          placeholder="Введите верно дату ..."
          required
          name="date"
          onChange={changeInput}
          value={form.date}
        />
      </div>
      <div className="form__km">
        <label htmlFor="km" className="form__km-label">
          Пройдено км:
        </label>
        <input
          id="km"
          className="form__km-input"
          type="number"
          min="0"
          max="6"
          placeholder="Пройденное расстояние в км ..."
          required
          name="km"
          onChange={changeInput}
          value={form.km}
        />
      </div>
      <button className="form__button" type="submit">
        ОК
      </button>
    </form>
  );
};

export default Form;
