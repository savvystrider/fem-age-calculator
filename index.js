const submitBtn = document.getElementById("submit-btn");

const dayInput =  document.getElementById("day");
const dayDisplay = document.getElementById("day-display");

const monthInput = document.getElementById("month");
const monthDisplay = document.getElementById("month-display");

const yearInput = document.getElementById("year");
const yearDisplay = document.getElementById("year-display");

let currentDate = new Date();

submitBtn.addEventListener("click", function(e) {
    if (dayInput.value === "" || monthInput.value === "" || yearInput.value === "") {
        alert("Please fill in all fields.");
    } else if (dayInput.value >= 32) {
        document.querySelector(".day-error-message").textContent = "Must be a valid day.";
        document.getElementById("day-label").style.color = "red";
    } else if (monthInput.value >= 13) {
        document.querySelector(".month-error-message").textContent = "Must be a valid month.";
        document.getElementById("month-label").style.color = "red";
    } else if (yearInput.value <= 1900 || yearInput.value > 2023) {
        document.querySelector(".year-error-message").textContent = "Must be a valid year.";
        document.getElementById("year-label").style.color = "red";
    } else {
        e.preventDefault();
        document.querySelectorAll(".error-message").forEach((message) => {
            message.innerHTML = "";
        })
        document.getElementById("day-label").style.color = "#716F6F";
        document.getElementById("month-label").style.color = "#716F6F";
        document.getElementById("year-label").style.color = "#716F6F";
    const inputDay = Number(dayInput.value);
    const inputMonth = Number(monthInput.value);
    const inputYear = Number(yearInput.value);

    let ageDay = currentDate.getDate() - inputDay;
    let ageMonth = currentDate.getMonth() - inputMonth;
    let ageYear = currentDate.getFullYear() - inputYear;

    if (currentDate.getMonth() + 1 < inputMonth || (currentDate.getMonth() + 1 === inputMonth && currentDate.getDate() < inputDay)) {
        ageYear--;
        ageMonth = 12 + ageMonth;
    }

    if (currentDate.getDate() < inputDay) {
        ageMonth--;
        ageDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate() + ageDay;
    }

    dayDisplay.textContent = ageDay;
    monthDisplay.textContent = ageMonth;
    yearDisplay.textContent = ageYear;
    }
    
});

// dayInput.addEventListener("input", function(e) {
//     if (e.target.value >= 32) {
//         document.querySelector(".day-error-message").textContent = "Must be a valid day.";
//     }
// })

// monthInput.addEventListener("input", function(e) {
//     if (e.target.value >= 13) {
//         document.querySelector(".month-error-message").textContent = "Must be a valid month.";
//     }
// })

// yearInput.addEventListener("input", function(e) {
//     if (e.target.value <= 1900 || e.target.value > 2023) {
//         document.querySelector(".year-error-message").textContent = "Must be a valid year.";
//     }
// })
