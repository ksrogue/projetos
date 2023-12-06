function generatePreview() {
    const musicName = document.querySelector("#music-name");
    const musicNamePreview = document.querySelector(".music-name-preview");

    musicNamePreview.innerHTML = musicName.value;

    const bandName = document.querySelector("#band-name");
    const bandNamePreview = document.querySelector(".band-name-preview");

    bandNamePreview.innerHTML = bandName.value;

    const lyricsArea = document.querySelector(".lyrics-area");
    const lyricPreview = document.querySelector(".lyrics-preview");

    lyricPreview.innerHTML = `"${lyricsArea.value}"`;

    const backgroundColor = document.querySelector("#background");
    const previewBackground = document.querySelector(".lyrics-creator-preview")
    previewBackground.style.backgroundColor = backgroundColor.value;

    const letterColor = document.querySelector("#letter");
    previewBackground.style.color = letterColor.value;

    document.querySelector(".lyrics-creator-content").style.display = "none";
    previewBackground.style.display = "flex";

}