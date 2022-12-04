import React, { useState } from "react";

const ListPagination = (props) => {
  //se articlesCount for menor ou igual a 10 será o valor null será retornado
  if (props.articlesCount <= 10) {
    return null;
  }

  const range = [];
  //para cada multiplo de 10 será adiocionado um item em ordem crescente no array range, começando por 1
  for (let i = 0; i < Math.ceil(props.articlesCount / 10); ++i) {
    range.push(i);
  }
 const [page, setPage] = useState('');


  return (
    <nav>
      <ul className="pagination">
        {/* para cada item do array range será criado um li que representa sua respectiva pagina */}
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
              role="listitem"
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
