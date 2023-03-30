import React from "react";
import { shallow } from "enzyme";
import AdminDashboard from "./AdminDashboard";

describe("AdminDashboard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AdminDashboard />);
    expect(wrapper).toMatchSnapshot();
  });
});
