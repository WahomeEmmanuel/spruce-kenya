google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'annual tree cover loss'],
        ['2001', 19027],
        ['2002', 20288],
        ['2003', 13553],
        ['2004', 16998],
        ['2005', 12745],
        ['2006', 20656],
        ['2007', 26103],
        ['2008', 19224],
        ['2009', 17696],
        ['2010', 22693],
        ['2011', 17300],
        ['2012', 17899],
        ['2013', 13564],
        ['2014', 15357],
        ['2015', 15616],
        ['2016', 19048]
    ]);

    var options = {
        chart: {
            title: '',
            subtitle: '',
        }
    };

    var chart = new google.charts.Bar(document.getElementById('columnchartMaterial'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}

$(window).resize(function () {
    drawChart();
});