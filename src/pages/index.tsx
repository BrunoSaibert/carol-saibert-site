import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

import Hero from "../components/Hero";
import TextMidia from "../components/TextMidia";

import QuemPodeContratar from "../containers/QuemPodeContratar";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />

      <Hero
        size="lg"
        urlImg="/images/intro.jpg"
        title={{
          as: "h1",
          color: "light",
          align: "center",
          text: "Psicologia, moda e autoestima",
        }}
        description={{
          as: "blockquote",
          color: "light",
          align: "center",
          text: (
            <>
              <p>
                “quando me aceito como sou
                <br />
                estou me modificando”
              </p>
              <cite>Carl Rogers</cite>
            </>
          ),
        }}
        cta={{
          href: "/servicos",
          text: "Saiba mais",
        }}
      />

      <TextMidia
        img={{
          url: "/images/thought.svg",
          alt: "",
          align: "right",
          props: {
            width: 1000,
            height: 800,
          },
        }}
        title={{
          text: "Conheça nossos Serviços:",
          as: "h2",
          color: "primary",
          align: "center",
        }}
        description={{
          align: "center",
          text: (
            <>
              Nossos serviços foram pensados especialmente para você.
              <br />
              Encontre o que mais atende sua necessidade atual.
            </>
          ),
        }}
        cta={{
          href: "/servicos",
          text: "Saiba mais",
        }}
      />

      <TextMidia
        bgColor="tertiary"
        img={{
          url: "/images/services.svg",
          alt: "",
          align: "left",
          props: {
            width: 1000,
            height: 800,
          },
        }}
        title={{
          as: "h2",
          text: "Como funciona",
          color: "primary",
          align: "center",
        }}
        description={{
          align: "center",
          color: "light",
          text: (
            <>
              São realizados encontros para te conhecer melhor, em seguida vamos
              à prática.
            </>
          ),
        }}
        cta={{
          href: "/como-funciona",
          text: "Saiba mais",
        }}
      />

      <QuemPodeContratar />
    </Layout>
  );
}
