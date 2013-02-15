/*
 * By Lachlan Ford (Fordy) (github.com/shadowford)
 *
 * Copyright (c) 2013 Lachlan Ford
 * Licensed under the MIT license.
 */

 /* Usage: 

		requires a srcDir and assetsDir, generates a single line, comma delimited csv
		with the location of each asset. I plan to add metadata like filesizes
		and other useful things that might help with preloaders. It is very general
		so it can be used with any preloader library as long as you convert the data to 
		the required format.

 */

'use strict';
module.exports = function (grunt) {

	var fs = require("fs");

	grunt.registerMultiTask('preloadManifest', 'Generates a generic manifest file for use with whatever preloading library you like', function () {

		if (this.data.srcDir && this.data.assetsDir) {
			grunt.log.writeln("Generating manifest for " + this.data.assetsDir);
		} else {
			throw new Error ("srcDir or assetsDir not specified");
		}

		//TODO check trailing slash

		var dir = this.data.assetsDir;
		var override = this.data.overwriteManifest;
		var fileExists;
		
		var header = "Dir, Type, ID, Size\n";

		var dataToWrite;

		fileExists = fs.existsSync (dir + "manifest.csv");

		if (!override) {
			override = false;
		}

		function getManifestForDirectory (dir) {
			var files = fs.readdirSync(dir);
			var soFar = "";
			if (files) {
				for (var i = 0; i < files.length; i++) {
					var stats = fs.lstatSync(dir + "/" + files[i]);
					if (!stats.isDirectory()) {
						soFar += "," + dir + "/" + files[i];
					} else {
						try {
							soFar += getManifestForDirectory(dir + files[i]);
						} catch (e) {
							soFar += getManifestForDirectory(dir + "/" + files[i]);
						}
					}
				}
			}
			return soFar;
		}

		if (!fileExists || (fileExists && override)) {
			if (fileExists && override) {
				grunt.log.writeln("Deleting old manifest file");
				fs.unlinkSync (dir + "manifest.csv");
			}

			var manifest = getManifestForDirectory (dir);
			manifest = manifest.slice(1,manifest.length);

			grunt.log.writeln ("writing file " + dir + "manifest.csv");
			fs.writeFileSync(dir + "manifest.csv", manifest);


		} else {
			throw new Error ("manifest file already exists and overwriteManifest flag set to false. Use overwriteManifest flag");
		}

	});
};
