export interface Team {
  name: string
  logo: string
  league: string
  primaryColor: string
  secondaryColor: string
}

export const leagues = {
  premierLeague: {
    name: 'Premier League',
    logo: 'https://media.api-sports.io/football/leagues/39.png',
    teams: [
      { name: 'Arsenal', logo: 'https://media.api-sports.io/football/teams/42.png', primaryColor: '#EF0107', secondaryColor: '#FFFFFF' },
      { name: 'Aston Villa', logo: 'https://media.api-sports.io/football/teams/66.png', primaryColor: '#670E36', secondaryColor: '#95BFE5' },
      { name: 'Chelsea', logo: 'https://media.api-sports.io/football/teams/49.png', primaryColor: '#034694', secondaryColor: '#DBA111' },
      { name: 'Liverpool', logo: 'https://media.api-sports.io/football/teams/40.png', primaryColor: '#C8102E', secondaryColor: '#00B2A9' },
      { name: 'Manchester City', logo: 'https://media.api-sports.io/football/teams/50.png', primaryColor: '#6CABDD', secondaryColor: '#1C2C5B' },
      { name: 'Manchester United', logo: 'https://media.api-sports.io/football/teams/33.png', primaryColor: '#DA291C', secondaryColor: '#FBE122' },
      { name: 'Newcastle United', logo: 'https://media.api-sports.io/football/teams/34.png', primaryColor: '#241F20', secondaryColor: '#FFFFFF' },
      { name: 'Tottenham Hotspur', logo: 'https://media.api-sports.io/football/teams/47.png', primaryColor: '#132257', secondaryColor: '#FFFFFF' },
    ]
  },
  laLiga: {
    name: 'La Liga',
    logo: 'https://media.api-sports.io/football/leagues/140.png',
    teams: [
      { name: 'Atletico Madrid', logo: 'https://media.api-sports.io/football/teams/530.png', primaryColor: '#CE3524', secondaryColor: '#FFFFFF' },
      { name: 'Celta Vigo', logo: 'https://media.api-sports.io/football/teams/538.png', primaryColor: '#8AC3EE', secondaryColor: '#FFFFFF' },
      { name: 'FC Barcelona', logo: 'https://media.api-sports.io/football/teams/529.png', primaryColor: '#A50044', secondaryColor: '#004D98' },
      { name: 'Real Betis', logo: 'https://media.api-sports.io/football/teams/543.png', primaryColor: '#00954C', secondaryColor: '#FFFFFF' },
      { name: 'Real Madrid', logo: 'https://media.api-sports.io/football/teams/541.png', primaryColor: '#FEBE10', secondaryColor: '#00529F' },
      { name: 'Sevilla', logo: 'https://media.api-sports.io/football/teams/536.png', primaryColor: '#D9001C', secondaryColor: '#FFFFFF' },
      { name: 'Valencia', logo: 'https://media.api-sports.io/football/teams/532.png', primaryColor: '#EE3524', secondaryColor: '#000000' },
      { name: 'Villarreal CF', logo: 'https://media.api-sports.io/football/teams/533.png', primaryColor: '#FFE114', secondaryColor: '#005DAA' },
    ]
  },
  serieA: {
    name: 'Serie A',
    logo: 'https://media.api-sports.io/football/leagues/135.png',
    teams: [
      { name: 'AC Milan', logo: 'https://media.api-sports.io/football/teams/489.png', primaryColor: '#FB090B', secondaryColor: '#000000' },
      { name: 'AS Roma', logo: 'https://media.api-sports.io/football/teams/497.png', primaryColor: '#8E1F2F', secondaryColor: '#F0BC42' },
      { name: 'Atalanta', logo: 'https://media.api-sports.io/football/teams/499.png', primaryColor: '#1E71B8', secondaryColor: '#000000' },
      { name: 'Bologna', logo: 'https://media.api-sports.io/football/teams/500.png', primaryColor: '#1A2F48', secondaryColor: '#A21E25' },
      { name: 'Como 1907', logo: 'https://media.api-sports.io/football/teams/1579.png', primaryColor: '#0053A0', secondaryColor: '#FFFFFF' },
      { name: 'Inter Milan', logo: 'https://media.api-sports.io/football/teams/505.png', primaryColor: '#0068A8', secondaryColor: '#000000' },
      { name: 'Juventus', logo: 'https://media.api-sports.io/football/teams/496.png', primaryColor: '#000000', secondaryColor: '#FFFFFF' },
      { name: 'Napoli', logo: 'https://media.api-sports.io/football/teams/492.png', primaryColor: '#12A0D7', secondaryColor: '#FFFFFF' },
    ]
  },
  ligue1: {
    name: 'Ligue 1',
    logo: 'https://media.api-sports.io/football/leagues/61.png',
    teams: [
      { name: 'AS Monaco', logo: 'https://media.api-sports.io/football/teams/91.png', primaryColor: '#E21A23', secondaryColor: '#FFFFFF' },
      { name: 'LOSC Lille', logo: 'https://media.api-sports.io/football/teams/79.png', primaryColor: '#E31837', secondaryColor: '#0A2240' },
      { name: 'Olympique Lyon', logo: 'https://media.api-sports.io/football/teams/80.png', primaryColor: '#0046A0', secondaryColor: '#DA001A' },
      { name: 'Olympique Marseille', logo: 'https://media.api-sports.io/football/teams/81.png', primaryColor: '#2FAEE0', secondaryColor: '#FFFFFF' },
      { name: 'Paris Saint Germain', logo: 'https://media.api-sports.io/football/teams/85.png', primaryColor: '#004170', secondaryColor: '#DA291C' },
      { name: 'RC Lens', logo: 'https://media.api-sports.io/football/teams/116.png', primaryColor: '#FFE500', secondaryColor: '#EE1C25' },
      { name: 'Stade Rennais FC', logo: 'https://media.api-sports.io/football/teams/94.png', primaryColor: '#DA001A', secondaryColor: '#000000' },
      { name: 'Strasbourg', logo: 'https://media.api-sports.io/football/teams/95.png', primaryColor: '#009FE3', secondaryColor: '#FFFFFF' },
    ]
  }
}

export type LeagueKey = keyof typeof leagues

const flag = (code: string) => `https://flagcdn.com/w320/${code}.png`

export const nations = {
  asia: {
    name: 'Asia',
    teams: [
      { name: 'China', logo: flag('cn'), primaryColor: '#DE2910', secondaryColor: '#FFDE00' },
      { name: 'India', logo: flag('in'), primaryColor: '#FF9933', secondaryColor: '#138808' },
      { name: 'Indonesia', logo: flag('id'), primaryColor: '#FF0000', secondaryColor: '#FFFFFF' },
      { name: 'Iran', logo: flag('ir'), primaryColor: '#239F40', secondaryColor: '#DA0000' },
      { name: 'Iraq', logo: flag('iq'), primaryColor: '#CE1126', secondaryColor: '#007A3D' },
      { name: 'Japan', logo: flag('jp'), primaryColor: '#BC002D', secondaryColor: '#FFFFFF' },
      { name: 'Malaysia', logo: flag('my'), primaryColor: '#CC0001', secondaryColor: '#010066' },
      { name: 'Oman', logo: flag('om'), primaryColor: '#DB161B', secondaryColor: '#008000' },
      { name: 'Qatar', logo: flag('qa'), primaryColor: '#8A1538', secondaryColor: '#FFFFFF' },
      { name: 'Saudi Arabia', logo: flag('sa'), primaryColor: '#006C35', secondaryColor: '#FFFFFF' },
      { name: 'South Korea', logo: flag('kr'), primaryColor: '#003478', secondaryColor: '#C60C30' },
      { name: 'Thailand', logo: flag('th'), primaryColor: '#A51931', secondaryColor: '#2D2A4A' },
      { name: 'United Arab Emirates', logo: flag('ae'), primaryColor: '#00732F', secondaryColor: '#FF0000' },
      { name: 'Uzbekistan', logo: flag('uz'), primaryColor: '#1EB53A', secondaryColor: '#0099B5' },
      { name: 'Vietnam', logo: flag('vn'), primaryColor: '#DA251D', secondaryColor: '#FFFF00' },
    ]
  },
  southAmerica: {
    name: 'South America',
    teams: [
      { name: 'Argentina', logo: flag('ar'), primaryColor: '#75AADB', secondaryColor: '#F6B40E' },
      { name: 'Bolivia', logo: flag('bo'), primaryColor: '#D52B1E', secondaryColor: '#007934' },
      { name: 'Brazil', logo: flag('br'), primaryColor: '#009C3B', secondaryColor: '#FFDF00' },
      { name: 'Chile', logo: flag('cl'), primaryColor: '#0039A6', secondaryColor: '#D52B1E' },
      { name: 'Colombia', logo: flag('co'), primaryColor: '#FCD116', secondaryColor: '#003893' },
      { name: 'Ecuador', logo: flag('ec'), primaryColor: '#FFD100', secondaryColor: '#034EA2' },
      { name: 'Paraguay', logo: flag('py'), primaryColor: '#D52B1E', secondaryColor: '#0038A8' },
      { name: 'Peru', logo: flag('pe'), primaryColor: '#D91023', secondaryColor: '#FFFFFF' },
      { name: 'Uruguay', logo: flag('uy'), primaryColor: '#0038A8', secondaryColor: '#FCD116' },
      { name: 'Venezuela', logo: flag('ve'), primaryColor: '#FCE300', secondaryColor: '#00247D' },
    ]
  },
  northAmerica: {
    name: 'North America',
    teams: [
      { name: 'Canada', logo: flag('ca'), primaryColor: '#D80621', secondaryColor: '#FFFFFF' },
      { name: 'Costa Rica', logo: flag('cr'), primaryColor: '#002B7F', secondaryColor: '#CE1126' },
      { name: 'El Salvador', logo: flag('sv'), primaryColor: '#0F47AF', secondaryColor: '#FFFFFF' },
      { name: 'Jamaica', logo: flag('jm'), primaryColor: '#009B3A', secondaryColor: '#FED100' },
      { name: 'Mexico', logo: flag('mx'), primaryColor: '#006847', secondaryColor: '#CE1126' },
      { name: 'United States', logo: flag('us'), primaryColor: '#0A3161', secondaryColor: '#B22234' },
    ]
  },
  oceania: {
    name: 'Oceania',
    teams: [
      { name: 'Australia', logo: flag('au'), primaryColor: '#012169', secondaryColor: '#E4002B' },
    ]
  },
}

export type NationKey = keyof typeof nations
