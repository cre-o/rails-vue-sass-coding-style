<template>
    <carousel :navigationEnabled="true" :paginationEnabled="true" :scrollPerPage="true" :navigationPrevLabel="'&nbsp'" :navigationNextLabel="'&nbsp'">
      <slide><span class="label">«Я хочу заказать у вас дизайн-проект, у вас есть собственная ремонтная бригада? Как проходит ремонт?»</span></slide>
      <slide><span class="label">«У нас свой штат ремонтников, бригадир и руководитель отдела строительства и ремонтов. Во время работы над дизайн проектом, после согласования технологического плана, обычно бригада заходит на объект для черновых работ - вытягиваются стены, полы и потолки, делается разводка электрики и сантехники, закладываются конструкции в соответствии с проектом. К тому времени, как будут окончены черновые работы, обычно  все картинки визуализаций проекта согласованны, а отделочные материалы заказаны и большая часть доставлена в Благовещенск. Далее идут отделочные работы по разработанному плану, по каждому этапу Вы получаете финансовый отчет. Все максимально прозрачно! После окончания ремонта, проводится клининг помещения и вы принимаете работу.»</span></slide>
      <slide><span class="label">«Я хочу вас поблагодарить за такой отличный слайдер со скроллбаром, который так здорово прокручивает контент вверх и вниз! И на этом текст не заканчивается, он должен занять ещё какое-то простнанство для прокрутки. всё.»</span></slide>
      <slide><span class="label">«У нас свой штат ремонтников, бригадир и руководитель отдела строительства и ремонтов. Во время работы над дизайн проектом, после согласования технологического плана, обычно бригада заходит на объект для черновых работ - вытягиваются стены, полы и потолки, делается разводка электрики и сантехники, закладываются конструкции в соответствии с проектом. К тому времени, как будут окончены черновые работы, обычно  все картинки визуализаций проекта согласованны, а отделочные материалы заказаны и большая часть доставлена в Благовещенск. Далее идут отделочные работы по разработанному плану, по каждому этапу Вы получаете финансовый отчет. Все максимально прозрачно! После окончания ремонта, проводится клининг помещения и вы принимаете работу.»</span></slide>
      <slide><span class="label">«А этот вопрос занимает всего несколько строчек?»</span></slide>
      <slide><span class="label">«Да, он таков!»</span></slide>
    </carousel>
</template>


<script>
  import { Carousel, Slide } from 'vue-carousel'

  export default {
    components: {
      Carousel,
      Slide
    }
  }
</script>
