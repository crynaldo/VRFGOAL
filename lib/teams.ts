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
    logo: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg',
    teams: [
      { name: 'Arsenal', logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg', primaryColor: '#EF0107', secondaryColor: '#FFFFFF' },
      { name: 'Aston Villa', logo: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Aston_Villa_FC_crest_%282016%29.svg', primaryColor: '#670E36', secondaryColor: '#95BFE5' },
      { name: 'Chelsea', logo: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg', primaryColor: '#034694', secondaryColor: '#DBA111' },
      { name: 'Liverpool', logo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg', primaryColor: '#C8102E', secondaryColor: '#00B2A9' },
      { name: 'Manchester City', logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg', primaryColor: '#6CABDD', secondaryColor: '#1C2C5B' },
      { name: 'Manchester United', logo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg', primaryColor: '#DA291C', secondaryColor: '#FBE122' },
      { name: 'Newcastle United', logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg', primaryColor: '#241F20', secondaryColor: '#FFFFFF' },
      { name: 'Tottenham Hotspur', logo: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg', primaryColor: '#132257', secondaryColor: '#FFFFFF' },
    ]
  },
  laLiga: {
    name: 'La Liga',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/54/LaLiga_EA_Sports_2023_Vertical_Logo.svg',
    teams: [
      { name: 'Atletico Madrid', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg', primaryColor: '#CE3524', secondaryColor: '#FFFFFF' },
      { name: 'Celta Vigo', logo: 'https://upload.wikimedia.org/wikipedia/en/1/12/RC_Celta_de_Vigo_logo.svg', primaryColor: '#8AC3EE', secondaryColor: '#FFFFFF' },
      { name: 'FC Barcelona', logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg', primaryColor: '#A50044', secondaryColor: '#004D98' },
      { name: 'Real Betis', logo: 'https://upload.wikimedia.org/wikipedia/en/1/13/Real_betis_logo.svg', primaryColor: '#00954C', secondaryColor: '#FFFFFF' },
      { name: 'Real Madrid', logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg', primaryColor: '#FFFFFF', secondaryColor: '#FEBE10' },
      { name: 'Sevilla', logo: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Sevilla_FC_logo.svg', primaryColor: '#D9001C', secondaryColor: '#FFFFFF' },
      { name: 'Valencia', logo: 'https://upload.wikimedia.org/wikipedia/en/c/ce/Valenciacf.svg', primaryColor: '#EE3524', secondaryColor: '#000000' },
      { name: 'Villarreal CF', logo: 'https://upload.wikimedia.org/wikipedia/en/7/70/Villarreal_CF_logo.svg', primaryColor: '#FFE114', secondaryColor: '#005DAA' },
    ]
  },
  serieA: {
    name: 'Serie A',
    logo: 'https://upload.wikimedia.org/wikipedia/en/e/e1/Serie_A_logo_%282019%29.svg',
    teams: [
      { name: 'AC Milan', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg', primaryColor: '#FB090B', secondaryColor: '#000000' },
      { name: 'AS Roma', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f7/AS_Roma_logo_%282017%29.svg', primaryColor: '#8E1F2F', secondaryColor: '#F0BC42' },
      { name: 'Atalanta', logo: 'https://upload.wikimedia.org/wikipedia/en/6/66/AtalantaBC.svg', primaryColor: '#1E71B8', secondaryColor: '#000000' },
      { name: 'Bologna', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Bologna_F.C._1909_logo.svg', primaryColor: '#1A2F48', secondaryColor: '#A21E25' },
      { name: 'Como 1907', logo: 'https://upload.wikimedia.org/wikipedia/en/8/81/Como_1907_logo.svg', primaryColor: '#0053A0', secondaryColor: '#FFFFFF' },
      { name: 'Inter Milan', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg', primaryColor: '#0068A8', secondaryColor: '#000000' },
      { name: 'Juventus', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Juventus_FC_-_pictogram.svg', primaryColor: '#000000', secondaryColor: '#FFFFFF' },
      { name: 'Napoli', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/SSC_Napoli.svg', primaryColor: '#12A0D7', secondaryColor: '#FFFFFF' },
    ]
  },
  ligue1: {
    name: 'Ligue 1',
    logo: 'https://upload.wikimedia.org/wikipedia/en/c/c7/Ligue1_McDonald%27s.svg',
    teams: [
      { name: 'AS Monaco', logo: 'https://upload.wikimedia.org/wikipedia/en/b/ba/AS_Monaco_FC.svg', primaryColor: '#E21A23', secondaryColor: '#FFFFFF' },
      { name: 'LOSC Lille', logo: 'https://upload.wikimedia.org/wikipedia/en/3/3f/Lille_OSC_2018_logo.svg', primaryColor: '#E31837', secondaryColor: '#0A2240' },
      { name: 'Olympique Lyon', logo: 'https://upload.wikimedia.org/wikipedia/en/a/a1/Olympique_Lyonnais.svg', primaryColor: '#0046A0', secondaryColor: '#DA001A' },
      { name: 'Olympique Marseille', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Olympique_Marseille_logo.svg', primaryColor: '#2FAEE0', secondaryColor: '#FFFFFF' },
      { name: 'Paris Saint Germain', logo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg', primaryColor: '#004170', secondaryColor: '#DA291C' },
      { name: 'RC Lens', logo: 'https://upload.wikimedia.org/wikipedia/en/c/cc/RC_Lens_logo.svg', primaryColor: '#FFE500', secondaryColor: '#EE1C25' },
      { name: 'Stade Rennais FC', logo: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Stade_Rennais_FC.svg', primaryColor: '#DA001A', secondaryColor: '#000000' },
      { name: 'Strasbourg', logo: 'https://upload.wikimedia.org/wikipedia/en/8/80/Racing_Club_de_Strasbourg_logo.svg', primaryColor: '#009FE3', secondaryColor: '#FFFFFF' },
    ]
  }
}

export type LeagueKey = keyof typeof leagues
