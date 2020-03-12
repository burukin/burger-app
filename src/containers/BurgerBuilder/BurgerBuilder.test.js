import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { BurgerBuilder } from "./BurgerBuilder";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import Spinner from "../../components/UI/Spinner/Spinner";

configure({ adapter: new Adapter() });

describe("BurgerBuilder component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder />);
  });

  it("should render Modal", () => {
    expect(wrapper.find(Modal)).toHaveLength(1);
  });

  it("should render BuildControls when ingredients are passed", () => {
    wrapper.setProps({ ingredients: { salad: 0 } });
    expect(wrapper.find(BuildControls)).toHaveLength(1);
  });

  it("should render Burger when ingredients are passed", () => {
    wrapper.setProps({ ingredients: { salad: 0 } });
    expect(wrapper.find(Burger)).toHaveLength(1);
  });

  it("should render message if error is true and no ingredients passed", () => {
    wrapper.setProps({ error: true, ingredients: null });
    expect(wrapper.contains(<p>Ingredients can't be loaded!</p>)).toEqual(true);
  });

  it("should render Spinner if error is false and no ingredients passed", () => {
    wrapper.setProps({ error: false, ingredients: null });
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });
});
