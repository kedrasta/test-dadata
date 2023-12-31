import { useState } from "react";
import { Form } from "../../components/Form/Form";
import styles from "./Search.module.css";

export interface IDataAddress {
  area: null;
  area_fias_id: null;
  area_kladr_id: null;
  area_type: null;
  area_type_full: null;
  area_with_type: null;
  beltway_distance: null;
  beltway_hit: null;
  block: null;
  block_type: null;
  block_type_full: null;
  capital_marker: string;
  city: null | string; // город
  city_area: null | string;
  city_district: null;
  city_district_fias_id: null;
  city_district_kladr_id: null;
  city_district_type: null;
  city_district_type_full: null;
  city_district_with_type: null;
  city_fias_id: null | string;
  city_kladr_id: null | string;
  city_type: null;
  city_type_full: null | string;
  city_with_type: null;
  country: string; // страна
  country_iso_code: string;
  divisions: null;
  entrance: null;
  federal_district: string;
  fias_actuality_state: string;
  fias_code: null;
  fias_id: string;
  fias_level: string;
  flat: null;
  flat_area: null;
  flat_cadnum: null;
  flat_fias_id: null;
  flat_price: null;
  flat_type: null;
  flat_type_full: null;
  floor: null;
  geo_lat: null | string;
  geo_lon: null | string;
  geoname_id: string;
  history_values: null;
  house: null | string;
  house_cadnum: null;
  house_fias_id: null | string;
  house_kladr_id: null | string;
  house_type: null | string;
  house_type_full: null | string;
  kladr_id: string;
  metro: null;
  okato: string;
  oktmo: string;
  postal_box: null;
  postal_code: null;
  qc: null;
  qc_complete: null;
  qc_geo: string;
  qc_house: null;
  region: string;
  region_fias_id: string;
  region_iso_code: string;
  region_kladr_id: string;
  region_type: string;
  region_type_full: string;
  region_with_type: string;
  room: null;
  room_cadnum: null;
  room_fias_id: null;
  room_type: null;
  room_type_full: null;
  settlement: null;
  settlement_fias_id: null;
  settlement_kladr_id: null;
  settlement_type: null;
  settlement_type_full: null;
  settlement_with_type: null;
  source: null;
  square_meter_price: null;
  stead: null;
  stead_cadnum: null;
  stead_fias_id: null;
  stead_type: null;
  stead_type_full: null; // слово улица
  street: null | string; // Название улицы
  street_fias_id: null | string;
  street_kladr_id: null | string;
  street_type: null | string;
  street_type_full: null | string;
  street_with_type: null | string;
  tax_office: string;
  tax_office_legal: string;
  timezone: null;
  unparsed_parts: null;
}

export interface IGetAddressData {
  suggestions: {
    data: IDataAddress;
    unrestricted_value: string;
    value: string;
  }[];
}

const Search = () => {
  const [addressResult, setAddressResult] = useState<IGetAddressData | null>(
    null
  );

  return (
    <div className={styles.main}>
      <h1>Поиск адресов</h1>
      <span>Введите интересующий вас адрес</span>
      <Form setAddressResult={setAddressResult} />
      {addressResult?.suggestions ? (
        <div className={styles.content}>
          <h1>Адреса</h1>
          {addressResult?.suggestions?.map((item) => (
            <div key={item.value}>
              <hr className={styles.hr}></hr>
              <span className={styles.result}>{item.value}</span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Search;
