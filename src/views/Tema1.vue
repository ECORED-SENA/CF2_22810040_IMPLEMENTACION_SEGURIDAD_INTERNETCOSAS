<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Protocolos de comunicación IoT
     
    .row.mb-4
      .col-md-3
        figure
          img(src="@/assets/curso/temas/tema1/img1.png" data-aos="zoom-in-up")
      .col-md-9
        p(data-aos="fade-in") Los protocolos de comunicación son descripciones formales de formatos y reglas de mensajes digitales, se consideran también como el conjunto de normas de mensajes digitales que deben cumplir los dispositivos y programas que intercambian comunicación de datos; sin estas reglas la comunicación resultaría caótica y por tanto, imposible.
        p.mt-5(data-aos="fade-in") Los protocolos de comunicaciones abarcan la autenticación, detección y corrección de errores y señalización, además pueden evidenciar la sintaxis, la semántica y la sincronización de las comunicaciones analógicas y digitales. La implementación de los protocolos se realiza en hardware y software, pues todas las comunicaciones analógicas como las digitales los utilizan.

    .row.mb-3
      .col-12
        p(data-aos="fade-in") Existen algunos como:
        
    .row.mb-2
      .col-lg-4
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img4.png' alt='AvatarTop')
          .tarjeta.tarjeta--azul--claro.d-flex
            .d-flex.justify-content-center.align-items-center.mt-3
              p.text-bold Protocolo de Información <br> Industrial (DNP).
      .col-lg-4
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img3.png' alt='AvatarTop')
          .tarjeta.tarjeta--azul--claro.d-flex
            .d-flex.justify-content-center.align-items-center.mt-3
              p.text-bold  Protocolo de Internet (IP).
      .col-lg-4
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img2.png' alt='AvatarTop')
          .tarjeta.tarjeta--azul--claro.d-flex
            .d-flex.justify-content-center.align-items-center.mt-3
              p.text-bold  Protocolo de Información de <br> Transmisión (TCP).
    .row.mb-5
      .col-8.offset-md-2
        .cajon.color-secundario.p-4
          p Estos generan conexiones entre todos los dispositivos enlazados.


    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-in")
      h2 1.1  MQTT

    .gray--left.mb-2
      .row.justify-content-center.align-items-center.py-4   
        .col-lg-8(data-aos="fade-in").mb-5.mb-lg-0                    
          p Sus siglas significan #[strong  Message Queuing Telemetry Transport], es un protocolo muy sencillo usado para para transmitir mensajes cortos provenientes de cualquier dispositivo, desde o hacia una red de sensores / actuadores; su comunicación es de mensajería ligera y está diseñado para telemetría M2M (máquina a máquina), en entornos de ancho de banda bajo. La forma de comunicación trabaja como un sistema de publicar y suscribirse, los dispositivos publican mensajes sobre un tópico específico, todos los dispositivos que están suscritos a ese tópico reciben el mensaje; por ello, se considera que su modelo de comunicación que está basado en el productor - consumidor.
          p.mt-2.bg-cus-2 Con el protocolo MQTT es posible que los dispositivos de IoT envíen o publiquen información con recursos limitados a un servidor que funciona como un agente de mensajes MQTT, acerca de un tema determinado
        .col-lg-4.col-10
          figure
            img(src="@/assets/curso/temas/tema1/img5.png", alt="alt")
    
    .row.mb-5
      .col-12
        p Entre las principales aplicaciones MQTT se incluye el envío de mensajes a salidas de control, leer y publicar datos desde sensores y otras muchas más aplicaciones. MQTT se usa actualmente en autos inteligentes, casas inteligentes, fábricas, ciudades inteligentes, productos de consumo, etc.
        p.mt-2 Hay varias versiones de MQTT ¿sabe cuáles son? Esta es su oportunidad para que se actualice y se contextualice al respecto:

    .row.mb-5
      .col-md-3.col-lg.mb-5.mb-lg-0.img-hover-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img6.png' alt='AvatarTop')
          .tarjeta.color-primario
            .p-3.text-center
              p #[strong MQTT v3.1.0. ]
      .col-md-3.col-lg.mb-5.mb-lg-0.img-hover-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img6.png' alt='AvatarTop')
          .tarjeta.color-primario
            .p-3.text-center
              p #[strong  MQTT v3.1.1 - en uso común. ]
      .col-md-3.col-lg.mb-5.mb-lg-0.img-hover-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img6.png' alt='AvatarTop')
          .tarjeta.color-primario
            .p-3.text-center
              p #[strong MQTT v4 uso limitado. ]
      .col-md-3.col-lg.mb-5.mb-lg-0.img-hover-cus
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img6.png' alt='AvatarTop')
          .tarjeta.color-primario
            .p-3.text-center
              p #[strong MQTT SN. ]

    .row.mb-5
      .col-12
        p En MQTT no es necesario que el dispositivo que publica y el dispositivo que recibe mensajes estén conectados o sincronizados al mismo tiempo, puesto que el Broker es capaz de guardar los mensajes de los clientes, a diferencia de aplicaciones industriales donde los mensajes son consumidos en tiempo real, todo depende del requerimiento puntual a resolver, es decir, las bases del protocolo MQTT son de alguien que publica un mensaje usando un topic específico y el Broker distribuye el mensaje a todos los clientes (aplicaciones o dispositivos) que están suscritos a ese topic, esos clientes reciben y consumen los datos de esos mensajes.

    .row(data-aos="zoom-in").mb-5
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          span MQTT

        figure.mb-4
          img(src="@/assets/curso/temas/tema1/img7.svg", alt="alt")

    .row.mb-2
      .col-12
        p Para adentrarse en el mundo de MQTT se deben conocer algunos conceptos relacionados:


    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema1/img10.png", alt="alt")
          .col-md-6.mb-4.mb-md-0.p-5
            p.text-bold Mensaje
            p Es la información que se quiere intercambiar entre los dispositivos, puede ser, por ejemplo, un comando para activar un actuador o una lectura de un sensor. Un mensaje es una trama de bytes con una sección que  contiene la información útil (payload) para el servidor o para el resto de nodos. La información obtenida  puede ser señales de sensores como temperatura, humedad, estado, presencia, etc.
        
        .row
          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema1/img9.png", alt="alt")
          .col-md-6.mb-4.mb-md-0.p-5
            p.text-bold Tópico
            p Es la forma de especificar el interés por los mensajes entrantes o la forma de especificar dónde se desea publicar el mensaje. El tópico es representado por cadenas separadas por un slash (/) cada slash indica un nivel del tópico. 
        
        
        .row
          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema1/img8.png", alt="alt")
          .col-md-6.mb-4.mb-md-0.p-5
            p.text-bold Broker
            p Es el encargado de saber quien está en la red, qué mensajes puede enviar y envía mensajes de un lado a otro. 



    .row.mb-2
      .col-12
        p Para ejemplificar lo mencionado anteriormente, observe la siguiente arquitectura:

    .row(data-aos="zoom-in").mb-5
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 2
          span Detección vehicular 

        figure.mb-4
          img(src="@/assets/curso/temas/tema1/img11.png", alt="alt")

    .row.mb-2
      .col-12
        p Se puede interpretar que:

    .row.mb-5
      .col-md-4.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-adicional-4.p-5
          .tarjeta-numerada__numero
            .h2.text-white A
          p El sensor detecta la presencia de un vehículo y envía una señal, el cliente MQTT la procesa y envía el mensaje sobre el tópico autopista/peaje/sensorpresencia.

      .col-md-4.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 B
          p También existe un dispositivo que necesita obtener información del sensor y debe subscribirse a autopista/peaje/sensorpresencia.

      .col-md-4.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.p-5
          .tarjeta-numerada__numero
            .h2 C
          p Autopista/peaje/sensorpresencia, carretera y peaje son los niveles del tópico.

    .row.mb-2
      .col-12.mt-5
        p(data-aos="fade-in") #[strong Envíos de mensajes MQTT]
        p.mt-2(data-aos="fade-in") Los clientes MQTT inicialmente se conectan con el protocolo TCP/IP con el Broker MQTT, la misión de este Broker es tener almacenada la información de los clientes y de los usuarios emisores y consumidores, la conexión entre cliente y Broker estará disponible hasta que el dispositivo cliente termine su labor. El protocolo MQTT usa el puerto 1883 para conexión básica no segura y el puerto 8883 cuando usa una capa de seguridad TLS.
        p.mt-2(data-aos="fade-in") Vea, entonces, las fases de los envíos de mensajes y lo que representan:

    .row.mb-5
        .col-12
          AcordionA.mt-2(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.justify-content-center.align-items-center(titulo="CONNECT")
              .col-7
                p.mb-0 La figura muestra cómo se conecta el cliente al Broker mediante el envío de un #[strong  CONNECT], este posee información como  identificación de usuario, su contraseña, datos de cliente, etc.  
                p.mt-2 El servidor Broker responde al cliente con un #[strong CONNACK ], enviando con aceptación o rechazo de la conexión.
              .col-4
                figure
                  img(src='@/assets/curso/temas/tema1/img12.png', alt='').pl-20-cus     

            .row.justify-content-center.align-items-center(titulo="PUBLISH")
              .col-7
                p.mb-0 Si se desea realizar la transmisión de  los mensajes el cliente usa #[strong PUBLISH ], que contiene el TEMA/TOPIC y el informe #[strong  PAYLOAD].
              .col-4
                figure
                  img(src='@/assets/curso/temas/tema1/img13.png', alt='').pl-20-cus  
            
            .row.justify-content-center.align-items-center(titulo="SUBSCRIBE y UNSUSCRIBE")
              .col-7
                p.mb-0 Si desea suscribirse y eliminar suscripción se usan  las palabras #[strong SUBSCRIBE] y #[strong UNSUSCRIBE], el Broker responderá con #[strong SUBACK ] y #[strong  UNSUBACK].
              .col-4
                figure
                  img(src='@/assets/curso/temas/tema1/img14.png', alt='').pl-20-cus  

            .row.justify-content-center.align-items-center(titulo="PINGREQ - PINGRESP")
              .col-7
                p.mb-0 Para asegurar que la conexión esté siempre activa los clientes envían en forma periódica  un mensaje #[strong  PINGREQ], el Broker responde con una palabra #[strong PINGRESP ].  
                p.mt-2 Por último, el dispositivo cliente puede desconectarse si envía la palabra #[strong  DISCONNECT].
                a.boton.color-acento-botones.indicador__container.radius-btn-cus.mb-5(@click="modal1 = true")
                  span <i><b>TIM System</b></i>
                  .indicador--click(v-if="mostrarIndicador")
                ModalA(:abrir-modal.sync="modal1")
                  .row.align-items-center
                    .col-12
                      figure
                        img(src='@/assets/curso/temas/tema1/img38.png', alt='Texto que describa la imagen')
              .col-4
                figure
                  img(src='@/assets/curso/temas/tema1/img15.png', alt='').pl-20-cus  
    

    .row.mb-2
      .col-12.mt-5
        p(data-aos="fade-in") #[strong Estructura de un mensaje MQTT]
        p.mt-2(data-aos="fade-in") La potencia del protocolo MQTT está en la definición y tipología de los mensajes, en su sencillez radica su potencialidad. Cada mensaje consta de tres partes:

    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Cabecera fija")
        .row.mb-1
          .col-6
            h4 Cabecera fija
            p Esta parte del mensaje se encuentra conformado por 2 hasta  5 #[strong bytes ] y es de carácter obligatorio, una parte de la cabecera se llama control que indica el tipo de mensaje a enviar, y otra parte envía la longitud del paquete a enviar.  
            p.mt-2La longitud del paquete usa de #[strong 1 a 4 bytes ], de estos solo usa los #[strong 7 byts ] iniciales  y el último #[strong byt ] es para controlar la continuidad.
          .col-6
            figure
              img(src="@/assets/curso/temas/tema1/img16.png", alt="alt")
      .tarjeta.color-acento-botones--borde.p-4(titulo=" Cabecera opcional")
        .row.mb-1
          .col-6
            h4  Cabecera opcional
            p Es necesaria para enviar algunos mensajes.  dependiendo de los requerimientos del proyecto. 
          .col-6
            figure
              img(src="@/assets/curso/temas/tema1/img17.png", alt="alt")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Información útil")
        .row.mb-1
          .col-6
            h4  Información útil (PayLoad)
            p Es opcional, contiene   la información real del mensaje, puede tener hasta 256 Mb, dependiendo de la aplicación.
          .col-6
            figure
              img(src="@/assets/curso/temas/tema1/img18.png", alt="alt")  

    .row.mb-5
      .col-12.mt-2
        p Si desea conocer los diferentes tipos de mensajes y códigos de control que se envían en el protocolo MQTT, a través de la siguiente tabla lo puede hacer:       
    
    .row.mb-5
      .col-8.offset-md-2
          .tabla-b.color-acento-contenido.mb-5
            table
              caption Nota. Tomado de https://www.luisllamas.es/que-es-mqtt-su-importancia-como-protocolo-iot/
              tr.tabla-b__header.w-table-td 
                td #[strong Mensaje ]
                td #[strong Código ]
                td.bg-white.w-table-td
                td #[strong Mensaje ]
                td #[strong Código ]

              tr
                th.text-center CONNECT
                td.text-center 0x10
                td.bg-white.w-table-td
                th.text-center SUBSCRIBE
                td.text-center 0x80
              tr
                th.text-center CONNACK
                td.text-center 0x20
                td.bg-white.w-table-td
                th.text-center SUBACK
                td.text-center 0x90
              tr
                th.text-center PUBLISH
                td.text-center 0x30
                td.bg-white.w-table-td
                th.text-center UNSUBSCRIBE
                td.text-center 0xA0
              tr
                th.text-center PUBBACK
                td.text-center 0x40
                td.bg-white.w-table-td
                th.text-center UNSUBACK
                td.text-center 0xB0
              tr
                th.text-center PUBREC
                td.text-center 0x50
                td.bg-white.w-table-td
                th.text-center PINGREQ
                td.text-center 0xC0
              tr
                th.text-center PUBREL
                td.text-center 0x60
                td.bg-white.w-table-td
                th.text-center PINGRESP
                td.text-center 0xD0
              tr
                th.text-center PUBCOMP
                td.text-center 0x70
                td.bg-white.w-table-td
                th.text-center DISCONNECT
                td.text-center 0xE0
    .row.mb-2
      .col-12.mt-5
        p(data-aos="fade-in") #[strong Calidad del servicio (QoS)]
        p.mt-2(data-aos="fade-in") MQTT tiene capacidad de gestionar la calidad del servicio o QoS de acuerdo con las necesidades del proyecto, el hecho de que la calidad del servicio se resuelva en la capa de protocolo proporciona ventajas para el desarrollo de aplicaciones de Internet de las cosas y se blinda de fallos de cualquier fuente.
        p.mt-2(data-aos="fade-in") MQTT posee tres niveles QoS, pero ¿cuáles son? Véalas:



    .row.mb-5
      .col-md-3.col-lg.mb-5.mb-lg-0.img-hover-cus-2
        .tarjeta-avatar.card-event
          img(src='@/assets/curso/temas/tema1/img19.svg' alt='AvatarTop')
          .tarjeta.color-primario.color-hover-cus
            .h3.text-center.text-card-cus QoS 0 unacknowledged<br>(at most one)
            .p-3.text-center
              p.text-card-cus La información se envía una sola  vez, en caso de que exista algún fallo,  por ejemplo, si es de conexión lo más probable es que el mensaje no llegue al destino.
      .col-md-3.col-lg.mb-5.mb-lg-0.img-hover-cus-2
        .tarjeta-avatar.card-event
          img(src='@/assets/curso/temas/tema1/img19.svg' alt='AvatarTop')
          .tarjeta.color-primario.color-hover-cus
            .h3.text-center.text-card-cus QoS 1 acknowledged <br>(at least one)
            .p-3.text-center
              p.text-card-cus La información se envía  hasta que  la entrega se haga efectiva.  En caso de fallo, el receptor puede recibir el mismo mensaje varias veces.
      .col-md-3.col-lg.mb-5.mb-lg-0.img-hover-cus-2
        .tarjeta-avatar.card-event
          img(src='@/assets/curso/temas/tema1/img19.svg' alt='AvatarTop')
          .tarjeta.color-primario.color-hover-cus
            .h3.text-center.text-card-cus QoS 2 assured <br>( exactly one )
            .p-3.text-center
              p.text-card-cus Este es el de mayor confianza, garantizando que la información llegue al receptor y no tenga duplicados.

    .row.mb-3
      .col-12
        figure.mt-3
          img(src="@/assets/curso/temas/tema1/img20.svg", alt="alt")  
    Separador 

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-in")
      h2 1.2. Seguridad en MQTT

    .gray--left.mb-2
      .row.justify-content-center.align-items-center.py-4   
        .col-lg-4.col-10
          figure
            img(src="@/assets/curso/temas/tema1/img21.png", alt="alt")
        .col-lg-8(data-aos="fade-in").mb-5.mb-lg-0                    
          p Cuando se habla de ciberseguridad se hace referencia a asegurar que la comunicación entre clientes solo se realice entre ellos y nadie más que esté autorizado, es importante que cada vez que se evalúa un protocolo IoT se revisen sus propiedades y características en materia de seguridad. 
          p.mt-2 En el caso de MQTT, no cuenta con una propiedad de seguridad específica, por tanto, es conveniente implementar seguridad adicional en la arquitectura, lo más común es usar el protocolo de transporte como es TLS / SSL (Transport Layer Security / Secure Sockets Layer) o capa de seguridad de transporte y capa de socket seguro. Este protocolo hace que la información se vaya por un canal encriptado y seguro ante posibles ataques como “the man in the middle”.
        
    
    .row.mb-5
      .col-12
        p Una forma alterna en la capa de red es implementar una red privada virtual (VPN) entre el Broker y los dispositivos IoT, esto hace un túnel seguro entre el dispositivo y el servidor principal, ver figura.
  
    .row(data-aos="zoom-in").mb-5
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 3
          span Seguridad MQTT

        figure.mb-4
          img(src="@/assets/curso/temas/tema1/img22.png", alt="alt")
    
    .row.mb-5
      .col-12
        p Es algo complejo de implementar en aplicaciones IoT, pues hablar de dispositivos IoT es difícil porque son muy pocos los que ofrecen cliente VPN. 
        p.mt-2 Para garantizar la seguridad es necesario apegarse a tres niveles de seguridad que ha definido IBM y que puede de alguna forma constatar revisando el estándar del protocolo, así se tiene:


    
    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0.p-5
            p.text-bold Identificación
            p Consiste en dar nombre al cliente que se va a autenticar y así poder brindar autorización. 
            p.mt-2 Un cliente MQTT se puede  identificar  con el identificador único de cliente, su identificación de usuario  y su certificado digital público.
          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema1/img23.png", alt="alt")
        .row
          .col-md-6.mb-4.mb-md-0.p-5
            p.text-bold Autenticación
            p Una vez se haya dotado de identidad  al cliente, el Broker debe ser capaz de determinar que el cliente que se quiere conectar es el que dice que es. De igual forma, los clientes debe ser capaces de verificar la identidad del servidor.
          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema1/img24.png", alt="alt")
        
        .row
          .col-md-6.mb-4.mb-md-0.p-5
            p.text-bold Autorización
            p Con los dispositivos autenticados el servidor puede definir los derechos de acceso a los tópicos, en los cuales los clientes desean publicar o suscribirse, esto se define como autorización.
          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema1/img25.png", alt="alt")
    
    .row.mb-5
      .col-12
        p Se puede identificar un dispositivo a través de los siguientes atributos:

    .row.mb-5
      .col-sm-6.col-xl-5.mb-4.mb-xl-0.offset-md-1
        .tarjeta.tarjeta-flip.color-primario.height-cus-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img27.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              .row
                .col-3
                  figure
                      img(src="@/assets/curso/temas/tema1/img28.svg", alt="alt")
                .col-9
                  h4 Cliente ID
                  p Cada cliente posee un único identificador de cliente, que emplea el servidor para determinar el estado de la sesión MQTT e identificar al cliente, el cliente Id es presentado  en una cadena de caracteres codificada en UTF.-8 y contenida en el payload del paquete CONNECT. 
      .col-sm-6.col-xl-5.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario.height-cus-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img26.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
               .row
                .col-3
                  figure
                    img(src="@/assets/curso/temas/tema1/img29.svg", alt="alt")
                .col-9
                  h4 Usuario y contraseña
                  p Son atributos que están presentes en el payload del paquete CONNECT, son empleados por los servidores durante los procesos de autenticación y autorización de clientes.  La presencia de ambos viene indicada en la sección de flags de la cabecera variable del paquete de control CONNECT.
    .row.mb-3
      .col-12.mt-5
        p Hasta aquí, identificando cliente ID y usuario más contraseña, en el payload se tienen problemas de seguridad, puesto que se consigue establecer una conexión en la que se transmite la información en texto plano y cualquier persona que conozca la trama del protocolo podrá acceder a la información, por tanto, se requiere un transporte encriptado y usar protocolos TLS /SSL con puertos 8883, por defecto sin encriptación el puerto es 1883. 
        
    .row.mb-3
      .col-12
        figure.mt-3
          img(src="@/assets/curso/temas/tema1/img30.svg", alt="alt")  
    Separador

    .row.mb-2
      .col-12
        p La encriptación asimétrica se basa en la codificación de la información basada en dos claves:
        
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/img31.svg', alt='Texto que describa la imagen')
          figcaption 

      .tarjeta.color-acento-botones.p-3(x="25%" y="16%" numero="1")
        figure.w-15-cus
          img(src="@/assets/curso/temas/tema1/img32.svg", alt="alt") 
        .h5.mb-2 Clave pública: 
        p permite encriptar mensajes que solo se cifran con la clave privada.
      .tarjeta.color-acento-botones.p-3(x="19%" y="43%" numero="2")
        figure.w-15-cus
          img(src="@/assets/curso/temas/tema1/img33.svg", alt="alt") 
        .h5.mb-2 Clave privada:
        p permite descifrar los mensajes cifrados por la clave pública, siempre y cuando se cuente con la clave pública.


    .row.mb-2
      .col-12
        p Se requiere el par de claves o llaves para desencriptar los mensajes transportados. Ahora bien, para saber si la llave pertenece a un dispositivo, la respuesta radica en los siguientes certificados públicos:

    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA.mb-3
        .row
          .col-md-6
              figure
                img(src="@/assets/curso/temas/tema1/img34.png", alt="alt")
          .col-md-6.mb-4.mb-md-0.p-5
            p.text-bold Certificado digital
            p Es un archivo  informático generado por una entidad de servicios de certificación (autoridad de certificación).  
            p.mt-2 Esta entidad asocia datos con una persona o empresa, confirmando así su identidad digital en Internet. 

        .row
          .col-md-6
              figure
                img(src="@/assets/curso/temas/tema1/img35.png", alt="alt")
          .col-md-6.mb-4.mb-md-0.p-5
            p.text-bold Autenticación + MQTT
            p Consiste en verificar las credenciales de los dispositivos, hasta aquí se podría establecer un mecanismo que le permita al Broker verificar las credenciales del cliente mediante el uso de atributos de identidad  mencionados antes; sin embargo, el protocolo permite el uso de otros sistemas de autenticación.
            p.mt-2 Para proveer  una autenticación simétrica, el cliente debe ser capaz de autenticar las credenciales del servidor. 
            p.mt-2 El MQTT no dispone de ningún mecanismo de autenticación cliente-servidor, para resolver esto se soporta en el protocolo TLS/SSL, ofreciendo autenticación mutua cliente servidor a través de intercambio y revisión de los certificados digitales.
        .row
          .col-md-6
              figure
                img(src="@/assets/curso/temas/tema1/img36.png", alt="alt")
          .col-md-6.mb-4.mb-md-0.p-5
            p.text-bold Autorización + MQTT
            p La autorización no forma parte del protocolo MQTT; la proporcionan los Brokers y la aplicación en sí.
            p.mt-2 La implementación puede restringir el acceso de los clientes basándose en el identificador del cliente, el usuario, dirección IP e incluso los resultados obtenidos de los mecanismos de autenticación.
            p.mt-2 Si la aplicación cuenta con un gran número de clientes, el servidor debe  disponer de los medios necesarios para agrupar los clientes por roles.


    .row.mb-2.mt-5
      .col-12
        p(data-aos="fade-in") #[strong Vulnerabilidades y vectores de ataque]
    .row.mb-5
      .col-md-3
        figure
          img(src="@/assets/curso/temas/tema1/img37.png" data-aos="zoom-in-up")
      .col-md-9
        p.mt-5(data-aos="fade-in") El protocolo MQTT puede ser atacado con ataques mediante MQTT malaria que se basa en la simulación de varios clientes llamados mosquitos que publican mensajes a grandes velocidades, ataques de denegación de servicio, botones a través de MQTT, man in the middle, ataques de fuerza, los cuales fueron descritos anteriormente.
        p.mt-2(data-aos="fade-in") Entre las recomendaciones está el decir que deben realizarse actualizaciones y parches, autenticación, control de accesos y administración, evitar contraseñas por defecto, uso de protocolos seguros TLS/SSL y bloquear puertos inactivos.











</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaFlip: true,
    modal1: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
