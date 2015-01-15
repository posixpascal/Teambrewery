'use strict';

module.exports = function(grunt) {
    // measure time
    require('time-grunt')(grunt);
    require('time-grunt')(grunt);
    /*require('jit-grunt')(grunt, {
        express: 'grunt-express-server',
        useminPrepare: 'grunt-usemin',
        ngtemplates: 'grunt-angular-templates',
        cdnify: 'grunt-google-cdn',
        protractor: 'grunt-protractor-runner',
        injector: 'grunt-asset-injector',
        buildcontrol: 'grunt-build-control'
    });*/


    grunt.initConfig({

        // initial config
        yeoman: {
            client: require('./bower.json').appPath || 'client',
            dist: 'dist',
            temp: '.tmp',
            app: require('./bower.json').appPath + "/app" || 'client/app'
        },





        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['bowerInstall']
            },

            js: {
                files: [
                    '<%= yeoman.app %>/{modules,components}/**/*.js',
                    '!<%= yeoman.app %>/app.js'
                ],
                tasks: ['newer:jshint:all', 'ngdocs'],
                options: {
                    livereload: false
                }
            },
            jsUnitTest: {
                files: ['<%= yeoman.app %>/modules/*/tests/unit/*.js'],
                tasks: ['karma:unit']
            },

            styles: {
                files: ['<%= yeoman.app %>/css/**/*.css'],
                tasks: ['newer:copy:styles', 'autoprefixer']
            },

            gruntfile: {
                files: ['Gruntfile.js']
            },

            ngtemplates: {
                files: ['<%= yeoman.app %>/templates/**/*.html'],
                tasks: ['ngtemplates']
            },

        },

        connect: {
            options: {
                port: 9000,
                hostname: 'localhost'
            },
            test: {
                options: {
                    port: 9001,
                    base: [
                        '.tmp',
                        'test',
                        '<%= yeoman.app %>'
                    ]
                }
            },
            dist: {
                options: {
                    base: ['<%= yeoman.dist %>']
                }
            },
            docs: {
                options: {
                    base: ['docs/']
                }
            }
        },

        // compile sass scripts
        sass: {
            server: {
                options: {
                    loadPath: [
                        '<%= yeoman.client %>/bower_components',
                        '<%= yeoman.client %>/app',
                        '<%= yeoman.client %>/components'
                    ],
                    compass: false
                },
                files: {
                    '<%= yeoman.client %>/app/app.css': '<%= yeoman.client %>/app/app.scss'
                }
            },
            options: {
                transform: function(filePath) {
                    filePath = filePath.replace('/client/app/', '');
                    filePath = filePath.replace('/client/components/', '');
                    return '@import \'' + filePath + '\';';
                },
                starttag: '// injector',
                endtag: '// endinjector'
            },
            files: {
                '<%= yeoman.client %>/app/app.scss': [
                    '<%= yeoman.client %>/{app,components}/**/*.{scss,sass}',
                    '!<%= yeoman.client %>/app/app.{scss,sass}'
                ]
            }
        },

        ngAnnotate: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/concat',
                    src: '*/**.js',
                    dest: '.tmp/concat'
                }]
            }
        },

        // Package all the html partials into a single javascript payload
        ngtemplates: {
            options: {
                // This should be the name of your apps angular module
                module: 'teambreweryApp',
                htmlmin: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeEmptyAttributes: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true
                },
                usemin: 'app/app.js'
            },
            main: {
                cwd: '<%= yeoman.client %>',
                src: ['{app,components}/**/*.html'],
                dest: '.tmp/templates.js'
            },
            tmp: {
                cwd: '.tmp',
                src: ['{app,components}/**/*.html'],
                dest: '.tmp/tmp-templates.js'
            },
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.client %>',
                    dest: '<%= yeoman.dist %>/public',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'bower_components/**/*',
                        'assets/images/{,*/}*.{webp}',
                        'assets/fonts/**/*',
                        'index.html',
                    ]
                }, {
                    expand: true,
                    cwd: '.tmp/images',
                    dest: '<%= yeoman.dist %>/public/assets/images',
                    src: ['generated/*']
                }, {
                    expand: true,
                    dest: '<%= yeoman.dist %>',
                    src: [
                        'package.json',
                        'server/**/*'
                    ]
                }]
            },
            styles: {
                expand: true,
                cwd: '<%= yeoman.client %>',
                dest: '.tmp/',
                src: ['{app,components, assets}/**/*.css']
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js'
            ],
            unitTest: {
                options: {
                    jshintrc: '.jshintrc'
                },
                src: ['<%= yeoman.app %>/modules/*/tests/unit/*.js']
            }
        },

        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            docs: {
                files: [{
                    dot: true,
                    src: [
                        'docs/'
                    ]
                }]
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '**/*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },

        uglify: {
            options: {},
            app: {
                files: {
                    '<%= yeoman.dist %>/scripts/custom.js': ['<%= yeoman.dist %>/scripts/custom.js'],
                    '<%= yeoman.dist %>/scripts/vendor.js': ['<%= yeoman.dist %>/scripts/vendor.js']
                }
            }
        },

        ngdocs: {
            options: {
                dest: 'docs',
                scripts: [
                    'client/bower_components/jquery/dist/jquery.js',
                    'client/bower_components/bootstrap/dist/js/bootstrap.js',
                    'client/bower_components/angular/angular.js',
                    'client/bower_components/angular-resource/angular-resource.js',
                    'client/bower_components/angular-mocks/angular-mocks.js',
                    'client/bower_components/angular-cookies/angular-cookies.js',
                    'client/bower_components/angular-sanitize/angular-sanitize.js',
                    'client/bower_components/angular-animate/angular-animate.js',
                    'client/bower_components/angular-touch/angular-touch.js',
                    'client/bower_components/angular-bootstrap/ui-bootstrap.js',
                    'client/bower_components/angular-ui-utils/ui-utils.js',
                    'client/bower_components/angular-ui-router/release/angular-ui-router.js'
                ],
                html5Mode: false,
                startPage: '/api',
                title: 'App Documnetation',
                titleLink: '/api',
                bestMatch: true
            },
            api: {
                src: ['client/app/*.js', 'app/modules/**/*.js'],
                title: 'App Documentation'
            }
        },

        comments: {
            dist: {
                options: {
                    singleline: true,
                    multiline: true
                },
                src: ['www/scripts/custom.js']
            }
        },


        injector: {
            options: {
                addRootSlash: false,
                transform: function(filepath) {
                    filepath = filepath.substring(4, filepath.length);
                    switch (filepath.substring((--filepath.lastIndexOf(".") >>> 0) + 2)) {
                        case 'js':
                            return filepath = '<script src="' + filepath + '"></script>';
                            break;
                        case 'css':
                            return filepath = '<link rel="stylesheet" href="' + filepath + '" />';
                            break;
                        default:
                            console.log("File extension not supported by build tool.");
                            console.log(filepath);
                            break;
                    }
                }
            },

            'local_dependencies': {
                files: {
                    'client/index.html': [
                        'client/app/js/config.js',
                        'client/app/js/application.js',
                        'client/app/js/teambrewery.js',
                        'client/app/js/templates.js',
                        'client/app/modules/*/*.js',
                        'client/app/modules/*/config/*.js',
                        'client/app/modules/*/services/*.js',
                        'client/app/modules/*/directives/*.js',
                        'client/app/modules/*/filters/*.js',
                        'client/app/modules/*/controllers/*.js',
                        'client/app/modules/*/constants/*.js',
                        'client/app/css/**/*.css'
                    ]
                }
            }
        },

        bowerInstall: {
            app: {
                src: ['<%= yeoman.client %>/index.html'],
                ignorePath: '<%= yeoman.client %>'
            }
        },

        // Renames files for browser caching purposes
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/app/js/*.js',
                        '<%= yeoman.dist %>/app/modules/*/*.js',
                        '<%= yeoman.dist %>/app/modules/*/config/*.js',
                        '<%= yeoman.dist %>/app/modules/*/services/*.js',
                        '<%= yeoman.dist %>/app/modules/*/directives/*.js',
                        '<%= yeoman.dist %>/app/modules/*/filters/*.js',
                        '<%= yeoman.dist %>/app/modules/*/controllers/*.js',
                        '<%= yeoman.dist %>/app/modules/*/constants/*.js',
                        '<%= yeoman.dist %>/app/css/**/*.css',
                        '<%= yeoman.dist %>/app/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                        '<%= yeoman.dist %>/app/fonts/*'
                    ]
                }
            }
        },

        // minifiers
        useminPrepare: {
            html: '<%= yeoman.client %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>',
                flow: {
                    html: {
                        steps: {
                            js: ['concat'],
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        },

        usemin: {
            html: ['<%= yeoman.dist%>/**/*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                assetsDirs: [
                    '<%= yeoman.dist %>'
                ]
            }
        },

        cssmin: {
            options: {
                root: '<%= yeoman.app %>/css/**/*.css'
            }
        },

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/img',
                    src: '{,*/}*.{png,jpg,jpeg,gif}',
                    dest: '<%= yeoman.dist %>/img'
                }]
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/img',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/img'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>',
                    src: ['*.html', '<%= yeoman.app %>/modules/*/views/*.html']
                }]
            }
        },

        shell: {
            options: {
                stderr: true
            },
            target: {
                command: "" // add rails build tool maybe? :)
            }
        },

        ngmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/concat/scripts',
                    src: '*.js',
                    dest: '.tmp/concat/scripts'
                }]
            }
        },

        cdnify: {
            dist: {
                html: ['<%= yeoman.dist %>/app/index.html']
            }
        },

        removelogging: {
            dist: {
                src: "<%= yeoman.dist %>/scripts/**.js"
            }
        },

        concurrent: {
            server: [
                'copy:styles'
            ],
            test: [
                'copy:styles'
            ],
            dist: [
                'copy:styles',
                'imagemin',
                'svgmin'
            ]
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        }
    });

    // load required grunt modules
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-git');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('server', []);



    grunt.registerTask('build', [
        'clean:dist',
        'ngtemplates',
        'bowerInstall',
        'injector',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'concat',
        'ngmin',
        'copy:dist',
        'cdnify',
        'cssmin',
        'rev',
        'usemin',
        'htmlmin',
        'removelogging',
        'comments:dist',
        'uglify'
    ]);
};