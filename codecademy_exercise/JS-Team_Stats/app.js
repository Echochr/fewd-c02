const team = {
    _players: [
      {
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 18
      },
      {
        firstName: 'Romelu',
        lastName: 'Lukaku',
        age: 28
      },
      {
        firstName: 'Eden',
        lastName: 'Hazard',
        age: 29
      }
    ],
    _games: [
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
      },
      {
        opponent: 'Rangers',
        teamPoints: 40,
        opponentPoints: 32
      },
      {
        opponent: 'Yankees',
        teamPoints: 36,
        opponentPoints: 41
      }
    ],
    get players() {},
    get games() {},
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      }
      this._players.push(player)
    },
    addGame(opponentName, teamPoints, opponentPoints) {
      let game = {
        opponentName: opponentName,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      }
      this._games.push(game)
    }
  }
  
  team.addPlayer('Steph', 'Curry', 28)
  team.addPlayer('Lisa', 'Leslie', 44)
  team.addPlayer('Bugs', 'Bunny', 76)
  // console.log(team._players)
  
  team.addGame('Liverpool', 36, 30)
  team.addGame('City', 42, 42)
  team.addGame('Leeds', 46, 34)
  console.log(team._games)