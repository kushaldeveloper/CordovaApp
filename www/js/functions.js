document.addEventListener("deviceready",onDeviceReady,false);
window.addEventListener("batterystatus", onBatteryStatus, false);
window.addEventListener("batterylow", onBatteryLow, false);
window.addEventListener("batterycritical", onBatteryCritical, false);
	function onDeviceReady(){
		alert("device is starting");
		
	function onBatteryStatus(status) {
		alert("Level: " + status.level + " isPlugged: " + status.isPlugged);
    }	
    function onBatteryLow(status) {
		alert("Battery Level Low " + status.level + "%");
	}
	function onBatteryCritical(status) {
		alert("Battery Level Critical " + status.level + "%\nRecharge Soon!");
	}	
		
	}
