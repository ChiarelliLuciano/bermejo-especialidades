import product1 from "./images/bondiola-ahumada-horneada.JPG";
import product2 from "./images/bondiola-serrana1.JPG";
import product3 from "./images/bondiola-serrana2.JPG";
import product4 from "./images/chorizo-cantimpalo.JPEG";
import product5 from "./images/chorizo-purocerdo.JPEG";
import product6 from "./images/costillar.JPG";
import product7 from "./images/especialidades1.JPEG";
import product8 from "./images/frescos1.JPG";
import product9 from "./images/guanciale1.JPEG";
import product10 from "./images/guanciale2.JPG";
import product11 from "./images/jamon-cocido.JPEG";
import product12 from "./images/jamon-cocido.JPG";
import product13 from "./images/jamon-natural.JPEG";
import product14 from "./images/lomo-cerdo-ahumado.JPEG";
import product15 from "./images/lomo-pimienta.JPG";
import product16 from "./images/matambrito-cerdo.JPEG";
import product17 from "./images/matambrito-fresco.JPG";
import product18 from "./images/matambrito-fresco2.JPG";
import product19 from "./images/panceta-ahumada.JPEG";
import product20 from "./images/pastron.JPG";
import product21 from "./images/pate-higado.JPEG";
import product22 from "./images/pate-leberwurst.JPEG";
import product23 from "./images/pechito-ahumado.JPG";
import product24 from "./images/peperoni.JPEG";
//import product25 from "./images/picada.JPG";
//import product26 from "./images/picada2.JPG";
//import product27 from "./images/picada3.JPG";
import product28 from "./images/salame-campo.JPG";
import product29 from "./images/salame-casero.JPEG";
import product30 from "./images/salame-milan.JPG";
import product31 from "./images/salchichas-viena.JPG";
import product32 from "./images/secos.JPEG";
import product33 from "./images/secos1.JPEG";
import product34 from "./images/secos2.JPG";
import product35 from "./images/sobrasada-mallorquina.JPEG";
import product36 from "./images/solomillo.JPEG";
import product37 from "./images/sopresatta.JPG";


export default [
  {
    sys: {
      id: "1",
    },
    fields: {
      name: "SECOS",
      slug: "secos",
      type: "Bondiola, Salames, Longaniza...",
      price: 100,
      stock: true,
      featured: true,
      description:"AMPLIA VARIEDAD DE EMBUTIDOS SECOS CON DIVERSAS ESPECIAS, QUE HACEN DE CADA UNO DE ELLOS UN PRODUCTO ÚNICO.",
      extras: [
        {name:'Bondiola',
        desc:'Corte de cerdo curado y secado en tripón natural, haciéndolo artesanal. Contamos con tres variedades: clásica; serrana, con pimenton ahumado; a la pimienta.',
        pig:true,
        cow:false,
        bacon:false},
        {name:'Salame Tipo Chacra',
        desc:'A base de carne de cerdo, carne vacuna, tocino y especies como pimienta, ajo y moscato. Su picado es intermedio.',
        pig:true,
        cow:true,
        bacon:true},
        {name:'Longaniza Tipo Calabresa',
        desc:'Compuesta por carne de cerdo, carne vacuna, tocino y especies. De picado intermedio, destaca en su sabor el anís y el pimentón.',
        pig:true,
        cow:true,
        bacon:true},
        {name:'Sopresatta',
        desc:'Elaborada con carne de cerdo, tocino y especies. Su principal característica es que se encuentra prensada, y en su sabor se destaca el picante de los granos de pimienta.',
        pig:true,
        cow:false,
        bacon:true},
        {name:'Salamín Picado Fino',
        desc:'Formado con carne vacuna, carne de cerdo, tocino y especies. Su suave sabor y textura lo caracterizan.',
        pig:true,
        cow:true,
        bacon:true},
        {name:'Salame Tipo Milán',
        desc:'Fabricado con carne vacuna, carne de cerdo, tocino y especias. Ideal para ser feteado. De suave sabor.',
        pig:true,
        cow:true,
        bacon:true},
      ],
      images: [
        {
          fields: {
            file: {
              url: product2,
            },
          },
        },
        {
          fields: {
            file: {
              url: product3,
            },
          },
        },
        {
          fields: {
            file: {
              url: product28,
            },
          },
        },
        {
          fields: {
            file: {
              url: product29,
            },
          },
        },
        {
          fields: {
            file: {
              url: product30,
            },
          },
        },
        {
          fields: {
            file: {
              url: product32,
            },
          },
        },
        {
          fields: {
            file: {
              url: product33,
            },
          },
        },
        {
          fields: {
            file: {
              url: product34,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "2",
    },
    fields: {
      name: "AHUMADOS",
      slug: "ahumados",
      type: "Panceta, Lomo, Bondiola Ahumada...",
      price: 150,
      stock: true,
      featured: true,
      description:"Aquí podemos encontrar los típicos cortes de cerdo, que en su horneado son saborizados con humo natural logrando así su característico gusto y aroma",
      extras: [
        {name:'Panceta Con Cuero',
        desc:'Corte de cerdo salado, cocido y ahumado. Especialmente seleccionadas para hacer de éstas un producto típico de la gastronomía.',
        pig:true,
        cow:false,
        bacon:false},
        {name:'Panceta Tiernizada',
        desc:'Se encuentra elaborada con pulpa de jamon natural y una delgada capa de tocino. Su cocción y ahumado es en un molde, el cual le otorga uniformidad al momento de ser cortada.',
        pig:true,
        cow:false,
        bacon:true},
        {name:'Lomo Suizo',
        desc:'Carre de cerdo deshuesado, salado, cocido y ahumado.',
        pig:true,
        cow:false,
        bacon:false},
        {name:'Lomo Ahumado Natural',
        desc:'Carré de cerdo deshuesado, salado, cocido y ahumado. La característica principal es su forma redonda, que se obtiene gracias a la red con la que se elabora.',
        pig:true,
        cow:false,
        bacon:false},
        {name:'Lomo Horneado A Las Finas Hierbas',
        desc:'Carré de cerdo deshuesado, salado, cocido y ahumado. Delicadamente saborizado con romero y cocinado con celofán conservando su humedad.',
        pig:true,
        cow:false,
        bacon:false},
        {name:'Bondiola Ahumada',
        desc:'Corte de cerdo salado, cocido y ahumado. Sus betas de grasa interior caracterizan tu textura.',
        pig:true,
        cow:false,
        bacon:false},
      ],
      images: [
        {
          fields: {
            file: {
              url: product19,
            },
          },
        },
        {
          fields: {
            file: {
              url: product14,
            },
          },
        },
        {
          fields: {
            file: {
              url: product15,
            },
          },
        },
        {
          fields: {
            file: {
              url: product1,
            },
          },
        },
        {
          fields: {
            file: {
              url: product23,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "3",
    },
    fields: {
      name: "ESPAÑOLES",
      slug: "españoles",
      type: "Cantimpalo, Pamplona, Solomillo...",
      price: 250,
      stock: false,
      featured: false,
      description:
        "DENTRO DE ESTE GRUPO DE PRODUCTOS PODEMOS ENCONTRAR LOS MÁS VARIADOS EMBUTIDOS PROVENIENTES DE ESPAÑA, DONDE PREDOMINA EL PIMENTÓN Y DEMÁS ESPECIES MEDITERRÁNEAS.",
      extras: [
        {name:'Chorizo Candelario',
        desc:'Embutido conformado por carne de cerdo, carne vacuna, tocino y especies. Su característico color rojizo se debe al pimentón utilizado especialmente para este producto. Suele ser utilizado para platos de olla.',
        pig:true,
        cow:true,
        bacon:true},
        {name:'Chorizo Cantimpalo',
        desc:'Con mayor proporción de carne porcina, este producto se diferencia del candelario por su mayor calibre, prolongado curado y su dejo ahumado.',
        pig:true,
        cow:false,
        bacon:false},
        {name:'Pamplona',
        desc:'Embutido fabricado con carne vacuna, carne porcina, tocino y especies. Se caracteriza por su picado fino y su forma natural otorgada por la tripa que lo contiene.',
        pig:true,
        cow:true,
        bacon:true},
        {name:'Chistorra',
        desc:'Se trata de un producto que posee ingredientes similares al Chorizo Candelario. Su característica principal es su delgado diámetro, generalmente utilizado para cocciones rápidas.',
        pig:true,
        cow:true,
        bacon:true},
        {name:'Sobrasada',
        desc:'Se trata de un embutido de origen Mallorquín, cuyos ingredientes principales son la carne de cerdo, tocino y pimentón. Se destaca por ser un producto de pasta untable.',
        pig:true,
        cow:false,
        bacon:true},
        {name:'Butifarra Catalana',
        desc:'Básicamente es un chorizo cocido compuesto por carne de cerdo y tocino. En él podremos destacar el intenso gusto a pimienta.',
        pig:true,
        cow:false,
        bacon:true},
        {name:'Morcilla Asturiana',
        desc:'Se trata de un embutido seco, fabricado con sangre de cerdo, papada de cerdo y numerosas especies. Se distingue por su oscuro color y ahumado aroma, y es utilizado para cocciones.',
        pig:true,
        cow:false,
        bacon:false},
        {name:'Lomo Curado',
        desc:'Carré de cerdo deshuesado, salado y de larga curación. Existen dos tipos: el “Lomo Embuchado”, que tiene pimentón en su exterior, y el “Lomo a la pimienta”, que como su nombre indica está recubierto por la misma.',
        pig:true,
        cow:false,
        bacon:false},
        {name:'Solomillo al Pimentón',
        desc:'En este caso se trata de una pieza salada y recubierta con pimentón, la cual es envuelta con celofán para su curado.',
        pig:true,
        cow:false,
        bacon:false},
      ],
      images: [
        {
          fields: {
            file: {
              url: product4,
            },
          },
        },
        {
          fields: {
            file: {
              url: product36,
            },
          },
        },
        {
          fields: {
            file: {
              url: product37,
            },
          },
        },
        {
          fields: {
            file: {
              url: product9,
            },
          },
        },
        {
          fields: {
            file: {
              url: product10,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "4",
    },
    fields: {
      name: "SALCHICHAS Y PATÉ",
      slug: "salchichas-pate",
      type: "Salchichas, Paté, Rosca...",
      price: 300,
      stock: true,
      featured: true,
      description:
        "EN ESTE GRUPO PODEMOS ENCONTRAR UNA AMPLIA GAMA DE SALCHICHAS, DIFERENCIÁNDOSE ENTRE ELLAS POR SUS INGREDIENTES, TRIPAS Y CALIBRES. A SU VEZ, CONTAMOS CON PATÉ DE HÍGADO ELABORADO CON TRIPA NATURAL QUE CONSERVA SU TRADICIONAL MANERA DE SER FABRICADO.",
      extras: [
        {name:'Salchichas Tipo Viena',
        desc:'Se trata de un producto realizado en con carne de cerdo, carne vacuna y tocino. Su variedad de especies e intenso ahumado hacen de éstas su principal característica. Existen cortas, largas, copetín y “Frankfurt”, siendo la última la de mayor espesor.',
        pig:true,
        cow:true,
        bacon:true},
        {name:'Chorizo Tipo Viena',
        desc:'También conocido como “Snack”, de forma similar a un chorizo pero con pasta tipo Viena. El mismo se encuentra embutido en tripa natural de cerdo, y está cocido y ahumado.',
        pig:true,
        cow:false,
        bacon:false},
        {name:'Salchicha Alemana',
        desc:'Se destaca por ser una salchicha de puro cerdo, de suave sabor, textura y rigidez en su piel. Se elabora únicamente en grueso calibre.',
        pig:true,
        cow:false,
        bacon:false},
        {name:'Paté de Hígado',
        desc:'Se trata de la clásica pasta de hígado o “Leberwurts” el cual es elaborado con hígado de cerdo, tocino y especies que le otorgan el sabor y la untuosidad característica al producto. Se elabora con tripa natural, y el paté puede ser natural o ahumado.',
        pig:true,
        cow:false,
        bacon:true},
        {name:'Rosca Polaca',
        desc:'Esta especialidad tiene con ingrediente principal la pasta de Salchicha de Viena, con la incorporación de tocino en cubos y ajo fresco otorgándole su sabor principal. Se encuentra cocida y ahumada con humo natural.',
        pig:true,
        cow:false,
        bacon:true},
        {name:'Cracovia',
        desc:'Aquí hablamos de un fiambre cocido y ahumado. Sus componentes son la carne de cerdo picada gruesa, carne vacuna y tocino molidos de manera fina. Existen en formato familiar o bien en el formato comercial para ser feteado a máquina.',
        pig:true,
        cow:true,
        bacon:true},
      ],
      images: [
        {
          fields: {
            file: {
              url: product31,
            },
          },
        },
        {
          fields: {
            file: {
              url: product21,
            },
          },
        },
        {
          fields: {
            file: {
              url: product22,
            },
          },
        },
        {
          fields: {
            file: {
              url: product5,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "5",
    },
    fields: {
      name: "COCIDOS",
      slug: "cocidos",
      type: "Jamón Cocido/Natural, Pastrón",
      price: 200,
      stock: true,
      featured: true,
      description:
        "EN ESTE GRUPO TENEMOS COMO PRINCIPALES EXPONENTES LOS JAMONES COCIDOS Y LOS PASTRONES. TODOS SON FABRICADOS EN SU FORMATO TRADICIONAL, OTORGÁNDOLE A CADA UNO CARACTERÍSTICAS ARTESANALES.",
      extras: [
        {name:'Jamón Cocido',
        desc:'Se trata del clásico fiambre cocido de cerdo, fabricado en su totalidad con jamón fresco y moldeados con papel para obtener un producto de óptima calidad. Ofrecemos el “Jamón Cocido Tradicional” y el “Jamón Cocido Natural”.',
        pig:true,
        cow:false,
        bacon:false},
        {name:'Pastrón',
        desc:'Se menciona en este grupo al “Pastrón Natural” conformado por el pecho vacuno cocido, horneado y levemente condimentado. También se elabora el “Pastrón Moldeado”, el cual se encuentra cocido dentro de un molde que le otorga uniformidad a la pieza.',
        pig:false,
        cow:true,
        bacon:false},
      ],
      images: [
        {
          fields: {
            file: {
              url: product11,
            },
          },
        },
        {
          fields: {
            file: {
              url: product12,
            },
          },
        },
        {
          fields: {
            file: {
              url: product13,
            },
          },
        },
        {
          fields: {
            file: {
              url: product20,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "6",
    },
    fields: {
      name: "ESPECIALIDADES",
      slug: "especialidades",
      type: "Pechito, Costillar, Peperonni...",
      price: 250,
      stock: false,
      featured: false,
      description:
        "LAS ESPECIALIDADES QUE FABRICAMOS EN NUESTRO ESTABLECIMIENTO: PRODUCTOS AHUMADOS, COCIDOS Y FRESCOS QUE NOS ENORGULLECEN POR SU CALIDAD Y DISTINCIÓN EN EL MERCADO.",
      extras: [
        {name:'Pechito y Codillo de Cerdo Ahumado',
        desc:'Se trata de piezas de cerdo que conservan su formato natural, las cuales son sometidas a la salazón para luego ser horneadas e intensamente ahumadas. Su mayor aplicación es para la elaboración de comidas de olla.',
        pig:true,
        cow:false,
        bacon:false},
        {name:'Costillar Ahumado',
        desc:'También conocido como “Kassler”, se conforma por el costillar de cerdo cuya pieza se somete a ser levemente salada y luego se hornea de forma lenta para lograr su correcta cocción y parejo ahumado.',
        pig:true,
        cow:false,
        bacon:false},
        {name:'Salame Tipo Holstein',
        desc:'Se trata de un salame ahumado elaborado a base de carne de cerdo, carne vacuna y tocino. De grano fino, se destaca por su intenso sabor ahumado.',
        pig:true,
        cow:true,
        bacon:true},
        {name:'Peperoni',
        desc:'Conocemos con este nombre al fiambre cocido americano cuya principal característica es el hinojo natural que lo hace distintivo. De variadas aplicaciones, suele ser utilizado como acompañamiento en pizzas.',
        pig:true,
        cow:false,
        bacon:false},
        {name:'Copetines Surtidos',
        desc:'Entre esta especialidad tenemos a los variados copetines que se fabrican. Copetín colorado con intenso sabor a pimentón, copetín blanco con características similar al chorizo fresco, y el copetín morcilla hacen de estas especialidades productos únicos.',
        pig:true,
        cow:true,
        bacon:true},
      ],
      images: [
        {
          fields: {
            file: {
              url: product7,
            },
          },
        },
        {
          fields: {
            file: {
              url: product6,
            },
          },
        },
        {
          fields: {
            file: {
              url: product24,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "7",
    },
    fields: {
      name: "FRESCOS",
      slug: "frescos",
      type: "Chorizos, Morcillas, Cerdo Fresco...",
      price: 300,
      stock: true,
      featured: false,
      description:
        "COMERCIALIZAMOS LOS CLÁSICOS EMBUTIDOS FRESCOS, Y LOS TÍPICOS CORTES DE CERDO LOS CUALES SON DOTADOS DE LA MEJOR GENÉTICA PARA LOGRAR EN ELLOS PRODUCTOS MAGROS Y DE CALIDAD.",
      extras: [
        {name:'Chorizos Frescos',
        desc:'Podemos mencionar los “Chorizos Tradicionales” realizados con carne vacuna, carne de cerdo, grasa de cerdo y especies. O bien, disponemos también de “Chorizos de Puro Cerdo” íntegramente realizados con carne de cerdo magra.',
        pig:true,
        cow:true,
        bacon:false},
        {name:'Salchicha Parrillera',
        desc:'Compuesta con los ingredientes del chorizo tradicional, se elabora la salchicha en su formato de “Salchicha Atada” que como su nombre indica se fracciona por porciones; o “Salchicha hilo”, la clásica salchicha parrillera comercializada a granel.',
        pig:true,
        cow:true,
        bacon:false},
        {name:'Morcillas',
        desc:'Aquí agrupamos nuestra variedad en morcillas, todas realizadas con cuero de cerdo, cebollas de verdeo y las mejores especies que dotan a estas de su sabor característico. Fabricamos “Morcilla Criolla”, la clásica y tradicional; y “Morcilla Vasca” la cual tienen nueces y pasas de uva otorgándole el típico sabor agridulce.',
        pig:true,
        cow:false,
        bacon:false},
        {name:'Cortes de Cerdo Frescos',
        desc:'Agrupamos a todos nuestros cortes de cerdo fresco. Dentro de ellos podemos nombrar los clásicos como bondiolas, matambritos, churrascos, solomillos, carré deshuesado o lomo de cerdo, etc. También tenemos costillar de cerdo, pecho con manta, patitas y codillos de cerdo fresco, conformado así una variada gama de productos.',
        pig:true,
        cow:false,
        bacon:false},
      ],
      images: [
        {
          fields: {
            file: {
              url: product8,
            },
          },
        },
        {
          fields: {
            file: {
              url: product35,
            },
          },
        },
        {
          fields: {
            file: {
              url: product16,
            },
          },
        },
        {
          fields: {
            file: {
              url: product17,
            },
          },
        },
        {
          fields: {
            file: {
              url: product18,
            },
          },
        },
      ],
    },
  },
];
