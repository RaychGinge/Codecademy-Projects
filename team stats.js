const team = {
    _players: [
      {
        firstName: 'James',
        lastName: 'Billings',
        age: 14
      },
      {
        firstName: 'Fred',
        lastName: 'Dickinson',
        age: 15
      },
      {
        firstName: 'Dave',
        lastName: 'Smith',
        age: 15
      }
    ],
    _games: [
      {
        opponent: 'Stoke City',
        teamPoints: 25,
        opponentPoints: 22
      },
      {
        opponent: 'Manchester City',
        teamPoints: 24,
        opponentPoints: 23
      },
      {
        opponent: 'Leicester City',
        teamPoints: 23,
        opponentPoints: 24
      },
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this.players.push(player);
    },
    addGame(opp, myPts, oppPts) {
      const game = {
        opponent: opp,
        teamPoints: myPts,
        opponentPoints: oppPts
      };
      this.games.push(game);
    }
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  team.addGame('Optic Gaming', 76, 84);
  team.addGame('Hastings United', 55, 21);
  team.addGame('Brighton and Hove', 14, 3);
  
  console.log(team._players);
  console.log(team._games);
  
  
  
  