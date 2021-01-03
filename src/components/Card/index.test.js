import "jsdom-global/register";

import React, { useState as useStateMock } from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Card } from "./index";
import CardHeader from "./CardHeader";
import * as reactRedux from "react-redux";

configure({ adapter: new Adapter() });

const mockDispatch = jest.fn();
const mockHistoryPush = jest.fn();
const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
}));
jest.mock("react", () => ({
  useState: jest.fn(),
}));
jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("<Card />", () => {
  const setState = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Card />);
    useStateMock.mockImplementation((init) => [init, setState]);
  });

  it("should render", () => {
    expect(setState).toHaveBeenCalledTimes(1);
  });

  it("should render component", () => {
    expect(CardHeader).toBeTruthy();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
});
