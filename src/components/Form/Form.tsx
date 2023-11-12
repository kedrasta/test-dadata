import { useState } from "react";
import { SvgSelector } from "../../utils/SvgSelector/SvgSelector";
import styles from "./Form.module.css";
import { fetchData } from "../../store/api/getAddress";
import { IGetAddressData } from "../../pages/Search/Search";

interface FormProps {
  setAddressResult: (address: IGetAddressData | null) => void;
}

export const Form: React.FC<FormProps> = ({ setAddressResult }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = async () => {
    if (inputValue.trim().length > 2) {
      try {
        const result = await fetchData(inputValue);
        setAddressResult(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <input
        value={inputValue}
        onChange={handleChangeInput}
        className={styles.input}
        type="text"
        placeholder="Введите интересующий вас адрес"
      />
      <button onClick={handleButtonClick} className={styles.button}>
        <SvgSelector name={"searchButton"} />
        <span>Поиск</span>
      </button>
    </form>
  );
};
