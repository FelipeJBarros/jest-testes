import React from "react";
import { Link } from "react-router";

const ArticlePreview = (props) => {
  const article = props.article;

  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link to={`@${article.author.username}`}>
          <img src={article.author.image} alt={article.author.username} />
        </Link>

        <div className="info">
          <Link className="author" to={`@${article.author.username}`}>
            {article.author.username}
          </Link>
          <span className="date">
            {new Date(article.createdAt).toDateString()}
          </span>
        </div>

        <div className="pull-xs-right">
          <button className="btn btn-sm btn-outline-primary">
            <i className="ion-heart"></i> {article.favoritesCount}
          </button>
        </div>
      </div>

      <Link to={`article/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {article.tagList.map((tag) => {
            return (
              <li className="tag-default tag-pill tag-outline" key={tag}>
                {tag}
              </li>
            );
          })}
        </ul>
      </Link>
    </div>
  );
};

export default ArticlePreview;

/*
1 - Deve exibir as informações do autor do artigo
2 - Deve exibir o botão com o número de vezes que o artigo foi favoritado
3 - Dece exibir as informações do artigo (Titulo e descrição)
4 - Deve exivir um botão de acesso a página do artigo
5 - Deve exibir as tags do artigo, caso existem

-- Pode substituir algum -- 
6 - Deve exibir um tag list vazio caso não existam tags
*/
