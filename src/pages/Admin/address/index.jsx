import { useEffect, useState } from 'react';
import { FaTrash } from "react-icons/fa";
import api from '../../../services/api';
import * as S from './styles'; // Importando os estilos
import useAuth from '../../../hooks/useAuth';
import { handleApiError } from '../../../utils/handleApiErros';
import { Link } from 'react-router-dom';

function Address() {
  const [Address, setAddress] = useState([]);
  const { token } = useAuth();

  async function getAddress() {
    await api.get('/address', { headers: { Authorization: `Bearer ${token}` } }).then((response) => {
      response.data.length > 0 && setAddress(response.data);
    });
  }

  async function deleteAddress(id) {
    await api.delete(`/address/${id}`, { headers: { Authorization: `Bearer ${token}` } }).then((response) => {
      getAddress();
    }).catch((error) => {
      alert(handleApiError(error));
    });
  }

  useEffect(() => {
    getAddress();
  }, []);

  return (
    <S.Container>
      <Link to="/admin/address/create">Criar Novo Endereço</Link>
      <S.Table>
        <thead>
          <tr>
            <S.Th>Id</S.Th>
            <S.Th>Numero</S.Th>
            <S.Th>CEP</S.Th>
            <S.Th>Ações</S.Th>
          </tr>
        </thead>
        <tbody>
          {Address.length === 0 && <tr><td colSpan="5">Nenhum endereço encontrado</td></tr>}
          {Address.map((address) => (
            <tr key={address.id}>
              <S.Td>{address.id}</S.Td>
              <S.Td>{address.numberAddress}</S.Td>
              <S.Td>{address.cep}</S.Td>
              <S.Td>
                <S.DeleteButton onClick={() => deleteAddress(address.id)}>
                  <FaTrash />
                </S.DeleteButton>
              </S.Td>
            </tr>
          ))}
        </tbody>
      </S.Table>
    </S.Container>
  );
}

export default Address;
