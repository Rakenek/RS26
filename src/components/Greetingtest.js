// import Greeting from "./Greeting";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import "@testing-library/jest-dom";

// describe("Greeting component", () => {
//   test("renders Hello World as a text", () => {
//     render(<Greeting />);
//     const helloWorldElement = screen.getByText("Hello World", { exact: false });
//     expect(helloWorldElement).toBeInTheDocument();
//   });

//   test(`renders "It's good to see you!" if the button was NOT clicked`, () => {
//     render(<Greeting />);
//     const goodToSee = screen.getByText(`It's good to see you!`);
//     expect(goodToSee).toBeInTheDocument();
//   });

//   test('renders "Changed!" when the button was clicked', () => {
//     render(<Greeting />);

//     const buttonElement = screen.getByRole("button");
//     userEvent.click(buttonElement);

//     const changed = screen.getByText(`Changed!`);
//     expect(changed).toBeInTheDocument();
//   });

//   test(`does not renders "It's good to see you!" if the button was clicked`, () => {
//     render(<Greeting />);

//     const buttonElement = screen.getByRole("button");
//     userEvent.click(buttonElement);

//     const goodToSee = screen.queryByText(`It's good to see you!`);
//     expect(goodToSee).toBeNull();
//   });
// });
