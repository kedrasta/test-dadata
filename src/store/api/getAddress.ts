const url =
  "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";

const token = "2aff7c52f02d7de720ec618691e27618d1766f15";

export const fetchData = async (query: string) => {
  const requestOptions: RequestInit = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Token " + token,
    },
    body: JSON.stringify({ query: query, count: 20 }),
  };

  try {
    const response = await fetch(url, requestOptions);
    const result = await response.text();
    return JSON.parse(result);
  } catch (error) {
    console.error("error", error);
  }
};
