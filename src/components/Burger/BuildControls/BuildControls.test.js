import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import BuildControl from "./BuildControl/BuildControl";
import BuildControls from "./BuildControls";

configure({ adapter: new Adapter() });

describe("BuildControls component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BuildControls />);
  });

  it("should render BuildControls element", () => {
    expect(wrapper.find(".BuildControls")).toHaveLength(1);
  });

  it("should render 4 BuildControl components", () => {
    expect(wrapper.find(BuildControl)).toHaveLength(4);
  });

  it("should render button", () => {
    expect(wrapper.find(".OrderButton")).toHaveLength(1);
  });
});
