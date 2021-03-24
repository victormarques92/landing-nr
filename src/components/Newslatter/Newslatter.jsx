import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { BoxInput, Button } from './styles';

function Newslatter() {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = useCallback(data => {
    console.log(data);

    swal({
      title: 'Cadastrado com sucesso',
      icon: 'success',
      button: 'Fechar',
    });
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BoxInput>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          ref={register({ required: true })}
        />
        {errors.name && <p>{errors.name?.message}</p>}
      </BoxInput>

      <BoxInput>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          ref={register({ required: true })}
        />
        {errors.name && <p>{errors.email?.message}</p>}
      </BoxInput>

      <BoxInput>
        <input
          type="text"
          name="phone"
          placeholder="Telefone"
          ref={register({ required: true })}
        />
        {errors.phone && <p>{errors.phone?.message}</p>}
      </BoxInput>

      <Button type="submit">Enviar</Button>
    </form>
  );
}

export default Newslatter;
