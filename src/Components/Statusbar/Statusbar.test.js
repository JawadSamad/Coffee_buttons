import React from "react";
import Statusbar from "./Statusbar";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

describe("<Statusbar />", () => {
    it("Should display name", () => {
        const wrapper = shallow(<Statusbar />);
        expect(wrapper.find(Statusbar)).toHaveValue();
    });
});
