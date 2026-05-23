export interface Team {
  name: string
  logo: string
  league: string
}

export const leagues = {
  premierLeague: {
    name: 'Premier League',
    logo: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg',
    teams: [
      { name: 'Arsenal', logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg' },
      { name: 'Aston Villa', logo: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Aston_Villa_FC_crest_%282016%29.svg' },
      { name: 'Chelsea', logo: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg' },
      { name: 'Liverpool', logo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg' },
      { name: 'Manchester City', logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg' },
      { name: 'Manchester United', logo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg' },
      { name: 'Newcastle United', logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg' },
      { name: 'Tottenham Hotspur', logo: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg' },
    ]
  },
  laLiga: {
    name: 'La Liga',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/54/LaLiga_EA_Sports_2023_Vertical_Logo.svg',
    teams: [
      { name: 'Atletico Madrid', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg' },
      { name: 'Celta Vigo', logo: 'https://upload.wikimedia.org/wikipedia/en/1/12/RC_Celta_de_Vigo_logo.svg' },
      { name: 'FC Barcelona', logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg' },
      { name: 'Real Betis', logo: 'https://upload.wikimedia.org/wikipedia/en/1/13/Real_betis_logo.svg' },
      { name: 'Real Madrid', logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg' },
      { name: 'Sevilla', logo: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Sevilla_FC_logo.svg' },
      { name: 'Valencia', logo: 'https://upload.wikimedia.org/wikipedia/en/c/ce/Valenciacf.svg' },
      { name: 'Villarreal CF', logo: 'https://upload.wikimedia.org/wikipedia/en/7/70/Villarreal_CF_logo.svg' },
    ]
  },
  serieA: {
    name: 'Serie A',
    logo: 'https://upload.wikimedia.org/wikipedia/en/e/e1/Serie_A_logo_%282019%29.svg',
    teams: [
      { name: 'AC Milan', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg' },
      { name: 'AS Roma', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f7/AS_Roma_logo_%282017%29.svg' },
      { name: 'Atalanta', logo: 'https://upload.wikimedia.org/wikipedia/en/6/66/AtalantaBC.svg' },
      { name: 'Bologna', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Bologna_F.C._1909_logo.svg' },
      { name: 'Como 1907', logo: 'https://upload.wikimedia.org/wikipedia/en/8/81/Como_1907_logo.svg' },
      { name: 'Inter Milan', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg' },
      { name: 'Juventus', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Juventus_FC_-_pictogram.svg' },
      { name: 'Napoli', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/SSC_Napoli.svg' },
    ]
  },
  ligue1: {
    name: 'Ligue 1',
    logo: 'https://upload.wikimedia.org/wikipedia/en/c/c7/Ligue1_McDonald%27s.svg',
    teams: [
      { name: 'AS Monaco', logo: 'https://upload.wikimedia.org/wikipedia/en/b/ba/AS_Monaco_FC.svg' },
      { name: 'LOSC Lille', logo: 'https://upload.wikimedia.org/wikipedia/en/3/3f/Lille_OSC_2018_logo.svg' },
      { name: 'Olympique Lyon', logo: 'https://upload.wikimedia.org/wikipedia/en/a/a1/Olympique_Lyonnais.svg' },
      { name: 'Olympique Marseille', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Olympique_Marseille_logo.svg' },
      { name: 'Paris Saint Germain', logo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg' },
      { name: 'RC Lens', logo: 'https://upload.wikimedia.org/wikipedia/en/c/cc/RC_Lens_logo.svg' },
      { name: 'Stade Rennais FC', logo: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Stade_Rennais_FC.svg' },
      { name: 'Strasbourg', logo: 'https://upload.wikimedia.org/wikipedia/en/8/80/Racing_Club_de_Strasbourg_logo.svg' },
    ]
  }
}

export type LeagueKey = keyof typeof leagues
