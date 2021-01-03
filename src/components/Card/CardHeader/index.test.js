import React from "react";

import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { BsPencil, BsCheck, BsX } from "react-icons/bs";

import CardHeader from "./index";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

configure({ adapter: new Adapter() });

describe("<CardHeader />", () => {
  let wrapper;
  const initialState = {
    cards: [],
    isOnlyViewMode: false,
  };

  const mockStore = configureStore();
  const store = mockStore(initialState);

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <CardHeader />
      </Provider>
    );
  });

  it("should have a pencil", () => {
    expect(wrapper.find(BsPencil)).toBeTruthy();
  });

  it("should have a check", () => {
    expect(wrapper.find(BsCheck)).toBeTruthy();
  });

  it("should have an 'x' mark", () => {
    expect(wrapper.find(BsX)).toBeTruthy();
  });

  it("should have a wrapper div", () => {
    expect(wrapper.find(".card-header")).toBeTruthy();
  });
});
