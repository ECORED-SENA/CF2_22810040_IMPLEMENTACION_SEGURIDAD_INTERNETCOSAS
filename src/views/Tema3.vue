<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Evaluación de seguridad MQTT
    
    .row.mb-5
      .col-12
        p La seguridad es bien importante en cualquier dispositivo que esté disponible en ambientes en producción. En el sector industrial o empresarial protocolos como MQTT realizan una función secundaria de monitoreo en muchos casos, pero es posible que algún usuario conceda acceso a otros servicios esenciales comprometiendo la seguridad de la empresa.
        p.mt-2 La metodología para evaluar la seguridad de una comunicación MQTT es muy parecida a la de un ataque de penetración clásico y se deben ejecutar las siguientes fases:
    
  
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Fase de reconocimiento " :icono="require('@/assets/curso/temas/tema3/img.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Fase de reconocimiento 
            p Consiste en buscar dispositivos conectados a la red que usan protocolo MQTT y clasificarlos como publicadores, suscriptores y Brokers,  para realizar un plan de ataque. 
            figure
              img(src='@/assets/curso/temas/tema3/img6.png', alt='Texto que describa la imagen')
          .col-md-4.offset-md-2
            figure
              img(src='@/assets/curso/temas/tema3/img5.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Fase de planificación" :icono="require('@/assets/curso/temas/tema3/img2.svg')")
        .row
          .col-md-6
            h4 Fase de planificación
            p Se analizan las posibles  vulnerabilidades encontradas  y se determina el orden de explotación de las mismas, así como la búsqueda de Exploit que se aprovechan de esas debilidades. 
            figure
              img(src='@/assets/curso/temas/tema3/img7.png', alt='Texto que describa la imagen')
          .col-md-4.offset-md-2
            figure
              img(src='@/assets/curso/temas/tema3/img10.png', alt='Texto que describa la imagen')
        
      .py-4.py-md-5(titulo="Fase de ejecución" :icono="require('@/assets/curso/temas/tema3/img3.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Fase de ejecución
            p Se procede a diseñar  y a ejecutar ataques previamente seleccionados para intentar  acceder o vulnerar la red MQTT, se ejecutan ataques de forma independiente o combinada y se reportan los resultados,  los ataques se realizan  desde una máquina conectada a la red  e intentan interceptar la conexión entre clientes y Broker.
            figure
              img(src='@/assets/curso/temas/tema3/img7.png', alt='Texto que describa la imagen')
          .col-md-4.offset-md-2
            figure
              img(src='@/assets/curso/temas/tema3/img11.png', alt='Texto que describa la imagen')

      .py-4.py-md-5(titulo="Fase de mantenimiento" :icono="require('@/assets/curso/temas/tema3/img4.svg')")
        .row
          .col-md-6
            h4 Fase de mantenimiento
            p Se realizan  las mejoras y la configuración necesaria para hacer frente a las vulnerabilidades, mitigar ataques y posibles daños que se ocasionen. 
            p.mt-2 Se debe asegurar que las vulnerabilidades sean eliminadas volviendo a ejecutar los ataques.
            figure
              img(src='@/assets/curso/temas/tema3/img7.png', alt='Texto que describa la imagen')
          .col-md-4.offset-md-2
            figure
              img(src='@/assets/curso/temas/tema3/img12.png', alt='Texto que describa la imagen')
      


    .row.mb-5
      .col-12
        p Las medidas de seguridad son sencillas de aplicar si se añade a MQTT la capa TLS, con el fin de encriptar la información y proteger el Broker de ataques masivos. El protocolo MQTT también se usa en dispositivos de nuestros hogares como la domótica, enchufes inteligentes, cámaras IP, sensores y actuadores, si un hacker entra a una red sin seguridad puede comprometer seriamente la red del hogar y extraer información importante como claves bancarias, correos, etc.
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
