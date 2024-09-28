import { useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';

const Form = ({ config, children }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");
  const navigate = useNavigate();

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    setErrors({ ...errors, [field]: "" });
  };

  const validate = () => {
    let valid = true;
    let newErrors = {};

    config.fields.forEach(field => {
      if (field.rules) {
        field.rules.forEach(rule => {
          if (rule === 'notEmpty' && !formData[field.name]) {
            valid = false;
            newErrors[field.name] = `${field.label} não pode estar vazio`;
          }
          if (rule === 'notEqual' && formData[field.name] !== formData[field.compareWith]) {
            valid = false;
            newErrors[field.name] = `${field.label} não é igual a ${field.compareWithLabel}`;
          }
        });
      }
    });

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async () => {
    if (!validate()) {
      return;
    }

  const response = await config.actionMethod(formData)
  if (response) {
    if (response.error) {
      setGeneralError(response.error);
      return;
    }
  }
  navigate(config.redirect);
}

  return (
    <S.Container>
      <S.Label>{config.formLabel}</S.Label>
      <S.Content>
        {config.fields.map((field) => (
          <Input
            key={field.name}
            type={field.type}
            placeholder={field.placeholder}
            value={formData[field.name] || ''}
            onChange={handleChange(field.name)}
            error={!!errors[field.name]}
            errorMessage={errors[field.name]}
          />
        ))}
        {generalError && <S.ErrorMessage>{generalError}</S.ErrorMessage>}
        <Button Text="Enviar" onClick={handleSubmit} />
      </S.Content>
      {children}
    </S.Container>
  );
};

export default Form;