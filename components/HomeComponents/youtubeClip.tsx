import YouTube, {YouTubeProps} from "react-youtube";

export function YoutubeClip({videoId, playOnReady = false}: { videoId: string, playOnReady?: boolean }) {


    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        // event.target.pauseVideo();
        event.target.setVolume(7)
        if(!playOnReady) return;
        event.target.playVideo();
    }
    const opts: YouTubeProps['opts'] = {
        height: '400',
        width: '300',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };
    return <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady}/>;
}