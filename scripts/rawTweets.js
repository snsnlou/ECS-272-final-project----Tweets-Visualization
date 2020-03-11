// var rawTweetsCellHeight = 35
var rawTweetsCellWidth = 450

var rawTweetsTable = null

function initRawTweets() {
    rawTweetsTable = d3.select('#rawTweetsTable')
}

function onChangeRawTweets() {
    var mouseOverHandlerRawTweets = function (d, i) {
        bandGraphSVGLayer2.selectAll('.rawTweetsHovering').remove()
        var tweetTime = data[selectedClusterIndex].time[i]
        bandGraphSVGLayer2.append('circle')
            .attr('class', 'rawTweetsHovering')
            .attr('cx', xScaleBandGraph(tweetTime))
            .attr('cy', bandGraphInnerHeight - 8)
            .attr('r', 8)
            .style('fill', 'orange')
        rawTweetsTable.selectAll('td')
            .style('background-color', 'transparent')
        d3.select(this)
            .style('background-color', 'orange')
    }
    var mouseLeaveHandlerRawTweets = function (d, i) {
        bandGraphSVGLayer2.selectAll('.rawTweetsHovering').remove()
        rawTweetsTable.selectAll('td')
            .style('background-color', 'transparent')
    }
    rawTweetsTable.selectAll('*').remove()
    rawTweetsTable.selectAll('*')
        .data(data[selectedClusterIndex].words)
        .enter()
        .append('tr')
        .append('td')
        .attr('width', rawTweetsCellWidth)
        .style('border-bottom', '1px solid blue')
        .style('border-top', '1px solid blue')
        .on('mouseover', mouseOverHandlerRawTweets)
        .on('mouseleave', mouseLeaveHandlerRawTweets)
        .html(function (d, i) {
            return d + '<br/><i>[' + data[selectedClusterIndex].time[i] + ']</i>'
        })

}