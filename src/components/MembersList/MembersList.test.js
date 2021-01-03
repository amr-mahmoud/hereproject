import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MembersList from "./MembersList";

Enzyme.configure({ adapter: new Adapter() });

describe("Members List tests", () => {
  let MembersListWrapper;

  it("Check empty List returns correct message", async () => {
    const propsMock = {
      list: [],
    };
    MembersListWrapper = shallow(<MembersList {...propsMock} />);
    expect(MembersListWrapper.text()).toEqual("No Members yet");
  });

  it("Check  List returns correct Messages", async () => {
    const mockResolved = [
      {
        Name: "Arthur Arnold",
        Latitude: 52.56222,
        Longitude: 13.35125,
        address: "berlin",
      },
      {
        Name: "Ludwig Otto",
        Latitude: 52.56526,
        Longitude: 13.41645,
        address: "cairo",
      },

      {
        Name: "Pia Kaiser",
        Latitude: 52.52003,
        Longitude: 13.39533,
        address: "cairo",
      },
    ];
    const propsMock = {
      list: [...mockResolved],
    };
    MembersListWrapper = shallow(<MembersList {...propsMock} />);

    //correct number
    expect(MembersListWrapper.find(".list-item__name")).toHaveLength(
      mockResolved.length
    );

    //correct data
    expect(MembersListWrapper.find(".list-item__name").at(0).text()).toEqual(
      mockResolved[0].Name
    );
  });
});
