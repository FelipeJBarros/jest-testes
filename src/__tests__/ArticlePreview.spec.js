import { cleanup, fireEvent, render, screen, } from "@testing-library/react";
import ArticlePreview from "../components/ArticlePreview";


afterEach(cleanup);
// nesse arquivo se encontram os testes referentes ao componente ArticlePreview
describe("ArticlePreview component", () => {
    // Aqui são criadas as props necessárias para o componentes
    const article = {
        author: {
            username: "Anderson",
            image: "https://i.pinimg.com/originals/88/94/54/8894543f60ad09591308beb6abbb39ad.png"
        },
        favorited: false,
        body: "As coisas são mt sérias",
        createdAt: "2022-12-04T16:04:08.100Z",
        favoritesCount: "14",
        slug:"teste",
        title: "teste",
        description: "testando",
        tagList: ["teste"]
    }

    //deve renderizar um texto com informações sobre o autor do artigo
  it("should render a text with information about of article author", () => {
    render(<ArticlePreview article={article} />);

   /* se espera que no componente rederizado encontrasse uma tag "a" que contenha o nome do autor "Anderson" e que seu
    atributo href seja "@Anderson" */
    expect(screen.getByText('Anderson').closest('a')).toHaveAttribute('href', '@Anderson')

  });

  // Deve renderizar o botão com o número de vezes que o artigo foi adicionado aos favoritos
  it("Should render the button with the number of times the article has been favorited", () => {
    render(<ArticlePreview article={article} />);

    /* se espera que no componente rederizado encontrasse um botão que contenha o número de vezes que o artigo foi adicionado aos favoritos (14)
    caso sim, o teste será bem sucedido */
    expect(screen.getByRole("button", {name: "14"})).toBeTruthy();
});

it("Should render the informations title and description", () => {
    render(<ArticlePreview article={article} />);

    
   const title  = screen.getByRole("heading", {name: "teste"})
   expect(title).toHaveTextContent("teste");
    expect(screen.getByText("testando")).toBeTruthy();
});

it("Should render the button for the article's page", () => {
    render(<ArticlePreview article={article} />);

    expect(screen.getByText('Read more...').closest('a')).toHaveAttribute('href', 'article/teste')
});

it("Should render the tags of article if exists", () => {
    render(<ArticlePreview article={article} />);
    
    const li = screen.getAllByRole("listitem");
    expect(li.length).toEqual(1);
    
});

});