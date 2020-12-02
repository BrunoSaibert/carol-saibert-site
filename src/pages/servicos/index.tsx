import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";

import Hero from "../../components/Hero";
import TextMidia from "../../components/TextMidia";

import QuemPodeContratar from "../../containers/QuemPodeContratar";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/servicos"} />
      <OpenGraphMeta url={"/servicos"} />
      <TwitterCardMeta url={"/servicos"} />

      <Hero
        size="md"
        urlImg="/images/sobre.jpg"
        title={{
          as: "h1",
          color: "light",
          align: "center",
          text: "Serviços",
          decorator: true,
        }}
        description={{
          as: "p",
          color: "light",
          align: "center",
          text: "conheça todos os nossos serviços",
        }}
      />

      <TextMidia
        img={{
          url: "/images/personal.svg",
          alt: "",
          align: "left",
          props: {
            width: 1000,
            height: 800,
          },
        }}
        title={{
          text: "Psicoterapia individual",
          as: "h2",
          color: "primary",
          align: "center",
        }}
        description={{
          align: "center",
          text: "Psicoterapia individual online ou presencial",
        }}
        cta={{
          href: "/servicos/psicoterapia-individual",
          text: "Saiba mais",
        }}
      />

      <TextMidia
        bgColor="tertiary"
        img={{
          url: "/images/palette.svg",
          alt: "",
          align: "right",
          props: {
            width: 1000,
            height: 800,
          },
        }}
        title={{
          text: (
            <>
              Análise de coloração <br />
              <small>(apenas presencial)</small>
            </>
          ),
          as: "h2",
          align: "center",
          color: "primary",
        }}
        description={{
          color: "light",
          align: "center",
          text:
            "Te ajudo a descobrir quais as cores que mais combinam com você e valorizam sua aparência",
        }}
        cta={{
          href: "/servicos/analise-de-coloracao",
          text: "Saiba mais",
        }}
      />

      <TextMidia
        img={{
          url: "/images/clothes.svg",
          alt: "",
          align: "left",
          props: {
            width: 1000,
            height: 800,
          },
        }}
        title={{
          text: "Consultoria Completa em Psicologia da Moda",
          as: "h2",
          align: "center",
          color: "primary",
        }}
        description={{
          align: "center",
          text:
            "Nem terapia, nem consultoria de estilo, conheça a Consultoria Completa em Psicologia da Moda",
        }}
        cta={{
          href: "/servicos/consultoria-completa-em-psicologia-da-moda",
          text: "Saiba mais",
        }}
      />

      <TextMidia
        bgColor="tertiary"
        img={{
          url: "/images/gift.svg",
          alt: "",
          align: "right",
          props: {
            width: 1000,
            height: 800,
          },
        }}
        title={{
          text: "Vale-presente",
          as: "h2",
          align: "center",
          color: "primary",
        }}
        description={{
          color: "light",
          align: "center",
          text:
            "Presenteie uma pessoa especial (seu amor, familiares, seus amigos, funcionários e quem mais você quiser) com algum dos serviços!",
        }}
        cta={{
          href: "/contato",
          text: "Saiba mais",
        }}
      />

      <QuemPodeContratar />
    </Layout>
  );
}
