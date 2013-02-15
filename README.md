# grunt-preload-manifest-generator

Usage: 
	requires a srcDir and assetsDir, generates a single line, comma delimited csv
	with the location of each asset. I plan to add metadata like filesizes
	and other useful things that might help with preloaders. It is very general
	so it can be used with any preloader library as long as you convert the data to 
	the required format.