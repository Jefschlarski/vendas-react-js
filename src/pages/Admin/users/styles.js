// styles.js
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #f4f4f4; /* Fundo da tabela */
  border-radius: 8px; /* Bordas arredondadas */
`;

export const Table = styled.table`
  width: 100%; /* Largura total */
  border-collapse: collapse; /* Para colapsar bordas */
  background-color: white; /* Fundo da tabela */
`;

export const Th = styled.th`
  padding: 12px; /* Espaçamento interno */
  background-color: #007bff; /* Cor de fundo do cabeçalho */
  color: white; /* Cor do texto */
  text-align: left; /* Alinhamento à esquerda */
`;

export const Td = styled.td`
  padding: 10px; /* Espaçamento interno */
  border: 1px solid #ddd; /* Borda dos itens */
`;

export const DeleteButton = styled.button`
  background: transparent; /* Fundo transparente */
  border: none; /* Sem borda */
  cursor: pointer; /* Cursor de mão */
  color: #e74c3c; /* Cor do ícone de deletar */
  font-size: 20px; /* Tamanho do ícone */
`;
