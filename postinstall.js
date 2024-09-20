/* eslint-disable no-console,no-process-env,no-process-exit */
const env = process.env;

const COLOR = is(env.npm_config_color);

const BANNER =
	"\u001B[31mpuredocx-pro-module-free is included in the @mllx87/puredocx-pro-module module\u001B[0m\n" +
	"\u001B[31mwhich you can download at: https://cdn.puredocx.com/static/js/mllx87-puredocx-pro-module-1.0.0.tgz\u001B[0m";

function is(it) {
	return !!it && it !== "0" && it !== "false";
}

function showBanner() {
	console.log(COLOR ? BANNER : BANNER.replace(/\u001B\[\d+m/g, ""));
}

showBanner();
process.exit(1);
