import React, { useState } from 'react';
import { Modal } from '../../components';
import Medias from '../../components/Medias/Medias';
import { Container, Copy, PoliticaModal } from './styles';

const Footer = () => {
  const [openModalPolitica, setOpenModalPolitica] = useState(
    false,
  );

  return (
    <>
      <Container>
        <Medias />

        <Copy>
          <p onClick={() => setOpenModalPolitica(true)}>
            <strong>
              Política de sigilo e Confidencialidade
            </strong>
          </p>

          <p>
            Copyright 2021 Credit Innovation Alliance Brasil ·
            Todos os direitos reservados.
          </p>
        </Copy>
      </Container>

      {openModalPolitica && (
        <Modal onClose={() => setOpenModalPolitica(false)}>
          <PoliticaModal>
            <h1>
              POLÍTICA DE PRIVACIDADE DA CREDIT INNOVATION
              ALLIANCE
            </h1>

            <p>
              Esta Política de Privacidade aplica-se para todos
              os internautas e usuários da plataforma Credit
              Innovation Alliance, bem como sua aplicação
              independe da forma como você acessar a plataforma
              (seja por browser web ou através de qualquer
              aplicativo do dispositivo móvel). Ao ler o texto
              abaixo você reconhece os termos e condições desta
              Política de Privacidade e concorda estar vinculado
              às suas condições de forma livre e espontânea. Se
              você estiver se cadastrando, ou usando informações
              e nossos sistemas e os serviços através da
              plataforma, em nome de uma empresa, entidade ou
              organização, ao ler o texto abaixo você reconhece
              os termos e condições desta política e garante que
              está devidamente autorizado para agir em seu nome.
              Caso você não concorde com os termos dessa Política
              de Privacidade, recomendamos fortemente que você
              não acesse nossa plataforma.
            </p>

            <h3>1. Coleta de Informações</h3>

            <p>
              Como usuário, você será solicitado a fornecer
              diversas informações a seu respeito ou informações
              da empresa que você representa. Além das
              informações fornecidas a Credit Innovation Alliance
              poderá coletar mais informações a seu respeito com
              terceiros parceiros, agências de referência de
              crédito, agências de dados cadastrais, entre
              outros.
            </p>

            <h3>2. Uso das Informações Coletadas</h3>

            <p>
              A Credit Innovation Alliance irá utilizar os dados
              recebidos, assim como demais informações coletadas
              exclusivamente para os fins da plataforma,
              incluindo análise de crédito do Solicitante,
              análise do perfil de risco do investidor, prevenção
              à fraude, políticas de KYC (Know Your Client -
              conheça o seu cliente), prevenção e combate à
              lavagem de dinheiro, entre outros. Caso você esteja
              acessando nossa plataforma, destacamos que você
              estará autorizando a Credit Innovation Alliance a
              dividir seus dados com as instituições financeira
              parceiras, bem como os provedores de tecnologia
              associados.
            </p>

            <p>
              A Credit Innovation Alliance se resguarda o direito
              de utilizar os dados recibos e fazer análises da
              maneira que julgar adequada.
            </p>

            <p>
              Um usuário Solicitante, ao solicitar uma linha de
              crédito estará ciente e concorda que tanto a Credit
              Innovation Alliance quanto a instituição financeira
              parceira tenham acesso e consultem seus dados de
              depósitos, aplicações em outras instituições
              financeiras e informações a seu respeito constantes
              junto ao aos órgãos de proteção ao crédito tais
              como SPC e Serasa. Destacamos também que caso sua
              solicitação de crédito seja aprovada, parte das
              informações fornecidas à Credit Innovation Alliance
              ficarão disponíveis em nossa plataforma, para
              análise de eventuais investidores e demais agentes
              envolvidos nas operações de crédito. Ainda, no
              contínuo desenvolvimento do nosso negócio, poderão
              ocorrer eventuais processos de aquisição e fusão de
              empresas, estabelecimento de parcerias comerciais,
              joint ventures e outros negócios similares. Na
              ocorrência de um desses negócios, as informações
              coletadas de nossos clientes também são
              transferidas, contudo mesmo nestas situações será
              mantida esta Política de Privacidade e o uso dos
              seus dados será feito exclusivamente nos termos
              aqui previsto e visando proporcionar uma melhor
              experiência em nossa plataforma.
            </p>

            <p>
              Além das situações expressamente previstas nesta
              Política de Privacidade, a Credit Innovation
              Alliance não divulga a quaisquer terceiros as
              informações pessoais identificáveis fornecidas por
              você. Não obstante, caso a Credit Innovation
              Alliance receba uma ordem expedida por autoridade
              competente no cumprimento de suas atribuições
              legais (tanto no Brasil como no exterior), ou em
              caso de violações ou suspeita de violações desta
              Política de Privacidade ou da lei aplicável, a
              Credit Innovation Alliance poderá disponibilizar as
              suas informações pessoais, contudo a Credit
              Innovation Alliance se compromete a revelar as
              informações limitando-se ao mínimo necessário para
              atingir as finalidades exigidas.
            </p>

            <h3>3. Dados de Acesso</h3>

            <p>
              Ao se registrar na Credit Innovation Alliance, você
              deve fornecer um e-mail, além de escolher uma
              senha. Essas informações devem ser utilizadas a fim
              de acessar a determinadas partes restritas da
              plataforma. Cada vez que você acessar a sua Conta
              Solicitante Credit Innovation Alliance você
              precisará digitar seu e-mail e senha. Seus dados de
              acesso são únicos e intransferíveis.
            </p>

            <p>
              Seus dados de identificação devem ser mantidos
              seguros em todos os momentos. Você é responsável
              por todas as informações e atividade na plataforma
              por qualquer pessoa usando seu nome de usuário e
              senha autorizados ou não por você. Se você
              autorizar um empregado, agente ou quaisquer
              terceiros a utilizar sua conta, você será
              responsável pela sua atividade na plataforma.
              Qualquer violação de segurança, perda, roubo ou uso
              não autorizado de um nome de usuário, senha ou
              informações de segurança deve ser notificado para
              nós imediatamente.
            </p>

            <p>
              Os cookies permitem guardar preferências, registrar
              produtos e serviços e ainda personalizar páginas. A
              função do cookie é notificar o site quando você
              voltar. Desta forma, podemos aperfeiçoar a
              plataforma para atender melhor os usuários e até
              oferecer conteúdos baseados na sua preferência.
            </p>

            <h3>4. Cookies</h3>

            <p>
              Cookies são pequenos arquivos que os sites que você
              acessa colocam no seu computador quando você os
              visita pela primeira vez.
            </p>

            <p>
              A Credit Innovation Alliance, assim como muitos
              sites, utiliza cookies para coletar informação.
              Caso seja do seu interesse, você pode configurar o
              seu navegador para negar todos os cookies ou
              indicar quando um cookie é enviado. Porém, é
              possível que algumas funcionalidades do site não
              sejam apresentadas da melhor maneira. Se você nunca
              registrar nem deixar informações pessoais no site,
              o servidor só saberá que alguém com o seu cookie
              retornou ao site. Ele não saberá nada além disso.
            </p>

            <p>
              Os cookies permitem guardar preferências e nomes de
              usuário, registrar produtos e serviços e ainda
              personalizar páginas. A função do cookie é
              notificar o site quando você voltar. Desta forma,
              podemos aperfeiçoar a plataforma para atender
              melhor os usuários e até
              oferecer conteúdos baseados na sua preferência.
            </p>

            <h3>5. Proteção das suas Informações e Segurança</h3>

            <p>
              A Credit Innovation Alliance considera a segurança
              das suas informações muito importante e, portanto,
              executa as melhores práticas para mantê-las
              protegidas. Porém, por mais que a Credit Innovation
              Alliance tome todas as providencias técnicas
              adequadas para proteger as suas informações, não
              assumimos qualquer responsabilidade se elas forem
              interceptadas ou incorretamente acessadas por
              terceiros.
            </p>

            <p>
              Nossa plataforma possui links para outros sites
              operados por terceiros. Esta Política de
              Privacidade aplica-se apenas às informações
              pessoais que a Credit Innovation Alliance recolhe e
              não somos responsáveis pela informação que
              terceiros podem coletar, armazenar e utilizar
              através de outros sites.
            </p>

            <p>
              Dessa forma, recomendamos que você consulte as
              respectivas políticas de privacidade de tais sites
              para se informar adequadamente a respeito do uso de
              suas informações pessoais por outros sites ou
              outras ferramentas. Ainda, você desde já reconhece
              e concorda que a Credit Innovation Alliance não
              será responsável, direta ou indiretamente, por
              quaisquer perdas e danos que sejam causados por ou
              em conexão com tais sites de terceiros.
            </p>

            <p>
              Você também tem responsabilidades para assegurar
              que sua informação está em segurança. Se você é um
              membro da nossa plataforma, é necessário que :
            </p>

            <ul>
              <li>
                  • Mantenha seus dados delogin(acesso) seguros;
              </li>
              <li>
                  • Sempre faça logout da sua conta
                (desconecte-se), quando não for usá-lo;  
              </li>
              <li>
                  • Tente realizar boas práticas de segurança,
                como por exemplo ter cuidado ao usar Wi-Fi
                público ou conexões de acesso compartilhado à
                Internet;
              </li>
              <li>
                  • Nos comunique imediatamente se você suspeita
                que sua conta foi invadida ou acessada por
                terceiros não autorizados;
              </li>
            </ul>

            <p>
              Ao se cadastrar, você concorda em fornecer
              informações verdadeiras, corretas, atualizadas e
              completas conforme solicitados no formato de
              cadastro disponibilizado a você por meio dos nossos
              formulários, sob pena de responsabilização nos
              termos da legislação aplicável vigente. Nós podemos
              depender dos seus dados de cadastro para avaliar
              sua situação de negócio, para fornecer informação
              sobre os nossos serviços, ou, alternativamente,
              para identificar e/ou entrar em contato com você.
              Se seus dados de cadastro não forem verdadeiros e
              corretos, ou estiverem desatualizados e
              incompletos, a Credit Innovation Alliance poderá
              encerrar o serviço ou encerrar a sua conta e todos
              os usos correntes ou futuros dos serviços (ou
              qualquer parte deles), incluindo acesso a dados. Ao
              aceitar estes termos de uso, você declara sob as
              penas da lei, ter 18 (dezoito) anos de idade ou
              mais. A Credit Innovation Alliance adota todas as
              medidas adequadas de segurança técnica e
              organizacional para proteger os seus dados, em
              conformidade com os melhores padrões da indústria.
              Entretanto, você deve ter plena ciência de que
              nenhum sistema de segurança oferece total garantia,
              de forma que a Credit Innovation Alliance não se
              responsabiliza por vazamento de dados, quando
              comprovado que o mesmo tenha se dado de forma
              criminosa, mediante o emprego de recursos
              tecnológicos superiores aos padrões usualmente
              aceitáveis pela indústria e que são utilizados pela
              Credit Innovation Alliance .
            </p>

            <h3>
              6. Atualização e Mudanças na Política de
              Privacidade
            </h3>

            <p>
              A Credit Innovation Alliance poderá modificar sua
              Política de Privacidade quando julgar necessário.
              Nós iremos notificá-lo de eventuais mudanças
              através de uma atualização desta Política em nosso
              site. Aconselhamos que você revise esta Política de
              Privacidade com frequência em busca de eventuais
              mudanças, pois tais alterações serão aplicáveis
              desde o momento em que forem disponibilizadas em
              nosso site.
            </p>

            <h3>7. Cancelamento de Subscrição</h3>

            <p>
              Você pode, a qualquer momento optar por sair de
              quaisquer comunicações de marketing e informações
              que a Credit Innovation Alliance envia. Entre em
              contato conosco ou clique no link de Cancelamento
              de Subscrição no e-mail que você recebeu.
            </p>

            <h3>8. Da controvérsia</h3>

            <p>
              Se em algum momento, qualquer disposição (ou parte
              de qualquer disposição) destes termos de uso for,
              ou tornar-se ilegal, inválida ou inexequível em
              qualquer aspecto, sob a lei de qualquer jurisdição,
              isto não afetará ou prejudicará a legalidade,
              validade ou execução nessa ou em qualquer outra
              jurisdição de qualquer outra disposição (ou
              qualquer outra parte da mesma disposição) destes
              termos de uso.
            </p>

            <h3>9. Contato</h3>

            <p>
              Entre em contato, a qualquer momento, por meio de 
              <a
                href="atendimento@creditinnovation.com.br"
                _blank
              >
                atendimento@creditinnovation.com.br .
              </a>
            </p>
            <span>- Credit Innovation Alliance</span>
          </PoliticaModal>
        </Modal>
      )}
    </>
  );
};

export default Footer;
