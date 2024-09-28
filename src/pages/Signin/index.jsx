import { Link } from 'react-router-dom';
import Form from '../../components/Form';
import useAuth from '../../hooks/useAuth';


const Signin = () => {
  
  const { signin } = useAuth();

  const signinConfig = {
    formLabel: 'LOGIN',
    actionMethod: signin,
    redirect: '/home',
    fields: [
      { name: 'email', label: 'E-mail', type: 'email', placeholder: 'Digite seu E-mail', rules: ['notEmpty'] },
      { name: 'password', label: 'Senha', type: 'password', placeholder: 'Digite sua Senha', rules: ['notEmpty'] },
    ],
  };
  return (
    <>
      <Form config={signinConfig}>
        <div>
          <span>Não possui uma conta?</span>
          <Link to="/signup">Clique aqui</Link>
        </div>
      </Form>
    </>
  );
};

export default Signin;