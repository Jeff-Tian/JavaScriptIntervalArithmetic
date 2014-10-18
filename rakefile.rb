gem 'albacore', '=0.2.6'
require 'albacore'
require 'rake'
require 'yaml'

$ROOT = File.expand_path(Dir.pwd)

puts 'Root path is ' + $ROOT

task :default => ["js_unit_test"]

task :js_unit_test do
require 'pathname'
puts "============================================================="
puts "Running javascript tests ..."

testsFiles = File.join($ROOT, 'Source/Scripts.Test/spec/*.html')

puts ''
puts "Test file pattern: " + testsFiles
puts ''

Dir.chdir(File.join($ROOT, 'AutoTools'))

i = 0	
Dir.glob(testsFiles) do |item|
	next if item == '.' or item == '..'
	
	i = i+1
	
	command = File.join($ROOT, 'AutoTools/phantomjs.exe') + ' ' + File.join($ROOT, 'AutoTools/Scripts/run-jasmine.js') + ' ' +
	((Pathname.new item).relative_path_from (Pathname.new File.join($ROOT, 'AutoTools'))).to_s
	
	puts ''
	puts '----------------------------------------------------------'
	puts '    Running test file ' + i.to_s + '...'
	puts '        ' + command + ''
	
	
	system command
	
	puts $?
	
	if !($? == nil) && $?.pid == 0 then
		raise 'Failed to start ' + command
	end
	
	if !($? == nil) && $?.exitstatus != 0 then
		raise 'JavaScript tests failed!'
	end
	puts '-----------------------------------------------------------'
	puts ''
end

if(i == 0) then
	raise 'No js test files are found!'
end

puts "JavaScript tests passed. :)    total test files: " + i.to_s
puts "============================================================="
end