import React from "react";
import { render, findByText } from "@testing-library/react";
import Story from "./Story";

const story = {
  byline: "By HELENE COOPER, RALPH BLUMENTHAL and LESLIE KEAN",
  title: "‘Wow, What Is That?’ Navy Pilots Report Unexplained Flying Objects",
  published_date: "2019-05-26",
  media: [
    {
      caption:
        "Navy pilots from the VFA-11 “Red Rippers” squadron aboard the aircraft carrier Theodore Roosevelt in 2015. The squadron began noticing strange objects just after the Navy upgraded the radar systems on its F/A-18 fighter planes.",
      "media-metadata": [
        {
          url:
            "https://static01.nyt.com/images/2019/05/27/world/26everest2-print/26everest2-print-square320-v2.jpg",
          format: "square320",
          height: 320,
          width: 320
        }
      ]
    }
  ]
};
test("renders into Story", () => {
  const { container } = render(<Story story={story} onBack={null} />);
  expect(
    findByText(
      "‘Wow, What Is That?’ Navy Pilots Report Unexplained Flying Objects"
    )
  ).toBeTruthy();
  expect(container).toMatchSnapshot();
});
