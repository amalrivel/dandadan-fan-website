// PV Manga Loader
var mangaPV = [
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/v7XFmPo4NcU?si=hPcMxfwKnITFKTCg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/s9PWWrGSvCU?si=uE-td92_trooaEgC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/bjgcIasgsG4?si=KYM1EfI6oOt1vn3h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/k3Dm_i2mg7k?si=bOLnipeWqxdKIzUZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/o7elg8j0UKg?si=iw763uvyi7-Vlkl_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
];

var mangaPVContainer = document.querySelector(".manga-pv");

mangaPV.forEach(function (video) {
  mangaPVContainer.insertAdjacentHTML("beforeend", video);
});

// PV Anime Loader
var animePV = [
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/X_SnV_SdO4k?si=eBfHqxOMFVGwQ7lr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/btSzHO6zyFc?si=-_oWUJ-9_5iqxcnb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/eEYpIHZ3kXE?si=SZUbrDFNlK69G8SY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/0LI_sR-2NkY?si=c1gSVhHcfn6PtdO5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/rJo1MnsuxyY?si=wpzkPwpUZR5ic2oq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
];

var animePVContainer = document.querySelector(".anime-pv");

animePV.forEach(function (video) {
  animePVContainer.insertAdjacentHTML("beforeend", video);
});

// Dark Mode
const themeToggle = document.createElement('button');
themeToggle.classList.add('theme-toggle');
themeToggle.innerHTML = '🌙';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', function() {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        this.innerHTML = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        this.innerHTML = '☀️';
    }
});