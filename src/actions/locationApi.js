import axios from "axios";
export const getLocationData = () => {
  fetch(
    `https://discover.search.hereapi.com/v1/discover?apiKey=3jrqPg29rurQRzN_TL2cioMVYHodcbeTUwaw_GqFH-A&lang=en-US&q=petrol+station&at=52.5228,13.4124`
  ).then((res) => console.log("fetch", res.json(), res.body));
};
