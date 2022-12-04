import { cleanup, render, screen } from "@testing-library/react";
import ListPagination from "../components/ListPagination";

afterEach(cleanup);

describe("ListPagination component", () => {
  it("Should not render if number of articles is less than 10", () => {
    render(<ListPagination articlesCount={9} />);

    
  });


});

