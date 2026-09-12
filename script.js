/* ================================
   MOBILE MENU
================================ */

function toggleMenu() {

    const navigation = document.querySelector(".navigation");

    navigation.classList.toggle("active");

}


/* ================================
   CULTURE TOPICS
================================ */

function showTopic(topic) {

    const modal = document.getElementById("topic-modal");

    const title = document.getElementById("modal-title");

    const text = document.getElementById("modal-text");


    const topics = {

        "Traditions":
            "Kazakh traditions include many ceremonies and customs such as Tusau Kesu, Besik Toi, Shashu and Bata. These traditions reflect family values, respect and community relationships.",

        "National Cuisine":
            "Kazakh cuisine is closely connected with the nomadic lifestyle. Traditional foods include Beshbarmak, Baursak, Kazy, Kumys and Shubat.",

        "Music":
            "Music has an important place in Kazakh culture. The Dombra is one of the most recognizable traditional instruments, while Kuy is a traditional instrumental musical form.",

        "Traditional Clothing":
            "Traditional Kazakh clothing includes garments decorated with ornaments and embroidery. Clothing often reflected age, social status and cultural identity.",

        "Hospitality":
            "Hospitality is one of the important values of Kazakh culture. Guests are traditionally welcomed with food, tea and warm conversation.",

        "Holidays":
            "Kazakh celebrations include Nauryz and many family and community events. These celebrations bring people together and preserve cultural traditions."

    };


    title.textContent = topic;

    text.textContent = topics[topic] ||
        "Information about this cultural topic will be added soon.";

    modal.classList.add("active");

}


/* ================================
   CLOSE MODAL
================================ */

function closeModal() {

    const modal = document.getElementById("topic-modal");

    modal.classList.remove("active");

}


/* Close modal when clicking outside */

window.addEventListener("click", function(event) {

    const modal = document.getElementById("topic-modal");

    if (event.target === modal) {

        modal.classList.remove("active");

    }

});


/* ================================
   QUIZ
================================ */

function checkAnswer(isCorrect) {

    const result = document.getElementById("quiz-result");

    if (isCorrect) {

        result.textContent =
            "✓ Correct! The Dombra is a traditional Kazakh musical instrument.";

        result.style.color = "#2e8b57";

    } else {

        result.textContent =
            "✗ Not quite. Try again!";

        result.style.color = "#c0392b";

    }

}


/* ================================
   CLOSE MOBILE MENU AFTER CLICK
================================ */

const navigationLinks =
    document.querySelectorAll(".navigation a");

navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const navigation =
            document.querySelector(".navigation");

        navigation.classList.remove("active");

    });

});
