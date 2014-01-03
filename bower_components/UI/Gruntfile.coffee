exec = require('child_process').exec

module.exports = (grunt) ->

  grunt.initConfig
    bump:
      options:
        files:['bower.json', 'package.json']
        pushTo: 'origin'
        push: true
        commitFiles: ['-a']

  grunt.registerTask 'make', 'build UI', ->
    done = this.async()
    child = exec("make", (err, stdout, sterr)->
      if err
        grunt.fatal err
      else
        grunt.log.ok 'Maked'
      done()
    )
    child.stdout.on 'data', (data) ->
      grunt.log.write data
    child.stdout.on 'error', (error) ->
      grunt.fatal error

  grunt.loadNpmTasks('grunt-bump')
  grunt.registerTask('build', ['make'])
  grunt.registerTask('default', ['bump-only:patch', 'make', 'bump-commit'])