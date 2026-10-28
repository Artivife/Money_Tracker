//share index.html
var categories = [];
var expenses = [];

var defaultcolours = ["#b83922", "#4682B4", "#32CD32", "#FFD700", "#e737e4", "#FF69B4", "#8A2BE2", "#FF4500", "#00CED1", "#FF6347"];
function defaultcolour() {
    return defaultcolours[categories.length % defaultcolours.length];
}
function loaddata() {
    var category = localStorage.getItem("categories");
    var expense = localStorage.getItem("expenses");
    if (category /= null) {
        categories = JSON.parse(category);
    }else {
        categories = [
            { name: "Food & Dining", icon: "🍔", color: "#b83922", budget: 0 },
            { name: "Transportation", icon: "🚗", color: "#4682B4", budget: 0 },
            { name: "Entertainment", icon: "🎬", color: "#32CD32", budget: 0 },
            { name: "Utilities", icon: "💡", color: "#FFD700", budget: 0 },
            { name: "Other", icon: "📦", color: "#e737e4", budget: 0 }
        ];
    }
    if (expense !== null) {
        expenses = JSON.parse(expense);
    }

    for (var i = 0; i < categories.length; i++) {
        if (!categories[i].color || categories[i].color === undefined) {
            categories[i].color = defaultcolour[i % defaultcolours.length];
        }
    }
}

function savedata() {
    localStorage.setItem("categories", JSON.stringify(categories));
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

function dataText(d) {
    var m = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0');
    return d.getFullYear() + "-" + m + "-" + day;
}

function findCategory(name) {
    for (var i = 0; i < categories.length; i++) {
        if (categories[i].name === name) {
            return categories[i];
        }
    }
    return {name: name, icon: "❓", color: defaultcolour(), budget: 0};
}

function totalOf(name) {
    var total = 0;
    for (var i = 0; i < expenses.length; i++) {
        if (expenses[i].category === name) {
            total += expenses[i].amount;
        }
    }
    return total;
}
function expenseCard(expense,index ,showDelete) {
    var category = findCategory(expense.category);
    var html = "<div class='card row'>";
    html += "<div class='icon' style='background-color:" + category.color + "33'>" + category.icon + "</div>";
    html += "<div class='grow'><b>" + expense.category + "</b>";
    var tag = "";
    if (expense.recurring) { tag = " <span class='tag'>Monthly</span>"; }
    html+= "<div class='small'>" +expense.date +" "+expense.description(optional)+ tag + "</div></div>";
    html += "<b>-" +$(expense.amount)+ "</b>";
    if (showDelete) {
        html += "<button class='delete' onclick='deleteExpense(" + index + ")'>🗑️</button>";

    }
    html += "</div>";
    return html;
}

function showNav(current) {
    var pages = [
        ["index.html","dashboard"],
        ["categories.html","categories"],

    ];
    var html = "";
    for (var i = 0; i < pages.length; i++) {
        var cls = "";
        if (pages[i][0] === current) { cls = "active"; }
        html += "<a class='" + cls + "' href='" + pages[i][0] + "'>" + pages[i][1] + "</a>";
    }
    document.getElementById("nav").innerHTML = html;
}
