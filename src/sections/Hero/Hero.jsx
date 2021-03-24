import React, { useCallback, useState } from 'react';
import { FiChevronDown, FiDownload } from 'react-icons/fi';
import { AiFillPlayCircle } from 'react-icons/ai';
import { Button, Contador, Link, Modal } from '../../components';
import * as images from '../../images';
import {
  Container,
  Content,
  Covid,
  CovidModal,
  Invite,
  Nav,
  Next,
  Online,
} from './styles';
import { Col } from '../../styles';

const Hero = () => {
  const [openModalCovid, setOpenModalCovid] = useState(false);
  const [openModalEvent, setOpenModalEvent] = useState(false);
  const [openModalVideo, setOpenModalVideo] = useState(false);

  const handleNext = useCallback(() => {
    const nextElement = document.getElementById('contacts')
      .offsetTop;

    window.scrollTo(0, nextElement);
  }, []);

  return (
    <Content>
      <Covid onClick={() => setOpenModalCovid(true)}>
        COVID 19
      </Covid>

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
            <AiFillPlayCircle fontSize={20} />
          </Button>
        </div>
      </Nav>

      <Container>
        <Col>
          <h3>Credit innovation Summit 2021</h3>
          <h2>11 e 12 de maio</h2>

          <Contador />

          <h4>
            1º. Fórum de inovação do mercado <br /> de crédito
            corporativo brasileiro
          </h4>
          <p>
            O <strong>evento online</strong> CREDIT INNOVATION
            SUMMIT 2021 objetiva tratar as demandas de mercado e
            fomentar soluções inovadoras para o incremento da
            performance e eficiência do segmento de crédito
            corporativo brasileiro.
          </p>

          <Invite>
            <Button primary>Convite Gratuito</Button>
            <Button download>
              Save the Date <FiDownload fontSize={20} />
            </Button>
          </Invite>
        </Col>

        <Col xs={4}>
          <Online>
            <img src={images.responsive} />
            <h6>Evento 100% online</h6>
          </Online>
        </Col>
      </Container>

      <Next onClick={handleNext}>
        <FiChevronDown />
      </Next>

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
              <strong>CREDIT INNOVATION SUMMIT 2021</strong>,
              objetiva tratar as demandas de mercado e fomentar
              soluções inovadoras para o incremento da
              performance e eficiência do segmento de crédito
              corporativo brasileiro.
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
