var playlist = {
  artistName: "Van Morrison",
  songTitle: "Moondance"
};
var updatePlaylist
function updatePlaylist(list,a,b){
  list.artistName = [a,...list.artistName];
  list.songTitle = [b,...list.songTitle]
  list
}