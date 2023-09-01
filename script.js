console.log("Hello");

const tuitionPaidRadioYes = document.getElementById("flexRadioDefault1");
  const tuitionPaidRadioNo = document.getElementById("flexRadioDefault2");
  const tuitionFeeInput = document.getElementById("Amount");

  const gicRadioYes = document.getElementById("YesGic");
  const gicRadioNo = document.getElementById("NoGic");
  const gicAmountInput = document.getElementById("GicAmount");
  function handleTuitionFeeInput() {
    tuitionFeeInput.disabled = !tuitionPaidRadioYes.checked;
  }
  function handleGicAmountInput() {
    gicAmountInput.disabled = !gicRadioYes.checked;
  }
  tuitionPaidRadioYes.addEventListener("change", handleTuitionFeeInput);
  tuitionPaidRadioNo.addEventListener("change", handleTuitionFeeInput);

  gicRadioYes.addEventListener("change", handleGicAmountInput);
  gicRadioNo.addEventListener("change", handleGicAmountInput);

  handleTuitionFeeInput();
  handleGicAmountInput();





function fetchAndDisplayPhoto() {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20",
    true
  );
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const actualdata = JSON.parse(xhr.responseText);
        const numPhotos = actualdata.photos.length;
        const randomIndex = Math.floor(Math.random() * 19);
        const mydata = actualdata.photos[randomIndex].url;
        document.getElementById("buildingImage").src = mydata;
      } else {
        console.log("Error fetching data");
      }
    }
  };
  xhr.send();
}
fetchAndDisplayPhoto();
setInterval(() => {
  fetchAndDisplayPhoto();
}, 10000);

document.addEventListener("DOMContentLoaded", () => {
  const countrySelect = document.getElementById("countrySelect");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://restcountries.com/v3.1/all", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        populateSelect(data);
      } else {
        console.log("Error fetching data");
      }
    }
  };
  xhr.send();
  function populateSelect(countriesData) {
    const countries = countriesData.map((country) => country.name.common);
    countries.forEach((country) => {
      const option = document.createElement("option");
      option.text = country;
      countrySelect.add(option);
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  let collegeInput = document.querySelector("#collegeInput");
  let collegeSelect = document.querySelector("#collegeSelect");
  let realdata = [];
  //Onchange function
  let countryInput = document.getElementById("countrySelect");
  countryInput.addEventListener("change", function () {
    fetchColleges();
  });
  function fetchColleges() {
    let xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      `http://universities.hipolabs.com/search?country=${countryInput.value}`,
      true
    );
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          realdata = JSON.parse(xhr.responseText);
          updateCollegeSelect("");
        } else {
          console.log("Error fetching data");
        }
      }
    };
    xhr.send();
  }
  function updateCollegeSelect(inputText) {
    collegeSelect.innerHTML = '<option value="">Select a college</option>';
    let filteredColleges = realdata.filter((college) => {
      let collegeName = college.name;
      return collegeName.includes(inputText);
    });

    filteredColleges.forEach((college) => {
      const option = document.createElement("option");
      option.text = college.name;
      collegeSelect.add(option);
    });
  }

  collegeInput.addEventListener("DOMContentLoaded", () => {
    let inputText = collegeInput.value;
    if (inputText === "") {
      updateCollegeSelect("");
      return;
    }
    updateCollegeSelect(inputText);
  });

  // document.addEventListener("click", (event) => {
  //   if (event.target !== collegeInput) {
  //     collegeSelect.style.display = "none";
  //   }
  // });

  // collegeSelect.addEventListener("change", () => {
  //   collegeInput.value = collegeSelect.value;
  //   collegeSelect.style.display = "none";
  // });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    fetch("https://demo-api-wh0x.onrender.com/register", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("API response:", data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  });
});

const selectElement = document.getElementById("collegeSelectCanada");
const apiURL = "http://universities.hipolabs.com/search?country=Canada";
fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((university) => {
      const option = document.createElement("option");
      option.value = university.name;
      option.text = university.name;
      selectElement.appendChild(option);
    });
  })
  .catch((error) => {
    console.error("Error fetching data from API:", error);
  });
function validateForm() {
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const emailInput = document.getElementById("exampleInputEmail1");
  const dobInput = document.getElementById("dob");
  const educationSelect = document.getElementById("educationSelect");
  const countrySelect = document.getElementById("countrySelect");
  const universitySelect = document.getElementById("collegeSelect");
  const exampleInputDegree = document.getElementById("exampleInputDegree");
  const workExperience = document.getElementById("workExperience");
  const collegeSelectCanada = document.getElementById("collegeSelectCanada");
  const programStudy = document.getElementById("programStudy");
  const GoalInput = document.getElementById("GoalInput");
  const Listening = document.getElementById("Listening");
  const Reading = document.getElementById("Reading");
  const Writing = document.getElementById("Writing");
  const Speaking = document.getElementById("Speaking");
  const tuitionPaidYes = document.getElementById("flexRadioDefault1");
  const tuitionPaidNo = document.getElementById("flexRadioDefault2");
  const Amount = document.getElementById("Amount");
  const YesGic = document.getElementById("YesGic");
  const NoGic = document.getElementById("NoGic");
  const GicAmount = document.getElementById("GicAmount");
  const termsCheckbox = document.getElementById("Termsbox");

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const email = emailInput.value.trim();
  const dobValue = dobInput.value;
  const educationValue = educationSelect.value;
  const countryValue = countrySelect.value;
  const universityValue = universitySelect.value;
  const exampleInputDegreeValue = exampleInputDegree.value.trim();
  const workExperienceValue = workExperience.value.trim();
  const collegeSelectCanadaValue = collegeSelectCanada.value;
  const programStudyValue = programStudy.value.trim();
  const GoalInputValue = GoalInput.value.trim();
  const ListeningValue = Listening.value.trim();
  const ReadingValue = Reading.value.trim();
  const WritingValue = Writing.value.trim();
  const SpeakingValue = Speaking.value.trim();
  const AmountValue = Amount.value.trim();
  const GicAmountValue = GicAmount.value.trim();

  const firstNameError = document.getElementById("firstnameError");
  const lastNameError = document.getElementById("lastnameError");
  const emailError = document.getElementById("email");
  const dobError = document.getElementById("dateofbirth");
  const HigheducationError = document.getElementById("Higheducation");
  const CountryError = document.getElementById("CountryError");
  const UniversityError = document.getElementById("UniversityError");
  const degreeError = document.getElementById("degreeError");
  const WorkError = document.getElementById("WorkError");
  const CanadaUniversityError = document.getElementById("CanadaUniversityError");
  const programError = document.getElementById("programError");
  const goalError = document.getElementById("goalError");
  const ListeningError = document.getElementById("ListeningError");
  const ReadingError = document.getElementById("ReadingError");
  const WritingError = document.getElementById("WritingError");
  const SpeakingError = document.getElementById("SpeakingError");
  const tuitionPaidError = document.getElementById("tuitionPaidError");
  const AmountError = document.getElementById("AmountError");
  const GicError = document.getElementById("GicError");
  const GicAmountError = document.getElementById("GicAmountError");
  const termsCheckboxError = document.getElementById("TermsboxError");

  
  function clearErrorAndClasses(inputElement, errorElement) {
    inputElement.classList.remove("is-invalid");
    errorElement.textContent = "";
  }

  
  function setErrorAndClasses(inputElement, errorElement, message) {
    inputElement.classList.add("is-invalid");
    errorElement.textContent = message;
  }

  const alphabeticRegex = /^[A-Za-z]+$/;
  const emailRegex = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  // Validation for firstName
  if (firstName.length < 2 || firstName.length > 50) {
    setErrorAndClasses(firstNameInput, firstNameError, "* Must be 2 and 50 characters.");
  } else if (!alphabeticRegex.test(firstName)) {
    setErrorAndClasses(firstNameInput, firstNameError, "* Alphabetic characters only.");
  } else {
    clearErrorAndClasses(firstNameInput, firstNameError);
    firstNameInput.classList.add("is-valid");
  }

  // Validation for lastName
  if (lastName.length < 2 || lastName.length > 50) {
    setErrorAndClasses(lastNameInput, lastNameError, "* Must be 2 and 50 characters.");
  } else if (!alphabeticRegex.test(lastName)) {
    setErrorAndClasses(lastNameInput, lastNameError, "* Alphabetic characters only.");
  } else {
    clearErrorAndClasses(lastNameInput, lastNameError);
    lastNameInput.classList.add("is-valid");
  }

  // Validation for email
  if (email === "") {
    setErrorAndClasses(emailInput, emailError, "* Email address cannot be empty.");
  } else if (email.length > 100) {
    setErrorAndClasses(emailInput, emailError, "* Email address exceeds the maximum length.");
  } else if (!emailRegex.test(email)) {
    setErrorAndClasses(emailInput, emailError, "* Invalid email address format.");
  } else {
    clearErrorAndClasses(emailInput, emailError);
    emailInput.classList.add("is-valid");
  }

  // Validation for date of birth
  if (dobValue === "") {
    setErrorAndClasses(dobInput, dobError, "* Date of birth cannot be empty.");
  } else {
    const currentDate = new Date();
    const dob = new Date(dobValue);
    if (dob >= currentDate) {
      setErrorAndClasses(dobInput, dobError, "* DOB must be in the past.");
    }

    const age = currentDate.getFullYear() - dob.getFullYear();
    if (age < 18) {
      setErrorAndClasses(dobInput, dobError, "* Must be at least 18 years old.");
    } else {
      clearErrorAndClasses(dobInput, dobError);
      dobInput.classList.add("is-valid");
    }
  }
  if (educationValue === "") {
    setErrorAndClasses(educationSelect, HigheducationError, "* Please Select your Education.");
  } else {
    clearErrorAndClasses(educationSelect, HigheducationError);
    educationSelect.classList.add("is-valid");
  }
  if (countryValue === "") {
    setErrorAndClasses(countrySelect, CountryError, "* Please Select the Country");
  } else {
    clearErrorAndClasses(countrySelect, CountryError);
    countrySelect.classList.add("is-valid");
  }
  if (universityValue === "") {
    setErrorAndClasses(universitySelect, UniversityError, "* Please Select the University After Selecting The Country");
  } else {
    clearErrorAndClasses(universitySelect, UniversityError);
    universitySelect.classList.add("is-valid");
  }
  if (exampleInputDegreeValue.length === 0) {
    setErrorAndClasses(exampleInputDegree, degreeError, "* It Cannot be Empty, Please Mention your Stream");
  } else if (exampleInputDegreeValue.length > 60) {
    setErrorAndClasses(exampleInputDegree, degreeError, "* It cannot be more than 60 words");
  } else if (exampleInputDegreeValue.length < 2) {
    setErrorAndClasses(exampleInputDegree, degreeError, "* Please Enter Valid Stream");
  } else {
    clearErrorAndClasses(exampleInputDegree, degreeError);
    exampleInputDegree.classList.add("is-valid");
  }

  // Validation for work experience
  if (workExperienceValue.length === 0) {
    setErrorAndClasses(workExperience, WorkError, "* Cannot be empty, Please mention your work Experience");
  } else if (workExperienceValue.length > 120) {
    setErrorAndClasses(workExperience, WorkError, "* Cannot be more than 500 words");
  } else if (workExperienceValue.length < 3) {
    setErrorAndClasses(workExperience, WorkError, "* Please enter valid Information");
  } else {
    clearErrorAndClasses(workExperience, WorkError);
    workExperience.classList.add("is-valid");
  }

  // Validation for college in Canada
  if (collegeSelectCanadaValue === "") {
    setErrorAndClasses(collegeSelectCanada, CanadaUniversityError, "* Please Select the Institute");
  } else {
    clearErrorAndClasses(collegeSelectCanada, CanadaUniversityError);
    collegeSelectCanada.classList.add("is-valid");
  }

  // Validation for program of study
  if (programStudyValue.length === 0) {
    setErrorAndClasses(programStudy, programError, "* Please Enter your Program of Study");
  } else if (programStudyValue.length > 50) {
    setErrorAndClasses(programStudy, programError, "* Please Enter Correct Program");
  } else if (programStudyValue.length < 3) {
    setErrorAndClasses(programStudy, programError, "* Please Enter Valid Program");
  } else {
    clearErrorAndClasses(programStudy, programError);
    programStudy.classList.add("is-valid");
  }

  // Validation for goal input
  if (GoalInputValue.length === 0) {
    setErrorAndClasses(GoalInput, goalError, "* Cannot be Empty");
  } else if (GoalInputValue.length < 3) {
    setErrorAndClasses(GoalInput, goalError, "* Please Enter Valid Information");
  } else if (GoalInputValue.length > 100) {
    setErrorAndClasses(GoalInput, goalError, "* Cannot be more than 100 words");
  } else {
    clearErrorAndClasses(GoalInput, goalError);
    GoalInput.classList.add("is-valid");
  }
  if (ListeningValue === "" || ListeningValue > 30) {
    setErrorAndClasses(Listening, ListeningError, "* Please Enter Valid Score");
  } else {
    clearErrorAndClasses(Listening, ListeningError);
    Listening.classList.add("is-valid");
  }

  // Validation for Reading score
  if (ReadingValue === "" || ReadingValue > 30) {
    setErrorAndClasses(Reading, ReadingError, "* Please Enter Valid Score");
  } else {
    clearErrorAndClasses(Reading, ReadingError);
    Reading.classList.add("is-valid");
  }

  // Validation for Writing score
  if (WritingValue === "" || WritingValue > 30) {
    setErrorAndClasses(Writing, WritingError, "* Please Enter Valid Score");
  } else {
    clearErrorAndClasses(Writing, WritingError);
    Writing.classList.add("is-valid");
  }
  if (SpeakingValue === "" || SpeakingValue > 30) {
    setErrorAndClasses(Speaking, SpeakingError, "* Please enter valid score");
  } else {
    clearErrorAndClasses(Speaking, SpeakingError);
    Speaking.classList.add("is-valid");
  }

  // Validation for tuition paid
  if (!tuitionPaidYes.checked && !tuitionPaidNo.checked) {
    setErrorAndClasses(tuitionPaidYes, tuitionPaidError, "* Please select whether you paid your first-year tuition.");
  } else {
    clearErrorAndClasses(tuitionPaidYes, tuitionPaidError);
  }

  // Validation for tuition amount
  if (AmountValue === "" && tuitionPaidYes.checked) {
    setErrorAndClasses(Amount, AmountError, "* Please Enter the Amount paid");
  } else if (AmountValue > 20000 && tuitionPaidYes.checked) {
    setErrorAndClasses(Amount, AmountError, "* Amount Cannot be more than 50,000 CA$");
  } else {
    clearErrorAndClasses(Amount, AmountError);
  }

  // Validation for GIC
  if (!YesGic.checked && !NoGic.checked) {
    setErrorAndClasses(YesGic, GicError, "* Please select whether you paid your GIC.");
  } else {
    clearErrorAndClasses(YesGic, GicError);
  }

  // Validation for GIC amount
  if (GicAmountValue === "" && YesGic.checked) {
    setErrorAndClasses(GicAmount, GicAmountError, "* Please Enter the Amount Paid");
  } else if (GicAmountValue > 15000 && YesGic.checked) {
    setErrorAndClasses(GicAmount, GicAmountError, "* GIC Amount cannot be more than 15,000 CA$");
  } else {
    clearErrorAndClasses(GicAmount, GicAmountError);

  }

  // Validation for terms checkbox
  if (!termsCheckbox.checked) {
    setErrorAndClasses(termsCheckbox, termsCheckboxError, "* Please agree to the terms and conditions.");
  } else {
    clearErrorAndClasses(termsCheckbox, termsCheckboxError);
    termsCheckbox.classList.add("is-valid");
  }

  return (
    !firstNameInput.classList.contains("is-invalid") &&
    !lastNameInput.classList.contains("is-invalid") &&
    !emailInput.classList.contains("is-invalid") &&
    !dobInput.classList.contains("is-invalid") &&
    !educationSelect.classList.contains("is-invalid") &&
    !countrySelect.classList.contains("is-invalid") &&
    !universitySelect.classList.contains("is-invalid") &&
    !exampleInputDegree.classList.contains("is-invalid") &&
    !workExperience.classList.contains("is-invalid") &&
    !collegeSelectCanada.classList.contains("is-invalid") &&
    !programStudy.classList.contains("is-invalid") &&
    !GoalInput.classList.contains("is-invalid") &&
    !Listening.classList.contains("is-invalid") &&
    !Reading.classList.contains("is-invalid") &&
    !Writing.classList.contains("is-invalid") &&
    !Speaking.classList.contains("is-invalid") &&
    !tuitionPaidYes.classList.contains("is-invalid") &&
    !Amount.classList.contains("is-invalid") &&
    !YesGic.classList.contains("is-invalid") &&
    !GicAmount.classList.contains("is-invalid") &&
    termsCheckbox.checked
  );
}

