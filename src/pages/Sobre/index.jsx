import { Container } from "../Historico/style"
import { Body, Block, Img, Title, ContentForms, Text, ImgMenor, Footer, Icon, Link} from "./style"
import Loja1 from "../../assets/images/Loja1.jpg"
import Loja2 from "../../assets/images/Loja2.jpg"
import Loja3 from "../../assets/images/Loja3.jpg"
import Loja4 from "../../assets/images/Loja4.jpg"
import Pessoas from "../../assets/images/Pessoas.jpg"
import Loja5 from "../../assets/images/Loja5.jpg"
import Loja6 from "../../assets/images/Loja6.jpg"
import Cultura from "../../assets/images/Cultura.png"
import Facebook from "../../assets/icons/facebook.png"
import Instagram from "../../assets/icons/instagram.png"
import Linkedin from "../../assets/icons/linkedin.png"
import Github from "../../assets/icons/github.png"
import Youtube from "../../assets/icons/youtube.png"

export const Sobre = () => {
  return(
    <Container>
      <ContentForms>
        <Block>
          <ImgMenor src={Loja1}/>
          <Text>
            <Title>Sobre Nós</Title>
            <Body>
              A Antiquidade Moderna é um espaço dedicado à preservação e celebração da 
              história, oferecendo uma seleção única de peças raras e encantadoras. 
              Nossa paixão por antiquidades nos move a compartilhar histórias e legados 
              que transcendem gerações.
            </Body>
          </Text>
        </Block>

        <Block>
          <Text>
            <Title>Nossa História</Title>
            <Body>
              Fundada em 2014, a Antiquidade Moderna nasceu do amor por objetos com 
              história. Desde o início, nossa missão tem sido encontrar e restaurar 
              itens que carregam consigo memórias e tradições, permitindo que nossos 
              clientes tragam um pedaço do passado para suas vidas.<br /><br />

              Começamos oferecendo decorações, relíquias, e objetos colecionáveis para
              amigos e familiares, buscando sempre itens singulares e excêntricos para 
              sua casa, coleção ou cenário. Com o passar dos anos, nossa coleção cresceu, 
              tornando-se um destino querido para colecionadores e amantes da história.
            </Body>
          </Text>
          <Img src={Loja2}/>
        </Block>
      
        <Block>
          <Img src={Loja3}/>
          <Text>
            <Title>Nossa Visão</Title>
            <Body>
              Ser reconhecida como a principal referência em antiquidades na região, 
              admirada pela qualidade de nossa coleção e pelo nosso conhecimento, 
              contribuindo para a valorização do patrimônio histórico.
            </Body>
          </Text>
        </Block>
        
        <Block>
          <Text>
            <Title>Nossos Valores</Title>
            <Body>
              Paixão pela História: Cada peça em nossa loja possui uma narrativa que 
              merece ser contada.<br />
              Comprometimento: Dedicamo-nos a oferecer um atendimento excepcional, 
              ajudando nossos clientes a encontrar o item perfeito.<br />
              Autenticidade: Garantimos que todas as peças são genuínas e de alta 
              qualidade.<br />
              Preservação: Valorizamos a importância da conservação de bens culturais e 
              históricos.
            </Body>
          </Text>
          <Img src={Loja4}/>
        </Block>
      
        <Block>
          <ImgMenor src={Loja5}/>
          <Text>
            <Title>Nossa Missão</Title>
            <Body>
              Oferecer uma experiência única de compra, proporcionando acesso a peças 
              raras e autênticas que contam histórias. Estamos comprometidos em 
              preservar a cultura e a arte através de cada item que oferecemos, sempre 
              com atenção à qualidade e à autenticidade.
            </Body>
            </Text>
        </Block>

        <Block>
          <Text>
            <Title>Nossos Produtos</Title>
            <Body>
              Na Antiquidade Moderna, você encontrará uma ampla gama de itens, desde 
              móveis antigos a obras de arte, e muito mais. Se você é um colecionador 
              experiente ou alguém à procura de uma peça especial, temos algo que 
              certamente irá encantá-lo.
            </Body>
          </Text>
          <Img src={Loja6}/>
        </Block>
      
        <Block>
          <Img src={Pessoas}/>
          <Text>
            <Title>Equipe</Title>
            <Body>
              Nossa equipe é formada por apaixonados por antiguidades, com conhecimento 
              profundo sobre cada peça em nossa coleção. Estamos sempre prontos para 
              compartilhar informações e ajudar nossos clientes a fazer as melhores 
              escolhas.
            </Body>
          </Text>
        </Block>

        <Block>
          <Text>
            <Title>Responsabilidade Social</Title>
            <Body>
              A Antiquidade Moderna se dedica também à promoção da cultura local, 
              participando de iniciativas que incentivam a educação e a preservação do 
              patrimônio histórico. Acreditamos que a valorização do passado é essencial
              para o futuro.
            </Body>
          </Text>
          <Img src={Cultura}/>
        </Block>
      </ContentForms>

      <Footer>
        <Title>Fale Conosco</Title>
        <Body>
          Se você deseja saber mais sobre nossa loja, nossa coleção ou tem alguma 
          dúvida, entre em contato conosco! Estamos à disposição para atender você 
          da melhor forma possível.
        </Body>
        
        <Title>Contato</Title>
        <Body>
          Endereço: Av. Cel. João Valério, 694 - Vila Esperanca, Magé - RJ, 25903-587<br />
          Telefone: (21) 2367-0866<br />
          E-mail: AntiquiModerna@gmail.com<br />
        </Body>

        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Icon src={Facebook} alt="Facebook" />
        </Link>
        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Icon src={Instagram} alt="Instagram" />
        </Link>
        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Icon src={Linkedin} alt="LinkedIn" />
        </Link>
        <Link href="https://github.com/delmiraugusto/projetoReact" target="_blank" rel="noopener noreferrer">
          <Icon src={Github} alt="GitHub" />
        </Link>
        <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <Icon src={Youtube} alt="YouTube" />
        </Link>
      </Footer>
    </Container>
  )
}
