package com.enrise.ti.pendingintent;

import org.appcelerator.kroll.KrollModule;
import org.appcelerator.kroll.annotations.Kroll;
import org.appcelerator.kroll.common.Log;
import org.appcelerator.titanium.TiApplication;

@Kroll.module(name = "TiPendingIntentModule", id = "com.enrise.ti.pendingintent")
public class TiPendingIntentModule extends KrollModule {
	private static final String LCAT = "TiPendingIntentModule";

	public TiPendingIntentModule() {
		super();
	}

	@Kroll.onAppCreate
	public static void onAppCreate(TiApplication app) {
		Log.d(LCAT, "inside onAppCreate");
	}

	// public PendingIntentProxy createPendingIntent(Object[] args) {
	// 	Log.d(LCAT, "createPendingIntent");
	// 	PendingIntentProxy pendingIntent = new PendingIntentProxy();
	// 	pendingIntent.handleCreationArgs(this, args);
	// 	return pendingIntent;
	// }
}