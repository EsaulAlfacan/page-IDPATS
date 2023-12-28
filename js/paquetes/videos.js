
        document.addEventListener('DOMContentLoaded', function() {
            const videos = document.querySelectorAll('.videos');

            videos.forEach(function(video) {
                video.muted = true; // Establece el video en modo silenciado
                video.play(); // Inicia la reproducción
            });
        });
