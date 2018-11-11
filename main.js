

main = () => {
    if (!document.pictureInPictureEnabled) {
        alert('Please enable Picture in Picture in your browser, if supported')
        return
    }
    if (document.pictureInPictureElement) {
       document.exitPictureInPicture().catch(console.error);
       return
    }

    let videos = document.getElementsByTagName("video")

    if (videos.length > 0) {
        for (let video in videos) {
            if (videos.hasOwnProperty(video) && !videos[video].disablePictureInPicture) {
                videos[video].requestPictureInPicture().catch(console.error)
                return
            }
        }
    }
}

main()
