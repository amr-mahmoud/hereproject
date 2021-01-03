// import Enzyme, { shallow, mount } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// import DropBox from "./DropBox";
// import { getLocationData } from "../../API/locationApi";

// // import * as All from "../../API/locationApi";

// import { Sections } from "../../constants/constants";
// Enzyme.configure({ adapter: new Adapter() });

// const mockResolved = [
//   {
//     Name: "Arthur Arnold",
//     Latitude: 52.56222,
//     Longitude: 13.35125,
//     address: "berlin",
//   },
//   {
//     Name: "Ludwig Otto",
//     Latitude: 52.56526,
//     Longitude: 13.41645,
//     address: "cairo",
//   },

//   {
//     Name: "Pia Kaiser",
//     Latitude: 52.52003,
//     Longitude: 13.39533,
//     address: "cairo",
//   },
// ];

// // jest.mock("../../API/locationApi.js");
// // All.getLocationData = jest
// //   .fn()
// //   .mockImplementation(() => Promise.resolve(mockResolved));
// jest.mock("../../actions/locationApi.js", () => ({
//   getLocationData: () => Promise.resolve(mockResolved),
// }));
// function blobToFile(theBlob, fileName) {
//   theBlob.lastModifiedDate = new Date();
//   theBlob.name = fileName;
//   return theBlob;
// }

// describe("DropBox tests", () => {
//   let DropBoxWrapper;
//   const e = { preventDefault: () => {} };

//   const propsMock = {
//     setSection: jest.fn().mockReturnValue(() => "setSection have been Mocked"),
//     setList: jest.fn().mockReturnValue(() => "setList have been Mocked"),
//   };
//   beforeEach(() => {
//     jest.spyOn(e, "preventDefault");
//     DropBoxWrapper = shallow(<DropBox {...propsMock} />);
//   });
//   it("renders without crashing", async () => {
//     const obj = [
//       {
//         Name: "Arthur Arnold",
//         Latitude: 52.56222,
//         Longitude: 13.35125,
//       },
//       {
//         Name: "Ludwig Otto",
//         Latitude: 52.56526,
//         Longitude: 13.41645,
//       },
//       {
//         Name: "Pia Kaiser",
//         Latitude: 52.52003,
//         Longitude: 13.39533,
//       },
//     ];
//     const blob = new Blob([JSON.stringify(obj)], { type: "application/json" });
//     blob["lastModifiedDate"] = "";
//     blob["name"] = "filetest.json";
//     const file = blobToFile(blob, "filetest.json");
//     const fileList = {
//       0: file,
//       length: 1,
//       item: (index) => file,
//     };

//     // getLocationData.mockImplementation(() => Promise.resolve(mockResolved));

//     // const getLocationData = jest
//     //   .fn()
//     //   .mockImplementation(() => Promise.resolve(mockResolved));
//     // getLocationData.mockImplementation(() => Promise.resolve(mockResolved));

//     DropBoxWrapper.find(".drop-box").simulate("drop", {
//       preventDefault: () => {},
//       dataTransfer: { files: fileList },
//     });
//     await new Promise((r) => setTimeout(r, 2000));

//     expect(getLocationData).toHaveBeenCalledWith(obj);
//     expect(getLocationData).resolves.toEqual(mockResolved);
//     // expect(propsMock.setList).resolves.toEqual.toHaveBeenCalledWith(mockResolved);
//     // expect(propsMock.setSection).toHaveBeenCalledWith(Sections.List);
//   });
// });
