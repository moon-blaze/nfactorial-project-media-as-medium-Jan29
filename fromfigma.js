const content = document.querySelector('#content');

// let dataArray;
// fetch('./data.json')
//   .then(response => response.json())
//   .then(data => {
//     dataArray = data;
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

// console.log(dataArray);


const data = [
  {
    avatar: "./imagesfromfigma/ava.png",
    authorName: "Aruzhan",
    topicsName: "Frontend Development",
    date: "23 Jan",
    header: "7 Practical CSS Tips",
    content: "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.",
    language: "Java Script",
    duration: "12 min read",
    intended: "Selected for you",
    img: "./imagesfromfigma/content1.png", 
  },
  {
    avatar: "./imagesfromfigma/ava.png",
    authorName: "Dalida",
    topicsName: "Frontend Development",
    date: "23 Jan",
    header: "7 Practical CSS Tips",
    content: `Recently, I've been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced.
    You'll find links to the full scripts and tutorials to solve each project. Also, I'm leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here's how the template we'll use looks...`,
    language: "Java Script",
    duration: "12 min read",
    intended: "Selected for you",
    img: "./imagesfromfigma/content2.png", 
  },
  {
    avatar: "./imagesfromfigma/ava.png",
    authorName: "Ulzhan",
    topicsName: "Frontend Development",
    date: "23 Jan",
    header: "7 Practical CSS Tips",
    content: `Recently, I've been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced.
    You'll find links to the full scripts and tutorials to solve each project. Also, I'm leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here's how the template we'll use looks...`,
    language: "Java Script",
    duration: "12 min read",
    intended: "Selected for you",
    img: "./imagesfromfigma/content3.png", 
  },
]

for (let key in data) {
  const element = document.createElement('div');
  element.className = "element"
  const elementContent = document.createElement('div');
  elementContent.className = "elementContent"
  const elementImg = document.createElement('div');
  
  const information = document.createElement('div');
  const text = document.createElement('div');
  text.className = "textContent";
  const additional = document.createElement('div');

  const img = document.createElement('img');
  img.src = `${data[key].img}`;
  img.className = "imgContent"
  elementImg.append(img);

  information.innerHTML = `<img src="${data[key].avatar}"/>
  <p class="content-header">${data[key].authorName} <span class="gray-text">in</span> ${data[key].topicsName}&nbsp; ·  &nbsp;<span class="gray-text">${data[key].date}</span></p>`;

  information.className = "information"
  text.innerHTML = `<h1 class="content-topic">${data[key].header}</h1>
  <p class="content-paragraph">${data[key].content}</p>`;

  additional.className = "content-footer";
  additional.innerHTML = `<div class="content-footer-left">
  <div class="language">${data[key].language}</div>
  <p><span class="gray-text">${data[key].duration}</span> &nbsp; · &nbsp; <span class="gray-text">${data[key].intended}</span></p>
</div>
<div class="squares">
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
</div>`
  elementContent.append(information)
  elementContent.append(text);
  elementContent.append(additional);

  element.append(elementContent);
  element.append(elementImg);
  content.append(element);
}