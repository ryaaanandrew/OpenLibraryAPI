import CustomButton from "../CustomButton";
import { render, screen } from "@testing-library/react";

test("Custom Button should match snapshot", () => {
  const view = render(<CustomButton label={"Search"} />);

  expect(view).toMatchSnapshot();
  expect(screen.getByText("Search")).toBeTruthy();
});
