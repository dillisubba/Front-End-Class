function studentDetails(stdid, stdname, stdemail) {
    console.log("student id is ", stdid);
    console.log("student name is ", stdname);
    if (stdemail != undefined) {
        console.log("student email is ", stdemail);
    }
}
studentDetails(45, "srinivas"); //
studentDetails(45, "srinivas", "chsr1207@ymail.com");
console.log("-----------------------");
//This will give undefined value for email.
function studentDetail(stdid, stdname, stdemail) {
    console.log("student id is ", stdid);
    console.log("student name is ", stdname);
    // if(stdemail!=undefined)
    // {
    console.log("student email is ", stdemail);
    //  }
}
studentDetail(45, "srinivas"); //
studentDetails(45, "srinivas", "chsr1207@ymail.com");
