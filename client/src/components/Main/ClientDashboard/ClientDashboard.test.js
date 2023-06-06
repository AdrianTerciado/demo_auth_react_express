import React from "react";
import { shallow } from "enzyme";
import ClientDashboard from "./ClientDashboard";

describe("ClientDashboard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ClientDashboard />);
    expect(wrapper).toMatchSnapshot();
  });
});
