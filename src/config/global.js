export default {
  global: {
    componenteFormativo: 'Control de amenazas en IoT',
    descripcionCurso:
      'En la actualidad, las empresas, hogares y demás instituciones recurren a la seguridad de sus datos, para mejorar su productividad y aumentar la rentabilidad, a través de procesos ágiles y de calidad; por ello, es imprescindible adoptar medidas que contribuyan a la seguridad en IoT, identificando agujeros de seguridad en los dispositivos que conforman la red IoT y posibles controles.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/icon1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/icon2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/icon3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Protocolos de comunicación IoT',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'MQTT',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Seguridad en MQTT',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'MOSQUITTO',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Evaluación de seguridad MQTT',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Almagro, L. (2019). <i>Ciberseguridad marco NIST. Un abordaje integral de la ciberseguridad.</i>',
      link: '',
    },
    {
      referencia:
        'AUDEA. (2020). <i>Fuga de información ¿Qué es y cómo se puede prevenir?</i>',
      link:
        'https://www.audea.com/fuga-de-informacion-que-es-y-como-se-puede-prevenir/',
    },
    {
      referencia:
        'Castro, M. (2016). <i>Internet de las cosas. Privacidad y seguridad. Universidad de Jaén. Departamento de Informática.</i>',
      link: '',
    },
    {
      referencia: 'IBM Cloud Education. (2021). <i>Redes.</i>  ',
      link:
        'https://www.ibm.com/co-es/cloud/learn/networking-a-complete-guide#toc-trminos-y--ZhqcZz4r',
    },
    {
      referencia:
        'INCIBE. (2017). <i>Control de acceso, políticas de seguridad para la pyme. INCIBE.</i>  ',
      link:
        'https://www.incibe.es/sites/default/files/contenidos/politicas/documentos/control-de-acceso.pdf',
    },
    {
      referencia:
        'INCIBE. (2020). <i>¿Qué son y para qué sirven los SIEM, IDS e IPS? INCIBE.</i> ',
      link:
        'https://www.incibe.es/protege-tu-empresa/blog/son-y-sirven-los-siem-ids-e-ips ',
    },
    {
      referencia:
        'Instituto Nacional de Seguridad. (2020). <i>Seguridad en la instalación y uso de dispositivos IoT: Una guía de aproximación para el empresario. INCIBE.</i>',
      link: '',
    },
    {
      referencia:
        'ISO. (2018). ISO 31000:2018(es). <i>Gestión del riesgo — Directrices.</i> ',
      link: 'https://www.iso.org/obp/ui#iso:std:iso:31000:ed-2:v1:es',
    },
    {
      referencia:
        'ISO. (2013). ISO/IEC 27001:2013. <i>Information technology — Security techniques — Information security management systems — Requirements.</i>',
      link: 'https://www.iso.org/standard/54534.html',
    },
    {
      referencia:
        'ISO / IEC JTC 1 / SC 27. (2018).  <i>Seguridad de la información, ciberseguridad y protección de la privacidad. ISO / IEC 27005: 2018.</i>  ',
      link: 'https://www.iso.org/standard/75281.html',
    },
    {
      referencia:
        'ISO / IEC JTC 1 / SC 27. (2013). <i>Seguridad de la información, ciberseguridad y protección de la privacidad. ISO / IEC 27001: 2013</i>. ',
      link: 'https://www.iso.org/standard/54534.html',
    },
    {
      referencia:
        'ISO / IEC JTC 1 / SC 27. (2013).  <i>Seguridad de la información, ciberseguridad y protección de la privacidad. ISO / IEC 27002: 2013.</i>  ',
      link: 'https://www.iso.org/standard/54533.html',
    },
    {
      referencia:
        'Oracle Corporation and/or its affiliates. (2010). <i>Modelo de referencia OSI.</i>  ',
      link: 'https://docs.oracle.com/cd/E19957-01/820-2981/ipov-8/index.html',
    },
    {
      referencia:
        'Portas, L. (2021). <i>Evaluación de la seguridad de sistemas IoT basados en MQTT. Universidade da Coruña. Facultad de Informática.</i>',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'CA',
      significado:
        'Sus siglas aplican para autoridad certificadora, emite certificados digitales (claves públicas firmadas de forma electrónica) de alta confianza.',
    },
    {
      termino: 'IoT',
      significado:
        'Red de objetos físicos que pueden llevar sensores, software y varias tecnologías, con el fin de conectarse y compartir información con otros dispositivos y sistemas a través de Internet.',
    },
    {
      termino: '<i>Malware</i>',
      significado:
        'Programa dañino que se instala en dispositivos y que puede generar daños o pérdida de información.',
    },
    {
      termino: 'MQTT',
      significado:
        'Protocolo de transporte de mensajería publicación - suscripción de cliente - servidor, liviano, abierto y simple.',
    },
    {
      termino: 'Riesgo',
      significado:
        'Es la probabilidad de que una amenaza se materialice, generando alguna consecuencia negativa.',
    },
    {
      termino: 'SSL',
      significado:
        'Se refiere a Secure Sockets Layer, asegura la comunicación entre servidor y cliente mediante el cifrado, haciendo que los mensajes no puedan ser intervenidos.',
    },
    {
      termino: 'TLS',
      significado:
        'Se refiere a Transport Layer Security, protocolo de cifrado y comunicación, reemplazará al SSL usando un solo puerto para la conexión segura como para la no protegida.',
    },
  ],
  complementario: [
    {
      tema: 'MQTT',
      referencia:
        'Llamas, L. (2019). <i>¿Qué es MQTT? Su importancia como protocolo IoT</i>. https://www.luisllamas.es/que-es-mqtt-su-importancia-como-protocolo-iot/',
      tipo: 'Artículo',
      link:
        'https://www.luisllamas.es/que-es-mqtt-su-importancia-como-protocolo-iot/',
    },
    {
      tema: 'MQTT',
      referencia:
        'Crespo, E. (2020). <i>Aprendiendo Arduino</i>. https://aprendiendoarduino.wordpress.com/2018/11/19/mqtt/',
      tipo: 'Blog',
      link: 'https://aprendiendoarduino.wordpress.com/2018/11/19/mqtt/',
    },
    {
      tema: 'Seguridad en MQTT',
      referencia:
        'Server World. (2020). <i>FTP: Vsftpd Over SSL/TLS</i>. https://www.hivemq.com/hivemq/mqtt-broker/',
      tipo: 'Artículo',
      link: 'https://www.hivemq.com/hivemq/mqtt-broker/',
    },
    {
      tema: 'Seguridad en MQTT',
      referencia:
        'Server World. (2020). <i>Apache2: Configure SSL/TLS</i>. https://www.server-world.info/en/note?os=Ubuntu_20.04&p=httpd&f=3',
      tipo: 'Artículo',
      link: 'https://www.server-world.info/en/note?os=Ubuntu_20.04&p=httpd&f=3',
    },
    {
      tema: 'Seguridad en MQTT',
      referencia:
        'Server World. (2020). <i>OpenSSH: Password Authentication</i>. https://www.server-world.info/en/note?os=Ubuntu_20.04&p=ssh&f=1',
      tipo: 'Artículo',
      link: 'https://www.server-world.info/en/note?os=Ubuntu_20.04&p=ssh&f=1',
    },
    {
      tema: 'MOSQUITTO',
      referencia:
        'Mosquito.org. (2020). <i>Documentación sobre mosquitto</i>. https://mosquitto.org/documentation/',
      tipo: 'Sitio web',
      link: 'https://mosquitto.org/documentation/',
    },
    {
      tema: 'Evaluación de seguridad',
      referencia:
        'HiveMQ Team. (2015). <i>TLS/SSL - MQTT Security fundamentals</i>. https://www.hivemq.com/blog/mqtt-security-fundamentals-tls-ssl/',
      tipo: 'Artículo',
      link: 'https://www.hivemq.com/blog/mqtt-security-fundamentals-tls-ssl/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable Equipo Desarrollo Curricular ',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Héctor Henry Jurado Soto',
        cargo: 'Experto Temático',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'Caterine Bedoya Mejía',
        cargo: 'Diseñadora Instruccional',
        centro:
          'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor Metodológico',
        centro:
          'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Corrector de estilo',
        centro:
          'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuly Rey',
        cargo: 'Diseño web ',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniel Mutis',
        cargo: 'Validación Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edgar Mauricio Cortes',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrea Botello',
        cargo: 'Validación de Maquetación',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Emilsen Alfonso Bautista',
        cargo: 'Validación Contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yicelly Estefania Mesa Silva',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de Gestión de Repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional - Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
