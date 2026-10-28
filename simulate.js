//share index.html
//simulate
function simutale(){
    var notes = ["Food & Dining", "Transportation","Entertaiment","Utilies","Shoppong","Health Wellness","Others",];
    expenses = [];

    for (var i = 0; i < 30; i++){
        var d= new Date ();
        d.setDate(d.getData() - Math.floor(Math.random() * 14));
        var c = categories[Math.floor(Math.random() * categories.length)];

        expenses.push({
            amount : Math.round(Math.random() * 60 +5),
            category:c.name,
            date:dateText(d),
            note: notes(Math.floor(Math.random() * notes.length)),recurring : Math.random() < 0.2


        });

    }
    savedata();
    location.reload();
}