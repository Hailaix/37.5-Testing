import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("works when you click on the right arrow", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

//Smoke test
it("renders", () => {
  render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
});

//Snapshot test
it("matches snapshot", () => {
  const { asFragment } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

it("Should be able to move forward and backward in the carousel", () => {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();

  // Should move back in the carousel
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
});

it("Should not have a left arrow on the first image, or right on the last", () => {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  // expect only the right arrow to be in the document
  expect(
    container.querySelector('.bi-arrow-left-circle')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('.bi-arrow-right-circle')
  ).toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect both arrows to be in the document
  expect(
    container.querySelector('.bi-arrow-left-circle')
  ).toBeInTheDocument();
  expect(rightArrow).toBeInTheDocument();

  // move forward in the carousel to the end
  fireEvent.click(rightArrow);

  // expect only the left arrow to be in the document
  expect(
    container.querySelector('.bi-arrow-left-circle')
  ).toBeInTheDocument();
  expect(rightArrow).not.toBeInTheDocument();
});