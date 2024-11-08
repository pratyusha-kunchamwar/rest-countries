import config from "../../config";
export const getData = async (endpoints) => {
  try {
    const response = await fetch(`${config.BASE_URL}${endpoints}`);
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const result = await response.json();
    return result;
  } catch (error) {
      return error;
  }
};
