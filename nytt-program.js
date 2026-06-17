// ============================================================
// NYTT TRENINGSPROGRAM — Hybrid Athlete Edition
// Periode 1 (Norge) & Periode 2 (Danmark)
// Tema: hurtighet, raske bein, muskeldefinisjon, kondis, fotball + golf
// Hver dag: eksplosivt/sprint forst → styrke → kondis → teknikk → mobility sist
// ============================================================

// Mobility-blokk gjenbrukes — golf + fotball fokus (hofter, thoracic, ankler, handledd)
const MOBILITY_FULL = { name: "Mobility & toying (golf + fotball)", items: [
  "Hofteapner (90/90) — 8/side",
  "Thoracic rotasjon — 10/side (golfsving)",
  "Worlds greatest stretch — 5/side",
  "Ankel dorsifleksjon mot vegg — 30 sek/side",
  "Handledd sirkler + stretch — 20 sek (golfgrep)",
  "Hofteflexor lunge stretch — 45 sek/side",
  "Heng fra stang — 30 sek (dekompresjon)"
]};

const MOBILITY_KORT = { name: "Mobility (kort, golf + fotball)", items: [
  "Thoracic rotasjon — 10/side",
  "Hofteapner 90/90 — 8/side",
  "Ankel + handledd — 30 sek hver",
  "Heng fra stang — 30 sek"
]};

// ---- PERIODE 1: NORGE (mandag lagtrening, 5 gymokter) ----
const UKE_NORGE = {
  "Mandag": {
    title: "Lagtrening + sprint mechanics",
    type: "lag",
    blocks: [
      { name: "Sprint mechanics (morgen)", items: [
        "A-skip — 2 × 20m",
        "B-skip — 2 × 20m",
        "Hoye kneloft — 3 × 20m",
        "Pogo jumps — 3 × 20 sek"
      ]},
      { name: "Lagtrening (kveld)", items: [
        "Lagtrening Blamann FK — 18:00-19:00",
        "Stort maltid innen 60 min etter"
      ]},
      MOBILITY_KORT
    ]
  },
  "Tirsdag": {
    title: "Lower power + sprint",
    type: "gym",
    blocks: [
      { name: "Bane forst", items: [
        "10m sprint — 4 reps, full pause",
        "20m sprint — 4 reps, full pause",
        "30m sprint — 3 reps maks"
      ]},
      { name: "Gym", items: [
        "Back squat — 5 × 4, tungt",
        "Box jumps — 4 × 4",
        "Bulgarian split squat — 3 × 8/side",
        "Hex bar deadlift — 4 × 6",
        "Calf raises — 4 × 15"
      ]},
      { name: "Fotball teknikk", items: [
        "Touch & sprint — 10 reps",
        "Forste touch under press — 10 min"
      ]},
      MOBILITY_FULL
    ]
  },
  "Onsdag": {
    title: "Upper + kondis",
    type: "gym",
    blocks: [
      { name: "Gym", items: [
        "Incline DB press — 4 × 6",
        "Barbell row — 4 × 8",
        "Weighted chin-ups — 4 × 6",
        "Overhead press — 3 × 8",
        "Face pulls — 3 × 15",
        "Cable rows — 3 × 10"
      ]},
      { name: "Kondis", items: [
        "Intervaller — 6 × 3 min pa 85-90%, 2 min pause"
      ]},
      MOBILITY_FULL
    ]
  },
  "Torsdag": {
    title: "Full body eksplosiv + teknikk",
    type: "gym",
    blocks: [
      { name: "Gym", items: [
        "KB swings — 4 × 15",
        "Squat jumps — 4 × 6",
        "Push press — 4 × 6",
        "Weighted pull-ups — 3 × 6",
        "Ab wheel — 3 × 10",
        "Pallof press — 3 × 10/side"
      ]},
      { name: "Fotball teknikk (lang okt)", items: [
        "Touch & sprint — 12 reps",
        "Inside cut — 10/fot",
        "La croqueta — full fart",
        "Cruyff turn — 10/side",
        "Pasning svak fot — 50 touch"
      ]},
      MOBILITY_FULL
    ]
  },
  "Fredag": {
    title: "Lower volum + lang lop",
    type: "gym",
    blocks: [
      { name: "Gym", items: [
        "Hex bar deadlift — 4 × 8",
        "Bulgarian split squat — 4 × 8/side",
        "Walking lunges m/vekt — 3 × 10/side",
        "Hanging leg raises — 3 × 12",
        "Calf raises — 3 × 15"
      ]},
      { name: "Kondis", items: [
        "Rolig lop — 40-45 min"
      ]},
      MOBILITY_FULL
    ]
  },
  "Lordag": {
    title: "Ren fart + plyo + golf",
    type: "speed",
    blocks: [
      { name: "Oppvarming", items: [
        "Sprint mechanics — 10 min",
        "Build-ups 50/70/85% — 3 × 30m"
      ]},
      { name: "Sprints", items: [
        "10m — 4 reps",
        "20m — 4 reps",
        "40m — 3 reps",
        "60m — 2 reps progressivt"
      ]},
      { name: "Plyo", items: [
        "Broad jumps — 4 × 5",
        "Lateral bounds — 3 × 6/side",
        "Depth jumps — 3 × 5"
      ]},
      { name: "Golf (valgfritt)", items: [
        "Range eller runde — teknikk + aktiv recovery"
      ]},
      MOBILITY_FULL
    ]
  },
  "Sondag": {
    title: "Hvile + mobility",
    type: "rest",
    blocks: [
      { name: "Recovery", items: [
        "Obligatorisk hvile fra hard trening",
        "Lett gatur"
      ]},
      MOBILITY_FULL
    ]
  }
};

// ---- PERIODE 2: DANMARK (Fair Fitness Marielyst 3x, M-station, strand, golf) ----
const UKE_DANMARK = {
  "Mandag": {
    title: "Gym (Fair Fitness): Lower power",
    type: "gym",
    blocks: [
      { name: "Fair Fitness Marielyst", items: [
        "Back squat — 5 × 4",
        "Bulgarian split squat — 3 × 8/side",
        "Hex bar deadlift — 4 × 6",
        "Box jumps — 4 × 4",
        "Calf raises — 4 × 15",
        "Hanging leg raises — 3 × 12"
      ]},
      MOBILITY_FULL
    ]
  },
  "Tirsdag": {
    title: "Strand: sprint + plyo + teknikk",
    type: "speed",
    blocks: [
      { name: "Stranda", items: [
        "Sprint mechanics — 10 min",
        "10-20m drag — 8 reps i sand",
        "Broad jumps — 4 × 5",
        "Lateral bounds — 3 × 6/side"
      ]},
      { name: "Fotball teknikk", items: [
        "Touch & sprint pa bane",
        "Inside cut, la croqueta"
      ]},
      { name: "Recovery", items: [
        "Svomming — aktiv recovery"
      ]},
      MOBILITY_FULL
    ]
  },
  "Onsdag": {
    title: "Gym (Fair Fitness): Upper",
    type: "gym",
    blocks: [
      { name: "Fair Fitness Marielyst", items: [
        "Incline DB press — 4 × 6",
        "Barbell row — 4 × 8",
        "Weighted chin-ups — 4 × 6",
        "Overhead press — 3 × 8",
        "Face pulls — 3 × 15",
        "Cable rows — 3 × 10"
      ]},
      MOBILITY_FULL
    ]
  },
  "Torsdag": {
    title: "M-station hjemme + teknikk",
    type: "gym",
    blocks: [
      { name: "M-station hagen", items: [
        "Pull-ups — 4 × maks",
        "Dips — 4 × 8",
        "Eksplosive push-ups — 3 × 10",
        "L-sits — 3 × maks",
        "Core circuit — 3 runder"
      ]},
      { name: "Fotball teknikk (lang okt)", items: [
        "Touch & sprint — 12 reps",
        "Inside cut, la croqueta, Cruyff turn",
        "Pasning svak fot — 50 touch",
        "Frispark"
      ]},
      MOBILITY_FULL
    ]
  },
  "Fredag": {
    title: "Gym (Fair Fitness): Full body eksplosiv",
    type: "gym",
    blocks: [
      { name: "Fair Fitness Marielyst", items: [
        "KB swings — 4 × 15",
        "Push press — 4 × 6",
        "Squat jumps — 4 × 6",
        "Weighted pull-ups — 3 × 6",
        "Ab wheel — 3 × 10"
      ]},
      { name: "Kondis", items: [
        "Intervaller eller lop pa stranda"
      ]},
      MOBILITY_FULL
    ]
  },
  "Lordag": {
    title: "Lang lop + golf",
    type: "end",
    blocks: [
      { name: "Morgen", items: [
        "Rolig lop — 40 min"
      ]},
      { name: "Golf", items: [
        "Runde eller range — aktiv recovery, mye gange"
      ]},
      MOBILITY_FULL
    ]
  },
  "Sondag": {
    title: "Hvile / golf + mobility",
    type: "rest",
    blocks: [
      { name: "Recovery", items: [
        "Lett dag — golf eller full hvile"
      ]},
      MOBILITY_FULL
    ]
  }
};
