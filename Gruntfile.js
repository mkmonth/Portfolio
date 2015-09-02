module.exports = function (grunt) {
	grunt.initConfig({

		browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'styles/*.css',
                        '*.html'
                    ]
                },
                options: {
                    server: './'
                }
            }
        }

	});

	grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default', ['browserSync']);
};