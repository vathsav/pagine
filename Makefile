watch_scss:
	sass --watch src/styles/scss/:src/styles/css/

minify:
	cleancss src/styles/css/main.css -o src/styles/css/main.min.css
