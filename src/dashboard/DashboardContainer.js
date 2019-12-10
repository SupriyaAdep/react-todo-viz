import React, { Component } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4themes_dark from '@amcharts/amcharts4/themes/dark';

import './dash.css';

am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);

class DashboardContainer extends Component {
  generatePieChart = (chartId, chartData) => {
    let chart = am4core.create(chartId, am4charts.PieChart);
    chart.radius = am4core.percent(70);

    // Let's cut a hole in our Pie chart the size of 30% the radius
    chart.innerRadius = am4core.percent(30);
    // chart.data = chartData;
    chart.data = [
      {
        status: 'ACTIVE',
        count: 35
      },
      {
        status: 'COMPLETED',
        count: 65
      }
    ];
    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'count';
    pieSeries.dataFields.category = 'status';
    pieSeries.slices.template.stroke = am4core.color('#fff');
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    // // Add and configure Series
    // let pieSeries = chart.series.push(new am4charts.PieSeries());
    // pieSeries.dataFields.value = chartData.Y1;
    // pieSeries.dataFields.category = chartData.X1;
    // // pieSeries.slices.template.stroke = am4core.color("#fff");
    // pieSeries.slices.template.strokeWidth = 0;
    // pieSeries.slices.template.strokeOpacity = 0;
    // pieSeries.slices.template.tooltipText = `${chartData.X1} : {category}
    //            ${chartData.Y1} : {value}`;
    // pieSeries.labels.template.fontSize = '.8em';
    // pieSeries.labels.template.fill = '#4A4A4A';
    // pieSeries.ticks.template.strokeWidth = 2;
    // pieSeries.ticks.template.stroke = '#4A4A4A';

    // // This creates initial animation
    // pieSeries.hiddenState.properties.opacity = 1;
    // pieSeries.hiddenState.properties.endAngle = -90;
    // pieSeries.hiddenState.properties.startAngle = -90;

    // chart.numberFormatter.numberFormat = '#.0a';
    // chart.numberFormatter.smallNumberThreshold = 0;
    // Add a legend
    chart.legend = new am4charts.Legend();
    chart.legend.itemContainers.template.clickable = false;
    chart.legend.itemContainers.template.cursorOverStyle =
      am4core.MouseCursorStyle.default;
  };
  generateData = () => {
    let chartData = [];
    let stats = this.props.todos.reduce(
      (acc, todo) => {
        if (todo.status in acc) {
          acc[todo.status]++;
        }
        return acc;
      },
      { ACTIVE: 0, COMPLETED: 0, ONHOLD: 0 }
    );

    for (const [key, value] of Object.entries(stats)) {
      chartData.push({
        status: key,
        count: value
      });
    }
    return chartData;
  };
  componentDidUpdate() {}
  componentDidMount() {
    // let chartdata = this.generateData();
    // this.generatePieChart('pie-chart', chartdata);
  }
  render() {
    return (
      <>
        <h1 className="heading">My Dashboard</h1>
        <div className="chart-container">
          <div id="pie-chart" style={{ height: '100%' }}></div>
        </div>
      </>
    );
  }
}

export default DashboardContainer;
