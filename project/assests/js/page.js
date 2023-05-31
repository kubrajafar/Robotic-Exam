const formSubmit = document.querySelector(".formSubmit");
const Img = document.querySelector("#Img");
const Name = document.querySelector("#Name");
const About = document.querySelector("#About");
const Job = document.querySelector("#Job");
const Experience = document.querySelector("#Experience");

formSubmit.addEventListener("submit", () => {
  const obj = {
    robotImg: Img.value,
    robotName: Name.value,
    robotText: About.value,
    job: Job.value,
    experience: Experience.value,
  };
  fetch("http://localhost:3000/datas", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res())
    .then((data) => {
      console.log(data);
    });
});
