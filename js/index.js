google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Element');
    data.addColumn('number', 'Percentage')
    data.addRows(
        [
            ['Nitrogen', 0.78],
            ['Oxygen', 0.21],
            ['Other', 0.01]
        ]
    )
    var chart = new google.visualization.PieChart(document.getElementById("chart"));
    chart.draw(data,null)
}