import React from "react";

const ListPagination = (props) => {
  if (props.articlesCount <= 10) {
    return null;
  }

  const range = [];
  for (let i = 0; i < Math.ceil(props.articlesCount / 10); ++i) {
    range.push(i);
  }

  const setPage = (page) => props.onSetPage(page);

  return (
    <nav>
      <ul className="pagination">
        {range.map((v) => {
          const isCurrent = v === props.currentPage;
          const onClick = (ev) => {
            ev.preventDefault();
            setPage(v);
          };
          return (
            <li
              className={isCurrent ? "page-item active" : "page-item"}
              onClick={onClick}
              key={v.toString()}
            >
              <a className="page-link" href="">
                {v + 1}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ListPagination;

/*
1 - não deve renderizar com menos de 10 artigos
2 - deve criar um novo item para todo multiplo de 10
3 - deve mudar o valor de currentPage todo vida que clicar em um item
4 - um item deve conter a class active ao ser clicado
5 - ao clicar em outro item, o item selecionado deve perder a classe active
*/
