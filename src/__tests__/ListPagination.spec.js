import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import ListPagination from "../components/ListPagination";

afterEach(cleanup);

// Criando um 'contexto' de testes, todos os testes realizados estão relacionados com o componente ListPagination.
describe("ListPagination component", () => {
  
    // Caso de teste 01: Não deve renderizar se o número de artigos for menor ou igual a 10
  it("Should not render if number of articles is less or equal to 10", () => {

    // Quando renderizar ListPagination, passando um número menor que 10...
    const comp = render(<ListPagination articlesCount={9} />);
    //...se espera que o retorno seja vazio.
    expect(comp.container).toBeEmptyDOMElement()

     // Quando renderizar ListPagination, passando um número igual a 10...
    const comp2 = render(<ListPagination articlesCount={10} />);
    //...se espera que o retorno seja vazio.
    expect(comp2.container).toBeEmptyDOMElement()
    
  });
  
  // Caso de teste 02: Deve processar um novo item para cada múltiplo de 10
  it("Must render a new item for every multiple than 10", () => {
// Quando renderizar ListPagination, passando um número maior que 10...
    render(<ListPagination articlesCount={11} />);

    //... se espera exista 2 itens na paginação
    const li = screen.getAllByRole("listitem");
    expect(li.length).toEqual(2);

    
  });

   // Caso de teste 03: Deve mudar o estilo do botão para active quando selecionado
  it("Should change button style to active when selected", () => {
// Quando renderizar ListPagination, passando um número maior que 10...
    render(<ListPagination articlesCount={11} />);
    //...e selecionar o botão 1...
    const button = screen.getByText("1");
    userEvent.click(button)

    //...se espera que o botão (li) tenha o atributo active
    expect(screen.getByText('1').closest('li')).toHaveAttribute('class', 'active')

    
  });

  // Caso de teste 04: Deve alterar o estilo do botão de ativo para item de página somente quando outro item for selecionado
  it("Must change button style from active to page-item only when other item is selected", () => {

    // Quando renderizar ListPagination, passando um número maior que 10...
    render(<ListPagination articlesCount={11} />);
    screen.debug();
    const button = screen.getByText("1");
    const button2 = screen.getByText("2");
    //...e selecionar o botão 1...
    userEvent.click(button)
    //...e logo após o botão 2...
    userEvent.click(button2)
    //...se espera que o botão (li) não tenha o atributo active
    expect(screen.getByText('2').closest('li')).not.toHaveAttribute('class', 'active')

    
  });



 

});

