import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js'
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  public barChartOptions: ChartOptions;
  private data: Array<any>;
  public barChartLabels: Label[];
  public barChartType: ChartType;
  public barChartLegend:boolean;
  public barChartPlugins:Array<any>;
  public barChartData: ChartDataSets[];
  public chartColors:Array<any>;
  public categories:Array<string>;
  public colors:Array<string>;

  constructor() {
    this.barChartOptions = { responsive: true, scales: {xAxes: [{}], yAxes: [{}]}, plugins: { datalabel: { anchor: 'end', align: 'end', } } }
    this.data = [
      {PK_CATE: 1, NOMBRE_CATE: 'Hombres', COLOR_CATE: '#1449a9', DATOS_CATE: '1,2,3,4,5,4,10'},
      {PK_CATE: 3, NOMBRE_CATE: 'Mujeres', COLOR_CATE: '#8221e2', DATOS_CATE: '1,4,5,6,8'},
      {PK_CATE: 4, NOMBRE_CATE: 'Aliens', COLOR_CATE: '21d585', DATOS_CATE: '1,2,3,4,5'}
    ];
    this.barChartLabels = ['2010', '2011', '2012', '2013', '2014', '2015', '2016'];
    this.barChartType = 'bar';
    this.barChartLegend = true;
    this.barChartPlugins = []
    this.barChartData = [];
    this.chartColors = [];
    this.categories = [];
    this.colors = [];
    this.loadDataCharts();
  }
  
  ngOnInit() { }

  private loadDataCharts():void {
    for (const key of this.data) {
      const data: Array<number> = this.convertNumber(key.DATOS_CATE);
      this.barChartData.push({ data: data, label: key.NOMBRE_CATE });
      this.chartColors.push({backgroundColor: key.COLOR_CATE})
    }
  }

  private convertNumber(data:Array<string>):Array<number> {
    let stadistics: Array<number> = [];
    for (const key of data) {
      stadistics.push(parseInt(key));
    }
    return stadistics;
  }

}
