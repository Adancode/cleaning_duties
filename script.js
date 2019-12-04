console.log("connected");
var duties = ["Wipe down UPstairs bathroom floor, sink, and toilet.  Empty that bathroom's trash if lid can't swing freely.", "Check downstairs & upstairs hallway air filters. Replace filters if needed (filters in pantry, install with arrow pointing in direction of airflow/into wall). Use small step ladder in pantry if needed.", "Sweep downstairs, mop specific spots if needed, don't mop everything (dangerous, slippery), only specific spots.", "Wipe down DOWNstairs bathroom floor, sink, and toilet.  Empty that bathroom's trash if lid can't swing freely.", "Keep kitchen sink filters clean (replace filters if needed, spare filters under sink). Make sure dishes don't pile up, and if possible let Adan know if anyone doesn't clean their own dishes. Note that dishes are 'wash as you go,' so there should be no dishes in sink, but if there is, we need to know who's leaving dishes in sink, as that's the #1 cause of roommate conflict.", "Check dryer filter (every week), wipe down stove/counters, and check fridges for expired items, chuck expired items."];

var tenants = ["Joshua Hawley", "Yanji Chen", "Benjamin Frei", "James Duffy", "Adam Camacho", "Justin Sallese"];

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Used like so
// dutiesShuffled = 
shuffle(duties);
shuffle(tenants);
// console.log("the duties");
// console.log(duties);
// console.log(dutiesShuffled);
// console.log(tenantsShuffled);

//  An object holding all the duties
// var monthlySchedule = {
//     "Samuel Guebara": "Take trash out to curb on Sundays and back inside on Mondays"
// }

function resetDuties() {
    $("tbody").empty();

    shuffle(duties);
    shuffle(tenants);
    // for (var i = 0; i < tenants.length; i++) {
    //     monthlySchedule[tenants[i]] = duties[i];
    //     //$("tbody").append("<tr><td>" +  + "</td></tr>");
    // }
    duties.push("Take trash out to curb on Sundays and back inside on Mondays.");
    tenants.push("Jon Grogan");

    for (var i = 0; i < duties.length; i++) {
        $("tbody").append("<tr><td class='firstTD'>" + tenants[i] + ":</td><td>" + duties[i] + "</td></tr>");
    }

    duties.pop();
    tenants.pop();

    // for (key in monthlySchedule) {
    //     $("tbody").append("<tr><td class='firstTD'>" + key + ":</td><td>" + monthlySchedule[key] + "</td></tr>");
    // }
}

$(document).ready(function () {

    $("#resetMonthlyDutiesButton").on("click", function () {
        resetDuties();
    });

    // for (var i = 0; i < tenants.length; i++) {
    //     monthlySchedule[tenants[i]] = duties[i];
    //     //$("tbody").append("<tr><td>" +  + "</td></tr>");
    // }

    duties.push("Take trash out to curb on Sundays and back inside on Mondays");
    tenants.push("Jon Grogan");

    for (var i = 0; i < duties.length; i++) {
        $("tbody").append("<tr><td class='firstTD'>" + tenants[i] + ":</td><td>" + duties[i] + "</td></tr>");
    }

    duties.pop();
    tenants.pop();
    // $("tbody").append("<tr>" + "hahah" + "</tr>");
    // $("tbody").append("haha");
});

// console.log(monthlySchedule);

// Adding a note to test github after Mojave update.
// Adding a second note to test second computer's github after Mojave update.



