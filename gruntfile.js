var grunt = require('grunt');

grunt.registerTask('world', 'world task description', function(){
  console.log('hello world');
});

grunt.registerTask('hello', 'say hello', function(name){
  if(!name || !name.length)
    grunt.warn('you need to provide a name.');

  console.log('hello ' + name);
});

grunt.registerTask('default', ['world', 'hello:adrian']);

grunt.initConfig({
  print: {
    target1: ['index.html', 'src/styles.css', 2],
    target2: 'data',
    hello: 'world'
  }
});

grunt.registerMultiTask('print', 'print targets', function() {
  grunt.log.writeln(this.target + ': ' + this.data);
});