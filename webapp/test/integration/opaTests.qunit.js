/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["gitapplication/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
