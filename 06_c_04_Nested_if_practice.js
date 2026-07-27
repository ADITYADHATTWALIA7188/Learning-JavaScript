
let age = 20;
let hasId = true;
if (age >= 8) {
    if (hasId == false) {
        console.log("Allowed To Drive");
    } else if (age >= 18 && hasId == false) {
        console.log(`Can not Drive !!Get Your Id first`);
    } else {
        console.log("UNDERAGE! Not Allowd to Drive")
    }
}
