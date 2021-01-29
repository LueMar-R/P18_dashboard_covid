Highcharts.chart('conthosj', {

  chart: {
    zoomType: 'x',
    backgroundColor: '#9ad1d8',
    polar: true,
    type: 'line'
  },
  title: {
    text: 'Hospitalisation dues au Covid-19 dans le '+dp+' depuis le 19 mars 2020',
    style: {
      font: '20px Carlito, Arial, sans-serif',
      color: '#336383'
    }

  },
  subtitle: {
    text: document.ontouchstart === undefined ?
      'Sélectionnez une période pour zoomer' : 'Pinch the chart to zoom in'
  },
  xAxis: {
    type: 'datetime'
  },
  yAxis: {
    title: {
      text: 'Nombre de décès journalier'
    }
  },
  legend: {
    enabled: false
  },
  plotOptions: {
    area: {
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1
        },
        stops: [
          [0.6, Highcharts.getOptions().colors[5]],
          [1, Highcharts.color(Highcharts.getOptions().colors[6]).setOpacity(0.8).get('rgba')]
        ]
      },
      marker: {
        radius: 2,
        lineColor: '#FF0000'
      },
      animation: {  
        duration: 2000
      },
      lineWidth: 1,
      states: {
        hover: {
          lineWidth: 1
        }
      },
      threshold: null
    }
  },

  series: [{
    type: 'area',
    name: 'décès',
    data: hosj
  }]
});

Highcharts.chart('contreaj', {

  chart: {
    zoomType: 'x',
    backgroundColor: '#9ad1d8',
    polar: true,
    type: 'line'
  },
  title: {
    text: 'Admissions en réanimation dans le '+dp+' depuis le 19 mars 2020',
    style: {
      font: '20px Carlito, Arial, sans-serif',
      color: '#336383'
    }

  },
  subtitle: {
    text: document.ontouchstart === undefined ?
      'Sélectionnez une période pour zoomer' : 'Pinch the chart to zoom in'
  },
  xAxis: {
    type: 'datetime'
  },
  yAxis: {
    title: {
      text: 'Nombre de décès journalier'
    }
  },
  legend: {
    enabled: false
  },
  plotOptions: {
    area: {
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1
        },
        stops: [
          [0.8, Highcharts.getOptions().colors[8]],
          [1, Highcharts.color(Highcharts.getOptions().colors[6]).setOpacity(0.8).get('rgba')]
        ]
      },
      marker: {
        radius: 2,
        lineColor: '#FF0000'
      },
      animation: {  
        duration: 2000
      },
      lineWidth: 1,
      states: {
        hover: {
          lineWidth: 1
        }
      },
      threshold: null
    }
  },

  series: [{
    type: 'area',
    name: 'décès',
    data: reaj
  }]
});

Highcharts.chart('contdcj', {

  chart: {
    zoomType: 'x',
    backgroundColor: '#9ad1d8',
    polar: true,
    type: 'line'
  },
  title: {
    text: 'Evolution du nombre de décès dûs au Covid-19 dans le '+dp+' depuis le 19 mars 2020',
    style: {
      font: '20px Carlito, Arial, sans-serif',
      color: '#336383'
    }

  },
  subtitle: {
    text: document.ontouchstart === undefined ?
      'Sélectionnez une période pour zoomer' : 'Pinch the chart to zoom in'
  },
  xAxis: {
    type: 'datetime'
  },
  yAxis: {
    title: {
      text: 'Nombre de décès journalier'
    }
  },
  legend: {
    enabled: false
  },
  plotOptions: {
    area: {
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1
        },
        stops: [
          [0.6, Highcharts.getOptions().colors[8]],
          [1, Highcharts.color(Highcharts.getOptions().colors[1]).setOpacity(0.8).get('rgba')]
        ]
      },
      marker: {
        radius: 2,
        lineColor: '#FF0000'
      },
      animation: {  
        duration: 2000
      },
      lineWidth: 1,
      states: {
        hover: {
          lineWidth: 1
        }
      },
      threshold: null
    }
  },

  series: [{
    type: 'area',
    name: 'décès',
    data: dcj
  }]
});

Highcharts.chart('contsrtj', {

  chart: {
    zoomType: 'x',
    backgroundColor: '#9ad1d8',
    polar: true,
    type: 'line'
  },
  title: {
    text: "Sorties d'hospitalisation dans le "+dp,
    style: {
      font: '20px Carlito, Arial, sans-serif',
      color: '#336383'
    }

  },
  subtitle: {
    text: document.ontouchstart === undefined ?
      'Sélectionnez une période pour zoomer' : 'Pinch the chart to zoom in'
  },
  xAxis: {
    type: 'datetime'
  },
  yAxis: {
    title: {
      text: 'Nombre de sorties journalières'
    }
  },
  legend: {
    enabled: false
  },
  plotOptions: {
    area: {
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1
        },
        stops: [
          [0.8, Highcharts.getOptions().colors[2]],
          [1, Highcharts.color(Highcharts.getOptions().colors[4]).setOpacity(0.8).get('rgba')]
        ]
      },
      marker: {
        radius: 2,
        lineColor: '#FF0000'
      },
      animation: {  
        duration: 2000
      },
      lineWidth: 1,
      states: {
        hover: {
          lineWidth: 1
        }
      },
      threshold: null
    }
  },

  series: [{
    type: 'area',
    name: 'décès',
    data: srtj
  }]
});
