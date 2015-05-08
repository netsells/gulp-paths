# Gulp Paths
This is a helper modules for consistent directory structures, and less repeated directory structures.

This version currently only supports the Laravel 5 directory structure, but I will be extending to allow custom directory structures so that it can be used for any project framework.

## Usage
There are currently **five** directory helpers:

* ``path.bower(file/folder)`` - references the ``vendor/bower_components`` folder (ensure .bowerrc file is set up correctly or this will be incorrect)
* ``path.asset(file/folder)`` - references the ``resources/assets`` folder
* ``path.css(file/folder)`` - references the ``public/css`` folder
* ``path.js(file/folder)`` - references the ``public/js`` folder
* ``path.image(file/folder)`` - references the ``public/images`` folder

## To-do
* Add ability to specify custom locations that persist
