module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        auto_install: {
            init: {}
        },
        ts: {
            commonjs: {
                src: ['src/main/ts/*.ts'],
                outDir: 'lib',
                reference: "reference.ts",            
                options: {
                    module: 'commonjs', //or amd
                    target: 'es5', //or es3
                    sourceMap: false,
                    declaration: true,
                    verbose: true
                }                
            }
        },

        clean: {
            all: ["lib"]
        },
    });

    // clean
    grunt.loadNpmTasks('grunt-contrib-clean');
    // Load the plugin that provides the "TS" task.
    grunt.loadNpmTasks('grunt-ts');
    // install all the bullshit
    grunt.loadNpmTasks('grunt-auto-install');

    // Default task(s).
    grunt.registerTask('reset', ['clean']);
    grunt.registerTask('init', ['auto_install']);
    grunt.registerTask('build', ['ts']);
    grunt.registerTask('dist', ['init', 'build']);
    grunt.registerTask('default', ['dist']);

};