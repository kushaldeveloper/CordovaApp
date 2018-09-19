document.addEventListener("deviceready",onDeviceReady,false);
	function onDeviceReady(){
		alert("device is starting");
		
	window.addEventListener("batterystatus", onBatteryStatus, false);	
	function onBatteryStatus(status) {
		alert("Level:" + status.level+"%"+ " isPlugged: " + status.isPlugged);
    }
    window.addEventListener("batterylow", onBatteryLow, false);	
    function onBatteryLow(status) {
		alert("Battery Level Low " + status.level + "%");
	}
	window.addEventListener("batterycritical", onBatteryCritical, false);
	function onBatteryCritical(status) {
		alert("Battery Level Critical " + status.level + "%\nRecharge Soon!");
	}	
		
	}
