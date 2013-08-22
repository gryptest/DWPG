/**
 *  App Right API for javascript
 *  Author: Amit gross
 *  Date: 23/07/13
 */


window.onerror = function( msg, url, line ) {
    console.log("JSERROR:" + msg + "(" + url + ":" + line + ")");
}

function sendNow()
{
	cordova.exec(dWsuccess,dWfailure,"AppRightPlugin","sendNow",["stam"]);
}

function reportException(errorMessage)
{
	cordova.exec(dWsuccess,dWfailure,"AppRightPlugin","reportException",[errorMessage]);
}

function reportBug(message)
{
	cordova.exec(dWsuccess,dWfailure,"AppRightPlugin","reportBug",[message]);
}

function addMarker(message)
{
	cordova.exec(dWsuccess,dWfailure,"AppRightPlugin","addMarker",[message]);
}

function setLocationTrackingState(state)
{
	alert("setLocationTrackingState:" + state);
	cordova.exec(dWsuccess,dWfailure,"AppRightPlugin","setLocationTrackingState",[state]);
}

function dWsuccess(data)
{
	alert("OK:" + data);
}

function dWfailure(data)
{
	alert("FAIL:" + data);
}