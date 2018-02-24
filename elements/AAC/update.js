function(instance, properties, context) {

    var preload = properties.preload.toLowerCase();
    var options = {
        controls: properties.controls,
        autoplay: properties.autoplay,
        loop: properties.loop,
        preload: preload,
        muted: properties.muted,
        fluid: properties.fluid
    }

    instance.data.options = options;
    instance.data.skin = properties.skin_file;

    $(document).ready(function() {



        var vjsPlayer = instance.data.vjsPlayer;
        vjsPlayer.src(properties.video);
        vjsPlayer.poster(properties.poster);




    });

}