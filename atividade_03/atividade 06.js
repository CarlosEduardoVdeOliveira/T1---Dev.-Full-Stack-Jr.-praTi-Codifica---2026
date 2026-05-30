/*
6. Crie um array de objetos representando músicas, cada uma com título, 
artista e duração em segundos. Use for...of para exibir cada música no
formato "Artista — Título (mm:ss)". Ao final, use forEach para somar
a duração total e exiba-a no mesmo formato.*/

const musics = [
  {
    title: "Aerials",
    artist: "System of a Down",
    duration: 244,
  },
  {
    title: "Iris",
    artist: "Goo Goo Dolls",
    duration: 342,
  },
  {
    title: "One Last Breath",
    artist: "Creed",
    duration: 240,
  },
  {
    title: "My Last Breath (with lyrics)",
    artist: "Evanescence",
    duration: 248,
  },
  {
    title: "Máscara",
    artist: "Pitty",
    duration: 299,
  },
];

for (const music of musics) {
  const minutes = Math.trunc(music.duration / 60);
  const seconds = music.duration % 60;

  console.log(
    `${music.artist} — ${music.title} (${minutes}:${seconds < 10 ? "0" + seconds : seconds})`,
  );
}

let totalDuration = 0;

musics.forEach((music) => {
  totalDuration += music.duration;
});

const totalMinutes = Math.trunc(totalDuration / 60);
const totalSeconds = totalDuration % 60;

console.log(
  `Tempo total: ${totalMinutes}:${totalSeconds < 10 ? "0" + totalSeconds : totalSeconds}`,
);
