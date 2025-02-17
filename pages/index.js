function startCountdown(targetDate) {
    function updateCountdown() {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        document.getElementById("countdown-timer").textContent = "00:00:00:00";
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      document.getElementById("countdown-timer").textContent =
        `${days}天 ${hours}時 ${minutes}分 ${seconds}秒`;
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
  }

  const targetDate = new Date("2025-02-25T00:00:00");
  startCountdown(targetDate);