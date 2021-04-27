const btn = document.getElementById('button')
const img = document.getElementById('image')

btn.addEventListener('click', () => {
  console.log('u clicked me');
})

const links = document.getElementById("link");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}