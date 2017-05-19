module.exports=function(grunt){

"use strict";


var config;
config={
    //Imagemin
    imagemin: {                          // Task
    dynamic: {                         // Another target
      files: [{
        expand: true,                  // Enable dynamic expansion
        cwd: 'assets/img/',                   // Src matches are relative to this path
        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
        dest: 'assets/img/'                  // Destination path prefix
      }]
    }
  }
/////////////////////////


};
//Init grunt
grunt.initConfig(config);

//Task Load

grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.registerTask('task1',function(){
    console.log('task1');
});
//Register task
grunt.registerTask('build',['task1']);
grunt.registerTask('panda',["imagemin"]);

}