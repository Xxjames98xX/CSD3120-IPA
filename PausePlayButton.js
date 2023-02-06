AFRAME.registerComponent('play-pause', {
    init:function(){
        var video = document.querySelector('#my-video');
        var button  = document.querySelector('#box');
        this.el.addEventListener('click', function()
        {
            if (video.paused)
            {
                video.play();
                button.setAttribute('src', '#pause');
            } else
            {
                video.pause();
                button.setAttribute('src', '#play');
            }
        });

    }
})