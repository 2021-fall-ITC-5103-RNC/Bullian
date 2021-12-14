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


    var stud1Percent = document.getElementById("stud-1-percent").innerHTML;
    var stud2Percent = document.getElementById("stud-2-percent").innerHTML;
    var stud3Percent = document.getElementById("stud-3-percent").innerHTML;
    var stud4Percent = document.getElementById("stud-4-percent").innerHTML;


    var studList = student1Name+"\t"+stud1Percent+"\n"+student2Name+"\t"+stud2Percent+"\n"+student3Name+"\t"+stud3Percent+"\n"+student4Name+"\t"+stud4Percent;


    download("report.txt",studList);

}
