import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Heart, c as ChevronLeft, d as ArrowUpRight, f as ArrowDown, i as MapPin, l as CalendarDays, n as Pause, o as Clock3, r as Music2, s as ChevronRight, t as X, u as ArrowUp } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ATyfC8DJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var wedding = {
	couple: {
		bride: "Richa Chaurasia",
		groom: "Abhishek Chaurasia"
	},
	parents: {
		bride: "Mr. Rajesh & Mrs. Sunita Chaurasia",
		groom: "Mr. Amit & Mrs. Kavita Chaurasia",
		isSample: true
	},
	dates: {
		haldi: "8 December 2026",
		mehndi: "8 December 2026",
		wedding: "9 December 2026",
		countdownTarget: "2026-12-09T00:00:00+05:30"
	},
	invitation: "With immense joy and the blessings of our elders, we invite you to join us as we celebrate the sacred union of Richa and Abhishek. Your gracious presence and blessings will make our celebration even more special.",
	mapUrl: "https://maps.app.goo.gl/FRedKYcWyop9Qu1o7",
	events: [
		{
			name: "Haldi Ceremony",
			date: "8 December 2026",
			time: "A joyful gathering",
			venue: "Ganga Yamuna View, Prayagraj",
			detail: "An afternoon of turmeric, marigolds, and family blessings.",
			kind: "haldi",
			location: "Prayagraj, Uttar Pradesh"
		},
		{
			name: "Mehndi Ceremony",
			date: "8 December 2026",
			time: "An evening of celebration",
			venue: "Ganga Yamuna View, Prayagraj",
			detail: "An evening adorned with henna, music, and cherished company.",
			kind: "mehndi",
			location: "Prayagraj, Uttar Pradesh"
		},
		{
			name: "Wedding Ceremony",
			date: "9 December 2026",
			time: "With details to follow",
			venue: "The Royal Courtyard, Prayagraj",
			detail: "Demo venue — replace with the confirmed location before sharing.",
			kind: "wedding",
			location: ""
		}
	],
	photos: [
		{
			src: "/photos/couple-featured.jpeg",
			alt: "Richa and Abhishek sharing a tender moment",
			shape: "featured"
		},
		{
			src: "/photos/couple-photo-01.jpeg",
			alt: "Richa and Abhishek together in their wedding attire",
			shape: "portrait"
		},
		{
			src: "/photos/couple-photo-02.jpeg",
			alt: "Richa and Abhishek smiling together",
			shape: "wide"
		},
		{
			src: "/photos/couple-photo-03.jpeg",
			alt: "Richa and Abhishek in a full-length portrait",
			shape: "full"
		}
	],
	musicSrc: ""
};
function getCountdownParts(now, target) {
	const remainingSeconds = Math.max(0, Math.floor((target.getTime() - now.getTime()) / 1e3));
	return {
		days: Math.floor(remainingSeconds / 86400),
		hours: Math.floor(remainingSeconds % 86400 / 3600),
		minutes: Math.floor(remainingSeconds % 3600 / 60),
		seconds: remainingSeconds % 60
	};
}
var countdownLabels = [
	["days", "Days"],
	["hours", "Hours"],
	["minutes", "Minutes"],
	["seconds", "Seconds"]
];
var dust = Array.from({ length: 22 }, (_, index) => index);
function playOpeningChime() {
	try {
		const AudioContextConstructor = window.AudioContext;
		if (!AudioContextConstructor) return;
		const context = new AudioContextConstructor();
		const gain = context.createGain();
		gain.gain.setValueAtTime(1e-4, context.currentTime);
		gain.gain.exponentialRampToValueAtTime(.035, context.currentTime + .04);
		gain.gain.exponentialRampToValueAtTime(1e-4, context.currentTime + .75);
		gain.connect(context.destination);
		for (const [frequency, offset] of [[659.25, 0], [987.77, .12]]) {
			const tone = context.createOscillator();
			tone.type = "sine";
			tone.frequency.value = frequency;
			tone.connect(gain);
			tone.start(context.currentTime + offset);
			tone.stop(context.currentTime + .78);
		}
		window.setTimeout(() => void context.close(), 1e3);
	} catch {}
}
function WeddingInvitation() {
	const [opened, setOpened] = (0, import_react.useState)(false);
	const [opening, setOpening] = (0, import_react.useState)(false);
	const [activePhoto, setActivePhoto] = (0, import_react.useState)(null);
	const [now, setNow] = (0, import_react.useState)(() => /* @__PURE__ */ new Date());
	const [musicPlaying, setMusicPlaying] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (window.localStorage.getItem("richa-abhishek-invitation-opened") === "yes") setOpened(true);
	}, []);
	(0, import_react.useEffect)(() => {
		const timer = window.setInterval(() => setNow(/* @__PURE__ */ new Date()), 1e3);
		return () => window.clearInterval(timer);
	}, []);
	(0, import_react.useEffect)(() => {
		if (activePhoto === null) return;
		const handleKey = (event) => {
			if (event.key === "Escape") setActivePhoto(null);
			if (event.key === "ArrowRight") setActivePhoto((current) => current === null ? null : (current + 1) % wedding.photos.length);
			if (event.key === "ArrowLeft") setActivePhoto((current) => current === null ? null : (current - 1 + wedding.photos.length) % wedding.photos.length);
		};
		window.addEventListener("keydown", handleKey);
		return () => window.removeEventListener("keydown", handleKey);
	}, [activePhoto]);
	const countdown = getCountdownParts(now, new Date(wedding.dates.countdownTarget));
	const openInvitation = () => {
		if (opening || opened) return;
		playOpeningChime();
		setOpening(true);
		window.setTimeout(() => {
			window.localStorage.setItem("richa-abhishek-invitation-opened", "yes");
			setOpened(true);
			setOpening(false);
		}, 1350);
	};
	const skipIntro = () => {
		window.localStorage.setItem("richa-abhishek-invitation-opened", "yes");
		setOpened(true);
	};
	const cyclePhoto = (direction) => {
		setActivePhoto((current) => current === null ? null : (current + direction + wedding.photos.length) % wedding.photos.length);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "wedding-page",
		children: [
			!opened && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: `invitation-gate${opening ? " invitation-gate--opening" : ""}`,
				"aria-label": "Wedding invitation envelope",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "gate-ornament gate-ornament--top",
						"aria-hidden": "true",
						children: "✧　❧　✧"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "envelope-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "envelope-paper",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "envelope-corners",
									"aria-hidden": "true",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "❧" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "❧" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "❧" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "❧" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "envelope-flap",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "envelope-copy",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "eyebrow",
											children: "A celebration of love"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "envelope-couple",
											children: [
												"R ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "&" }),
												" A"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "gold-rule",
											"aria-hidden": "true"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "envelope-subtitle",
											children: "You are cordially invited"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "envelope-names",
											children: [
												"Richa ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "&" }),
												" Abhishek"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "envelope-date",
											children: "8 — 9 December 2026"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "wax-seal",
									"aria-hidden": "true",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										"R",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "&" }),
										"A"
									] })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "revealed-card",
							"aria-hidden": "true",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "revealed-card-ornament",
									children: "✧"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "revealed-card-title",
									children: "A Royal Invitation"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "revealed-card-names",
									children: "Richa & Abhishek"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "revealed-card-ornament",
									children: "❧"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gate-actions",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: openInvitation,
							disabled: opening,
							className: "open-invitation-button",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: opening ? "Opening your invitation" : "Open invitation" }), !opening && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { "aria-hidden": "true" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "skip-intro",
							type: "button",
							onClick: skipIntro,
							children: "Skip intro"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "gate-footer",
						children: "Together with their families · Prayagraj, India"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "gate-ornament gate-ornament--bottom",
						"aria-hidden": "true",
						children: "✧　❧　✧"
					}),
					dust.map((particle) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "gold-dust",
						style: { "--dust-index": particle },
						"aria-hidden": "true"
					}, particle))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `invitation-content${opened ? " invitation-content--visible" : ""}`,
				"aria-hidden": !opened,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "site-header",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "brand-mark",
								href: "#home",
								"aria-label": "Richa and Abhishek, home",
								children: [
									"R ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "&" }),
									" A"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
								className: "site-nav",
								"aria-label": "Invitation sections",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#celebration",
										children: "Celebrations"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#moments",
										children: "Moments"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#invitation",
										children: "Invitation"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "header-date",
								children: "08 — 09 · XII · MMXXVI"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "hero-section",
						id: "home",
						style: { "--hero-image": `url("${wedding.photos[0].src}")` },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hero-image",
								role: "img",
								"aria-label": "Richa and Abhishek together"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-vignette" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hero-frame",
								"aria-hidden": "true",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✧" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "❧" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✧" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "❧" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hero-content",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow hero-eyebrow",
										children: "With the blessings of our families"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "family-line",
										children: [
											"Sample parents · edit before sharing",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											wedding.parents.bride,
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "and" }),
											" ",
											wedding.parents.groom
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "hero-title-block",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Richa" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "hero-surname",
												children: "Chaurasia"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "hero-ampersand",
												"aria-hidden": "true",
												children: "&"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Abhishek" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "hero-surname",
												children: "Chaurasia"
											})] })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "gold-rule hero-rule",
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "hero-description",
										children: [
											"Joyfully invite you to celebrate",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"the beginning of their forever."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#celebration",
										className: "discover-link",
										children: ["Celebrate with us ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { "aria-hidden": "true" })]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hero-bottomline",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PRAYAGRAJ, INDIA" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "08 — 09 DECEMBER 2026" })]
							}),
							dust.slice(0, 12).map((particle) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hero-dust",
								style: { "--dust-index": particle },
								"aria-hidden": "true"
							}, particle))
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "countdown-section",
						"aria-label": "Countdown to the wedding",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "section-kicker",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "THE CELEBRATION BEGINS IN" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "kicker-flourish",
									children: "✧"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "countdown-grid",
								children: countdownLabels.map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "countdown-unit",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "countdown-number",
										children: String(countdown[key]).padStart(2, "0")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "countdown-label",
										children: label
									})]
								}, key))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "countdown-date",
								children: [
									"9 December 2026 ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
									" Prayagraj"
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "story-section",
						id: "story",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "story-copy",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "section-index",
										children: [
											"01 ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "—" }),
											" A NEW CHAPTER"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
										"Two souls,",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "one beautiful journey." })
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "gold-rule",
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Two families, one cherished celebration. With hearts full of gratitude, Richa and Abhishek begin a new chapter—surrounded by the love, laughter, and blessings of everyone who means the most." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "story-signature",
										children: ["With love, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Richa & Abhishek" })]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "story-photo photo-button",
								type: "button",
								onClick: () => setActivePhoto(0),
								"aria-label": "View featured photograph of Richa and Abhishek",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: wedding.photos[0].src,
									alt: wedding.photos[0].alt,
									loading: "lazy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "photo-caption",
									children: ["A moment to remember ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { "aria-hidden": "true" })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "story-ornament",
								"aria-hidden": "true",
								children: "❧"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "events-section",
						id: "celebration",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "section-heading",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "section-index",
										children: [
											"02 ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "—" }),
											" SAVE THE DATES"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: ["Our wedding ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "celebrations" })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Three gatherings, a lifetime of memories." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "event-list",
								children: wedding.events.map((event, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: `event-row event-row--${event.kind}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "event-number",
											children: ["0", index + 1]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "event-name-block",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "event-type",
													children: event.kind === "haldi" ? "THE HALDI" : event.kind === "mehndi" ? "THE MEHNDI" : "THE WEDDING"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: event.name }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: event.detail })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "event-details",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { "aria-hidden": "true" }), event.date] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { "aria-hidden": "true" }), event.time] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { "aria-hidden": "true" }), event.venue] })
											]
										}),
										event.kind !== "wedding" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											variant: "outline",
											className: "location-button",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: wedding.mapUrl,
												target: "_blank",
												rel: "noreferrer",
												children: ["View location ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { "aria-hidden": "true" })]
											})
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "venue-pending",
											children: [
												"DEMO VENUE",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												"Replace before sharing"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "event-flourish",
											"aria-hidden": "true",
											children: event.kind === "haldi" ? "❋" : event.kind === "mehndi" ? "❧" : "✧"
										})
									]
								}, event.kind))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "venue-preview",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "event-type",
										children: "HALDI & MEHNDI · PRAYAGRAJ"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Ganga Yamuna View" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Find your way to the celebrations." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										className: "location-link",
										href: wedding.mapUrl,
										target: "_blank",
										rel: "noreferrer",
										children: ["Open directions ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { "aria-hidden": "true" })]
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
									title: "Map showing Ganga Yamuna View in Prayagraj",
									loading: "lazy",
									referrerPolicy: "no-referrer-when-downgrade",
									src: "https://maps.google.com/maps?q=Ganga%20Yamuna%20View%2C%20Prayagraj&t=&z=13&ie=UTF8&iwloc=&output=embed"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "gallery-section",
						id: "moments",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-heading gallery-heading",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "section-index",
									children: [
										"03 ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "—" }),
										" OUR MOMENTS"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: ["In good ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "company" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Little glimpses of a very special beginning." })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "gallery-grid",
							children: wedding.photos.map((photo, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: `gallery-photo gallery-photo--${photo.shape} photo-button`,
								type: "button",
								onClick: () => setActivePhoto(index),
								"aria-label": `View photograph ${index + 1}: ${photo.alt}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: photo.src,
									alt: photo.alt,
									loading: "lazy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "gallery-photo-number",
									children: ["0", index + 1]
								})]
							}, photo.src))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "invitation-message-section",
						id: "invitation",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "invitation-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "message-flourish",
									"aria-hidden": "true",
									children: "❧"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "section-index",
									children: "WITH JOY IN OUR HEARTS"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: ["A heartfelt ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "invitation" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "gold-rule",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: wedding.invitation }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "message-names",
									children: [
										"Richa ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "&" }),
										" Abhishek"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "message-flourish message-flourish--bottom",
									"aria-hidden": "true",
									children: "❧"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
						className: "closing-section",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "section-index",
								children: "UNTIL WE CELEBRATE TOGETHER"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "closing-ornament",
								"aria-hidden": "true",
								children: "✧　❧　✧"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
								"Your presence is",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "our greatest gift." })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "closing-rule",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "With love," }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "closing-names",
								children: "Richa & Abhishek"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "closing-footer",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PRAYAGRAJ · INDIA" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#home",
										children: ["Back to top ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { "aria-hidden": "true" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "08 — 09 · XII · MMXXVI" })
								]
							})
						]
					})
				]
			}),
			opened && wedding.musicSrc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
				id: "wedding-music",
				src: wedding.musicSrc,
				loop: true,
				preload: "none"
			}),
			opened && wedding.musicSrc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "music-toggle",
				size: "icon",
				variant: "outline",
				"aria-label": musicPlaying ? "Pause background music" : "Play background music",
				onClick: () => {
					const audio = document.getElementById("wedding-music");
					if (!(audio instanceof HTMLAudioElement)) return;
					if (musicPlaying) audio.pause();
					else audio.play();
					setMusicPlaying(!musicPlaying);
				},
				children: musicPlaying ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music2, { "aria-hidden": "true" })
			}),
			activePhoto !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lightbox",
				role: "dialog",
				"aria-modal": "true",
				"aria-label": "Wedding photograph",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "lightbox-close",
						size: "icon",
						variant: "outline",
						"aria-label": "Close photo",
						onClick: () => setActivePhoto(null),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { "aria-hidden": "true" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "lightbox-previous",
						size: "icon",
						variant: "outline",
						"aria-label": "Previous photo",
						onClick: () => cyclePhoto(-1),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { "aria-hidden": "true" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "lightbox-figure",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: wedding.photos[activePhoto].src,
							alt: wedding.photos[activePhoto].alt
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", { children: [
							wedding.photos[activePhoto].alt,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"0",
								activePhoto + 1,
								" / 0",
								wedding.photos.length
							] })
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "lightbox-next",
						size: "icon",
						variant: "outline",
						"aria-label": "Next photo",
						onClick: () => cyclePhoto(1),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { "aria-hidden": "true" })
					})
				]
			})
		]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeddingInvitation, {});
}
//#endregion
export { Index as component };
