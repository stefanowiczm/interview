<template>
  <div class="container">
    <div class="row">
        <div class="col-md-9">   
          <h5 class="mt-5 text-left">Performance history</h5>
          <div class="card">
            <highcharts :options="performanceHistoryOptions"></highcharts>
          </div>
          <h5 class="mt-5 text-left">Country Allocation</h5>
          <div class="card">
            <highcharts :options="countryAllocationOptions"></highcharts>
          </div>          
        </div>
        <div class="col-md-3 mt-5">  
          <a class="btn btn-primary" 
            v-on:click="goToDetailsPage(id)">
                <span style="color:white">Go to details</span>
          </a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'display',
  props: {
    id: String,
    countryAllocationOptions: Object,
    performanceHistoryOptions: Object
  },
  methods: {
      goToDetailsPage: function(id) {
          this.$router.push("/itemdetails/"+id);
      }
  }
}
</script>