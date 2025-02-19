// timer
function startCountdown(targetDate, elementId) {
  function updateCountdown() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      document.getElementById(elementId).textContent = "00天 00時 00分 00秒";
      clearInterval(interval);
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById(elementId).textContent = `${days}天 ${hours}時 ${minutes}分 ${seconds}秒`;
  }

  updateCountdown();
  const interval = setInterval(updateCountdown, 1000);
}

const gsatExamDate = new Date("2025-02-25T00:00:00+08:00"); // 學測放榜日期
const starExamDate = new Date("2025-03-11T00:00:00+08:00"); // 繁星報名日期

startCountdown(gsatExamDate, "gsat-countdown-timer");
startCountdown(starExamDate, "star-countdown-timer");



// backTopBtn
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
