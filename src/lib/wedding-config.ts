export const wedding = {
  couple: {
    bride: "Dr. Richa Chaurasia",
    groom: "Dr. Abhishek Chaurasia",
  },
  parents: {
    bride: "Mr. Madan Prasad Chaurasia & Mrs. Saroj Chaurasia",
    groom: "Mr. Jagdeesh Prasad Chaurasia & Mrs. Neelam Chaurasia",
  },
  dates: {
    haldi: "8 December 2026",
    wedding: "9 December 2026",
    countdownTarget: "2026-12-09T00:00:00+05:30",
  },
  invitation:
    "With the blessings of our elders, the Chaurasia family joyfully invites you to celebrate the wedding of Dr. Richa Chaurasia and Dr. Abhishek Chaurasia. Your gracious presence and blessings will make this day truly special.",
  mapUrl: "https://maps.app.goo.gl/rfUzyneDDTAuBQeX7",
  haldiMapUrl: "https://maps.app.goo.gl/HzS5VWT6LS6yEziU7",
  venue: "Parmarth Triveni Pushp, Prayagraj",
  events: [
    {
      name: "Haldi Ceremony",
      date: "8 December 2026",
      time: "An afternoon of celebration",
      venue: "Ganga Yamuna View, Prayagraj",
      detail: "An afternoon of turmeric, marigolds, and family blessings.",
      kind: "haldi",
      location: "Prayagraj, Uttar Pradesh",
    },
    {
      name: "Wedding Ceremony",
      date: "9 December 2026",
      time: "Ceremony details to follow",
      venue: "Parmarth Triveni Pushp, Prayagraj",
      detail: "Join us as two families come together in a celebration of love.",
      kind: "wedding",
      location: "Prayagraj, Uttar Pradesh",
    },
  ],
  photos: [
    { src: "/photos/couple-new-01.jpeg", alt: "Dr. Richa and Dr. Abhishek together beneath a floral wedding canopy", shape: "featured" },
    { src: "/photos/couple-new-02.jpeg", alt: "Dr. Richa and Dr. Abhishek sharing a joyful moment", shape: "portrait" },
    { src: "/photos/couple-new-03.jpeg", alt: "Dr. Richa and Dr. Abhishek celebrating together", shape: "wide" },
    { src: "/photos/henna-hands-golden-stage.png", alt: "The couple's henna-adorned hands against a golden wedding stage", shape: "full" },
  ],
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
