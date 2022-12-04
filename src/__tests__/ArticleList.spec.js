import { cleanup, render, screen } from "@testing-library/react";
import ArticleList from "../components/ArticleList";
import { articles } from "../mock/mockArticles";

// Mocked components
const mockArticlePreview = jest.fn();
const mockListPagination = jest.fn();

// Fazendo um mock do componente filho para a verificação da passagem de props.
jest.mock("../components/ArticlePreview", () => (props) => {
  mockArticlePreview(props);
  return <mock-ArticlePreviewComponent data-testid="article-preview" />;
});

// Fazendo um mock do componente filho para a verificação da passagem de props.
jest.mock("../components/ListPagination", () => (props) => {
  mockListPagination(props);
  return <mock-ListPaginationComponent />;
});

afterEach(cleanup);

// Criando um 'contexto' de testes, todos os testes realizados estão relacionados com o componente ArticleList.
describe("ArticleList component", () => {
  // Caso de teste 01: Recebendo uma lista de artigos inválida/não recebida ainda.
  it("Should display a loading warning if the component receives an invalid article list", () => {
    // Quando renderizar Articlelist, passando um lista de artigos inválida/não recebida ...
    render(<ArticleList articles={undefined} />);

    // ... espero que exista um aviso em tela que informe o loading.
    expect(screen.getByText("Loading...")).toBeTruthy();
  });

  // Caso de testes 02: Recebendo uma lista de artigos vazias
  it("Should display a warning if the list of articles is empty", () => {
    // Quando renderizar Articlelist, passando um lista de artigos vazia ...
    render(<ArticleList articles={[]} />);

    // ... espero que exista um aviso em tela que informe que ainda não existem artigos publicados.
    expect(screen.getByText("No articles are here... yet.")).toBeTruthy();
  });

  // Caso de teste 03: Renderizando um ArticlePreview para cada item na lista de artigos.
  it("Should display a ArticlePreview for each article present in the list", () => {
    // Quando renderizar Articlelist, passando um lista de artigos válida e não vazia ...
    render(<ArticleList articles={articles} />);

    const renderedItems = screen.getAllByTestId("article-preview");

    // ... espero que o núemero de ArticlePreview renderizados em tela seja igual ao de artigos presentes na lista de artigos
    expect(renderedItems.length).toEqual(articles.length);
  });

  // Caso de teste 04: Passando corretamente as propriedades para o componetente filho <ArticlePreview />
  test("If ArticleList passes an article through properties to the ArticlePreview", () => {
    // Quando renderizar Articlelist, passando um lista de artigos válida e não vazia ...
    render(<ArticleList articles={articles} />);

    // ... espero que cada ArticlePreview receba as propriedades correspontes aos itens da lista.
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

  // Caso de teste 04: Passando corretamente as propriedades para o componetente filho <ListPagination />
  test("If ArticleList passes pagination data through properties to the ListPagination", () => {
    const onSetPage = () => {};

    // Quando renderizar Articlelist, passando um lista de artigos válida e não vazia e suas informações de paginação ...
    render(
      <ArticleList
        articles={articles}
        articlesCount={articles.length}
        currentPage={0}
        onSetPage={onSetPage}
      />
    );

    // ... espero que o ListPagination receba as propriedades corretamente.
    expect(mockListPagination).toHaveBeenCalledWith(
      expect.objectContaining({
        articlesCount: articles.length,
        currentPage: 0,
        onSetPage,
      })
    );
  });
});
