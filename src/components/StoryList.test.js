import React from "react";
import { render, findByText } from "@testing-library/react";
import StoryList from "./StoryList";

const stories = [
  {
    byline: "By HELENE COOPER, RALPH BLUMENTHAL and LESLIE KEAN",
    title: "‘Wow, What Is That?’ Navy Pilots Report Unexplained Flying Objects",
    published_date: "2019-05-26"
  }
];

test("renders into StoryList", () => {
  render(<StoryList stories={stories} onStory={null} />);
  expect(findByText("NY Times Most Popular")).toBeTruthy();
});
