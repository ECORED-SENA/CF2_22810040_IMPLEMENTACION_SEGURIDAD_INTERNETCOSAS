<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="zoom-in")
        span 2
      h1(data-aos="zoom-in") MOSQUITTO
    .row.mb-5(data-aos="zoom-in").d-flex.justify-content-center.align-items-center
      .col-sm-12.col-md-4.d-flex.justify-content-center.align-items-center.w-img-mobile
        figure
          img(src="@/assets/curso/temas/tema2/img4.png" data-aos="zoom-in-up")
      .col-sm-12.col-md-8
        p.mb-2(data-aos="zoom-in") Ya conoce cómo funciona el protocolo MQTT, ahora aprenderá a implementarlo y para ello, buscará un servicio o implementación del <i>Broker</i> MQTT. Existen varias opciones para instalar en cualquier sistema operativo tales como Mosquitto, HiveMQ y VernMQ; también se encuentran servicios de <i>Broker</i> MQTT listos para desarrolladores IoT en la nube, por ejemplo, AWS IoT e IBM <i>Bluemix</i>. 
        .cajon.color-acento-contenido.p-4.mb-4.mt-4
          p En este caso se utilizará el Secure Sockets Layer (SSL) más popular <i>open source</i> llamado mosquito MQTT, que se puede descargar  para cualquier sistema operativo. Con solo instalar mosquito ya se puede poner en funcionamiento un <i>Broker</i>.
          a.anexo.mb-4.mb-lg-0.w-50-cus(href="http://mosquitto.org/" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p #[strong Enlace web. ] Mosquito MQTT
        




    .row.mb-2(data-aos="zoom-in")
      .col-12
        p El objetivo básicamente es estudiar el servidor mosquitto, sus vulnerabilidades y posibles vectores de ataque.
    .row.mb-5(data-aos="zoom-in")
      .col-12
        figure.mt-3
          img(src="@/assets/curso/temas/tema2/img1.png", alt="alt")
    .row.mb-5(data-aos="zoom-in")
      .col-12
        p El protocolo MQTT se puede complementar con una buena base de datos que puede ser InfluxDB, orientada al almacenamiento de series de datos temporales, es de código abierto y diseñado para soportar una gran carga de escrituras y lecturas; debido a esto es una herramienta muy útil para guardar los datos de los dispositivos IoT y se caracteriza por enviar muchos datos en un breve intervalo de tiempo.
    
    .row.mb-2.mt-5(data-aos="zoom-in")
      .col-12
        h3(data-aos="zoom-in") MOSQUITTO con TLS y SSL
    .row.mb-5(data-aos="zoom-in")
      .col-md-4
        figure
          img(src="@/assets/curso/temas/tema2/img2.png" data-aos="zoom-in-up")
      .col-md-8
        p.mt-7(data-aos="zoom-in") Para usar TLS entre el <i>Broker</i> y el cliente se deben generar y desplegar un conjunto de claves y certificados y, realizar ajustes de configuración en el archivo de configuración del <i>Broker</i> y el almacén de claves cliente/servidor. El protocolo MQTT funciona en la capa de aplicación y se encarga de organizar la información y enviarlos a través de una red TCP, la cual es un protocolo de la capa de transporte, es de aclarar que TCP por defecto no usa una comunicación cifrada, por eso se puede usar TLS si se está enviando información como usuario y contraseña, además de información sensible dependiendo del requerimiento de diseño.
        p.mt-4(data-aos="zoom-in") <b>El protocolo MQTT tiene estandarizado para su conexión segura el puerto 8883, reservado exclusivamente para MQTT a través de TLS, el nombre estandarizado en IANA es <i>secure</i>-mqtt.</b>

    .row.mb-5(data-aos="zoom-in")
      .col-12
        p Como se mencionó anteriormente, SSL/TLS son protocolos de encriptación que son usados para asegurar que las comunicaciones web se realicen con integralidad, seguridad y resistencia contra manipulación no autorizada. El 
          strong <i>Transport Layer Security</i>
          strong (TLS) y 
          strong <i>Secure Sockets Layer</i> (SSL)
          | ,&nbsp;proveen un canal de transporte seguro entre un cliente y un servidor. TLS y SSL usan un mecanismo de intercambio de información negociando varios parámetros para crear una conexión segura entre el cliente y un servidor, en el caso de IoT un <i>Broker</i> después de que la comunicación inicial se completa se establece una comunicación completamente encriptada entre clientes y <i>Broker</i>, y así ningún atacante como 
          strong  “<i>the man in the middle</i>”
          | &nbsp;entenderá lo que se transmitió.
    
    .row(data-aos="zoom-in")
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 4
          span Mosquito-TSL/SSL
    .row(data-aos="zoom-in").mb-5.d-flex.justify-content-center.align-items-center
      .col-9
        figure.mb-4
          img(src="@/assets/curso/temas/tema2/img3.png", alt="alt")
    .row.mb-5(data-aos="zoom-in")
      .col-12
        p PKI usa el protocolo TLS para establecer conexiones seguras entre clientes y servidores sobre TCP, asegurando que la información enviada sea imposible de leer por terceras personas.
    
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
