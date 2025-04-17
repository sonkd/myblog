---
layout: default
title: 🧪 Experiments
permalink: /experiments/
isMainPage:
order:
---

<section class="container max-w-full flex justify-center p-4">
  <div class="w-80">
  <h1 id="animated-title" class="transition-all duration-700 ease-in-out">
      <span class="letter">E</span><span class="letter">x</span><span class="letter">p</span><span class="letter">e</span><span class="letter">r</span><span class="letter">i</span><span class="letter">m</span><span class="letter">e</span><span class="letter">n</span><span class="letter">t</span><span class="letter">s</span>
  </h1>
  </div>
</section>

<section class="container flex justify-center max-w-full p-4">
  <div class="w-full grid-wall--all-screen gap-4">
    <a href="{{ site.author.play }}"><img src="{{site.baseurl}}/assets/img/rick_man.webp" alt="Play Zone | Simple.Stupid.Fun"></a>
    {% include experiments.html %}
  </div>
</section>

<script>
  const title = document.getElementById("animated-title");
  const letters = Array.from(title.querySelectorAll(".letter"));

  // Setup vị trí ban đầu
  function scatterLetters() {
    title.classList.remove("assemble");
    letters.forEach(letter => {
      const x = Math.random() * 500 - 250; // bay ngang +/-250px
      const y = Math.random() * 200 - 100; // bay dọc +/-100px
      const r = Math.random() * 720 - 360; // xoay
      letter.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg)`;
    });
  }

  // Xếp lại chữ vào đúng vị trí
  function assembleLetters() {
    title.classList.add("assemble");
    letters.forEach(letter => {
      letter.style.transform = `translate(0, 0) rotate(0deg)`;
    });
  }

  // Bố trí các span chữ ban đầu
  function setInitialPosition() {
  let currentX = 0;
  letters.forEach(letter => {
    letter.style.position = "absolute"; // Đảm bảo từng chữ được định vị
    letter.style.left = `${currentX}px`;
    letter.style.top = `40px`;
    // Tính độ rộng thực tế và cộng dồn
    const letterWidth = letter.getBoundingClientRect().width;
    currentX += letterWidth + 4; // thêm khoảng cách nhỏ giữa các chữ (4px)
  });

  title.classList.add("ready");
}

  // Lặp lại hiệu ứng
  function runAnimationLoop() {
    scatterLetters();
    setTimeout(() => {
      assembleLetters();
    }, 2000);
  }

  // Khởi tạo
  setInitialPosition();
  runAnimationLoop();
  setInterval(runAnimationLoop, 6000);
</script>
