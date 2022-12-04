import { cleanup, render, screen } from "@testing-library/react";
import ArticleList from "../components/ArticleList";

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

  it("Should display a preview for each article present in the list", () => {
    const articles = [
      {
        author: {
          image:
            "https://i.pinimg.com/originals/88/94/54/8894543f60ad09591308beb6abbb39ad.png",
          username: "UFC - Testes",
        },
        body: "As coisas são mt sérias",
        createdAt: "2022-12-04T16:04:08.100Z",
        description: "Coisas sérias",
        favorited: false,
        favoritesCount: 0,
        slug: "Artigo-serio-113034",
        tagList: [],
        title: "Artigo sério",
      },
    ];

    render(<ArticleList articles={articles} />);
  });
});

/*
const articles = [
      {
        author: {
          bio: null,
          following: false,
          image:
            "https://i.pinimg.com/originals/88/94/54/8894543f60ad09591308beb6abbb39ad.png",
          username: "UFC - Testes",
        },
        body: "As coisas são mt sérias",
        createdAt: "2022-12-04T16:04:08.100Z",
        description: "Coisas sérias",
        favorited: false,
        favoritesCount: 0,
        slug: "Artigo-serio-113034",
        tagList: [],
        title: "Artigo sério",
        updatedAt: "2022-12-04T16:04:08.100Z",
      },
      {
        author: {
          bio: null,
          following: false,
          image:
            "https://i.pinimg.com/originals/88/94/54/8894543f60ad09591308beb6abbb39ad.png",
          username: "UFC - Testes",
        },
        body: "Teste 4",
        createdAt: "2022-12-03T17:58:01.344Z",
        description: "Teste 4",
        favorited: false,
        favoritesCount: 0,
        slug: "Teste-4-113034",
        tagList: [],
        title: "Teste 4",
        updatedAt: "2022-12-03T17:58:01.344Z",
      },
    ];
*/
