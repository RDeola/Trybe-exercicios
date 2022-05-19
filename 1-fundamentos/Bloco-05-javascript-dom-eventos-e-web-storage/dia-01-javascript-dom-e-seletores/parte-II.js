document.getElementById("page-title").innerText = 'Alterado';
const secParagraph = document.getElementById("second-paragraph");
  secParagraph.style.backgroundColor = 'blue';

const subTitle = document.getElementById("subtitle");
  subTitle.style.backgroundColor = 'green';
  subTitle.style.textAlign = 'center';

const classParagraph = document.getElementsByClassName("par");
  classParagraph[1].style.color = 'pink';

const tagParagraph = document.getElementsByTagName("p");
  for (i = 0; i < tagParagraph.length; i += 1) {
    tagParagraph[i].innerText = `${i + 1}  - ${tagParagraph[i].innerText}`;
  }

const elemento = document.querySelectorAll("p");
console.log(elemento);//console será executado no console do navegador
