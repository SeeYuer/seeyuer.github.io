function switchPostChart(){let t="light"===document.documentElement.getAttribute("data-user-color-scheme")?"#3c4858":"rgba(255,255,255,0.7)";if(document.getElementById("posts-chart")&&postsOption)try{let e=postsOption;e.title.textStyle.color=t,e.xAxis.nameTextStyle.color=t,e.yAxis.nameTextStyle.color=t,e.xAxis.axisLabel.color=t,e.yAxis.axisLabel.color=t,e.xAxis.axisLine.lineStyle.color=t,e.yAxis.axisLine.lineStyle.color=t,e.series[0].markLine.data[0].label.color=t,postsChart.setOption(e)}catch(t){console.log(t)}if(document.getElementById("tags-chart")&&tagsOption)try{let e=tagsOption;e.title.textStyle.color=t,e.xAxis.nameTextStyle.color=t,e.yAxis.nameTextStyle.color=t,e.xAxis.axisLabel.color=t,e.yAxis.axisLabel.color=t,e.xAxis.axisLine.lineStyle.color=t,e.yAxis.axisLine.lineStyle.color=t,e.series[0].markLine.data[0].label.color=t,tagsChart.setOption(e)}catch(t){console.log(t)}if(document.getElementById("categories-chart")&&categoriesOption)try{let e=categoriesOption;e.title.textStyle.color=t,e.legend.textStyle.color=t,e.series[0].label.color=t,categoriesChart.setOption(e)}catch(t){console.log(t)}}document.getElementById("mode-button").addEventListener("click",(function(){setTimeout(switchPostChart,100)}));