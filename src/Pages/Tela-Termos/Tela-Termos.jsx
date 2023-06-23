import React from 'react';
import './Tela-Termos.css';
import { Link } from 'react-router-dom';

import Logo from './img/logo.svg';
import Wave from './img/wave-lateral.svg'

export default function TelaTermos() {
  return (
    <div className="container-tela-termos">

      <div className="section-1">

        <div className="menu-container">
          <img src={Logo} />

          <div className="menu">
            <Link
              className="link"
              to="/"
            >
              <h1>Baixar</h1>
            </Link>

            <Link
              className="link"
            >
              <h1>Termos de uso</h1>
            </Link>
          </div>

        </div>

      </div>

      <div className="section-container-tela-termos">

        <div className="section-7">
          <p>
            Seja bem-vindo ao imovim, a rede que te movimenta. Por favor leia com atenção todos os termos abaixo.
          </p>

          <p>
            Este documento, e todo o conteúdo do site é oferecido pela equipe imovim, neste termo representado apenas por “EQUIPE”, que regulamenta todos os direitos e obrigações com todos que acessam o site, denominado neste termo como “VISITANTE” ou “USUÁRIO”, resguardado todos os direitos previstos na legislação, trazem as cláusulas abaixo como requisito para acesso e visita do mesmo, situado no endereço (ADICIONAR ENDEREÇO DO SITE).visando manter um bom uso e estabelecer as responsabilidades e direitos do usuário, tais quais:
          </p>

          <div className="title-content">

            <h1>1.</h1>
            <h2>Função do site</h2>

          </div>

          <p>
            A rede social imovim foi desenvolvida em vista da dificuldade da
            população brasileira praticante de esportes de encontrar softwares específicos para seus interesses, o sistema apresentado se baseia em uma rede social voltada ao ambiente esportivo, no qual os usuários podem criar um perfil com informações próprias e divulgar seus gostos, interagir entre si e manter contato com a função de um chat, criar eventos, encontrar lugares aptos às práticas e eventos já criados, compartilhar seus momentos e comentários, além de terem acesso a informações sobre seus esportes.
            Nesta plataforma, poderá ser realizado tanto divulgação de materiais originais, assim como a divulgação de produtos de e-commerce.
            É de responsabilidade do usuário de usar todas as informações presentes no site com senso crítico, utilizando apenas como fonte de informação e entretenimento social, sempre buscando especialistas da área caso procure uma solução concreta do seu conflito.
          </p>

          <div className="title-content">
            <h1>2.</h1>
            <h2>Do aceite dos termos</h2>
          </div>

          <p>
            Este documento, chamado “Termos de Uso”, aplicáveis a todos os usuários do aplicativo, foi desenvolvido por Diego Castro Advogado – OAB/PI 15.613, modificado com permissão para este site.
            Este termo especifica e exige que todo usuário ao se cadastrar no aplicativo imovim, leia e compreenda todas as cláusulas do mesmo, visto que ele estabelece entre a EQUIPE e o VISITANTE direitos e obrigações entre ambas as partes, aceitos expressamente pelo usuário a permanecer navegando no aplicativo imovim.
            Ao continuar acessando o aplicativo, o USUÁRIO expressa que aceita e entende todas as cláusulas, assim como concorda integralmente com cada uma delas, sendo este aceite imprescindível para a permanência na mesma.Caso o usuário discorde de alguma cláusula ou termo deste contrato, o mesmo deve imediatamente interromper sua navegação de todas as formas e meios.
            Este termo pode e irá ser atualizado periodicamente pela EQUIPE, que se resguarda no direito de alteração, sem qualquer tipo de aviso prévio e comunicação.É importante que o USUÁRIO confira sempre se houve movimentação e qual foi a última atualização do mesmo no começo da página.
          </p>

          <div className="title-content">
            <h1>3.</h1>
            <h2>Glossário</h2>
          </div>

          <div className="list-termos">

            <div className="list-icon-container">
              <div className="list-icon" />
            </div>

            <div className="text-list-container">
              <p>VISITANTE E USUÁRIO: Todo e qualquer usuário do site, de qualquer forma e meio, que acesse através de computador, notebook, tablet, celular ou quaisquer outros meios, o website ou plataforma da empresa.</p>
            </div>
          </div>

          <div className="list-termos">

            <div className="list-icon-container">
              <div className="list-icon" />
            </div>

            <div className="text-list-container">
              <p>NAVEGAÇÃO: O ato de visitar páginas e conteúdo do website ou plataforma da empresa.</p>
            </div>

          </div>

          <div className="list-termos">

            <div className="list-icon-container">
              <div className="list-icon" />
            </div>

            <div className="text-list-container">
              <p>COOKIES: Pequenos arquivos de textos gerados automaticamente pelo site e transmitidos para o navegador do visitante, que servem para melhorar a usabilidade do visitante.</p>
            </div>

          </div>

          <div className="list-termos">

            <div className="list-icon-container">
              <div className="list-icon" />
            </div>

            <div className="text-list-container">
              <p>LOGIN: Dados de acesso do visitante ao realizar o cadastro junto à EMPRESA, dividido entre usuário e senha, que dá acesso às funções restritas do site.</p>
            </div>

          </div>

          <div className="list-termos">
            <div className="list-icon-container">
              <div className="list-icon" />
            </div>

            <div className="text-list-container">
              <p>HIPERLINKS: São links clicáveis que podem aparecer pelo site ou no conteúdo, que levam para outra página da EMPRESA ou site externo.</p>
            </div>

          </div>

          <div className="list-termos">
            <div className="list-icon-container">
              <div className="list-icon" />
            </div>

            <div className="text-list-container">
              <p>OFFLINE: Quando o site ou plataforma se encontra indisponível, não podendo ser acessado externamente por nenhum usuário.</p>
            </div>

          </div>

        </div>

        <div className="section-8">

          <div className="title-content">
            <h1>4.</h1>
            <h2>Do acesso ao site</h2>
          </div>

          <p>
            O Site e plataforma funcionam normalmente 24 (vinte e quatro) horas por dia, porém podem ocorrer pequenas interrupções de forma temporária para ajustes, manutenção, mudança de servidores, falhas técnicas ou por ordem de força maior, que podem deixar o site indisponível por tempo limitado.
            A EQUIPE não se responsabiliza por nenhuma perda de oportunidade ou prejuízos que esta indisponibilidade temporária possa gerar aos usuários.
            Em caso de manutenção que exigirem um tempo maior, a EQUIPE irá informar previamente aos clientes da necessidade e do tempo previsto em que o site ou plataforma ficará offline.
            O acesso ao site só é permitido a maiores de 18 anos de idade ou que possuírem capacidade civil plena. Para acesso de menores de idade, é necessária a expressa autorização dos pais ou tutores, ficando o mesmo responsáveis sobre qualquer compra ou acesso efetuados pelo mesmo.
            É necessário realizar um cadastro junto a plataforma, onde o VISITANTE deverá preencher um formulário com seus dados e informações para ter acesso integral a plataforma.
            Todos os dados estão protegidos conforme a Lei Geral de Proteção de Dados, e ao realizar o cadastro junto ao site, o VISITANTE concorda integralmente com a coleta de dados conforme a Lei e com a Política de Privacidade da EQUIPE.
          </p>

          <div className="title-content">
            <h1>5.</h1>
            <h2>Da licença de uso e cópia</h2>
          </div>

          <p>
            O visitante poderá acessar todo o conteúdo do website, como artigos, vídeos, imagens, produtos e serviços, não significando nenhum tipo de cessão de direito ou permissão de uso, ou de cópia dos mesmo.
            Todos os direitos são preservados, conforme a legislação brasileira, principalmente na Lei de Direitos Autorais (regulamentada na Lei nº 9.610/18), assim como no Código Civil brasileiro (regulamentada na Lei nº 10.406/02), ou quaisquer outras legislações aplicáveis.
          </p>

          <div className="title-content">
            <h3>5.1.</h3>
            <h4>Propriedade Intelectual</h4>
          </div>

          <p>
            Fica declarada a expressa proibição de cópia e plágio de produções intelectuais tais como invenções, patentes, marcas, desenhos industriais, indicações geográficas e criações artísticas desenvolvidas e compartilhadas pelos usuários
          </p>

          <div className="title-content">
            <h1>6.</h1>
            <h2>Das obrigações</h2>
          </div>

          <p>
            O VISITANTE ao utilizar a plataforma da EQUIPE, concorda integralmente em NÃO:
          </p>

          <div className="regra">
            <h3>1.</h3>
            <p>
              violar quaisquer direitos de propriedade intelectual ou de privacidade, incluindo, sem limitação, patentes, direitos autorais, marcas ou segredos comerciais de quaisquer terceiros, incluindo a RHB e suas empresas afiliadas;
            </p>
          </div>

          <div className="regra">
            <h3>2.</h3>
            <p>
              carregar, publicar, transmitir ou armazenar qualquer material que:
            </p>
          </div>

          <div className="regra">
            <h4>a)</h4>
            <p>
              seja ilegal, ofensivo, difamatório, fraudulento, enganoso, danoso, ameaçador, constrangedor, obsceno ou inaceitável;
            </p>
          </div>

          <div className="regra">
            <h4>b)</h4>
            <p>
              viole quaisquer de suas obrigações contratuais ou de confidencialidade;
            </p>
          </div>

          <div className="regra">
            <h4>c)</h4>
            <p>
              perturbe ou interfira nas operações normais da plataforma, tais como a publicação ou a transmissão de vírus, a publicação continuada de materiais repetidos ou a publicação de arquivos muito grandes, fora do tamanho normal; ou
            </p>
          </div>

          <div className="regra">
            <h4>d)</h4>
            <p>
              violar direitos de privacidade ou outros direitos de terceiros através do uso abusivo de Materiais, incluindo, sem limitação, através do constrangimento ou "perseguição" contra outra pessoa, do envio de mensagens de email não solicitadas ou da coleta de informações pessoais de terceiros;
            </p>
          </div>

          <div className="regra">
            <h4>e)</h4>
            <p>
              violar ou tentar violar quaisquer medidas de segurança da plataforma;
            </p>
          </div>

          <div className="regra">
            <h4>f)</h4>
            <p>
              usar quaisquer dispositivos, processos ou mecanismos para monitorar, recuperar, pesquisar ou acessar dados da plataforma ou qualquer Material sem o consentimento prévio e por escrito da EQUIPE, através, por exemplo, de robôs ou sistemas de varredura e armazenamento de dados ("spider");
            </p>
          </div>

          <div className="regra">
            <h4>g)</h4>
            <p>
              acessar ou tentar acessar qualquer conta ou identificação de terceiros contida na plataforma;
            </p>
          </div>

          <div className="regra">
            <h4>h)</h4>
            <p>
              copiar, modificar, reproduzir, apagar, distribuir, realizar download, armazenar, transmitir, vender, revender, publicar, realizar engenharia reversa ou criar obras derivadas de quaisquer Materiais, exceto materiais que tenham sido submetidos por você e sejam de sua propriedade;
            </p>

          </div>

          <div className="regra">
            <h4>i)</h4>
            <p>
              publicar ou submeter qualquer informação imprecisa, falsa ou incompleta não condizentes com a realidade;
            </p>
          </div>

          <div className="regra">
            <h4>j)</h4>
            <p>
              passar-se por outra pessoa ou organização;
            </p>
          </div>

          <div className="regra">
            <h4>k)</h4>
            <p>
              fornecer falsa informação sobre você, sua afiliação junto a um terceiro ou sua organização;
            </p>
          </div>

          <div className="regra">
            <h4>l)</h4>
            <p>
              violar estes termos nem incentivar ninguém a fazê - lo;
            </p>
          </div>

        </div>

      </div>

      <div className="wave-container">
        <img src={Wave} />
      </div>

    </div>
  )
}