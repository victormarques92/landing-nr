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
  const [openModalEvent, setOpenModalEvent] = useState(false);
  const [openModalVideo, setOpenModalVideo] = useState(false);

  return (
    <Content>
      <Covid onClick={() => setOpenModalCovid(true)}>
        COVID 19
      </Covid>

      <Container>
        <Nav>
          <img src={images.logo} alt="logo" />

          <div>
            <Link onClick={() => setOpenModalEvent(true)}>
              Sobre o Evento
            </Link>

            <Button
              primary
              onClick={() => setOpenModalVideo(true)}
            >
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

      {openModalEvent && (
        <Modal onClose={() => setOpenModalEvent(false)}>
          <CovidModal>
            <h1>Sobre o evento</h1>

            <p>
              O evento online{' '}
              <strong>CREDIT INNOVATION SUMMIT 2021</strong>, 1º.
              Fórum de inovação do mercado de crédito corporativo
              brasileiro, objetiva promover a eficiência e a
              inovação no segmento de crédito corporativo,
              debatendo práticas e padrões, aproximando empresas,
              instituições financeiras e provedores de
              tecnologia, visando proporcionar ao segmento a
              agilidade de adoção das melhores práticas e
              soluções de tratamento da informação. Sendo assim,
              esperamos que o evento seja um marco e beneficie,
              de uma forma ampla e aberta, todo o ecossistema de
              crédito corporativo, seja por quem oferece a
              disponibilidade financeira, seja pelas empresas que
              precisam deste apoio para investimentos produtivos,
              equalização do fluxo de caixa e iniciativas de
              modernização e aperfeiçoamento. Ocorrendo nos dias
              11 e 12 de maior de 2021, de uma forma gratuita,
              online e interativa, em horários escolhidos para
              facilitar a participação dos profissionais do
              mercado, trará palestrantes e personalidades
              importantes do meio financeiro em três sessões
              institucionais de 45 minutos cada, além de 10
              sessões técnicas cobrindo temas tecnológicos
              variados e que constam hoje da pauta de
              modernização do segmento. Diversas novidades serão
              também anunciadas visando o engajamento das
              empresas e dos provedores de tecnologia.
            </p>

            <p>
              Contamos que todos aproveitem e adotem a Credit
              Innovation Alliance como um referência e um grupo
              de apoio à inovação do setor.
            </p>

            <p>Sejam muito bem-vindos, bom evento à todos!</p>

            <span>- Credit Innovation Alliance</span>
          </CovidModal>
        </Modal>
      )}

      {openModalVideo && (
        <Modal isVideo onClose={() => setOpenModalVideo(false)}>
          <iframe
            width="90%"
            height="80%"
            src="https://www.youtube.com/embed/hsrYD74Rla4?autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            autoPlay
          ></iframe>
        </Modal>
      )}
    </Content>
  );
};

export default Hero;
