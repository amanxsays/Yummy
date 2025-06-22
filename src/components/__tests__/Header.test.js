import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router";
import Header from "../Header";
import "@testing-library/jest-dom";


it("should have submit button", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const submitButton = screen.getByRole("button");
  expect(submitButton).toBeInTheDocument();
});
