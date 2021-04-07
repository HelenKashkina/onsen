function testAction() {
	document.querySelector('#largeBtn').setAttribute('modifier', 'cta');
  };

document.addEventListener('init', function(event) {

ons.ready(function() {
  document.getElementById("device").innerHTML=device.version+" is presented " +device.platform;

	window.addEventListener("batterystatus", onBatteryStatus, false);
function onBatteryStatus(status) {
    document.getElementById("batteryInfo").value=status.level;
}
    });
   
   });

// ons.ready(function() {
// function getRandomItem(arr) {
//     var randomInd = Math.floor(Math.random() * arr.length);
//     var item = arr[randomInd];
//     return item;
// }
// var modifiers = ['outline','light','quiet','cta','large','large--quiet','large--cta','material','material--flat','fab'];
// var result = getRandomItem(modifiers);
// document.querySelector('#largeBtn').onclick = function() {
//                 this.setAttribute('modifier', getRandomItem);
//                 };

//     console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
//     document.getElementById('deviceready').classList.add('ready');
// });
