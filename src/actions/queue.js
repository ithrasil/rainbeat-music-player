// Axios
import axios from 'axios';
import { getSCUrl } from 'Helpers';

// Actions
import { changeCard } from 'Actions/card.js';

export const updateQueue = (array) => {
  return {
    type: "UPDATE_QUEUE",
    payload: array
  }
};

export const deleteTrack = (array) => {
	return {
    type: "DELETE_TRACK",
    payload: array
  }
}

export const getPlaylistTracks = (id, title) => {
	return dispatch => {
		axios.get(getSCUrl(`playlists/${id}/tracks`, ""))
			.then((promise) => {
				return promise.data
			})
			.then((data) => {
				if(data.length == 0) {
					return;
				}
			
				dispatch(changeCard(0))
				dispatch(updateQueue({ list: data, title: title }))
			})
	}
}