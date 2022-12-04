import ArticlePreview from "./ArticlePreview";
import ListPagination from "./ListPagination";
import React from "react";

const ArticleList = (props) => {
  // Retorna um aviso de loading caso a lista ainda não foi recebida.
  if (!props.articles) {
    return <div className="article-preview">Loading...</div>;
  }

  // Se recebe uma lista vazia, exibe uma mensagem de que ainda não existem artigos
  if (props.articles.length === 0) {
    return <div className="article-preview">No articles are here... yet.</div>;
  }

  // Caso receba uma lista com artigos válidos...
  return (
    <div>
      {/* ... para cada artigo na lista renderiza um componente filho <ArticlePreview /> ... */}
      {props.articles.map((article) => {
        return <ArticlePreview article={article} key={article.slug} />;
      })}

      {/* ... E passa as informações a respeito da paginação dos artigos para o componente <ListPagination /> */}
      <ListPagination
        articlesCount={props.articlesCount}
        currentPage={props.currentPage}
        onSetPage={props.onSetPage}
      />
    </div>
  );
};

export default ArticleList;
