<template>
  <div class="home">
    <div v-for="service in services" :key="service">
      <ServiceComponent
        :service="service"
        @toggle-select="toggleSelected(service)"
      />
    </div>
    <p>
      Total:
      {{
        services.reduce(
          (prev, curr) => (curr.isChosen ? prev + curr.price : prev),
          0
        )
      }}
      $
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getServices, Service } from "../models/models";
import ServiceComponent from "../components/ServiceComponent.vue";

export default defineComponent({
  name: "ServicePicker",
  data: () => ({
    services: getServices(),
    showCompleted: false,
    showUnfinished: false,
    inputValue: "",
  }),
  methods: {
    toggleSelected(service: Service) {
      service.isChosen = !service.isChosen;
    },
  },
  components: {
    ServiceComponent,
  },
});
</script>
