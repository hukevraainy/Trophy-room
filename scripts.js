document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("bg-music");
    const button = document.getElementById("play-btn");

    let isPlaying = false;

    button.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        button.innerHTML = "&#9654;";
    } 
    else {
        audio.play();
        button.innerHTML = "&#10073;&#10073;";
    }
    isPlaying = !isPlaying;
  });
});

const clickableImages = document.querySelectorAll('.clickable-image')
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');
const contentWrapper = document.getElementById('contentWrapper');
const content = document.getElementById('ExtraContent')
const heading = document.getElementById('ExtraHeading')




clickableImages.forEach((img) => {
    img.addEventListener('click', () => {
        modalOverlay.style.display = 'flex';
        contentWrapper.classList.add('blurred');
        document.body.style.overflow = 'hidden';
    });
});

document.getElementById('Thptqg').addEventListener('click', () => {
    content.innerHTML = `
        <p>Thủ khoa A01, damn…</p>
        <p>Tbh, this year’s problem set kinda benefited me a lot, especially Physics because, uhhhh, I only invested in theory and foundation rather than hard calculations and models. So yeah, getting a 10 here while not putting in as much effort kinda makes me feel guilty.</p>
        <p>I also cannot believe how I got 8.25 in literature, like wtf I wrote so many stupid shits in there and I always feel kinda awkward recalling the words I’ve written in that test</p>
        <p>Math cuz math major and English cuz I like it, ig</p>
    `;
})

document.getElementById('Alien').addEventListener('click', () => {
    content.innerHTML = `
        <p>hṍ🅦  dɨ𝒹 ​ū  f🅘𝓃ḋ  ḿḙ❓﹖? Ḹēǟ𝓋ě  𝕟ɔw  ₒṙ  ỳℴŭ𝔯  ᵇ@ₗˡș  ŵıľˡ  e×𝓅|òᵈ𝕖 ␣𝔦ⓝ  ③  ṣḙ©oṉｄṥ👹 😈 👹</p> 
    `;
})

document.getElementById('Zoink').addEventListener('click', () => {
    content.innerHTML = `
        <p>Im lặng nào cô bé hư đốn của anh 😏</p> 
    `;
})

document.getElementById('Cat').addEventListener('click', () => {
    content.innerHTML = `
        <p>I LOVEEEE CATTTTTSS SOOOOOO MUCHHHHHHHH 🤗 💕. ISTG I WOULD GET 3+ CATS WHEN I MOVE OUT</p> 
    `;
})

document.getElementById('Ielts').addEventListener('click', () => {
    content.innerHTML = `
        <p>Seeing a math major with this thing is kinda weird, but ngl, it’s my proudest achievement by far</p>
        <p>I’ve always attributed natural language proficiency to daily exposure and immersion, and I feel like games and Youtube have helped me a lot on this. I don’t think that anyone should be forced to learn language by going through thousands of classes, as they gotta understand that English is merely a tool, not a responsibility.</p>
        <p>As for why I’m so proud of this, why not? It’s a testament to my language acquisition and how I can use it in daily situations.</p>
         
    `;
})

document.getElementById('Bread').addEventListener('click', () => {
    content.innerHTML = `
        <p>🔥🥖 Bánh mì ram ram quái vật bánh mì trỗi dậy hãy đầu hàng hoặc bị phét bơ dân chúng la hét một ông chú run rẩy đưa tươi ớt quái vật nếm thử hó kheeeeeeeeee a cay quáaaaaaaaa lăn lộn rớt vào nồi phở thế là sáng nay có bánh mì chấm phở</p>
         
    `;
})

document.getElementById('Olympic').addEventListener('click', () => {
    content.innerHTML = `
        <p>Oh wow a bronze medal, I actually expected myself to get a silver or even a gold, guess the past couldn’t be changed anyway. Still really appreciate the trip and the experience of going there and actually joining a “big” competition with students from across the South. I was able to have a lot of fun with many amazing people.</p>
        <p>Ngl but If I could go back in time, I would actually join the math team again in 11th grade. I just feel like the team was really improved in 11th grade with wonderful and friendly people, unlike the old team which I was so disappointed with back then.</p>

         
    `;
})

// Close modal (removes blur)
function closeModalFunction() {
    modalOverlay.style.display = 'none';
    contentWrapper.classList.remove('blurred');
    document.body.style.overflow = 'auto';
}

closeModal.addEventListener('click', closeModalFunction);
modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) closeModalFunction();
});
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalOverlay.style.display === 'flex') {
        closeModalFunction();
    }
});