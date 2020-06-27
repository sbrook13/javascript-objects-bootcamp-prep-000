var playlist = {
  artistName: "Van Morrison",
  songTitle: "Moondance"
};
function updatePlaylist(list,a,b){
  return Object.assign({},playlist,{artistName:[a,...artistName]},{songTitle:[b,...songTitle]})
}