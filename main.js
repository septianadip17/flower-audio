onload = () => {
        document.body.classList.remove("container");
};

function keepAudioPlaying() {
      var audio = document.getElementById("myAudio");
      var flowerLink = document.getElementById("flowerLink");

      // Stop default link behavior
      flowerLink.addEventListener("click", function (e) {
        e.preventDefault();
        // Simulate page change
        navigateTo("flower.html");
      });

      // Check if audio is already playing
      if (audio.paused) {
        audio.play();
      }
    }

    // Function to simulate page change
    function navigateTo(url) {
      // You can customize this to fit your needs
      window.location.href = url;
    }