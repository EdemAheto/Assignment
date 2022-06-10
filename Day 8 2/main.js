// function Student(name, grade){
//     this.name = name;
//     this.grade = grade;
// }
// const identity = new Student('Edem', 'grade4');



// First Assignment

  let _name = document.getElementById('Name')
  let _age = document.getElementById('Age')
  let _grade = document.getElementById('Class')
  let _gpa = document.getElementById('Gpa')
  let _courses = document.getElementById('Course')
  let _button = document.getElementById('Button')
  const p1 = document.getElementById('p1');
  const p2 = document.getElementById('p2');
  const p3 = document.getElementById('p3');
  const p4 = document.getElementById('p4');
  const p5 = document.getElementById('p5');


  
  _button.addEventListener('click',(event)=>{
    event.preventDefault();
      if(!_name.value||!_age.value||!_grade.value||!_gpa.value||!_courses.value){
          p1.innerHTML = "This field is required";
          _name.style.border="1px solid Red";
          p1.style.color = 'red';

          p2.innerHTML= "This field is required";
          _age.style.border="1px solid Red";
          p2.style.color = 'red';
      
          p3.innerHTML= "This field is required";
          _grade.style.border="1px solid Red";
          p3.style.color = 'red';

          p4.innerHTML= "This field is required";
          _gpa.style.border="1px solid Red";
          p4.style.color = 'red';
  
          p5.innerHTML= "This field is required";
          _courses.style.border="1px solid Red";
          p5.style.color = 'red';
      
      }
      else{
      
        _name.style.border="1px solid Green";
        p1.style.visibility = "hidden",
        _age.style.border="1px solid Green";
        p2.style.visibility = "hidden";
        _grade.style.border="1px solid Green";
        p3.style.visibility = "hidden";
        _gpa.style.border="1px solid Green";
        p4.style.visibility = "hidden";
        _courses.style.border="1px solid Green";
        p5.style.visibility = "hidden";
      }

      let display = document.getElementById('display');
      let newRow = display.insertRow(row);
      let cell1 = newRow.insertCell(0); 
      let cell2 = newRow.insertCell(1); 
      let cell3 = newRow.insertCell(2); 
      let cell4 = newRow.insertCell(3); 
      let cell5 = newRow.insertCell(4); 
  
       cell1.innerHTML = _name.value;
       cell2.innerHTML = _age.value;
       cell3.innerHTML = _grade.value;
       cell4.innerHTML = _gpa.value;
       cell5.innerHTML = _courses.value;
  
       row++; 
      
    });


  
  

    class NewStudent{
      _name
       _age 
       _grade
       _gpa
       _courses= []
     
       constructor(name, age, grade, gpa, courses = []){
           this._name=name;
           this._age=age;
           this._grade=grade;
           this._gpa=gpa;
           this._courses = courses
       }
       calculateGpa(newGpa){
           if(newGpa>0){
               this.gpa=newGpa;
           }
           else{
               console.log('Are you a student?')
           }
       }
       setCourses(newCourses){
         if(newCourses.length>5){
           this.courses = newCourses
         }else{
           console.log('The minimum charcters must be more that 5')
         }
       }
       setName(newName){
         if(newName.length>5){
             this.age=newName;
         }else{
             console.log('6 minimum characters are required')
         }
     }
       setAge(newAge){
           if(newAge>0){
               this.age=newAge;
           }else{
               console.log('The age is invalid')
           }
       }
     getName(){
       return this._name
     }
     getCourses(){
       return this._courses
     }
       getAge(){
           return this._age
       }
     
     printCourses(){ 
       console.log(`courses:\n${this.courses.join(",")}`);
     }
     sayHello(){
     `I am ${this.name}from grade ${this.grade}.\nI study ${this._courses(" , ")}`
     }
     };
      
     
     class HighSchool extends NewStudent{
       constructor(name, age, grade, gpa, courses){
         super(name, age, grade, gpa, courses);
       }
       sayHello(){
         `I am ${this.name}I am in a great High School.\nI study ${this._courses(" , ")}`
         }
     }
     
     let studentRoll = [];
     function createStudent(name, age, grade, gpa, courses){
       let newStudent = newStudent(name, age, grade, gpa, courses);
       newStudent.setCourses(courses);
       console.log(newStudent)
     }
     function enrollStudent(student){
       studentRoll.push(student);
     }
     
     function searchStudentbyName(name){
       return studentRoll.filter((s)=> s.getName().includes(name))
     }
     
     function filterStudentByGrade(grade){
       return studentRoll.filter((s)=> s.getGrade()==grade)
     }
     function filterStudentByAge(minAge, maxAge){
       return studentRoll.filter((s)=> s.getAge() > minAge()&& s.getAge()< maxAge())
       };
  
  const firstName = new NewStudent('Mango', 4,5, 1.0, "Kokonte")
  console.log(firstName)


