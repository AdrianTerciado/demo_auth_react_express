import React from "react";
import { shallow } from "enzyme";
import UserDashboard from "./UserDashboard";

describe("UserDashboard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UserDashboard />);
    expect(wrapper).toMatchSnapshot();
  });
});
