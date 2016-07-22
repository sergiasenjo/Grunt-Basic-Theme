module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
        options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
            src: 'src/js/prueba.js',
            dest: 'build/js/prueba.min.js'
        }
    },
    watch: {
        scripts: {
            files: ['src/js/prueba.js', 'src/less/prueba.less'],
            tasks: ['uglify', 'less'],
            options: {
                spawn: false
            }
        },
    },
    less: {
        development: {
            options: {
                paths: ["src/css"]
            },
            files: {"src/css/prueba.css": "src/less/prueba.less"}
        },
        production: {
            options: {
                paths: ["src/css"],
                cleancss: true
            },
            files: {"src/css/prueba.css": "src/less/prueba.less"}
        }
    },
    cssmin: {
        options: {
            shorthandCompacting: false,
            roundingPrecision: -1
        },
        target: {
            files: {
                'build/css/prueba.min.css': ['src/css/prueba.css']
            }
        }
    }
  });

  // Load the plugins that provides the "default" tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['less','cssmin','uglify']);
};
