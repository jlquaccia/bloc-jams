//===========================================================================
// ALBUM OBJECTS
//===========================================================================

// Example album
var albumPicasso = {
    title: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [
        { title: 'Blue', duration: '4:26' },
        { title: 'Green', duration: '3:14' },
        { title: 'Red', duration: '5:01' },
        { title: 'Pink', duration: '3:21' },
        { title: 'Magenta', duration: '2:15' }
    ]
};

// Another example album
var albumMarconi = {
    title: 'The Telephone',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
        { title: 'Hello, Operator?', duration: '1:01' },
        { title: 'Ring, Ring, Ring', duration: '5:01' },
        { title: 'Fits in Your Pocket', duration: '3:21' },
        { title: 'Can You Hear Me Now?', duration: '3:14' },
        { title: 'Wrong Phone Number', duration: '2:15' }
    ]
};

// Album I picked
var albumM83 = {
    title: 'Saturdays = Youth',
    artist: 'M83',
    label: 'M83 Recording Inc',
    year: '2008',
    albumArtUrl: 'assets/images/album_covers/22.png',
    songs: [
        { title: 'You Appearing', duration: '3:39' },
        { title: 'Kim & Jessie', duration: '5:23' },
        { title: 'Skin of the Night', duration: '6:13' },
        { title: 'Graveyard Girl', duration: '4:54' },
        { title: 'Couleurs', duration: '8:37' },
        { title: 'Up!', duration: '4:28' },
        { title: 'We Own the Sky', duration: '5:05' },
        { title: 'Highway of Endless Dreams', duration: '4:35' },
        { title: 'Too Late', duration: '5:00' },
        { title: 'Dark Moves of Love', duration: '3:19' },
        { title: 'Midnight Souls Still Remain', duration: '11:08' }
    ]
};

var allAlbums = [albumPicasso, albumMarconi, albumM83];

//===========================================================================
// END ALBUM OBJECTS
//===========================================================================

var createSongRow = function(songNumber, songName, songLength) {
    var template =
        '<tr class="album-view-song-item">'
    +   '   <td class="song-item-number">' + songNumber + '</td>'
    +   '   <td class="song-item-title">' + songName + '</td>'
    +   '   <td class="song-item-duration">' + songLength + '</td>'
    +   '</tr>'
    ;
    
    return template;
};

var setCurrentAlbum = function(album) {
    var albumTitle = document.getElementsByClassName('album-view-title')[0];
    var albumArtist = document.getElementsByClassName('album-view-artist')[0];
    var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
    var albumImage = document.getElementsByClassName('album-cover-art')[0];
    var albumSongList = document.getElementsByClassName('album-view-song-list')[0];
    
    albumTitle.firstChild.nodeValue = album.title;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl);
    
    albumSongList.innerHTML = '';
    
    for (var i = 0; i < album.songs.length; i++) {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration)
    }
};

window.onload = function() {
    setCurrentAlbum(albumPicasso);
};

var albumCover = document.getElementsByClassName('album-cover-art')[0];
var index = 0;
albumCover.addEventListener('click', function() {
    setCurrentAlbum(allAlbums[index >= allAlbums.length - 1 ? index = 0 : ++index]);
}, false);