import { cleanup, render, screen } from "@testing-library/react";
import ArticleList from "../components/ArticleList";
import { articles } from "../mock/mockArticles";

// Mocked components
const mockArticlePreview = jest.fn();
const mockListPagination = jest.fn();

jest.mock("../components/ArticlePreview", () => (props) => {
  mockArticlePreview(props);
  return <mock-ArticlePreviewComponent data-testid="article-preview" />;
});

jest.mock("../components/ListPagination", () => (props) => {
  mockListPagination(props);
  return <mock-ListPaginationComponent />;
});

afterEach(cleanup);

describe("ArticleList component", () => {
  it("Should display a loading warning if the component receives an invalid article list", () => {
    render(<ArticleList articles={undefined} />);

    expect(screen.getByText("Loading...")).toBeTruthy();
  });

  it("Should display a warning if the list of articles is empty", () => {
    render(<ArticleList articles={[]} />);

    expect(screen.getByText("No articles are here... yet.")).toBeTruthy();
  });

  it("Should display a ArticlePreview for each article present in the list", () => {
    render(<ArticleList articles={articles} />);

    const renderedItems = screen.getAllByTestId("article-preview");

    expect(renderedItems.length).toEqual(articles.length);
  });

  test("If ArticleList passes an article through properties to the ArticlePreview", () => {
    render(<ArticleList articles={articles} />);

    expect(mockArticlePreview).toHaveBeenCalledWith(
      expect.objectContaining({
        article: articles[0],
      })
    );
    expect(mockArticlePreview).toHaveBeenCalledWith(
      expect.objectContaining({
        article: articles[1],
      })
    );
  });

  test("If ArticleList passes pagination data through properties to the ListPagination", () => {
    const onSetPage = () => {};

    render(
      <ArticleList
        articles={articles}
        articlesCount={articles.length}
        currentPage={0}
        onSetPage={onSetPage}
      />
    );

    expect(mockListPagination).toHaveBeenCalledWith(
      expect.objectContaining({
        articlesCount: articles.length,
        currentPage: 0,
        onSetPage,
      })
    );
  });
});
