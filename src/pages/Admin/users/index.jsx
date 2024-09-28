import { useEffect, useState } from 'react';
import { FaTrash } from "react-icons/fa";
import api from '../../../services/api';
import * as S from './styles'; 
import Table from '../../../components/Table';
import useAuth from '../../../hooks/useAuth';

function Users() {
  const { token } = useAuth();
  const [users, setUsers] = useState([]);

  async function getUsers() {
    await api.get('/user', { headers: { Authorization: `Bearer ${token}` } }).then((response) => {
      setUsers(response.data);
    });
  }

  async function deleteUser(id) {
    await api.delete(`/user/${id}`, { headers: { Authorization: `Bearer ${token}` } }).then(() => {
      getUsers();
    });
  }

  useEffect(() => {
    getUsers();
  }, []);

  const columns = [
    { field: 'name', label: 'Nome' },
    { field: 'email', label: 'Email' },
    { field: 'phone', label: 'Telefone' },
    { field: 'cpf', label: 'CPF' },
  ];

  const actions = [
    { label: 'Deletar', method: deleteUser, icon: FaTrash },
  ];

  return (
    <S.Container>
      <Table data={users} columns={columns} actions={actions} idField="id" />
    </S.Container>
  );
}

export default Users;