import React, { useState } from 'react';
import * as images from '../../images';
import {
  Invite,
  Content,
  Covid,
  Credit,
  Nav,
  CovidModal,
} from './styles';
import { AiFillPlayCircle } from 'react-icons/ai';
import { Button, Contador, Link, Modal } from '../../components';
import Colors from '../../styles/colors';
import { Container } from '../../styles';

const Hero = () => {
  const [openModalCovid, setOpenModalCovid] = useState(false);

  return (
    <Content>
      <Covid onClick={() => setOpenModalCovid(true)}>
        COVID 19
      </Covid>

      <Container>
        <Nav>
          <img src={images.logo} alt="logo" />

          <div>
            <Link>Sobre o Evento</Link>

            <Button primary>
              <span>Conheça o evento em 60seg</span>
              <AiFillPlayCircle />
            </Button>
          </div>
        </Nav>

        <Credit>
          <h3>Credit innovation Summit 2021</h3>
          <h2>11 e 12 de maio</h2>

          <Contador />
          <h2>
            Fórum de inovação do mercado <br /> de Crédito
            Corporativo Brasileiro
          </h2>
          <p>
            O <strong>evento online</strong> CREDIT INNOVATION
            SUMMIT 2021 objetiva preencher uma lacuna de mercado
            que
            <br /> é a de servir de vitrine e referência para o
            aspecto tecnológico do universo de crédito
            corporativo.
          </p>
          <Invite>
            <div>
              <Button bg={Colors.primary}>
                Receber um convite
              </Button>
            </div>

            <div>
              <Button bg={Colors.white} color={Colors.black}>
                Save the Date
              </Button>
            </div>
          </Invite>
        </Credit>
      </Container>

      {openModalCovid && (
        <Modal onClose={() => setOpenModalCovid(false)}>
          <CovidModal>
            <h1>COVID</h1>

            <p>
              É com grande pesar que a Direção da Credit
              Innovation Alliance se sensibiliza e solidariza com
              as centenas de milhares de famílias que perderam
              seus entes queridos, desejando a estas muita Força
              e Equilíbrio neste momento tão delicado que estamos
              vivendo por conta da pandemia do COVID-19.
              Entendemos que o segmento de crédito corporativo,
              se não atua diretamente na linha de frente, apoia a
              manutenção da atividade econômica, viabilizando a
              sustentação do fluxo de caixa para inúmeras
              empresas, dos mais variados segmentos, notadamente
              as pequenas e médias empresas. Esperamos que a
              nossa iniciativa de aprimorar a eficiência e
              inovação deste mercado alcance mais e mais
              empresas, proporcionando benefícios a todos da
              cadeia produtiva, tanto os investidores, como,
              notadamente, os profissionais das empresas
              beneficiadas. Esperamos que as ações em prol da
              Saúde se ampliem e com isto possamos retornar a tão
              desejada normalidade. Mantenham as medidas de
              prevenção intensificadas. Saúde e Paz, são os votos
              do nosso grupo.
            </p>
            <span>- Credit Innovation Alliance</span>
          </CovidModal>
        </Modal>
      )}
    </Content>
  );
};

export default Hero;
