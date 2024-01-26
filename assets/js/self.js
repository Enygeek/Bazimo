/*
    @Fonction updateTimes
    @Description
        cette permet de dupliquer le crénaux horraires du Lundi sur le reste de la semaine
 */
function updateTimes(source, targetIds) {
    var sourceValue = document.getElementById(source).value;

    targetIds.forEach(function(targetId) {
        document.getElementById(targetId).value = sourceValue;
    });
}

document.getElementById('cust_openlundimatin').addEventListener('input', function() {
    document.getElementById('mardiFields').classList.remove('hidden');
    document.getElementById('mercrediFields').classList.remove('hidden');
    document.getElementById('jeudiFields').classList.remove('hidden');
    document.getElementById('vendrediFields').classList.remove('hidden');

    updateTimes('cust_openlundimatin', ['cust_openmardimatin', 'cust_openmercredimatin', 'cust_openjeudimatin', 'cust_openvendredimatin']);
});

document.getElementById('cust_closelundimatin').addEventListener('input', function() {
    updateTimes('cust_closelundimatin', ['cust_closemardimatin', 'cust_closemercredimatin', 'cust_closejeudimatin', 'cust_closevendredimatin']);
});
// Open après-midi
document.getElementById('cust_openlundisoir').addEventListener('input', function() {
    updateTimes('cust_openlundisoir', ['cust_openmardisoir', 'cust_openmercredisoir', 'cust_openjeudisoir', 'cust_openvendredisoir']);
});
// Close après-midi
document.getElementById('cust_closelundisoir').addEventListener('input', function() {
    updateTimes('cust_closelundisoir', ['cust_closemardisoir', 'cust_closemercredisoir', 'cust_closejeudisoir', 'cust_closevendredisoir']);
});
// Ajouter des écouteurs pour les autres jours et créneaux horaires au besoin
