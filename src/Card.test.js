import { render } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

const testimg = TEST_IMAGES[0];

//Smoke Test
it("renders", () => {
    render(
        <Card
        caption={testimg.caption}
        src={testimg.src}
        currNum={0}
        totalNum={TEST_IMAGES.length}
        />
    );
});

//Snapshot Test
it("matches snapshot", () => {
    const { asFragment } = render(
        <Card
        caption={testimg.caption}
        src={testimg.src}
        currNum={0}
        totalNum={TEST_IMAGES.length}
        />
    );
    expect(asFragment()).toMatchSnapshot();
});