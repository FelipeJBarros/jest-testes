import ArticlePreview from "./ArticlePreview";
import ListPagination from "./ListPagination";
import React from "react";

const ArticleList = (props) => {
  if (!props.articles) {
    return <div className="article-preview">Loading...</div>;
  }

  if (props.articles.length === 0) {
    return <div className="article-preview">No articles are here... yet.</div>;
  }

  return (
    <div>
      {props.articles.map((article) => {
        return <ArticlePreview article={article} key={article.slug} />;
      })}

      <ListPagination
        articlesCount={props.articlesCount}
        currentPage={props.currentPage}
        onSetPage={props.onSetPage}
      />
    </div>
  );
};

export default ArticleList;

/*
1 - Deve exibir um aviso de loading caso ainda não tenha recebido a lista de artigos
2 - Deve exibir um aviso caso a lista de artigos esteja vazia
3 - Deve exibir um preview para cada artigo presente na lista
4 - 
*/
