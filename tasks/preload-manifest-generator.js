/*
 * By Lachlan Ford (Fordy) (github.com/shadowford)
 *
 * Copyright (c) 2013 Lachlan Ford
 * Licensed under the MIT license.
 */

 /* Usage: 

		requires asset directories "assetDirs" as an array, generates a single line, comma delimited csv
		with the location of each asset. I plan to add metadata like filesizes
		and other useful things that might help with preloaders. It is very general
		so it can be used with any preloader library as long as you convert the data to 
		the required format. The first asset directory is considered the main one and is where the manifest is placed.

 */

'use strict';
module.exports = function (grunt) {

	var fs = require("fs");

	grunt.registerMultiTask('preloadManifest', 'Generates a generic manifest file for use with whatever preloading library you like', function () {

		if (this.data.assetDirs) {
			for (var i in this.data.assetDirs) {
				grunt.log.writeln("Generating manifest for " + this.data.assetDirs[i]);
			}
		} else {
			throw new Error ("assetDirs not specified");
		}

		var dirs = this.data.assetDirs;
		var overwrite = this.data.overwriteManifest;
		var fileExists;
		
		var header = "Dir, Type, ID, Size\n";

		var dataToWrite;

		fileExists = fs.existsSync (dirs[0] + "manifest.csv");

		if (!overwrite) {
			overwrite = false;
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

		if (!fileExists || (fileExists && overwrite)) {
			if (fileExists && overwrite) {
				grunt.log.writeln("Deleting old manifest file");
				fs.unlinkSync (dirs[0] + "manifest.csv");
			}

			var manifest = "";
			for (var i = 0 ; i < dirs.length; i ++) {
				manifest += getManifestForDirectory (dirs[i]);
				grunt.log.writeln(manifest);
			}

			manifest.replace("//","/");
			manifest = manifest.slice(1,manifest.length);

			grunt.log.writeln ("writing file " + dirs[0] + "manifest.csv");
			fs.writeFileSync(dirs[0] + "manifest.csv", manifest);


		} else {
			throw new Error ("manifest file already exists and overwriteManifest flag set to false. Use overwriteManifest flag");
		}

	});
};
