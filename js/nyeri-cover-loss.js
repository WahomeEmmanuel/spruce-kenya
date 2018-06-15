google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart2);
function drawChart2(){
    var data = google.visualization.arrayToDataTable([
        ['Year', 'annual tree cover loss'],
        ['2001', 252],
        ['2002', 77],
        ['2003', 512],
        ['2004', 27],
        ['2005', 59],
        ['2006', 13],
        ['2007', 318],
        ['2008', 58],
        ['2009', 89],
        ['2010', 291],
        ['2011', 312],
        ['2012', 274],
        ['2013', 299],
        ['2014', 272],
        ['2015', 429],
        ['2016', 688]
    ]);
    var options = {
        chart: {
            'legend':'left',
            'is3D':true,
            title: 'TREE COVER LOSS IN NYERI: 2000 - 2016',
            subtitle: 'From 2001 to 2016, Nyeri lost 3.96kha of tree cover, equivalent to a 2.3% decrease since 2000 and 540kt of CO₂ emissions.',
        }
    };

    var chart = new google.charts.Bar(document.getElementById('drawChart2_div'));

    chart.draw(data, google.charts.Bar.convertOptions(options));

}