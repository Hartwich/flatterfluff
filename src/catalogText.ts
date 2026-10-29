import type { LocalizedGameTextMap } from "@open-party-lab/game-core";

export const flatterfluffText = {
  "de": {
    "displayName": "Flatterfluff",
    "description": "Rasante Zuckerprärie-Zieljagd mit geflügelten Marshmallows, Nachladen, Munitionskisten und bis zu sechs farbigen Fadenkreuzen.",
    "lobbySetup": {
      "title": "Flatterfluff Setup",
      "description": "Wählt Zeitjagd oder eine offene Endlosrunde.",
      "fields": {
        "mode": {
          "label": "Spielmodus",
          "options": {
            "timed": {
              "label": "Zeitjagd",
              "description": "Sammelt vor Ablauf der Uhr so viele Punkte wie möglich."
            },
            "endless": {
              "label": "Endlos",
              "description": "Spielt ohne Zeitlimit, bis der Host die Runde beendet."
            }
          }
        },
        "roundSeconds": {
          "label": "Rundenzeit",
          "description": "Dauer der Zeitjagd in Sekunden."
        }
      }
    },
    "visual": {
      "eyebrow": "Zieljagd"
    }
  },
  "en": {
    "displayName": "Flutterfluff",
    "description": "A fast-paced candy-prairie target shoot with winged marshmallows, reloading, ammo crates and up to six colourful crosshairs.",
    "lobbySetup": {
      "title": "Flutterfluff setup",
      "description": "Choose a timed hunt or an open-ended round.",
      "fields": {
        "mode": {
          "label": "Game mode",
          "options": {
            "timed": {
              "label": "Timed hunt",
              "description": "Score as many points as possible before time runs out."
            },
            "endless": {
              "label": "Endless",
              "description": "Play without a time limit until the host ends the round."
            }
          }
        },
        "roundSeconds": {
          "label": "Round duration",
          "description": "Length of the timed hunt in seconds."
        }
      }
    },
    "visual": {
      "eyebrow": "Flap"
    }
  }
} as const satisfies LocalizedGameTextMap;
