import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";
import App from "./App";

jest.mock("./routes/Champions", () => () => <div>Champions</div>);

afterEach(cleanup);

describe("<App/>", () => {
  it("should render Champions page by default", () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    const questions = getByText(/Champions/i);

    expect(questions).toBeInTheDocument();
  });
});
