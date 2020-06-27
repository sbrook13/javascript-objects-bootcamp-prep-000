var playlist = {
  artistName: "Van Morrison",
  songTitle: "Moondance"
};
function updatePlaylist(playlist,artistName,songTitle){
  return Object.assign({},playlist,{artistName:['Justin Timberlake',...artistName]},{songTitle:['Cant Stop The Feeling',...songTitle]})
}