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
    if (!form.date.match(/\d{2}\.\d{2}\.\d{2}/)) {
      onSubmit({ ...form, date: "" });
      return;
    }
    const inputDate = 20 + form.date.split(".").reverse().join("-");

    const localDate = new Date(
      new Date().getTime() - new Date().getTimezoneOffset() * 1000 * 60
    )
      .toISOString()
      .slice(0, 10);

    if (
      isNaN(Date.parse(inputDate)) ||
      Date.parse(inputDate) > Date.parse(localDate)
    ) {
      onSubmit({ ...form, date: "" });
      return;
    }

    if (!Number(form.km)) {
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
          type="text"
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
          type="text"
          maxLength={6}
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
