import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { BoxInput, Check, Container, Env } from './styles';
import Professions from '../../mocks/profession.js';

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
    <Container>
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
        <BoxInput>
          <input
            type="text"
            name="company"
            placeholder="Empresa"
            ref={register({ required: true })}
          />
          {errors.company && <p>{errors.company?.message}</p>}
        </BoxInput>
        <BoxInput>
          <input
            type="text"
            name="segmento"
            placeholder="Segmento"
            ref={register({ required: true })}
          />
          {errors.segmento && <p>{errors.segmento?.message}</p>}
        </BoxInput>

        <Check>
          <label for="cars">Area:</label>
          <select name="service">
            {Professions.map(item => (
              <option
                ref={register({ required: true })}
                value={item.title}
              >
                {item.title}
              </option>
            ))}
          </select>
          {errors.profession && (
            <p>{errors.profession?.message}</p>
          )}
        </Check>

        <Check>
          <label htmlFor="termo">
            <input
              type="checkbox"
              name="termo"
              value="Termo"
              id="termo"
            />
            Aceito os termos da política de sigilo e
            confidencialidade (vide link).
          </label>
          {errors.profession && (
            <p>{errors.profession?.message}</p>
          )}
        </Check>

        <Env type="submit">Enviar</Env>
      </form>
    </Container>
  );
}

export default Newslatter;
