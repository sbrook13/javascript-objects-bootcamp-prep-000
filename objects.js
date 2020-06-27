var playlist = {
  artistName: "Van Morrison",
  songTitle: "Moondance"
};
function updatePlaylist(list,a,b){
  return Object.assign({},list,{artistName:[a,...artistName]},{songTitle:[b,...songTitle]})
}