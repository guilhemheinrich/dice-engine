
// const webpackConfig = require('./webpack.config');

module.exports = function (grunt) {
    grunt.initConfig({
        ts: {
            default: {
                tsconfig: './tsconfig.json'
            }
        },
        // webpack: {
        //     options: {
        //         stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
        //     },
        //     prod: webpackConfig,
        //     dev: Object.assign({ watch: true }, webpackConfig)
        // },
        copy: {
            main: {
                files: [
                    // includes files within path
                    { expand: true, src: '**/*.yaml', cwd: 'src', dest: 'dest/', filter: 'isFile' },
                ],
            },
        },
        // tape: {
        //     options: {
        //         pretty: true,
        //         output: 'console'
        //     },
        //     files: ['test/**/*.js']
        // }
    });
    grunt.loadNpmTasks("grunt-ts");
    // grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-contrib-copy');
    // grunt.loadNpmTasks('grunt-tape');
    // grunt.registerTask('test', ['tape']);
    grunt.registerTask("default", ["ts", "copy"]);
};