function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }
  


  function generateReportCard(){
    var student1Name = document.getElementById("stud-1-name").innerHTML;
    var student2Name = document.getElementById("stud-2-name").innerHTML;
    var student3Name = document.getElementById("stud-3-name").innerHTML;
    var student4Name = document.getElementById("stud-4-name").innerHTML;


    var stud1Percent = document.getElementById("stud-1-percent");
    var stud2Percent = document.getElementById("stud-2-percent");
    var stud3Percent = document.getElementById("stud-3-percent");
    var stud4Percent = document.getElementById("stud-4-percent");


    var studList = student1Name+"\n"+student2Name+"\n"+student3Name+"\n"+student4Name;


    download("report.txt",studList);

}
