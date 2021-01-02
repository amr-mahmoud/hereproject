import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import userEvent from "@testing-library/user-event";
import DropBox from "./DropBox";
import { getLocationData } from "../../actions/locationApi";
Enzyme.configure({ adapter: new Adapter() });

jest.mock("../../actions/locationApi.js", () => ({
  getLocationData: jest.fn().mockImplementation(() => "getLocationData"),
}));

function blobToFile(theBlob, fileName) {
  //A Blob() is almost a File() - it's just missing the two properties below which we will add
  theBlob.lastModifiedDate = new Date();
  theBlob.name = fileName;
  return theBlob;
}

describe("DropBox tests", () => {
  let DropBoxWrapper;
  const e = { preventDefault: () => {} };

  const propsMock = {
    setSection: jest.fn().mockReturnValue(() => "setSection have been Mocked"),
    setList: jest.fn().mockReturnValue(() => "setList have been Mocked"),
  };
  beforeEach(() => {
    jest.spyOn(e, "preventDefault");
    DropBoxWrapper = shallow(<DropBox {...propsMock} />);
  });
  it("renders without crashing", async () => {
    // const file = new File(
    //   [
    //     {
    //       Name: "Arthur Arnold",
    //       Latitude: 52.56222,
    //       Longitude: 13.35125,
    //     },
    //   ],
    //   "data.json",
    //   {
    //     type: "application/json",
    //   }
    // );

    const obj = {
      Name: "Arthur Arnold",
      Latitude: 52.56222,
      Longitude: 13.35125,
    };
    const blob = new Blob([JSON.stringify(obj)], { type: "application/json" });
    blob["lastModifiedDate"] = "";
    blob["name"] = "filetest.json";
    const file = blobToFile(blob, "filetest.json");
    const fileList = {
      0: file,
      length: 1,
      item: (index) => file,
    };
    // jest.spyOn(global, "FileReader").mockImplementation(function () {
    //   this.onLoad = jest.fn();
    //   this.readAsText = jest.fn;
    // });
    // let reader = FileReader.mock.instances[0];
    DropBoxWrapper.find(".drop-box").simulate("drop", {
      preventDefault: () => {},
      dataTransfer: { files: fileList },
    });
    await new Promise((r) => setTimeout(r, 2000));

    expect(getLocationData).toHaveBeenCalled();

    // DropBoxWrapper.find(".drop-box").simulate("drop");
    // console.log(DropBoxWrapper.find(".drop-box").debug());
  });
});
