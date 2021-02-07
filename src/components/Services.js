import React from "react";
import Title from "./Title";
import {
  GiFruitTree,
  GiMeat,
  GiTrumpetFlag,
  GiCastle,
  GiLifeInTheBalance,
} from "react-icons/gi";
import historia from "../images/historia.jpg";

export default class Services extends React.Component {
  state = {
    services: [
      {
        icon: <GiFruitTree />,
        title: "Raíces",
        info:
          "Bermejo Hnos. Especialidades SRL es una empresa en la que transita ya su tercera generación y donde aún hoy se puede ver la importancia de las raíces familiares.",
      },
      {
        icon: <GiMeat />,
        title: "Variedad",
        info:
          "Hoy en día elaboramos una amplia gama y variedad de fiambres que conservan su receta de origen, los cuales nos enorgullecen e impulsan a continuar trabajando en este país que nos permitió arraigarnos y desarrollarnos.",
      },
      {
        icon: <GiTrumpetFlag />,
        title: "Tradición",
        info:
          "Desde viejos tiempos, en Salamanca, por tradición familiar se realizaban faenas caseras de manera artesanal lo que significaba un ritual del que participaban chicos y grandes, y que se iría trasladando a lo largo de las generaciones.",
      },
      {
        icon: <GiLifeInTheBalance />,
        title: "Calidad",
        info:
          "Día tras día nos enfocamos en la mejora de nuestros productos a fin de satisfacer las exigencias de nuestros clientes. Ver nuestra mercadería en cada mesa y en cada encuentro familiar nos hace sentir orgullosos por el esfuerzo realizado.",
      },
    ],
  };
  render() {
    return (
      <>
        <section className="services">
          <Title title="Nosotros" />
          <div className="services-center">
            {this.state.services.map((item, index) => {
              return (
                <article key={index} className="service">
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
                </article>
              );
            })}
          </div>
        </section>
        <section className="services">
          <img src={historia} alt='hist' style={{width:'100%',height:'auto'}}/>
          <div className="services-center">
            <article className="service">
              <span>
                <GiCastle />
              </span>
              <p>
                EN EL AÑO 1952 LLEGA A LA ARGENTINA PROVENIENTE DE EUROPA UN
                MATRIMONIO ESPAÑOL CON SUS TRES PEQUEÑOS HIJOS EN BUSCA DE UN
                PRESENTE Y FUTURO MEJOR PARA LA FAMILIA. CON DUROS COMIENZOS EN
                EL PAÍS, DON JOSÉ MANUEL BERMEJO INICIA SUS TAREAS COMO CONTADOR
                PÚBLICO, PROFESIÓN QUE ABANDONA PARA LOGRAR LO QUE TANTO
                DESEABA: CONTINUAR CON EL LEGADO DE LA ELABORACIÓN DE LOS
                EMBUTIDOS Y CHACINADOS. ESTO LO LLEVA A CABO ALQUILANDO UN
                PEQUEÑO PUESTO EN UN MERCADO DE BARRIO EN COLEGIALES, DONDE
                EMPEZÓ A TRANSITAR SU SUEÑO. EN EL AÑO 1968 FALLECE MUY JOVEN, Y
                SON SUS TRES HIJOS ADOLESCENTES QUIENES CONTINÚAN LAS TAREAS. EN
                1972, COMIENZAN CON LA FORMACIÓN DEL ESTABLECIMIENTO EN MUNRO,
                PROVINCIA DE BUENOS AIRES, DONDE FINALMENTE Y CON EL PASO DEL
                TIEMPO PUEDEN EMPEZAR A DESARROLLAR LA ELABORACIÓN DE EMBUTIDOS
                Y CHACINADOS DE MANERA ARTESANAL.
              </p>
            </article>
          </div>
        </section>
      </>
    );
  }
}
