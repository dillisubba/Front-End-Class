//Numeric values
var MediaTypes;
(function (MediaTypes) {
    MediaTypes[MediaTypes["Newspaper"] = 0] = "Newspaper";
    MediaTypes[MediaTypes["Television"] = 1] = "Television";
    MediaTypes[MediaTypes["Magazine"] = 2] = "Magazine";
})(MediaTypes || (MediaTypes = {}));
console.log(MediaTypes);
//string values
var Fnames;
(function (Fnames) {
    Fnames["Ram"] = "RAM";
    Fnames["Raj"] = "RAJ";
    Fnames["Raju"] = "RAJU";
})(Fnames || (Fnames = {}));
console.log(Fnames);
//Heterogeneous
var Courses;
(function (Courses) {
    Courses[Courses["Maths"] = 1] = "Maths";
    Courses[Courses["Physics"] = 2] = "Physics";
    Courses[Courses["Chemistry"] = 3] = "Chemistry";
    Courses[Courses["Biology"] = 4] = "Biology";
    Courses[Courses["Geography"] = 5] = "Geography";
    Courses[Courses["History"] = 6] = "History";
    Courses[Courses["Politics"] = 7] = "Politics";
})(Courses || (Courses = {}));
console.log(Courses);
