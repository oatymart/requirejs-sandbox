module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'build/css/main.css' : ['scss/main.scss']
                }
            }
        },
        lint: {
            // eslint task
        },
        // concat task
        concat: {
            options: {
                // define a string to put between each file in the concatenated output
                separator: ';'
            },
            dist: {
                // the files to concatenate
                src: ['js/**/*.js'],
                // the location of the resulting JS file
                dest: 'build/js/everything.js'
            }
        },
        // uglify task
        uglify: {
            options: {
                // the banner is inserted at the top of the output
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'build/js/everything.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        bundle: {
        },
        watch: {
            files: ['<%= sass.dist.files %>'],
            tasks: ['sass']
        },
        test: {
            // qunit task
        }
    });

    //track build time
    require('time-grunt')(grunt);

    // load all grunt tasks matching the `grunt-*` pattern
    require('load-grunt-tasks')(grunt);

    // Load local tasks.
    //grunt.loadTasks('tasks'); // no local `tasks` folder

    //grunt.loadNpmTasks('grunt-sass');

    /*
     *task to run by extension concurrently
     */
    grunt.config('concurrent', {
        build : ['all']
    });

    /*
     * Create task alias
     */
    grunt.registerTask('js', "Build js files", ['concat', 'uglify']);
    grunt.registerTask('all', "All my tasks", ['sass', 'concat', 'uglify']);
    grunt.registerTask('default', ['all']);

    // grunt.registerTask('sassall', "Compile all sass files", sassTasks);
    // grunt.registerTask('bundleall', "Compile all js files", bundleTasks);
    // grunt.registerTask('testall', "Run all tests", ['connect:test', 'qunit_junit'].concat(testTasks));
    grunt.registerTask('build', "The full build sequence", ['concurrent:build']);

};