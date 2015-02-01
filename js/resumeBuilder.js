var name = "David Pressley" ;
var role = "Problem Solver"
var formattedName = HTMLheaderName.replace("%data%", name) ;
$("#header").prepend(formattedName) ;
var formattedRole = HTMLheaderRole.replace("%data%", role) ;
$("#header").append(formattedRole) ;

// var skills = ["SAS", "CDISC", "Management", "JS"];

//$("#main").append(skills.length);

var bio = {
	"name" : "David Pressley",
	"role"	: "Problem Solver",
	"contacts" : ["pressleydavid@gmail.com", "919-414-6267", "pressleydavid", "@pressleydavid", Raleigh, NC"],
	"welcomeMessage" : "Hello!",
	"skills" : ["SAS", "CDISC", "People Leadership", "Burgeoning Web Developer"]
};
// "picture_URL" : "images/dp.jpg",


//$("main").append(bio.picture_URL);

// ["Twitter": "pressleydavid","Github":"pressleydavid"]

// bio.location = "Raleigh";

var work = {
	"jobs": [
	{
	"title" : "Senior Manager, Clinical Data Programming",
	"employer" : "United Therapeutics",
	"dates" : "2012 - 2015",
	"location" : "Research Triangle Park, NC",
	"description" : "Direct and individually contribute to clinical data programming for internal report writing and regulatory agency filing for Biostatistics and Data Programming group. I also architect systems and processes to enable efficiency."
	},
	{
	"title" : "Manager, Clinical Data Programming",
	"employer" : "United Therapeutics",
	"dates" : "2010 - 2012",
	"location" : "Research Triangle Park, NC",
	"description" : "Oversee and individually contribute to Biostatistics and Data Programming group"
	}
	]
};

var projects = {
	"project":[
	{
		"title": "Unituxin BLA",
		"dates": "2012 - 2014",
		"description" : "Statistical Programming and Data Management for Unituxin BLA Submission to FDA and MAA submission to EMA",
		"images": " "
	},
	{
		"title": "Orenitram NDA",
		"dates": "2006 - 2012",
		"description" : "Statistical Programming and Data Management for Orenitram NDA Submission to FDA",
		"images": " "
	},
	{
		"title": "Tyvaso NDA",
		"dates": "2007 - 2009",
		"description" : "Statistical Programming and Data Management for Tyvaso NDA Submission to FDA",
		"images": " "
	}




	]
};

// "dev" 	: [ "Implement first EDC System in Company",
// 					"Implement hosted Statistical Computing Environment",
// 					"Implementation of first VCS/SCM system (Subversion)",
// 					"Implement first company submission of CDISC data to FDA"],
// 		"platforms" : [ "Architect and Administrator for Hosted/Private Cloud Computing Infrastructure",
// 						"SAS CLinical Data Integration",
// 						"JMP Clinical",
// 						"Base SAS", "SAS Graph", "SAS Stat", "R", "Python", "Subversion"]

var education = {
	"schools": [
		{
			"name" : "North Carolina State University",
			"location" : "Raleigh",
			"degree" : ["BS","BA"],
			"major" : ["Biochemistry", "Chemistry"],
			"years" : "1993 - 1998",
			"url"	: "www.ncsu.edu"
		},
		{
			"name" : "North Carolina State University",
			"location" : "Raleigh",
			"degree" : ["Certification"],
			"major" : ["Computer Science"],
			"years" : "2004 - 2006",
			"url"	: "www.ncsu.edu"
		},
		{
			"name" : "North Carolina State University",
			"location" : "Raleigh",
			"degree" : ["Graduate Coursework",
						"ST505 - Applied Nonparametric Statistics",
						"ST511 - Experimental Statistics For Biological Sciences I",
						"ST512 - Experimental Statistics For Biological Sciences II"],
			"major" : ["Statistics"],
			"years" : "2009 - 2010",
			"url"	: "www.ncsu.edu"
		}
	],
	"onlineCourses" : [
		{
			"title" : "JavaScript Basics",
			"school" : "San Udalocation",
			"degree" : "Nanodegree",
			"major" : "Front End Web Development",
			"dates" : "2015",
			"url"	: "www.udacity.com"
		}
	]
};

// $("#main").append(work["position"]);
// $("#main").append(education.name);