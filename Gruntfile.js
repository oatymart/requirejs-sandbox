module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'build/css/main.css' : 'scss/colors.scss'
                }
            }
        },
        lint: {
            // eslint task
        },
        bundle: {
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
                    dest: 'build/everything.js'
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
                        'build/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                    }
                }
            }
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

    grunt.loadNpmTasks('grunt-sass');
    grunt.registerTask('dev', ['sass']);

        /*
     *task to run by extension concurrently
     */
    grunt.config('concurrent', {
        build : ['bundleall', 'sassall']
    });

    /*
     * Create task alias
     */
    grunt.registerTask('sassall', "Compile all sass files", sassTasks);
    grunt.registerTask('bundleall', "Compile all js files", bundleTasks);
    grunt.registerTask('testall', "Run all tests", ['connect:test', 'qunit_junit'].concat(testTasks));
    grunt.registerTask('build', "The full build sequence", ['concurrent:build']);

};