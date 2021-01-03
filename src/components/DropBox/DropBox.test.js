import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DropBox from "./DropBox";
import { getLocationData } from "../../actions/locationApi";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("../../actions/locationApi.js", () => ({
  getLocationData: jest.fn().mockImplementation(() => "getLocationData"),
}));

function blobToFile(theBlob, fileName) {
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
  it("on Drop operation test sends data to Api", async () => {
    const obj = [
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
      {
        Name: "Pia Kaiser",
        Latitude: 52.52003,
        Longitude: 13.39533,
      },
    ];
    const blob = new Blob([JSON.stringify(obj)], { type: "application/json" });
    blob["lastModifiedDate"] = "";
    blob["name"] = "filetest.json";
    const file = blobToFile(blob, "filetest.json");
    const fileList = {
      0: file,
      length: 1,
      item: (index) => file,
    };

    DropBoxWrapper.find(".drop-box").simulate("drop", {
      preventDefault: () => {},
      dataTransfer: { files: fileList },
    });

    await new Promise((r) => setTimeout(r, 2000));

    expect(getLocationData).toHaveBeenCalled();
    expect(getLocationData).toHaveBeenCalledWith(obj);
  });
});
