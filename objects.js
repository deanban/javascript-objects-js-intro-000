var playlist = {'Billy Joel': "Vienna"};

function updatePlaylist(playlist, artistName, songTitle){
	playlist[artistName] = songTitle;
	return playlist;
}

function removeFromPlaylist(playlist, artistName){
	delete playlist[artistName];
	return playlist;
}

//cmon you damn git!!