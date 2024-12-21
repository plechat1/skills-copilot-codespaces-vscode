function skillsMember()  {
    var member = document.getElementById("member").value;
    var memberSkills = {
        "John": ["HTML", "CSS", "JavaScript"],
        "Jane": ["Python", "Django"],
        "Jim": ["Java", "Spring"],
        "Jill": ["Ruby", "Ruby on Rails"],
        "Jack": ["PHP", "Laravel"]
    };
    document.getElementById("skills").innerHTML = memberSkills[member];
}