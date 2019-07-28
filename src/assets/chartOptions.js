export let line = {
  chart: {
    type: "line",
    height: 40 + '%',
    margin: [15, 0, 25, 40]
  },
  title: {
    text: ""
  },
  legend: {
    enabled: false
  },
  xAxis: {
    categories: []
  },
  series: [
    {
      data: []
    }
  ]
}

export let pie = {
  chart: {
    type: "pie",
    height: 40 + '%',
    margin: [0, 0, 0, 0]
  },
  title: {
    text: ""
  },
  plotOptions: {
    pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
            enabled: false
        },
        showInLegend: true
    }
  },
  legend: {
    enabled: true,
    align: 'right',
    layout: 'vertical',
  },
  series: [
    {
      data: []
    }
  ]
}

