export const wedding = {
  couple: {
    bride: "Richa Chaurasia",
    groom: "Abhishek Chaurasia",
  },
  parents: {
    bride: "Mr. Rajesh & Mrs. Sunita Chaurasia",
    groom: "Mr. Amit & Mrs. Kavita Chaurasia",
    isSample: true,
  },
  dates: {
    haldi: "8 December 2026",
    mehndi: "8 December 2026",
    wedding: "9 December 2026",
    countdownTarget: "2026-12-09T00:00:00+05:30",
  },
  invitation:
    "With immense joy and the blessings of our elders, we invite you to join us as we celebrate the sacred union of Richa and Abhishek. Your gracious presence and blessings will make our celebration even more special.",
  mapUrl: "https://maps.app.goo.gl/FRedKYcWyop9Qu1o7",
  events: [
    {
      name: "Haldi Ceremony",
      date: "8 December 2026",
      time: "A joyful gathering",
      venue: "Ganga Yamuna View, Prayagraj",
      detail: "An afternoon of turmeric, marigolds, and family blessings.",
      kind: "haldi",
      location: "Prayagraj, Uttar Pradesh",
    },
    {
      name: "Mehndi Ceremony",
      date: "8 December 2026",
      time: "An evening of celebration",
      venue: "Ganga Yamuna View, Prayagraj",
      detail: "An evening adorned with henna, music, and cherished company.",
      kind: "mehndi",
      location: "Prayagraj, Uttar Pradesh",
    },
    {
      name: "Wedding Ceremony",
      date: "9 December 2026",
      time: "With details to follow",
      venue: "The Royal Courtyard, Prayagraj",
      detail: "Demo venue — replace with the confirmed location before sharing.",
      kind: "wedding",
      location: "",
    },
  ],
  photos: [
    { src: "/photos/couple-featured.jpeg", alt: "Richa and Abhishek sharing a tender moment", shape: "featured" },
    { src: "/photos/couple-photo-01.jpeg", alt: "Richa and Abhishek together in their wedding attire", shape: "portrait" },
    { src: "/photos/couple-photo-02.jpeg", alt: "Richa and Abhishek smiling together", shape: "wide" },
    { src: "/photos/couple-photo-03.jpeg", alt: "Richa and Abhishek in a full-length portrait", shape: "full" },
  ],
  // Add a local audio file path here to enable the optional music control.
  musicSrc: "",
} as const;

export type CountdownParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function getCountdownParts(now: Date, target: Date): CountdownParts {
  const remainingSeconds = Math.max(0, Math.floor((target.getTime() - now.getTime()) / 1000));
  return {
    days: Math.floor(remainingSeconds / 86400),
    hours: Math.floor((remainingSeconds % 86400) / 3600),
    minutes: Math.floor((remainingSeconds % 3600) / 60),
    seconds: remainingSeconds % 60,
  };
}
