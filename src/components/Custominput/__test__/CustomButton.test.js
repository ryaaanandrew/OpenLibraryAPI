import { getByText, render, screen } from "@testing-library/react";
import CustomInput from "../CustomInput";

test("Custom Button should match snapshot", () => {
  const view = render(
    <CustomInput
      type={"text"}
      name={"search"}
      handleChange={(e) => jest.fn(e)}
      placeholder={"Search here"}
    />
  );

  expect(view).toMatchSnapshot();
});
