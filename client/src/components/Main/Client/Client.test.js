import React from "react";
import { shallow } from "enzyme";
import User from "./User";

describe("Client", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Client />);
    expect(wrapper).toMatchSnapshot();
  });
});
