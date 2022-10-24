module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      options: {
        livereload: true
      },
      jade: {
        tasks: ["jade:debug"],
        files: ['**/*.jade']
        // files: ['**/*.jade', '**/*.md', '!layouts/*.jade', '!layouts/*/*.jade']
      }
    },
    jade: {
      options: {
        pretty: true,
        files: {
          "*": ["**/*.jade", "!layouts/*.jade", "!layouts/*/*.jade"]
        }
      },
      debug: {
        options: {
          locals: {
            livereload: true
          }
        }
      },
      publish: {
        options: {
          locals: {
            livereload: false
          }
        }
      }
    },

  connect: {
    server: {
      options: {
        port: 8001, // custom port
        base: '.', // current directory for 'index.html' is root
        // keepalive: true, // keep the server alive indefinitely
        open: {
          target: 'http://localhost:8001'
        }
      }
    }
  }
});

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jade-tasks');

  grunt.registerTask('default', ['jade:debug', 'web']);
  grunt.registerTask('publish', ['jade:publish']);
  // grunt.registerTask('wat', function(){
  //   grunt.task.run(["watch:jade"]);
  // });
  // grunt.registerTask('web', ['connect']);

  grunt.registerTask('web', 'Start web server...', function() {
    // this.connect()
    grunt.task.run(['connect'])
    grunt.task.run(["watch:jade"]);
  });




  // grunt.registerTask('web', 'Start web server...', function() {
  //   var options = this.options();
  //   var connect = require('connect');
  //   var serveStatic = require('serve-static');
  //   connect.createServer(
  //       serveStatic(__dirname)
  //   ).listen(options.port);
  //   console.log('http://localhost:%s', options.port);

  //   grunt.task.run(["watch:jade"]);
  // });

  // grunt.loadNpmTasks('grunt-contrib-connect');

};
