import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import ArticleList from "../components/ArticleList";

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe("ArticleList component", () => {
  it("should render a load text if the list of articles is empty", () => {
    render(<ArticleList articles={undefined} />);

    expect(screen.getByText("Loading...")).toBeTruthy();
  });
});
