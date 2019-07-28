<template>
    <div class="contaner">
        <div class="row">
            <div class="col-md-3 offset-md-2 mt-5">       
                <div class="card mt-5" 
                style="width: 18rem;" 
                v-for="(item, index) in items" 
                :key="index">
                    <div class="card-body" 
                    v-on:click="setChartData(item)">
                        <h5 class="card-title">
                            Item {{ index + 1 }}
                        </h5>
                    </div>
                </div>
            </div>
            <div class="col-md-6 ml-5 mt-3">
                <Display :id="id"
                :countryAllocationOptions="countryAllocationOptions" 
                :performanceHistoryOptions="performanceHistoryOptions"
                v-if="clicked"/>
            </div>
        </div>
    </div>
</template>

<script>
import Display from '@/components/Display.vue'
import Chart from 'highcharts-vue'
import axios from 'axios'
import * as chartOptions from '@/assets/chartOptions.js'

export default {
    name: 'items',
    mounted() {
        axios({
            method: "GET",
            "url": "assets/items.json"
        }).then(response => {
            this.items = response.data.map(e => {
                let item = {
                    id: e._id,
                    performanceHistoryData: e.value.Performance.map(
                                                a => a.Value),
                    performanceHistoryCategories: e.value.Performance.map(
                                                a => a.Date.substring(0, 4)), 
                    countryAllocation: e.value.AllocationCountry.map(
                                        a => {
                                            let element = {
                                                name: a.Key,
                                                y: a.Value
                                            };
                                            return element;
                                        })
                };
                return item;
            });
        }, error => {
            throw new Error(error);
        }); 
    },
    data() {
        return {
            clicked: false,
            id: String,
            items: [],
            countryAllocationOptions: {},       
            performanceHistoryOptions: {}           
        }
    },
    components: {
        highcharts: Chart,
        Display
    },
    methods: {
        setChartData: function(item) {
            this.clicked = true;
            this.id = item.id;
            this.performanceHistoryOptions = chartOptions.line;
            this.performanceHistoryOptions.xAxis.categories = item.performanceHistoryCategories;
            this.performanceHistoryOptions.series[0].data = item.performanceHistoryData;
            this.countryAllocationOptions = chartOptions.pie;
            this.countryAllocationOptions.series[0].data = item.countryAllocation;
        }
    }
}
</script>
