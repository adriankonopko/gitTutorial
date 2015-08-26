module.exports = function (grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat:{
			options: {
				separator: '\n\n'
			},
			dist: {
				src:['js/Main.js', 'js/Controller.js'],
				dest: 'bin/<%= pkg.name %>.js'
			}
		},
		uglify:{
			my_target: {
				files:{
					'bin/js/<%= pkg.name %>.min.js' : ['bin/<%= pkg.name %>.js']
				}			
			}
		},
		sass: {
			dist: {
				files:{
					'css/custom.css' : 'sass/custom.scss'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');

	//task
	grunt.registerTask('default', ['concat', 'uglify', 'sass']);
}