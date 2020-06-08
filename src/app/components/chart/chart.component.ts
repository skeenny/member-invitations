import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.sass']
})
export class ChartComponent implements OnChanges {
    public data: any;
    @Input() chartData: any = null;
    constructor() {
    }

    ngOnChanges() {
        this.formatData();
    }

    formatData() {
        this.data = {
            labels: ['Full Members', 'Pending Members', 'Deactivated Members'],
            datasets: [
                {
                    data: [this.chartData.full, this.chartData.pending, this.chartData.deactivated],
                    backgroundColor: ['#d6e4c9', '#f9ecb0', '#f2ccd1'],
                    hoverBackgroundColor: ['#b8cfa3', '#f5e084', '#eda4ad']
                }]
        };
    }
}
