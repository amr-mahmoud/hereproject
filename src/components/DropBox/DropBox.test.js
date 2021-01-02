import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import userEvent from "@testing-library/user-event";
import DropBox from "./DropBox";

Enzyme.configure({ adapter: new Adapter() });

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
  it("renders without crashing", () => {
    const file = new File(
      [
        {
          Name: "Arthur Arnold",
          Latitude: 52.56222,
          Longitude: 13.35125,
        },
      ],
      "data.json",
      {
        type: "application/json",
      }
    );
    DropBoxWrapper.find(".drop-box").simulate("drop", {
      preventDefault: () => {},
      dataTransfer: { files: [file] },
    });
    // DropBoxWrapper.find(".drop-box").simulate("drop");
    console.log(DropBoxWrapper.find(".drop-box").debug());
  });
});
