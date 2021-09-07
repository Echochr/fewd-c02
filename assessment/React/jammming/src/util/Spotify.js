let accessToken
const clientID = '3848d148b05e43198f30ceb4de7617d6'
const redirectURI = 'http://localhost:3000'
const SpotifyAPI = 'https://api.spotify.com'

const Spotify = {
    getAccessToken() {
        if (accessToken) return accessToken

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)

        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1]
            const expiresIn = Number(expiresInMatch[1])

            window.setTimeout(() => accessToken = '', expiresIn * 1000)
            window.history.pushState('Access Token', null, '/')
            return accessToken
        } else {
            const url = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
            window.location = url
        }
    },

    async search(term) {
        const url = `${SpotifyAPI}/v1/search?type=track&q=${term}`
        const token = Spotify.getAccessToken()
        const headers = {Authorization: `Bearer ${token}`}
        const res = await fetch(url, {headers})
        const data = await res.json()

        if (!data.tracks) return []
        else { 
            return(
                data.tracks.items.map((track, index) => ({
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri,
                    key: index
                }))
            )
        }
    },

    async savePlayList(name, trackURIs) {
        if (!name || !trackURIs.length) return

        const accessToken = Spotify.getAccessToken()
        const headers = { Authorization: `Bearer ${accessToken}`}
        
        const userUrl = `${SpotifyAPI}/v1/me`
        const userRes = await fetch(userUrl, {headers})
        const userData = await userRes.json()
        const userID = userData.id
        // console.log(userID)

        const createPlaylistUrl = `${SpotifyAPI}/v1/users/${userID}/playlists`
        const createPlaylistRes = await fetch(createPlaylistUrl, {
            method: 'POST',
            headers,
            body: JSON.stringify({name})
        })
        const createPlaylistData = await createPlaylistRes.json()
        const createPlaylistID = createPlaylistData.id
        // console.log(createPlaylistID)

        const savePlaylistUrl = `${SpotifyAPI}/v1/users/${userID}/playlists/${createPlaylistID}/tracks`
        await fetch(savePlaylistUrl, {
            method: 'POST',
            headers,
            body: JSON.stringify({uris: trackURIs})
        })
    }
}

export default Spotify