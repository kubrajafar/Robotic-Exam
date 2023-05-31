const robotics_cards = document.querySelector(".robotics_cards");
const robotics_input = document.querySelector(".robotics-input");

const show = document.querySelector(".show");
const web = document.querySelector(".web");
const front = document.querySelector(".web");
const ux = document.querySelector(".web");
const back = document.querySelector(".web");

fetch("http://localhost:3000/datas")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      cardData(element);
    });

    console.log(data);
    show.onclick = () => {
      data.forEach((element) => {
        element.style.display = "block";
      });
    };

    web.onclick = () => {
      data.forEach((element) => {
        console.log(element.job);

        if (element.job == "web") {
          element.style.display = "block";
        }
      });
    };
  });

function cardData(data) {
  const robotics_card = document.createElement("div");
  const card_img = document.createElement("img");
  const card_contentBox = document.createElement("div");
  const card_header = document.createElement("h4");
  const card_text = document.createElement("p");
  const cardBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  const load = document.createElement("div");
  const card_job = document.createElement("p");
  const card_experience = document.createElement("p");
  const horizontal = document.createElement("hr");

  card_img.setAttribute("src", data.robotImg);
 
  card_header.innerText = data.robotName;
  card_text.innerText = data.robotText;
  cardBtn.innerText = "VIEW DETAILS";
  deleteBtn.innerText = "Delete";
  card_job.innerText = data.job;
  card_experience.innerText = data.experience;

  robotics_cards.classList.add("robotics_cards");
  robotics_card.classList.add("robotics_card");
  card_img.classList.add("card_img");
  card_contentBox.classList.add("card_contentBox");
  card_header.classList.add("card_header");
  card_text.classList.add("card_text");
  cardBtn.classList.add("cardBtn");
  deleteBtn.classList.add("deleteBtn");
  load.classList.add("load");
  card_contentBox.append(card_header, card_text, deleteBtn, cardBtn);
  robotics_card.append(card_img, card_contentBox);
  robotics_cards.append(robotics_card);

  deleteBtn.onclick = () => {
    deleteBtn.parentElement.parentElement.remove();
    fetch("http://localhost:3000/datas" + data.id, { method: "Delete" })
      .then((res) => res.json)
      .then(
        fetch("http://localhost:3000/datas", { method: "Get" })
          .then((res) => res.json)
          .then(cardData())
      );
  };

  cardBtn.onclick = () => {
    if (load.innerHTML == "") {
      load.append(horizontal, card_job, card_experience);
      card_contentBox.append(load);
    } else {
      load.innerHTML = "";
    }
  };
}

robotics_input.addEventListener("keyup", () => {
  const cards = document.querySelectorAll(".robotics_card");
  cards.forEach((element) => {
    console.log(element);
    console.log();
    if (
      element.children[1].children[0].innerText
        .toLowerCase()
        .includes(robotics_input.value.toLowerCase())
    ) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
