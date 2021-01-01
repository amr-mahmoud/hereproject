import axios from "axios";

const apiKey = "4CwEQaxA5OnFpekbxDT-I096-13RkgrY5tYxtZMnPWY";

export const getLocationData = async (input) => {
  let updatedInput = input;
  for (let index = 0; index < input.length; index++) {
    let data = [input[index].Latitude, input[index].Longitude];
    let result = await axios.get(
      `https://revgeocode.search.hereapi.com/v1/revgeocode?apiKey=${apiKey}&at=${data}&lang=en-US`
    );
    updatedInput[index].address = result.data.items[0].address.label;
  }
};
