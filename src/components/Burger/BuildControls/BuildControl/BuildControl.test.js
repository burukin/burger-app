import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import BuildControl from "./BuildControl";

configure({ adapter: new Adapter() });

describe("BuildControl component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BuildControl />);
  });

  it("should render BuildControl element", () => {
    expect(wrapper.find(".BuildControl")).toHaveLength(1);
  });

  it("should render Label element", () => {
    expect(wrapper.find(".Label")).toHaveLength(1);
  });

  it("should render Less button", () => {
    expect(wrapper.find(".Less")).toHaveLength(1);
  });

  it("should render More button", () => {
    expect(wrapper.find(".More")).toHaveLength(1);
  });
});
