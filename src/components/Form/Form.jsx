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
      <h1>Formulario</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <BoxInput>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            ref={register({ required: true })}
          />
          {errors.name && <p>{'Digite seu nome '}</p>}
        </BoxInput>
        <BoxInput>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            ref={register({ required: true })}
          />
          {errors.name && <p>{'Digite seu email'}</p>}
        </BoxInput>
        <BoxInput>
          <input
            type="text"
            name="phone"
            placeholder="Telefone"
            ref={register({ required: true })}
          />
          {errors.phone && <p>{'Digite seu telefone'}</p>}
        </BoxInput>
        <BoxInput>
          <input
            type="text"
            name="company"
            placeholder="Empresa"
            ref={register({ required: true })}
          />
          {errors.company && <p>{'Digite sua empresa'}</p>}
        </BoxInput>
        <BoxInput>
          <input
            type="text"
            name="segmento"
            placeholder="Segmento"
            ref={register({ required: true })}
          />
          {errors.segmento && <p>{'Digite seu segmento'}</p>}
        </BoxInput>

        <Check>
          <label for="service" htmlFor="service">
            Area:
          </label>
          <select name="service">
            {Professions.map((item, key) => (
              <option
                name="service"
                ref={register({ required: true })}
                key={key.id}
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
              value="termo"
              id="termo"
              ref={register({ required: true })}
            />
            Aceito os termos da política de sigilo e
            confidencialidade (vide link).
          </label>
          {errors.profession && (
            <p>
              {
                'Para receber o convite é preciso aceitar os Termos da política de sigilo e confidencialidade'
              }
            </p>
          )}
        </Check>

        <Env type="submit">Enviar</Env>
      </form>
    </Container>
  );
}

export default Newslatter;
