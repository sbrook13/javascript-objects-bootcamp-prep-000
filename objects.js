var playlist = {
  artistName: "Van Morrison",
  songTitle: "Moondance"
};
function updatePlaylist(targetObject,updatesObject){
  return Object.assign({},playlist,{artistName:['Justin Timberlake',...artistName]},{songTitle:['Cant Stop The Feeling',...songTitle]})
}