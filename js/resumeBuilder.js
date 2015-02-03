var name = "David Pressley" ;
var role = "Problem Solver"
var formattedName = HTMLheaderName.replace("%data%", name) ;
	$("#header").prepend(formattedName) ;
var formattedRole = HTMLheaderRole.replace("%data%", role) ;
$("#header").append(formattedRole) ;



var bio = {
	"name" : "David Pressley",
	"role"	: "Problem Solver",
	"contacts" : {
					"email": "pressleydavid@gmail.com",
					"mobile": "919-414-6267",
					"github": "pressleydavid",
					"twitter": "@pressleydavid",
					"location" : "Raleigh, NC"
				},
	"welcomeMessage" : "Hello!",
	"skills" : ["SAS", "CDISC", "People Leadership", "Burgeoning Web Developer"],
	"biopic" : "images/dp.jpg",
	"display" : "function"
};

$("#mapDiv").append(googleMap);

function displayBio(){

	var formattedbioPic = HTMLbioPic.replace("%data%",bio.biopic);
	$("#header").append(formattedbioPic);


	var fmobile = HTMLmobile.replace("%data%",bio.contacts[1]);
	$("#header").append(fmobile);
	var femail = HTMLemail.replace("%data%",bio.contacts[0]);
	$("#header").append(femail);
	var flocation = HTMLlocation.replace("%data%",bio.contacts[4]);
	$("#header").append(flocation);


    if(bio.skills.length >0){
      $("#header").append(HTMLskillsStart);
      var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
      console.log(formattedSkill);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%",bio.skills[4]);
    }
}


function inName(name){
  var fnam = name.substr(1,name.indexOf(' ')).toLowerCase().trimRight();
  var lnam = name.substr(name.indexOf(' ')).toUpperCase();
  first = name.slice(0,1).toUpperCase();
  finalName = first + fnam + lnam;

  return finalName;

}
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
	"description" : "Direction and individual contribution to clinical data programming for internal report writing and regulatory agency filing for Biostatistics and Data Programming group. I also architect systems and processes to enable efficiency."
	},
	{
	"title" : "Manager, Clinical Data Programming",
	"employer" : "United Therapeutics",
	"dates" : "2010 - 2012",
	"location" : "Research Triangle Park, NC",
	"description" : "Oversee and individually contribute to Biostatistics and Data Programming group"
	}
	// ,
	// {
	// "title" : "Forestry Technician (Fire Lookout)",
	// "employer" : "US Forest Service",
	// "dates" : "1998 - 2002 Fire Seasons",
	// "location" : "Hamilton, MT",
	// "description" : "Fire Lookout"
	// }
	]

};

function displayWork(){
      for(i in work.jobs){
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        // console.log(work.jobs[i].title);


        //$("#work-entry").append(HTMLworkDates);
        var workDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        // console.log(workDates);
        // console.log(work.jobs[i].dates);
        $(".work-entry:last").append(workDates);

        $("#work-entry").append(HTMLworkLocation);
        var formattedlocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
        console.log(work.jobs[i].location);
        $(".work-entry:last").append(formattedlocation);

        $("#work-entry").append(HTMLworkDescription);
        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);

  //       for (var i in bio.contacts) {
		// 	console.log(bio.contacts.location);
		// }
      }
    }

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
projects.display = function(){
      for (i in projects.project){
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[i].title);
        $(".project-entry:last ").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%",projects.project[i].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[i].description);
        $(".project-entry:last").append(formattedDescription);

        if(projects.project[i].images.length >0){
          for (image in projects.project[i].images){
            var formattedImage = HTMLprojectImage.replace("%data%",projects.project[i].images);
            $(".project-entry:last").append(formattedImage);
          }
        }
      }
    }
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
			"majors" : ["Biochemistry", "Chemistry"],
			"dates" : "1998",
			"url"	: "www.ncsu.edu"
		},
		{
			"name" : "North Carolina State University",
			"location" : "Raleigh",
			"degree" : ["Certification"],
			"major" : ["Computer Science"],
			"dates" : "2007",
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
			"dates" : "2010",
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