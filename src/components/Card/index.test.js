import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Card from "./index";

configure({ adapter: new Adapter() });

describe("<Card />", () => {
  it("should have one wrapper div", () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.find("div")).toHaveLength(1);
  });
});
