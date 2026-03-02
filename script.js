const stars = document.querySelectorAll(".star");
const ratingText = document.getElementById("rating-text");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");

let selectedRating = 0;

const ratingMessages = {
    1: "😞 Very Poor",
    2: "😐 Poor",
    3: "🙂 Average",
    4: "😊 Good",
    5: "🤩 Excellent"
};

stars.forEach(star => {

    star.addEventListener("mouseover", function () {
        const value = this.getAttribute("data-value");
        highlightStars(value);
    });

    star.addEventListener("mouseout", function () {
        highlightStars(selectedRating);
    });

    star.addEventListener("click", function () {
        selectedRating = this.getAttribute("data-value");
        ratingText.textContent = ratingMessages[selectedRating];
    });

});

function highlightStars(rating) {
    stars.forEach(star => {
        if (star.getAttribute("data-value") <= rating) {
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }
    });
}

submitBtn.addEventListener("click", function () {
    const feedback = document.getElementById("feedback").value;

    if (selectedRating == 0) {
        alert("Please select a rating first!");
        return;
    }

    result.innerHTML = `
        Thank you! <br>
        You rated us: ${ratingMessages[selectedRating]} <br>
        Your feedback: "${feedback}"
    `;

    // Reset
    selectedRating = 0;
    highlightStars(0);
    ratingText.textContent = "Select a rating";
    document.getElementById("feedback").value = "";
});