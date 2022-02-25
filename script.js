let details = document.querySelectorAll('details');
details.forEach((detail) => {
  detail.addEventListener('toggle', function (e) {
    let article = document.querySelector(${e.torget.id});
    article.style.display = "none";
  });
});