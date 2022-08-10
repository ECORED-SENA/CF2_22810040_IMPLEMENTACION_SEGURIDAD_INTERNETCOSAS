<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="zoom-in")
        span 3
      h1(data-aos="zoom-in") Evaluación de seguridad MQTT
    
    .row.mb-5(data-aos="zoom-in")
      .col-12
        p La seguridad es bien importante en cualquier dispositivo que esté disponible en ambientes en producción. En el sector industrial o empresarial protocolos como MQTT realizan una función secundaria de monitoreo en muchos casos, pero es posible que algún usuario conceda acceso a otros servicios esenciales comprometiendo la seguridad de la empresa.
        p.mt-2 La metodología para evaluar la seguridad de una comunicación MQTT es muy parecida a la de un ataque de penetración clásico y se deben ejecutar las siguientes fases:
    
  
    TabsB.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-4.py-md-5(titulo="Fase de reconocimiento " :icono="require('@/assets/curso/temas/tema3/img.svg')")
        .row.d-flex.justify-content-start.align-items-center
          .col-md-7.ps-lg-5
            h4.mb-4.ms-lg-5 Fase de reconocimiento
            p.ms-lg-5 Consiste en buscar dispositivos conectados a la red que usan protocolo MQTT y clasificarlos como publicadores, suscriptores y <i>Brokers</i>,  para realizar un plan de ataque. 
            figure.ms-lg-3
              img(src='@/assets/curso/temas/tema3/img6.png', alt='Texto que describa la imagen')
          .col-md-4.mt-5.mt-lg-0
            figure
              img(src='@/assets/curso/temas/tema3/img5.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Fase de planificación" :icono="require('@/assets/curso/temas/tema3/img2.svg')")
        .row.d-flex.justify-content-start.align-items-center
          .col-md-7.ps-lg-5
            h4.mb-4.ms-lg-5 Fase de planificación
            p.ms-lg-5  Se analizan las posibles  vulnerabilidades encontradas  y se determina el orden de explotación de las mismas, así como la búsqueda de <i>Exploit</i> que se aprovechan de esas debilidades. 
            figure.ms-lg-3
              img(src='@/assets/curso/temas/tema3/img6.png', alt='Texto que describa la imagen')
          .col-md-4.mt-5.mt-lg-0
            figure
              img(src='@/assets/curso/temas/tema3/img10.png', alt='Texto que describa la imagen')
        
      .py-4.py-md-5(titulo="Fase de ejecución" :icono="require('@/assets/curso/temas/tema3/img3.svg')")
        .row.d-flex.justify-content-start.align-items-center
          .col-md-7.ps-lg-5
            h4.mb-4.ms-lg-5 Fase de ejecución
            p.ms-lg-5  Se procede a diseñar  y a ejecutar ataques previamente seleccionados para intentar  acceder o vulnerar la red MQTT, se ejecutan ataques de forma independiente o combinada y se reportan los resultados,  los ataques se realizan  desde una máquina conectada a la red  e intentan interceptar la conexión entre clientes y <i>Broker</i>.
            figure.ms-lg-3
              img(src='@/assets/curso/temas/tema3/img6.png', alt='Texto que describa la imagen')
          .col-md-4.mt-5.mt-lg-0
            figure
              img(src='@/assets/curso/temas/tema3/img11.png', alt='Texto que describa la imagen')

      .py-4.py-md-5(titulo="Fase de mantenimiento" :icono="require('@/assets/curso/temas/tema3/img4.svg')")
        .row.d-flex.justify-content-start.align-items-center
          .col-md-7.ps-lg-5
            h4.mb-4.ms-lg-5 Fase de mantenimiento
            p.ms-lg-5  Se realizan  las mejoras y la configuración necesaria para hacer frente a las vulnerabilidades, mitigar ataques y posibles daños que se ocasionen. 
            p.ms-lg-5.mt-2 Se debe asegurar que las vulnerabilidades sean eliminadas volviendo a ejecutar los ataques.
            figure.ms-lg-3
              img(src='@/assets/curso/temas/tema3/img6.png', alt='Texto que describa la imagen')
          .col-md-4.mt-5.mt-lg-0
            figure
              img(src='@/assets/curso/temas/tema3/img12.png', alt='Texto que describa la imagen')
      


    .row.mb-5(data-aos="zoom-in")
      .col-12
        p Las medidas de seguridad son sencillas de aplicar si se añade a MQTT la capa TLS, con el fin de encriptar la información y proteger el <i>Broker</i> de ataques masivos. El protocolo MQTT también se usa en dispositivos de nuestros hogares como la domótica, enchufes inteligentes, cámaras IP, sensores y actuadores, si un <i>hacker</i> entra a una red sin seguridad puede comprometer seriamente la red del hogar y extraer información importante como claves bancarias, correos, etc.
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
