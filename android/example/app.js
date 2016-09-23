var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
win.add(label);
win.open();

function showNotification(requestCode) {
	// Intent object to launch the application
	var intent = Ti.Android.createIntent({
	  url: 'activity.js',
	  action: Ti.Android.ACTION_VIEW,
	});

	intent.putExtra('testvariable', 'testvariable');
	intent.addCategory(Ti.Android.CATEGORY_LAUNCHER);

	var contentIntent = require('com.enrise.ti.pendingintent').createPendingIntent({
	  intent: intent,
	  requestCode: requestCode, // This is the way to set different pending intents
	});

	var notification = require('com.enrise.ti.pendingintent').createNotification({
	  contentIntent,
	  contentTitle: Ti.App.getName(),
	  contentText: 'this is a test notification ' + requestCode,
	  when: new Date(),
	  flags: Ti.Android.ACTION_DEFAULT | Ti.Android.FLAG_AUTO_CANCEL | Ti.Android.FLAG_SHOW_LIGHTS, // jshint ignore:line
	  defaults: Ti.Android.DEFAULT_LIGHTS,
	});

	Ti.Android.NotificationManager.notify(requestCode, notification);
}

showNotification(1);
showNotification(2);