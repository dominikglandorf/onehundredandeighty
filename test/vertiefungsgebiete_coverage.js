describe('wirtschafts_rule_coverage', function() {

	data = require('../js/data.js');
	var logic = require('../js/logic.js');
	var foo = require('../js/helper.js');
	var assert = require('assert');
	var ruleManager = logic.ruleManager;
	var semesterManager = logic.semesterManager;

	beforeEach(function() {
		ruleManager.rules = [];
		ruleManager.addWirtschaftsRule();
	});

	var initDataWith = function(courses) {
		ruleManager.init(function getSemester(course) {
			var semester = courses[course];
			if (!semester)
				return -1;
			else
				return semester;
		});
	};

	it('works with active clause a', function () {
		 initDataWith({
		 	"wirtschaft1": 1,
		 	"wirtschaft2": 1,
		 	"wirtschaftneu": -1
		 });
		 var rules = logic.ruleManager.checkAll();
		 assert(rules.numberFailedRules == 0);
	});

	it('works with active clause b', function () {
	});

	it('works with active clause c', function () {
	});

	it('works with active clause d', function () {
	});
});
