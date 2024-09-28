import api from '../../../services/api';
import Form from '../../../components/Form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const AddressForm = () => {
    const { token } = useAuth();

    const registerAddress = async (formData) => {
        formData.numberAddress = Number(formData.numberAddress);
        formData.cityId = Number(formData.cityId);
        try {
        const response = await api.post('/address', formData, { headers: { Authorization: `Bearer ${token}` } });
        if (response.status === 201) {
            return;
        }
        return { error: response.data.message };
        } catch (error) {
            return { error: error.response.data.message };
        }
    }

    const addressFormConfig = {
    formLabel: 'Registrar Novo Endereço',
    actionMethod: registerAddress,
    redirect: '/admin/address',
    fields: [
      { name: 'complement', label: 'Complemento', type: 'text', placeholder: 'Digite o Complemento'},
      { name: 'numberAddress', label: 'Numero', type: 'number', placeholder: 'Digite o Numero do Endereço', rules: ['notEmpty'] },
      { name: 'cep', label: 'CEP', type: 'text', placeholder: 'Digite seu CEP', rules: ['notEmpty']},
      { name: 'cityId', label: 'Cidade', type: 'number', placeholder: 'Escolha sua Cidade' },
    ],
  };
    
  return (
    <>
        <Link to="/admin/address"> Voltar </Link>
        <Form config={addressFormConfig}/>
    </>
  );
};

export default AddressForm;