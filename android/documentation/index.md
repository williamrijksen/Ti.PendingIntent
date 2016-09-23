# Ti.PendingIntent Module

## Description

Android module that add support using requestCode in the pendingintent of a notification

## Accessing the pendingIntentModule

To access this module from JavaScript, you would do the following:

    var pendingIntentModule = require('com.enrise.ti.pendingintent');

The pendingIntentModule variable is a reference to the Module object.


## Usage

Add requestCode to pendingIntent (see http://stackoverflow.com/a/27443249 for the real problem):

```javascript
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
```


## Author

William Rijksen
wrijksen@enrise.com

## License

MIT