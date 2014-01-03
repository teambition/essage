## Compiling CSS and JavaScript

teambition UI kit includes a [makefile](Makefile) with convenient methods for working with the framework. Before getting started, be sure to install [the necessary local dependencies](package.json):

```
$ npm install
```

When completed, you'll be able to run the various make commands provided:

#### build - `make`
Runs the recess compiler to rebuild the `/less` files and compiles the docs. Requires recess and uglify-js.

#### clean = `make clean`
This is a quick method to clean the project directory - remove *.html - if you are reviewing the code.

#### test - `make test`
Runs jshint and qunit tests headlessly in [phantomjs](http://code.google.com/p/phantomjs/) (used for ci). Depends on having phantomjs installed.

#### watch - `make watch`
This is a convenience method for watching just Less files and automatically building them whenever you save. Requires the Watchr gem.

Should you encounter problems with installing dependencies or running the makefile commands, be sure to first uninstall any previous versions (global and local) you may have installed, and then rerun `npm install`.

### Build with grunt

Use `grunt build` to `make`:

```
$ grunt make

Running "make" task

##################################
Building teambition UI...
##################################

Running JSHint on javascript...             ✔ Done
Compiling LESS with Recess...               ✔ Done
Compiling documentation...                  ✔ Done
Compiling and minifying javascript...       ✔ Done

##################################
teambition UI successfully built at 05:41下午.
##################################

Special thanks to @mdo and @fat for building up Bootstrap

>> Maked

Done, without errors.
```

Use `grunt` to release a new version:

```
$ grunt
Running "bump-only:patch" (bump-only) task

Running "bump:patch:bump-only" (bump) task
>> Version bumped to 0.10.8 (in bower.json)
>> Version bumped to 0.10.8 (in package.json)

Running "make" task
...
>> Maked

Running "bump::commit-only" (bump) task
>> Committed as "Release v0.10.8"
>> Tagged as "v0.10.8"

Done, without errors.
```

