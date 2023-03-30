import React from "react";
import { shallow } from "enzyme";
import RoleManager from "./RoleManager";

describe("RoleManager", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<RoleManager />);
    expect(wrapper).toMatchSnapshot();
  });
});
