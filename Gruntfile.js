module.exports = function(grunt) {
    'use strict';
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    grunt.initConfig({
        // initial config
        yeoman: {
            client: require('./bower.json').appPath || 'client',
            dist: 'dist',
            temp: '.tmp',
            app: 'client/app',
            name: "teambrewery"
        },
        filerev: {
            options: {
                algorithm: 'md5',
                length: 8
            },
            dist: {
                files: [{
                    src: [
                        '<%= yeoman.dist %>/img/{,**/}*.{jpg,jpeg,png,gif,webp}',
                        '<%= yeoman.dist %>/scripts/*.js',
                        '<%= yeoman.dist %>/styles/*.css'
                    ]
                }]
            }
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
                tasks: ['newer:jshint:all', 'ngtemplates', 'injector'],
                options: {
                    livereload: false
                }
            },
            jsUnitTest: {
                files: ['<%= yeoman.app %>/modules/*/tests/unit/*.js'],
                tasks: ['karma:unit']
            },
            styles: {
                files: ['<%= yeoman.app %>/*.css', '<%= yeoman.app %>/scss/**/*.scss', '<%= yeoman.app %>/scss/*.scss'],
                tasks: ['sass', 'newer:copy:styles', 'autoprefixer']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            ngtemplates: {
                files: ['{<%= yeoman.app %>', '<%=yeoman.client%>/components/**/*.html', '<%= yeoman.app%>/templates/**/*.html'],
                tasks: ['ngtemplates']
            }
        },
        ngtemplates: {
            files: ['<%= yeoman.app %>/templates/**/*.html', '<%= yeoman.client %>/components/**/*.html'],
            app: {
                cwd: '<%= yeoman.app %>/templates/',
                src: '**/*.html',
                dest: '<%= yeoman.app %>/templates.js',
                options: {
                    bootstrap: function(module, script) {
                        return 'angular.module(ApplicationConfiguration.applicationModuleName).run(["$templateCache", function($templateCache){' + script + '}]);';
                    },
                    angular: 'teambrewery',
                    usemin: 'scripts/custom.js',
                    htmlmin: {
                        removeComments: true,
                        removeRedundantAttributes: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true,
                        collapseWhitespace: true
                    }
                }
            }
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

            dist: {
                files: {
                    '<%= yeoman.client %>/app/app.css': '<%= yeoman.client %>/app/scss/app.scss'
                },
                options: {
                    includePaths: ['<%= yeoman.client %>/bower_components/', '<%= yeoman.client %>/components/', '<%= yeoman.app %>/scss/']
                },
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
        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.client %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'index.html',
                    ]
                }]
            },
            styles: {
                expand: true,
                cwd: '<%= yeoman.app %>/css',
                dest: '.tmp/css/',
                src: '**/*.css'
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
            options: {
                banner: '/*! <%= yeoman.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
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
                src: ['<%= yeoman.dist %>/scripts/custom.js']
            }
        },
        injector: {
            options: {
                addRootSlash: false,
            },
            'local_dependencies': {
                files: {
                    'client/index.html': [
                        'client/app/config.js',
                        'client/app/app.js',
                        'client/app/teambrewery.js',
                        'client/app/templates.js',
                        'client/app/modules/*/**.js',
                        'client/app/modules/*/config/*.js',
                        'client/app/modules/*/services/*.js',
                        'client/app/modules/*/directives/*.js',
                        'client/app/modules/*/filters/*.js',
                        'client/app/modules/*/controllers/*.js',
                        'client/app/modules/*/constants/*.js',
                        'client/app/modules/**/*.js',
                        'client/components/**/*.js',
                        '/app/*.css'
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
                        '<%= yeoman.dist %>/**/*.{js, css}',
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
            html: ['<%= yeoman.dist %>/*.html'],
            css: ['<%= yeoman.dist %>/styles/*.css'],
            //js: ['<%= yeoman.dist %>/scripts/*.js'],
            options: {
                assetsDirs: [
                    '<%= yeoman.dist %>/img'
                ]
            }
        },
        cssmin: {
            options: {
                root: 'client/app/*.css'
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.client %>/assets/',
                    src: ['images/{,**/}*.{png,jpg,jpeg,gif}', 'pokemon_sprites/*.{png,jpg,jpeg,gif}'],
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
                    removeComments: true,
                    collapseWhitespace: true,
                },
                files: {
                    'dist/index.html': 'dist/index.html'
                }
            }
        },
        shell: {
            options: {
                stderr: true
            },
            target: {
                command: '' // add rails build tool maybe? :)
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
                html: ['<%= yeoman.dist %>/index.html']
            }
        },
        removelogging: {
            dist: {
                src: '<%= yeoman.dist %>/scripts/**.js'
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
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-git');
    grunt.loadNpmTasks('grunt-shell');
    grunt.registerTask('build', [
        'clean:dist',
        'ngtemplates',
        'bowerInstall',
        'sass',
        'injector',
        'autoprefixer',
        'ngmin',
        'useminPrepare',

        'concat',
        'copy:dist',
        'copy:styles',
        'imagemin',
        'svgmin',

        'uglify',
        'cssmin',
        'usemin',
        'htmlmin',
    ]);
};