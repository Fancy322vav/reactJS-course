import "jsdom-global/register";

import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Card } from "./index";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import configureStore from "redux-mock-store";
import * as reactRedux from "react-redux";

configure({ adapter: new Adapter() });

const props = {
  id: "some_id",
  editMode: true,
  isChecked: false,
};

describe("<Card />", () => {
  let wrapper;
  let instance;
  const initialState = {
    cards: [],
    isOnlyViewMode: false,
  };
  jest.mock("react-router-dom", () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
  }));
  const mockStore = configureStore();
  const store = mockStore(initialState);
  const setState = jest.fn();
  const useStateMock = jest.spyOn(React, "useState");
  useStateMock.mockImplementation((init) => [init, setState]);
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

  beforeEach(() => {
    wrapper = shallow(<Card {...props} />);
    instance = wrapper.instance();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should have one wrapper div", () => {
    expect(wrapper.find("div")).toHaveLength(1);
  });

  it("should have CardHeader", () => {
    expect(wrapper.find(CardHeader)).toBeTruthy();
  });

  it("should have CardBody", () => {
    expect(wrapper.find(CardBody)).toBeTruthy();
  });

  it("should have editMode prop", () => {
    expect(wrapper.children(0).props("editMode")).toBeTruthy();
  });
});
