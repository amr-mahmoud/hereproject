import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import DropBox from "./components/DropBox/DropBox";
import MembersList from "./components/MembersList/MembersList";
import { DisplayMapFC } from "./components/DisplayMapFc/DisplayMapFc";
import Header from "./components/Header/Header";
import { Sections } from "./constants/constants";
Enzyme.configure({ adapter: new Adapter() });

describe("App tests", () => {
  let AppWrapper;
  beforeEach(() => {
    AppWrapper = shallow(<App />);
  });
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("check default landing section is DropBox", () => {
    // console.log(AppWrapper.debug());
    expect(AppWrapper.find(DropBox)).toBeTruthy();
    expect(AppWrapper.find(MembersList)).toEqual({});
    expect(AppWrapper.find(DisplayMapFC)).toEqual({});
  });

  it("check Section navigation and header implementation is  Working fine", () => {
    AppWrapper = shallow(<App />);

    //make sure nav bar items in list is rendered correctly
    //check navigation to the section is done is ok
    //first list
    let HeaderItemMock = AppWrapper.find(Header)
      .dive()
      .find(".nav-bar__item")
      .at(0);

    HeaderItemMock.simulate("click");
    expect(AppWrapper.find(MembersList)).toBeTruthy();
    expect(HeaderItemMock.text()).toEqual(Object.values(Sections)[0]);

    HeaderItemMock = AppWrapper.find(Header)
      .dive()
      .find(".nav-bar__item")
      .at(1);
    HeaderItemMock.simulate("click");
    expect(AppWrapper.find(DropBox)).toBeTruthy();
    expect(HeaderItemMock.text()).toEqual(Object.values(Sections)[1]);

    HeaderItemMock = AppWrapper.find(Header)
      .dive()
      .find(".nav-bar__item")
      .at(2);
    HeaderItemMock.simulate("click");
    expect(AppWrapper.find(DisplayMapFC)).toBeTruthy();
    expect(HeaderItemMock.text()).toEqual(Object.values(Sections)[2]);

    // console.log(headerWrapper.find(".nav-bar__item").at(0).debug());
    // expect(headerWrapper.find("nav-bar__item").toHaveLength(3)).toBeTruthy();
    // expect(AppWrapper.find(DropBox)).toBeTruthy();
    // expect(AppWrapper.find(MembersList)).toEqual({});
    // expect(AppWrapper.find(DisplayMapFC)).toEqual({});
  });
});
