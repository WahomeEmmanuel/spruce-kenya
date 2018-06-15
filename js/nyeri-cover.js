google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Base', 'tree cover in kha'],
        ['Tree cover',     126883],
        ['Non forest',    333623]
    ]);

    var options = {
        title: 'Nyeri County',
        pieHole: 0.4,
        colors: ['#006400', '#9ACD32'],
    };

    var chart = new google.visualization.PieChart(document.getElementById('nyeriCover'));
    chart.draw(data, options);
}