//money spent in one category <two days>
//share index.html
function sumDays(name,fromBack,toBack){
    var total =0
    for( var back = fromBack;back <= toBack;back++){
        var d = new Date();
        d.setDate(d.getDate()-back);
        var day = daytext(d)
        for (var i = 0; i<expenses.length;i++){
            if (expenses[i].catogory ==name &&expenses[i].date==day){
            total=total + expenses[i].amount;
            } 
        }
    }
    return total;
}
//alerts
function getAlerts(){
    var alerts =[];

    for (var i = 0; i < categories.length; i++) {
        var c = categories[i];

        var thisWeek = sumDays(c.name, 0,6);
        var lastweek =sumDays(c.name, 7,13);
        if (lastweek >0 ) {
            var percent = Math.round(thisWeek-lastweek)/(lastweek *100);
            if (percent >= 25){
                alerts.push({text:c.icon+" " +c.name + "spending is up limit liao" +percent + "% this week , red :false"});
                }
             }
    var spent =totalOf(c.name);
    if (c.budget >0){
        if(spent >= c.budget){
            alerts.push({text:c.icon + "Your" + c.name + "Bro ur budget over liao leh!" , red :true});

                }
                else if (spent =totalOf (c.name) ){
                    alerts.push({text:c.icon + " Your" + c.name + " Your budget is almost bomb bro!",red:true });
                }
            
            }
        }
        return alerts;
    }