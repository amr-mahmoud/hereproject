import { getLocationData } from "./locationApi";
import axios from "axios";
jest.mock("axios");

let input = [
  {
    Name: "Arthur Arnold",
    Latitude: 52.56222,
    Longitude: 13.35125,
  },
  {
    Name: "Ludwig Otto",
    Latitude: 52.56526,
    Longitude: 13.41645,
  },
];
describe("API testing", () => {
  it("getLocationData api returns data correctly from APi", async () => {
    const data = { data: { items: [{ address: { label: "giza" } }] } };
    const data2 = { data: { items: [{ address: { label: "paris" } }] } };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    axios.get.mockImplementationOnce(() => Promise.resolve(data2));
    const result = [
      {
        Latitude: 52.56222,
        Longitude: 13.35125,
        Name: "Arthur Arnold",
        address: "giza",
      },
      {
        Latitude: 52.56526,
        Longitude: 13.41645,
        Name: "Ludwig Otto",
        address: "paris",
      },
    ];
    await expect(getLocationData(input)).resolves.toEqual(result);
  });
});
