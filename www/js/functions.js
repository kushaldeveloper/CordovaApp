document.addEventListener("deviceready",onDeviceReady,false);
	function onDeviceReady(){
		alert("device is starting");
		
		document.getElementById("createContact").addEventListener("click", createContact);
		//~ document.getElementById("findContact").addEventListener("click", findContact);
		//~ document.getElementById("deleteContact").addEventListener("click", deleteContact);
		
	/*window.addEventListener("batterystatus", onBatteryStatus, false);	
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
	}*/
	
	
		
		
}
function createContact() {
			var myContact = navigator.contacts.create({"displayName": "Unknown"});
			myContact.save(contactSuccess, contactError);
    
		function contactSuccess() {
			alert("Contact is saved!");
		}
	
		function contactError(message) {
			alert('Failed because: ' + message);
		}
	
	}	
