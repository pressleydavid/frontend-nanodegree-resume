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



function displayBio(){

	var formattedbioPic = HTMLbioPic.replace("%data%",bio.biopic);
	$("#header").append(formattedbioPic);


	var fmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	$("#topContacts").append(fmobile);
	var femail = HTMLemail.replace("%data%",bio.contacts.email);
	$("#topContacts").append(femail);
	var fgithub = HTMLgithub.replace("%data%",bio.contacts.github);
	$("#topContacts").append(fgithub);
	var flocation = HTMLlocation.replace("%data%",bio.contacts.location);
	$("#topContacts").append(flocation);


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
	,
	{
	"title" : "Forestry Technician (Fire Lookout)",
	"employer" : "US Forest Service, Bitterroot National Forest",
	"dates" : "1998 - 2002 Fire Seasons",
	"location" : "Trapper Peak, Bitterroot National Forest, MT",
	"description" : "Fire Lookout"
	},
	{
	"title" : "Forestry Technician (Fire Lookout)",
	"employer" : "US Forest Service, Flathead National Forest",
	"dates" : "2002 - 2004 Fire Seasons",
	"location" : "Holland Peak, MT",
	"description" : "Fire Lookout"
	}
	// ,
	// {
	// "title" : "Mercenary",
	// "employer" : "French Foreign Legion",
	// "dates" : "1996 - 1998",
	// "location" : "Aubagne, France",
	// "description" : "Legionnaire Extraordinaire"
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

        var workDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);

        $(".work-entry:last").append(workDates);

        $("#work-entry").append(HTMLworkLocation);
        var formattedlocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
        console.log(work.jobs[i].location);
        $(".work-entry:last").append(formattedlocation);

        $("#work-entry").append(HTMLworkDescription);
        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);

      }
    }

var projects = {
	"project":[
	{
		"title": "Unituxin Biological Licensing Application",
		"dates": "2012 - 2014",
		"description" : "Statistical Programming and Data Management for Unituxin BLA Submission to FDA and MAA submission to EMA",
		"images": " "
	},
	{
		"title": "Orenitram New Drug Application",
		"dates": "2006 - 2012",
		"description" : "Statistical Programming and Data Management for Orenitram NDA Submission to FDA",
		"images": " "
	},
	{
		"title": "Tyvaso New Drug Application",
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


var education = {
	"schools": [
		{
			"name" : "North Carolina State University",
			"location" : "Raleigh, NC",
			"degree" : "BS",
			"major" : "Biochemistry",
			"dates" : "1998",
			"url"	: "www.ncsu.edu"
		},
		{
			"name" : "North Carolina State University",
			"location" : "Raleigh, NC",
			"degree" : "Certification",
			"major" : "Computer Science",
			"dates" : "2007",
			"url"	: "www.ncsu.edu"
		},
		{
			"name" : "North Carolina State University",
			"location" : "Raleigh, NC",
			"degree" : "Graduate Coursework",
			"major" : "Statistics",
			"dates" : "2010",
			"url"	: "www.ncsu.edu"
		}
	],
	"onlineCourses" : [
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"degree" : "Nanodegree",
			"major" : "Front End Web Development",
			"dates" : "2015",
			"url"	: "www.udacity.com"
		}
	]
};


education.display = function(){
	$("#education").append(HTMLschoolStart);

	for (i in education.schools){
		var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[i].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);

		var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree ;
		$(".education-entry:last").append(formattedSchoolNameDegree);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[i].major);
		$(".education-entry:last").append(formattedSchoolMajor);

	}

	if(education.onlineCourses.length > 0){

	$("#education").append(HTMLonlineClasses);

	for (i in education.onlineCourses){

		$("#education").append(HTMLschoolStart);
		var f_onlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
		var f_onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
		var f_titleSchool = f_onlineTitle + f_onlineSchool;
		$(".education-entry:last").append(f_titleSchool);

		var f_onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
		console.log(f_onlineDates);
		$(".education-entry:last").append(f_onlineDates);

	}
	}
}

$("#mapDiv").append(googleMap);
