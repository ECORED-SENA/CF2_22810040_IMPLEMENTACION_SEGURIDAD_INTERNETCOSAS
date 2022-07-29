<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5 Se da la bienvenida al componente formativo denominado “Control de amenazas en IoT”, que hace parte del programa de formación complementario “Implementación de seguridad en Internet de las cosas”. La temática a conocer está basada en MQTT, que es el protocolo principal del denominado Internet de las cosas (IoT); este es un servicio de mensajería donde los mensajes se envían de forma directa desde el servidor a los dispositivos móviles, como teléfonos inteligentes o tabletas, y aplicaciones de escritorio.
    p.mb-5 Para conocer un poco más se invita a observar el siguiente video:
    

    figure.mb-5
      .video        
        iframe(width="1280" height="720" src="https://www.youtube.com/embed/50OGDrKc0c0" title="Control de amenazas en IoT" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
