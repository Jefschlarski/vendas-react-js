import { Link } from 'react-router-dom';
import Form from '../../components/Form';
import useAuth from '../../hooks/useAuth';

const Signup = () => {

  const { signup } = useAuth();

  const signupConfig = {
    formLabel: 'REGISTRE-SE',
    actionMethod: signup,
    redirect: '/signin',
    fields: [
      { name: 'name', label: 'Nome', type: 'text', placeholder: 'Digite seu Nome', rules: ['notEmpty'] },
      { name: 'email', label: 'E-mail', type: 'email', placeholder: 'Digite seu E-mail', rules: ['notEmpty'] },
      { name: 'emailConf', label: 'Confirme seu E-mail', type: 'email', placeholder: 'Confirme seu E-mail', rules: ['notEmpty', 'notEqual'], compareWith: 'email', compareWithLabel: 'E-mail' },
      { name: 'phone', label: 'Telefone', type: 'text', placeholder: 'Digite seu Telefone' },
      { name: 'cpf', label: 'CPF', type: 'text', placeholder: 'Digite seu CPF' },
      { name: 'password', label: 'Senha', type: 'password', placeholder: 'Digite sua Senha', rules: ['notEmpty'] },
    ],
  };

  return <Form config={signupConfig}>
    <div>
      <span>Ja possui uma conta?</span>
      <Link to="/signin">Clique aqui</Link>
    </div>
  </Form>;
};

export default Signup;