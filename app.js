  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import {set,ref,push,getDatabase,onValue} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDvojWHaDnpaG94nT8DuEKIDdbomMBRYdA",
    authDomain: "form-shaheer.firebaseapp.com",
    databaseURL: "https://form-shaheer-default-rtdb.firebaseio.com",
    projectId: "form-shaheer",
    storageBucket: "form-shaheer.appspot.com",
    messagingSenderId: "543034174948",
    appId: "1:543034174948:web:de5da18b4d8f55c9752bf1",
    measurementId: "G-C0GD5SBZJB"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase();

  let stdCountry = document.getElementById("stdCountry");
  let stdName = document.getElementById("stdName");
  let stdCourse = document.getElementById("stdCourse");
  let stdEmail = document.getElementById("stdEmail");
  let stdFathername = document.getElementById("stdFathername");
  let stdCnic = document.getElementById("stdCnic");
  let stdPhone = document.getElementById("stdPhone");
  let stddob = document.getElementById("stddob");
  let stdFatherCnic = document.getElementById("stdFatherCnic");
  let stdGender = document.getElementById("stdGender");
  let stdAddrs = document.getElementById("stdAddrs");
  let stdQulifi = document.getElementById("stdQulifi");
  let stdlaptop = document.getElementById("stdlaptop");
  let stdPiture = document.getElementById("stdPiture");

  window.sendData = function() {
    let foamObj = {
      fullName: stdName.value,
      fatherName: stdFathername.value,
      email: stdEmail.value,
      phone: stdPhone.value,
      country: stdCountry.value,
      course: stdCourse.value,
      cnic: stdCnic.value,
      fatherCnic: stdFatherCnic.value,
      dob: stddob.value,
      address: stdAddrs.value,
      gender: stdGender.value,
      isLaptop: stdlaptop.value,
      lastQualification: stdQulifi.value,
      picture: stdPiture.value
    };
  
    let isEmpty = false;
  
    for (let key in foamObj) {
      if (foamObj.hasOwnProperty(key) && foamObj[key] === "") {
        isEmpty = true;
        break;
      }
    }
  
    if (isEmpty) {
      console.log("Fill form properly");
    } else {
        foamObj.id = push(ref(database,"studentData/")).key;
        
        let refrence = ref(database ,`studentData/ ${foamObj.id}`);
        set(refrence,foamObj);
    }
  };

    function getData(){
        let refrence = ref(database,"studentData/");
        onValue(refrence,function(data){
            console.log(data.val());
        })
    }
    getData();  

function resetVal(){
    stdCountry.value = "";
    stdCourse.value = "";
    stdEmail.value = "";
    stdFathername.value = "";
    stdCnic.value = "";
    stdPhone.value = "";
    stddob.value = "";
    stdFatherCnic.value = "";
    stdGender.value = "";
    stdAddrs.value = "";
    stdQulifi.value = "";
    stdlaptop.value = "";
    stdPiture.value = "";
    stdName.value = "";

}
  window.stopresrt = function(e){
    event.preventDefault();
    resetVal();
  }