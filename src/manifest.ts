import type { GameManifest } from "@open-party-lab/game-core";

export const flatterfluffRoomSettingKeys = {
  mode: "flatterfluffMode",
  roundSeconds: "flatterfluffRoundSeconds"
} as const;

export const flatterfluffManifest = {
  id: "flatterfluff",
  displayName: "Flatterfluff",
  description:
    "Rasante Zuckerprärie-Zieljagd mit geflügelten Marshmallows, Nachladen, Munitionskisten und bis zu sechs farbigen Fadenkreuzen.",
  minPlayers: 1,
  maxPlayers: 6,
  hostView: "FlatterfluffHostScene",
  controllerView: "flatterfluff",
  controllerLayout: "virtual_joystick",
  supportsTeams: false,
  estimatedRoundDurationMs: 90_000,
  lobbySetup: {
    title: "Flatterfluff Setup",
    description: "Wählt Zeitjagd oder eine offene Endlosrunde.",
    fields: [
      {
        kind: "select",
        id: "mode",
        settingKey: flatterfluffRoomSettingKeys.mode,
        actionKey: "mode",
        label: "Spielmodus",
        defaultValue: "timed",
        options: [
          {
            id: "timed",
            label: "Zeitjagd",
            description: "Sammelt vor Ablauf der Uhr so viele Punkte wie möglich."
          },
          {
            id: "endless",
            label: "Endlos",
            description: "Spielt ohne Zeitlimit, bis der Host die Runde beendet."
          }
        ]
      },
      {
        kind: "number",
        id: "roundSeconds",
        settingKey: flatterfluffRoomSettingKeys.roundSeconds,
        actionKey: "roundSeconds",
        label: "Rundenzeit",
        description: "Dauer der Zeitjagd in Sekunden.",
        min: 45,
        max: 180,
        step: 15,
        defaultValue: 90
      }
    ]
  },
  phaseDurations: {
    roundIntroMs: 1_500,
    countdownMs: 1_800,
    lockedMs: 2_500,
    resultMs: 4_500,
    scoreboardMs: 4_500
  }
} as const satisfies GameManifest;

export const manifest = flatterfluffManifest;
