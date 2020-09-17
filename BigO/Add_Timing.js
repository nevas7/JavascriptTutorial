function addUpTo(n)
{
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;      
    }
    return total;
}

const performance = {    //Performance calculator
    now: function(start) {
        if ( !start ) return process.hrtime();
        var end = process.hrtime(start);
        return Math.round((end[0]*1000) + (end[1]/1000000));
    }
}

var t1 =  performance.now();
// var t1 =  process.hrtime();
addUpTo(100000000);
var t2 =  performance.now();
//var t2 =  process.hrtime();
 console.log('Time Elapsed: is '+ t2)
 console.log('Time Elapsed after subtractio: is '+ t2-t1)
