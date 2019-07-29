var names = ['A', 'A', 'C', 'D'];    
        d3.select('ul')        
        .selectAll('li')        
        .data(names)        
        .enter()        
        .append('li')        
        .text(function(d) { return d; });




