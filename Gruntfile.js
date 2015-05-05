module.exports = function (grunt) {
	'use strict';

	// Load all grunt tasks
	require( 'matchdep' ).filterDev( 'grunt-*' ).forEach( grunt.loadNpmTasks );

	// Project configuration
	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' ),

		jshint: {
			all: ['js/*.js']
		},

		uglify: {
			build: {
				src : 'js/app.js',
				dest: 'js/build/app.min.js'
			}
		},

		sass: {                              // Task
			dist: {                            // Target
				options: {                       // Target options
					style: 'compressed'
				},
				files  : [{
					expand: true,
					cwd   : 'scss/',
					src   : ['*.scss'],
					dest  : 'css/',
					ext   : '.css'
				}]
			}
		},

		watch: {
			css    : {
				files  : ['scss/**/*.scss', 'scss/*.scss'],
				tasks  : ['sass'],
				options: {
					debounceDelay: 500
				}
			},
			scripts: {
				files  : ['js/*.js'],
				tasks  : ['uglify', 'jshint'],
				options: {
					spawn: false
				}
			}
		}
	} );

	grunt.loadNpmTasks( 'grunt-contrib-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );

	// Default task.
	grunt.registerTask( 'default', ['sass', 'uglify', 'jshint'] );

	grunt.util.linefeed = '\n';
};