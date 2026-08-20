import { ChallengeTab, Season } from "@/types";
import { rewardOf } from "./rewardHelper";

export const challengeTabs: ChallengeTab[] = [
  { id: "weekly-score", labelKey: "tabs.weeklyScore" },
  { id: "mission-log", labelKey: "tabs.missionLog" },
  { id: "chaos-analysis", labelKey: "tabs.chaosAnalysis" },
  { id: "battle-report", labelKey: "tabs.battleReport" },
  { id: "annihilation", labelKey: "tabs.annihilation" },
];

export const seasons: Season[] = [
  {
    id: "season-3",
    nameKey: "season.s3",
    categories: [
      // ─── 今週の達成スコア ───────────────────────────────────────────
      {
        id: "weekly-score",
        tasks: [
          {
            id: "ws-2000",
            status: "manual",
            titleKey: "tasks.ws2000.title",
            descriptionKey: "tasks.ws2000.description",
            rewards: [rewardOf("flawless_melody")],
            progressMax: 2000,
          },
          {
            id: "ws-3000",
            status: "manual",
            titleKey: "tasks.ws3000.title",
            descriptionKey: "tasks.ws3000.description",
            rewards: [rewardOf("flawless_melody")],
            progressMax: 3000,
          },
          {
            id: "ws-4000",
            status: "manual",
            titleKey: "tasks.ws4000.title",
            descriptionKey: "tasks.ws4000.description",
            rewards: [rewardOf("flawless_melody")],
            progressMax: 4000,
          },
          {
            id: "ws-6000",
            status: "manual",
            titleKey: "tasks.ws6000.title",
            descriptionKey: "tasks.ws6000.description",
            rewards: [rewardOf("flawless_melody")],
            progressMax: 6000,
          },
          {
            id: "ws-8000",
            status: "manual",
            titleKey: "tasks.ws8000.title",
            descriptionKey: "tasks.ws8000.description",
            rewards: [rewardOf("flawless_melody")],
            progressMax: 8000,
          },
        ],
      },

      // ─── 任務記録 ───────────────────────────────────────────────────
      {
        id: "mission-log",
        tasks: [
          // ストーリー任務
          {
            id: "ml-mayor",
            status: "manual",
            titleKey: "tasks.mlMayor.title",
            descriptionKey: "tasks.mlMayor.description",
            rewards: [
              rewardOf("flawless_melody", 100),
              rewardOf("hidemarie_sword")],

          },
          {
            id: "ml-stopit",
            status: "manual",
            titleKey: "tasks.mlStopIt.title",
            descriptionKey: "tasks.mlStopIt.description",
            rewards: [
              rewardOf("flawless_melody", 100),
              rewardOf("auroras_coat_of_arms")
            ],
          },
          {
            id: "ml-phantom",
            status: "manual",
            titleKey: "tasks.mlPhantom.title",
            descriptionKey: "tasks.mlPhantom.description",
            rewards: [
              rewardOf("flawless_melody", 100),
              rewardOf("unit", 50000),
            ],
          },
          {
            id: "ml-goodbye",
            status: "manual",
            titleKey: "tasks.mlGoodbye.title",
            descriptionKey: "tasks.mlGoodbye.description",
            rewards: [
              rewardOf("flawless_melody", 100),
              rewardOf("hidemarie")
            ],
          },
          {
            id: "ml-faily-tale",
            status: "manual",
            titleKey: "tasks.mlFailyTale.title",
            descriptionKey: "tasks.mlFailyTale.description",
            rewards: [
              rewardOf("flawless_melody", 100),
              rewardOf("tit_in_a_fairy_tale")
            ],
          },
          {
            id: "ml-friend",
            status: "manual",
            titleKey: "tasks.mlFriend.title",
            descriptionKey: "tasks.mlFriend.description",
            rewards: [
              rewardOf("flawless_melody", 100),
              rewardOf("claras_wand")
            ],
          },
          {
            id: "ml-pajamas",
            status: "manual",
            titleKey: "tasks.mlPajamas.title",
            descriptionKey: "tasks.mlPajamas.description",
            rewards: [
              rewardOf("flawless_melody", 100),
              rewardOf("unit", 50000),
            ],
          },
          {
            id: "ml-brave",
            status: "manual",
            titleKey: "tasks.mlBrave.title",
            descriptionKey: "tasks.mlBrave.description",
            rewards: [
              rewardOf("flawless_melody", 100),
              rewardOf("adelheid")
            ],
          },
          // シーズン3後半追加任務
          {
            id: "ml-moving-melody",
            status: "manual",
            titleKey: "tasks.mlMovingMelody.title",
            descriptionKey: "tasks.mlMovingMelody.description",
            rewards: [rewardOf("flawless_melody", 100), rewardOf("aria_penlight")],
          },
          {
            id: "ml-galaxy-idol",
            status: "manual",
            titleKey: "tasks.mlGalaxyIdol.title",
            descriptionKey: "tasks.mlGalaxyIdol.description",
            rewards: [rewardOf("flawless_melody", 100), rewardOf("tenebrea_penlight")],
          },
          {
            id: "ml-song-through-galaxy",
            status: "manual",
            titleKey: "tasks.mlSongThroughGalaxy.title",
            descriptionKey: "tasks.mlSongThroughGalaxy.description",
            rewards: [rewardOf("flawless_melody", 100), rewardOf("singing_voice_tenebrea")],
          },
          {
            id: "ml-see-you-again",
            status: "manual",
            titleKey: "tasks.mlSeeYouAgain.title",
            descriptionKey: "tasks.mlSeeYouAgain.description",
            rewards: [rewardOf("flawless_melody", 100), rewardOf("unit", 50000)],
          },
          {
            id: "ml-our-performance",
            status: "manual",
            titleKey: "tasks.mlOurPerformance.title",
            descriptionKey: "tasks.mlOurPerformance.description",
            rewards: [rewardOf("edinity_profile"), rewardOf("edinity")],
          },
          // 旋律コレクション
          {
            id: "ml-melody-1",
            status: "manual",
            titleKey: "tasks.mlMelody1.title",
            descriptionKey: "tasks.mlMelody1.description",
            rewards: [
              rewardOf("support_data", 3),
              rewardOf("battle_memory", 7),
            ],
          },
          {
            id: "ml-melody-2",
            status: "manual",
            titleKey: "tasks.mlMelody2.title",
            descriptionKey: "tasks.mlMelody2.description",
            rewards: [
              rewardOf("support_data", 3),
              rewardOf("battle_memory", 7),
            ],
          },
          {
            id: "ml-melody-3",
            status: "manual",
            titleKey: "tasks.mlMelody3.title",
            descriptionKey: "tasks.mlMelody3.description",
            rewards: [
              rewardOf("support_data", 3),
              rewardOf("battle_memory", 7),
            ],
          },
          {
            id: "ml-melody-4",
            status: "manual",
            titleKey: "tasks.mlMelody4.title",
            descriptionKey: "tasks.mlMelody4.description",
            rewards: [
              rewardOf("support_data", 3),
              rewardOf("battle_memory", 7),
            ],
          },
          {
            id: "ml-melody-5",
            status: "manual",
            titleKey: "tasks.mlMelody5.title",
            descriptionKey: "tasks.mlMelody5.description",
            rewards: [
              rewardOf("support_data", 3),
              rewardOf("battle_memory", 7),
            ],
          },
          // シーズン記録
          {
            id: "ml-record-1",
            status: "manual",
            titleKey: "tasks.mlRecord1.title",
            descriptionKey: "tasks.mlRecord1.description",
            rewards: [
              rewardOf("flawless_melody", 200),
              rewardOf("memory_traces", 50),],
            progressMax: 46000,
          },
          {
            id: "ml-record-2",
            status: "manual",
            titleKey: "tasks.mlRecord2.title",
            descriptionKey: "tasks.mlRecord2.description",
            rewards: [
              rewardOf("flawless_melody", 300),
              rewardOf("memory_traces", 50),
            ],
            progressMax: 52000,
          },
          {
            id: "ml-record-3",
            status: "manual",
            titleKey: "tasks.mlRecord3.title",
            descriptionKey: "tasks.mlRecord3.description",
            rewards: [
              rewardOf("flawless_melody", 400),
              rewardOf("memory_traces", 50),
            ],
            progressMax: 58000,
          },
          // ペルソナ
          {
            id: "ml-persona",
            status: "manual",
            titleKey: "tasks.mlPersona.title",
            descriptionKey: "tasks.mlPersona.description",
          },
          {
            id: "ml-light-song",
            status: "manual",
            titleKey: "tasks.mlLightSong.title",
            descriptionKey: "tasks.mlLightSong.description",
          },
          {
            id: "ml-dark-song",
            status: "manual",
            titleKey: "tasks.mlDarkSong.title",
            descriptionKey: "tasks.mlDarkSong.description",
          },
          {
            id: "ml-perfect-method",
            status: "manual",
            titleKey: "tasks.mlPerfectMethod.title",
            descriptionKey: "tasks.mlPerfectMethod.description",
            rewards: [rewardOf("perfect_method")],
          },
          // 光と闇の歌（derived）
          {
            id: "ml-light-dark-song",
            status: "derived",
            titleKey: "tasks.mlLightDarkSong.title",
            descriptionKey: "tasks.mlLightDarkSong.description",
            childIds: ["ml-light-of-song", "ml-dark-of-song"],
            rewards: [rewardOf("song_of_light_and_darkness")],
          },
          {
            id: "ml-light-of-song",
            status: "manual",
            titleKey: "tasks.mlLightOfSong.title",
            descriptionKey: "tasks.mlLightOfSong.description",
            isChild: true,
            rewards: [
              rewardOf("flawless_melody", 200),
              rewardOf("potencial_disk", 18)
            ],
          },
          {
            id: "ml-dark-of-song",
            status: "manual",
            titleKey: "tasks.mlDarkOfSong.title",
            descriptionKey: "tasks.mlDarkOfSong.description",
            isChild: true,
            rewards: [
              rewardOf("flawless_melody", 200),
              rewardOf("potencial_disk", 18)
            ],
          },
          // 刻印装備
          {
            id: "ml-light-equip",
            status: "manual",
            titleKey: "tasks.mlLightEquip.title",
            descriptionKey: "tasks.mlLightEquip.description",
          },
          {
            id: "ml-dark-equip",
            status: "manual",
            titleKey: "tasks.mlDarkEquip.title",
            descriptionKey: "tasks.mlDarkEquip.description",
          },
          // オールシーズン（derived）
          {
            id: "ml-allseason",
            status: "derived",
            titleKey: "tasks.mlAllSeason.title",
            descriptionKey: "tasks.mlAllSeason.description",
            rewards: [rewardOf("all_collector")],
            progressMax: 2,
            childIds: ["ml-season-a", "ml-season-b"],
          },
          {
            id: "ml-season-a",
            status: "manual",
            titleKey: "tasks.mlSeasonA.title",
            descriptionKey: "tasks.mlSeasonA.description",
            isChild: true,
          },
          {
            id: "ml-season-b",
            status: "manual",
            titleKey: "tasks.mlSeasonB.title",
            descriptionKey: "tasks.mlSeasonB.description",
            isChild: true,
          },
          // 銀河系のオーケストラ
          {
            id: "ml-orchestra",
            status: "manual",
            titleKey: "tasks.mlOrchestra.title",
            descriptionKey: "tasks.mlOrchestra.description",
            rewards: [rewardOf("singing_voice_resonates_across_the_galaxy")],
          },
        ],
      },

      // ─── カオス究明 ─────────────────────────────────────────────────
      {
        id: "chaos-analysis",
        tasks: [
          // カオス征服Ⅰ–Ⅷ
          {
            id: "ca-conquest-1", status: "manual", titleKey: "tasks.caConquest1.title", descriptionKey: "tasks.caConquest1.description",
            rewards: [rewardOf("singing_voice_resonates_across_the_galaxy")],
          },
          { id: "ca-conquest-2", status: "manual", titleKey: "tasks.caConquest2.title", descriptionKey: "tasks.caConquest2.description" },
          { id: "ca-conquest-3", status: "manual", titleKey: "tasks.caConquest3.title", descriptionKey: "tasks.caConquest3.description" },
          { id: "ca-conquest-4", status: "manual", titleKey: "tasks.caConquest4.title", descriptionKey: "tasks.caConquest4.description" },
          { id: "ca-conquest-5", status: "manual", titleKey: "tasks.caConquest5.title", descriptionKey: "tasks.caConquest5.description" },
          { id: "ca-conquest-6", status: "manual", titleKey: "tasks.caConquest6.title", descriptionKey: "tasks.caConquest6.description" },
          { id: "ca-conquest-7", status: "manual", titleKey: "tasks.caConquest7.title", descriptionKey: "tasks.caConquest7.description" },
          { id: "ca-conquest-8", status: "manual", titleKey: "tasks.caConquest8.title", descriptionKey: "tasks.caConquest8.description" },
          // 単体
          { id: "ca-last-heart", status: "manual", titleKey: "tasks.caLastHeart.title", descriptionKey: "tasks.caLastHeart.description" },
          { id: "ca-burning-anthem", status: "manual", titleKey: "tasks.caBurningAnthem.title", descriptionKey: "tasks.caBurningAnthem.description" },
          { id: "ca-give-up", status: "manual", titleKey: "tasks.caGiveUp.title", descriptionKey: "tasks.caGiveUp.description" },
          { id: "ca-annotation", status: "manual", titleKey: "tasks.caAnnotation.title", descriptionKey: "tasks.caAnnotation.description" },
          { id: "ca-lucky-goddess", status: "manual", titleKey: "tasks.caLuckyGoddess.title", descriptionKey: "tasks.caLuckyGoddess.description" },
          { id: "ca-mad-bid", status: "manual", titleKey: "tasks.caMadBid.title", descriptionKey: "tasks.caMadBid.description" },
          {
            id: "ca-abyssal-mark", status: "manual", titleKey: "tasks.caAbyssalMark.title", descriptionKey: "tasks.caAbyssalMark.description",
            rewards: [rewardOf("support_data", 5), rewardOf("battle_memory", 10)],
          },
          // 作品批評家（derived: 7 children）
          {
            id: "ca-art-critic",
            status: "derived",
            titleKey: "tasks.caArtCritic.title",
            descriptionKey: "tasks.caArtCritic.description",
            childIds: [
              "ca-discerning-audience",
              "ca-boring-audience",
              "ca-noise-audience",
              "ca-erosion-audience",
              "ca-mirror-audience",
              "ca-emotional-audience",
              "ca-symbolic-audience",
            ],
          },
          { id: "ca-discerning-audience", status: "manual", titleKey: "tasks.caDiscerningAudience.title", descriptionKey: "tasks.caDiscerningAudience.description", isChild: true },
          { id: "ca-boring-audience", status: "manual", titleKey: "tasks.caBoringAudience.title", descriptionKey: "tasks.caBoringAudience.description", isChild: true },
          { id: "ca-noise-audience", status: "manual", titleKey: "tasks.caNoiseAudience.title", descriptionKey: "tasks.caNoiseAudience.description", isChild: true },
          { id: "ca-erosion-audience", status: "manual", titleKey: "tasks.caErosionAudience.title", descriptionKey: "tasks.caErosionAudience.description", isChild: true },
          { id: "ca-mirror-audience", status: "manual", titleKey: "tasks.caMirrorAudience.title", descriptionKey: "tasks.caMirrorAudience.description", isChild: true },
          { id: "ca-emotional-audience", status: "manual", titleKey: "tasks.caEmotionalAudience.title", descriptionKey: "tasks.caEmotionalAudience.description", isChild: true },
          { id: "ca-symbolic-audience", status: "manual", titleKey: "tasks.caSymbolicAudience.title", descriptionKey: "tasks.caSymbolicAudience.description", isChild: true },
          { id: "ca-hidden-work", status: "manual", titleKey: "tasks.caHiddenWork.title", descriptionKey: "tasks.caHiddenWork.description", isChild: true },
          { id: "ca-last-exhibition", status: "manual", titleKey: "tasks.caLastExhibition.title", descriptionKey: "tasks.caLastExhibition.description", isChild: true },
          { id: "ca-all-relics", status: "manual", titleKey: "tasks.caAllRelics.title", descriptionKey: "tasks.caAllRelics.description", isChild: true },
          { id: "ca-stop-admiring", status: "manual", titleKey: "tasks.caStopAdmiring.title", descriptionKey: "tasks.caStopAdmiring.description", isChild: true },
          { id: "ca-eternal-noon", status: "manual", titleKey: "tasks.caEternalNoon.title", descriptionKey: "tasks.caEternalNoon.description", isChild: true },
          { id: "ca-art-is-hard", status: "manual", titleKey: "tasks.caArtIsHard.title", descriptionKey: "tasks.caArtIsHard.description", isChild: true },
          // すべての悲劇は本心だ（derived: 3 children）
          {
            id: "ca-all-tragedy",
            status: "derived",
            titleKey: "tasks.caAllTragedy.title",
            descriptionKey: "tasks.caAllTragedy.description",
            childIds: ["ca-first-erased", "ca-way-to-unite", "ca-most-valuable"],
          },
          { id: "ca-first-erased", status: "manual", titleKey: "tasks.caFirstErased.title", descriptionKey: "tasks.caFirstErased.description", isChild: true },
          { id: "ca-way-to-unite", status: "manual", titleKey: "tasks.caWayToUnite.title", descriptionKey: "tasks.caWayToUnite.description", isChild: true },
          { id: "ca-most-valuable", status: "manual", titleKey: "tasks.caMostValuable.title", descriptionKey: "tasks.caMostValuable.description", isChild: true },
          // 不完全な傑作の完成（derived: 3 children）
          {
            id: "ca-incomplete-masterpiece",
            status: "derived",
            titleKey: "tasks.caIncompleteMasterpiece.title",
            descriptionKey: "tasks.caIncompleteMasterpiece.description",
            childIds: ["ca-stuffed-breath", "ca-scratched-void", "ca-paradise-silence"],
          },
          { id: "ca-stuffed-breath", status: "manual", titleKey: "tasks.caStuffedBreath.title", descriptionKey: "tasks.caStuffedBreath.description", isChild: true },
          { id: "ca-scratched-void", status: "manual", titleKey: "tasks.caScratchedVoid.title", descriptionKey: "tasks.caScratchedVoid.description", isChild: true },
          { id: "ca-paradise-silence", status: "manual", titleKey: "tasks.caParadiseSilence.title", descriptionKey: "tasks.caParadiseSilence.description", isChild: true },
          { id: "ca-critic-legacy", status: "manual", titleKey: "tasks.caCriticLegacy.title", descriptionKey: "tasks.caCriticLegacy.description", isChild: true },
          { id: "ca-betrayal-moment", status: "manual", titleKey: "tasks.caBetrayalMoment.title", descriptionKey: "tasks.caBetrayalMoment.description", isChild: true },
          { id: "ca-incomprehensible-obsession", status: "manual", titleKey: "tasks.caIncomprehensibleObsession.title", descriptionKey: "tasks.caIncomprehensibleObsession.description", isChild: true },
          // メシアの信者（derived: 3 children shared with 名もなき芸術家）
          {
            id: "ca-messiah-believer",
            status: "derived",
            titleKey: "tasks.caMessiahBeliever.title",
            descriptionKey: "tasks.caMessiahBeliever.description",
            childIds: ["ca-most-desperate", "ca-eternal-anthem", "ca-stuffed-chest"],
          },
          { id: "ca-most-desperate", status: "manual", titleKey: "tasks.caMostDesperate.title", descriptionKey: "tasks.caMostDesperate.description", isChild: true },
          { id: "ca-eternal-anthem", status: "manual", titleKey: "tasks.caEternalAnthem.title", descriptionKey: "tasks.caEternalAnthem.description", isChild: true },
          { id: "ca-stuffed-chest", status: "manual", titleKey: "tasks.caStuffedChest.title", descriptionKey: "tasks.caStuffedChest.description", isChild: true },
          // 騒音の指揮者（derived: 3 children shared with 名もなき芸術家）
          {
            id: "ca-noise-conductor",
            status: "derived",
            titleKey: "tasks.caNoiseCondutor.title",
            descriptionKey: "tasks.caNoiseCondutor.description",
            childIds: ["ca-aria-high", "ca-abyss-vibration", "ca-blank-score"],
          },
          { id: "ca-aria-high", status: "manual", titleKey: "tasks.caAriaHigh.title", descriptionKey: "tasks.caAriaHigh.description", isChild: true },
          { id: "ca-abyss-vibration", status: "manual", titleKey: "tasks.caAbyssVibration.title", descriptionKey: "tasks.caAbyssVibration.description", isChild: true },
          { id: "ca-blank-score", status: "manual", titleKey: "tasks.caBlankScore.title", descriptionKey: "tasks.caBlankScore.description", isChild: true },
          // 虚像の収集家（derived: 3 children shared with 名もなき芸術家）
          {
            id: "ca-phantom-collector",
            status: "derived",
            titleKey: "tasks.caPhantomCollector.title",
            descriptionKey: "tasks.caPhantomCollector.description",
            childIds: ["ca-pure-corruption", "ca-sacrifice-salvation", "ca-faceless"],
          },
          { id: "ca-pure-corruption", status: "manual", titleKey: "tasks.caPureCorruption.title", descriptionKey: "tasks.caPureCorruption.description", isChild: true },
          { id: "ca-sacrifice-salvation", status: "manual", titleKey: "tasks.caSacrificeSalvation.title", descriptionKey: "tasks.caSacrificeSalvation.description", isChild: true },
          { id: "ca-faceless", status: "manual", titleKey: "tasks.caFaceless.title", descriptionKey: "tasks.caFaceless.description", isChild: true },
          // 悲劇の下描き（derived: 2 children shared with 名もなき芸術家）
          {
            id: "ca-tragedy-sketch",
            status: "derived",
            titleKey: "tasks.caTragdySketch.title",
            descriptionKey: "tasks.caTragdySketch.description",
            childIds: ["ca-blank-anthem", "ca-broken-divine"],
          },
          { id: "ca-blank-anthem", status: "manual", titleKey: "tasks.caBlankAnthem.title", descriptionKey: "tasks.caBlankAnthem.description", isChild: true },
          { id: "ca-broken-divine", status: "manual", titleKey: "tasks.caBrokenDivine.title", descriptionKey: "tasks.caBrokenDivine.description", isChild: true },
          // エリナドの栄光（derived）
          {
            id: "ca-eridona-glory",
            status: "derived",
            titleKey: "tasks.caEridonaGlory.title",
            descriptionKey: "tasks.caEridonaGlory.description",
            childIds: [
              "ca-hidden-work",
              "ca-last-exhibition",
              "ca-all-relics",
              "ca-stop-admiring",
              "ca-eternal-noon",
              "ca-art-is-hard",
              "ca-vivid-than-burning-city",
              "ca-first-erased",
              "ca-way-to-unite",
              "ca-most-valuable",
              "ca-stuffed-breath",
              "ca-scratched-void",
              "ca-paradise-silence",
            ],
            rewards: [rewardOf("glory_of_elinad")],
          },
          {
            id: "ca-invitation-beyond-mist",
            status: "manual",
            titleKey: "tasks.caInvitationBeyondMist.title",
            descriptionKey: "tasks.caInvitationBeyondMist.description",
            isChild: true,
            rewards: [rewardOf("support_data", 5), rewardOf("battle_memory", 10)],
          },
          {
            id: "ca-vivid-than-burning-city",
            status: "manual",
            titleKey: "tasks.caVividThanBurningCity.title",
            descriptionKey: "tasks.caVividThanBurningCity.description",
            isChild: true,
            rewards: [rewardOf("flawless_melody", 200)],
            progressMax: 1,
          },
          {
            id: "ca-script-vacant-seat",
            status: "manual",
            titleKey: "tasks.caScriptVacantSeat.title",
            descriptionKey: "tasks.caScriptVacantSeat.description",
            rewards: [rewardOf("support_data", 5), rewardOf("battle_memory", 10)],
          },
          {
            id: "ca-unscripted-ending",
            status: "manual",
            titleKey: "tasks.caUnscriptedEnding.title",
            descriptionKey: "tasks.caUnscriptedEnding.description",
            rewards: [rewardOf("support_data", 5), rewardOf("battle_memory", 10)],
          },
          {
            id: "ca-you-too-the-same",
            status: "manual",
            titleKey: "tasks.caYouTooTheSame.title",
            descriptionKey: "tasks.caYouTooTheSame.description",
            rewards: [rewardOf("support_data", 5), rewardOf("battle_memory", 10)],
          },
          {
            id: "ca-love-is-a-lie",
            status: "manual",
            titleKey: "tasks.caLoveIsALie.title",
            descriptionKey: "tasks.caLoveIsALie.description",
            rewards: [rewardOf("support_data", 5), rewardOf("battle_memory", 10)],
          },
          // 名もなき芸術家（derived: 14 children including shared）
          {
            id: "ca-nameless-artist",
            status: "derived",
            titleKey: "tasks.caNamelessArtist.title",
            descriptionKey: "tasks.caNamelessArtist.description",
            childIds: [
              "ca-critic-legacy",
              "ca-betrayal-moment",
              "ca-incomprehensible-obsession",
              "ca-most-desperate",
              "ca-eternal-anthem",
              "ca-stuffed-chest",
              "ca-aria-high",
              "ca-abyss-vibration",
              "ca-blank-score",
              "ca-pure-corruption",
              "ca-sacrifice-salvation",
              "ca-faceless",
              "ca-blank-anthem",
              "ca-broken-divine",
            ],
            rewards: [rewardOf("nameless_artist")],
          },
          {
            id: "ca-unknown-audition", status: "manual", titleKey: "tasks.caUnknownAudition.title", descriptionKey: "tasks.caUnknownAudition.description",
            rewards: [rewardOf("unknown_audition")],
          },
          {
            id: "ca-credit-collector", status: "manual", titleKey: "tasks.caCreditCollector.title", descriptionKey: "tasks.caCreditCollector.description",
            rewards: [rewardOf("credit_collector")],
          },
          // カーテンコールの解放（derived: 2 children）
          {
            id: "ca-curtain-call",
            status: "derived",
            titleKey: "tasks.caCurtainCall.title",
            descriptionKey: "tasks.caCurtainCall.description",
            childIds: ["ca-terrible-encore", "ca-conductor-finale"],
            rewards: [rewardOf("release_of_the_curtain_call")],
          },
          { id: "ca-terrible-encore", status: "manual", titleKey: "tasks.caTerribleEncore.title", descriptionKey: "tasks.caTerribleEncore.description", isChild: true },
          {
            id: "ca-conductor-finale",
            status: "manual",
            titleKey: "tasks.caConductorFinale.title",
            descriptionKey: "tasks.caConductorFinale.description",
            isChild: true,
            rewards: [rewardOf("flawless_melody", 200)],
            progressMax: 6,
          },
        ],
      },

      // ─── 戦闘報告 ───────────────────────────────────────────────────
      {
        id: "battle-report",
        tasks: [
          {
            id: "br-end-critique", status: "manual", titleKey: "tasks.brEndCritique.title", descriptionKey: "tasks.brEndCritique.description",
            rewards: [
              rewardOf("universal_support_certificate", 15),
              rewardOf("universal_tactics_certificate", 15)
            ],
          },
          {
            id: "br-disturb-art", status: "manual", titleKey: "tasks.brDisturbArt.title", descriptionKey: "tasks.brDisturbArt.description",
            rewards: [
              rewardOf("universal_support_certificate", 15),
              rewardOf("universal_tactics_certificate", 15)
            ],
          },
          // 千の顔（derived: 3 children）
          {
            id: "br-thousand-faces",
            status: "derived",
            titleKey: "tasks.brThousandFaces.title",
            descriptionKey: "tasks.brThousandFaces.description",
            childIds: [
              "br-cruelbone",
              "br-serapion",
              "br-soul-collector",
              "br-hatred-condemnation",
              "br-encroaching-blackout",
            ],
            rewards: [rewardOf("thousand_faces")],
          },
          {
            id: "br-cruelbone", status: "manual", titleKey: "tasks.brCruelbone.title", descriptionKey: "tasks.brCruelbone.description", isChild: true,
            rewards: [rewardOf("flawless_melody", 200)],
          },
          {
            id: "br-serapion", status: "manual", titleKey: "tasks.brSerapion.title", descriptionKey: "tasks.brSerapion.description", isChild: true,
            rewards: [rewardOf("flawless_melody", 200)],
          },
          {
            id: "br-soul-collector", status: "manual", titleKey: "tasks.brSoulCollector.title", descriptionKey: "tasks.brSoulCollector.description", isChild: true,
            rewards: [rewardOf("flawless_melody", 200)],
          },
          {
            id: "br-hatred-condemnation", status: "manual", titleKey: "tasks.brHatredCondemnation.title", descriptionKey: "tasks.brHatredCondemnation.description", isChild: true,
            rewards: [rewardOf("flawless_melody", 200)],
          },
          {
            id: "br-encroaching-blackout",
            status: "manual",
            titleKey: "tasks.brEncroachingBlackout.title",
            descriptionKey: "tasks.brEncroachingBlackout.description",
            isChild: true,
            rewards: [rewardOf("flawless_melody", 200)],
          },
          // 舞台独占（derived: 3 children）
          {
            id: "br-stage-monopoly",
            status: "derived",
            titleKey: "tasks.brStageMonopoly.title",
            descriptionKey: "tasks.brStageMonopoly.description",
            childIds: ["br-phantom-extra", "br-hero-nightmare", "br-arrogance-remnant"],
            rewards: [rewardOf("monopoly_on_stage")],

          },
          { id: "br-phantom-extra", status: "manual", titleKey: "tasks.brPhantomExtra.title", descriptionKey: "tasks.brPhantomExtra.description", isChild: true },
          {
            id: "br-hero-nightmare", status: "manual", titleKey: "tasks.brHeroNightmare.title", descriptionKey: "tasks.brHeroNightmare.description", isChild: true,
            rewards: [
              rewardOf("collapsed_elinad"),
              rewardOf("collapsed_elinad_profile")
            ],
          },
          {
            id: "br-arrogance-remnant",
            status: "manual",
            titleKey: "tasks.brArroganceRemnant.title",
            descriptionKey: "tasks.brArroganceRemnant.description",
            isChild: true,
            rewards: [rewardOf("phantom_theater_profile"), rewardOf("phantom_theater")],
          },
        ],
      },

      // ─── 壊滅作戦 ───────────────────────────────────────────────────
      {
        id: "annihilation",
        tasks: [
          // クルーエルボーン 難易度1–10
          { id: "an-cb-1", status: "manual", titleKey: "tasks.anCb1.title", descriptionKey: "tasks.anCb1.description" },
          { id: "an-cb-2", status: "manual", titleKey: "tasks.anCb2.title", descriptionKey: "tasks.anCb2.description" },
          { id: "an-cb-3", status: "manual", titleKey: "tasks.anCb3.title", descriptionKey: "tasks.anCb3.description" },
          { id: "an-cb-4", status: "manual", titleKey: "tasks.anCb4.title", descriptionKey: "tasks.anCb4.description" },
          { id: "an-cb-5", status: "manual", titleKey: "tasks.anCb5.title", descriptionKey: "tasks.anCb5.description" },
          { id: "an-cb-6", status: "manual", titleKey: "tasks.anCb6.title", descriptionKey: "tasks.anCb6.description" },
          { id: "an-cb-7", status: "manual", titleKey: "tasks.anCb7.title", descriptionKey: "tasks.anCb7.description" },
          { id: "an-cb-8", status: "manual", titleKey: "tasks.anCb8.title", descriptionKey: "tasks.anCb8.description" },
          { id: "an-cb-9", status: "manual", titleKey: "tasks.anCb9.title", descriptionKey: "tasks.anCb9.description" },
          { id: "an-cb-10", status: "manual", titleKey: "tasks.anCb10.title", descriptionKey: "tasks.anCb10.description" },
          // セラフィオン 難易度1–10
          { id: "an-se-1", status: "manual", titleKey: "tasks.anSe1.title", descriptionKey: "tasks.anSe1.description" },
          { id: "an-se-2", status: "manual", titleKey: "tasks.anSe2.title", descriptionKey: "tasks.anSe2.description" },
          { id: "an-se-3", status: "manual", titleKey: "tasks.anSe3.title", descriptionKey: "tasks.anSe3.description" },
          { id: "an-se-4", status: "manual", titleKey: "tasks.anSe4.title", descriptionKey: "tasks.anSe4.description" },
          { id: "an-se-5", status: "manual", titleKey: "tasks.anSe5.title", descriptionKey: "tasks.anSe5.description" },
          { id: "an-se-6", status: "manual", titleKey: "tasks.anSe6.title", descriptionKey: "tasks.anSe6.description" },
          { id: "an-se-7", status: "manual", titleKey: "tasks.anSe7.title", descriptionKey: "tasks.anSe7.description" },
          { id: "an-se-8", status: "manual", titleKey: "tasks.anSe8.title", descriptionKey: "tasks.anSe8.description" },
          { id: "an-se-9", status: "manual", titleKey: "tasks.anSe9.title", descriptionKey: "tasks.anSe9.description" },
          { id: "an-se-10", status: "manual", titleKey: "tasks.anSe10.title", descriptionKey: "tasks.anSe10.description" },
          // ソウルコレクター 難易度1–10
          { id: "an-sc-1", status: "manual", titleKey: "tasks.anSc1.title", descriptionKey: "tasks.anSc1.description" },
          { id: "an-sc-2", status: "manual", titleKey: "tasks.anSc2.title", descriptionKey: "tasks.anSc2.description" },
          { id: "an-sc-3", status: "manual", titleKey: "tasks.anSc3.title", descriptionKey: "tasks.anSc3.description" },
          { id: "an-sc-4", status: "manual", titleKey: "tasks.anSc4.title", descriptionKey: "tasks.anSc4.description" },
          { id: "an-sc-5", status: "manual", titleKey: "tasks.anSc5.title", descriptionKey: "tasks.anSc5.description" },
          { id: "an-sc-6", status: "manual", titleKey: "tasks.anSc6.title", descriptionKey: "tasks.anSc6.description" },
          { id: "an-sc-7", status: "manual", titleKey: "tasks.anSc7.title", descriptionKey: "tasks.anSc7.description" },
          { id: "an-sc-8", status: "manual", titleKey: "tasks.anSc8.title", descriptionKey: "tasks.anSc8.description" },
          { id: "an-sc-9", status: "manual", titleKey: "tasks.anSc9.title", descriptionKey: "tasks.anSc9.description" },
          { id: "an-sc-10", status: "manual", titleKey: "tasks.anSc10.title", descriptionKey: "tasks.anSc10.description" },
        ],
      },
    ],
  },
  // ─── season-4: 砕けた光と爪 ──────────────────────────────────────────────
  {
    id: "season-4",
    nameKey: "season.s4",
    categories: [
      // ─── 今週の達成スコア ──────────────────────────────────────────
      {
        id: "weekly-score",
        tasks: [
          {
            id: "s4-ws-1",
            status: "manual",
            titleKey: "tasks.s4WS1.title",
            descriptionKey: "tasks.s4WS1.description",
            rewards: [
              rewardOf("ecstatic_crystal", 1000),
              rewardOf("unit", 25000),
            ],
            progressMax: 2000,
          },
          {
            id: "s4-ws-2",
            status: "manual",
            titleKey: "tasks.s4WS2.title",
            descriptionKey: "tasks.s4WS2.description",
            rewards: [
              rewardOf("ecstatic_crystal", 1000),
              rewardOf("crystal", 20),
            ],
            progressMax: 3000,
          },
          {
            id: "s4-ws-3",
            status: "manual",
            titleKey: "tasks.s4WS3.title",
            descriptionKey: "tasks.s4WS3.description",
            rewards: [
              rewardOf("ecstatic_crystal", 1000),
              rewardOf("crystal", 20),
            ],
            progressMax: 4000,
          },
          {
            id: "s4-ws-4",
            status: "manual",
            titleKey: "tasks.s4WS4.title",
            descriptionKey: "tasks.s4WS4.description",
            rewards: [
              rewardOf("ecstatic_crystal", 1000),
              rewardOf("crystal", 20),
            ],
            progressMax: 6000,
          },
          {
            id: "s4-ws-5",
            status: "manual",
            titleKey: "tasks.s4WS5.title",
            descriptionKey: "tasks.s4WS5.description",
            rewards: [
              rewardOf("ecstatic_crystal", 1000),
              rewardOf("crystal", 20),
            ],
            progressMax: 8000,
          },
        ],
      },

      // ─── 任務記録 ──────────────────────────────────────────────
      {
        id: "mission-log",
        tasks: [
          {
            id: "s4-ml-1",
            status: "manual",
            titleKey: "tasks.s4ML1.title",
            descriptionKey: "tasks.s4ML1.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("unit", 25000),
            ],
            progressMax: 1,
          },
          {
            id: "s4-ml-2",
            status: "manual",
            titleKey: "tasks.s4ML2.title",
            descriptionKey: "tasks.s4ML2.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("hildes_bow"),
            ],
            progressMax: 1,
          },
          {
            id: "s4-ml-3",
            status: "manual",
            titleKey: "tasks.s4ML3.title",
            descriptionKey: "tasks.s4ML3.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("unis_gatling_gun"),
            ],
            progressMax: 1,
          },
          {
            id: "s4-ml-4",
            status: "manual",
            titleKey: "tasks.s4ML4.title",
            descriptionKey: "tasks.s4ML4.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("shattered_light_hilde"),
            ],
            progressMax: 1,
          },
          {
            id: "s4-ml-5",
            status: "manual",
            titleKey: "tasks.s4ML5.title",
            descriptionKey: "tasks.s4ML5.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("cute_snake_ornament"),
            ],
            progressMax: 1,
          },
          {
            id: "s4-ml-6",
            status: "manual",
            titleKey: "tasks.s4ML6.title",
            descriptionKey: "tasks.s4ML6.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("black_panther_ears"),
            ],
            progressMax: 1,
          },
          {
            id: "s4-ml-7",
            status: "manual",
            titleKey: "tasks.s4ML7.title",
            descriptionKey: "tasks.s4ML7.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("shattered_light_arabella"),
            ],
            progressMax: 1,
          },
          {
            id: "s4-ml-8",
            status: "manual",
            titleKey: "tasks.s4ML8.title",
            descriptionKey: "tasks.s4ML8.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("unit", 50000),
            ],
            progressMax: 1,
          },
          {
            id: "s4-ml-9",
            status: "manual",
            titleKey: "tasks.s4ML9.title",
            descriptionKey: "tasks.s4ML9.description",
            rewards: [
              rewardOf("support_data", 4),
              rewardOf("battle_memory", 8),
            ],
            progressMax: 10000,
          },
          {
            id: "s4-ml-10",
            status: "manual",
            titleKey: "tasks.s4ML10.title",
            descriptionKey: "tasks.s4ML10.description",
            rewards: [
              rewardOf("support_data", 4),
              rewardOf("battle_memory", 8),
            ],
            progressMax: 30000,
          },
          {
            id: "s4-ml-11",
            status: "manual",
            titleKey: "tasks.s4ML11.title",
            descriptionKey: "tasks.s4ML11.description",
            rewards: [
              rewardOf("support_data", 4),
              rewardOf("battle_memory", 8),
            ],
            progressMax: 50000,
          },
          {
            id: "s4-ml-12",
            status: "manual",
            titleKey: "tasks.s4ML12.title",
            descriptionKey: "tasks.s4ML12.description",
            rewards: [
              rewardOf("support_data", 4),
              rewardOf("battle_memory", 8),
            ],
            progressMax: 100000,
          },
          {
            id: "s4-ml-13",
            status: "manual",
            titleKey: "tasks.s4ML13.title",
            descriptionKey: "tasks.s4ML13.description",
            rewards: [
              rewardOf("support_data", 4),
              rewardOf("battle_memory", 8),
            ],
            progressMax: 150000,
          },
          {
            id: "s4-ml-14",
            status: "manual",
            titleKey: "tasks.s4ML14.title",
            descriptionKey: "tasks.s4ML14.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
              rewardOf("memory_traces", 50),
            ],
            progressMax: 1,
          },
          {
            id: "s4-ml-15",
            status: "manual",
            titleKey: "tasks.s4ML15.title",
            descriptionKey: "tasks.s4ML15.description",
            rewards: [
              rewardOf("ecstatic_crystal", 300),
              rewardOf("memory_traces", 50),
            ],
            progressMax: 1,
          },
          {
            id: "s4-ml-16",
            status: "manual",
            titleKey: "tasks.s4ML16.title",
            descriptionKey: "tasks.s4ML16.description",
            rewards: [
              rewardOf("ecstatic_crystal", 400),
              rewardOf("memory_traces", 50),
            ],
            progressMax: 1,
          },
          {
            id: "s4-ml-17",
            status: "manual",
            titleKey: "tasks.s4ML17.title",
            descriptionKey: "tasks.s4ML17.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ml-18",
            status: "manual",
            titleKey: "tasks.s4ML18.title",
            descriptionKey: "tasks.s4ML18.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ml-19",
            status: "manual",
            titleKey: "tasks.s4ML19.title",
            descriptionKey: "tasks.s4ML19.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ml-20",
            status: "manual",
            titleKey: "tasks.s4ML20.title",
            descriptionKey: "tasks.s4ML20.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ml-21",
            status: "manual",
            titleKey: "tasks.s4ML21.title",
            descriptionKey: "tasks.s4ML21.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ml-22",
            status: "manual",
            titleKey: "tasks.s4ML22.title",
            descriptionKey: "tasks.s4ML22.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ml-23",
            status: "manual",
            titleKey: "tasks.s4ML23.title",
            descriptionKey: "tasks.s4ML23.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ml-24",
            status: "manual",
            titleKey: "tasks.s4ML24.title",
            descriptionKey: "tasks.s4ML24.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ml-25",
            status: "manual",
            titleKey: "tasks.s4ML25.title",
            descriptionKey: "tasks.s4ML25.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ml-26",
            status: "manual",
            titleKey: "tasks.s4ML26.title",
            descriptionKey: "tasks.s4ML26.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ml-27",
            status: "manual",
            titleKey: "tasks.s4ML27.title",
            descriptionKey: "tasks.s4ML27.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ml-28",
            status: "manual",
            titleKey: "tasks.s4ML28.title",
            descriptionKey: "tasks.s4ML28.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ml-29",
            status: "manual",
            titleKey: "tasks.s4ML29.title",
            descriptionKey: "tasks.s4ML29.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ml-30",
            status: "manual",
            titleKey: "tasks.s4ML30.title",
            descriptionKey: "tasks.s4ML30.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ml-31",
            status: "manual",
            titleKey: "tasks.s4ML31.title",
            descriptionKey: "tasks.s4ML31.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ml-32",
            status: "derived",
            titleKey: "tasks.s4ML32.title",
            descriptionKey: "tasks.s4ML32.description",
            rewards: [
              rewardOf("prism_lens", 2),
            ],
            childIds: ["s4-ml-33", "s4-ml-34", "s4-ml-35", "s4-ml-36", "s4-ml-37", "s4-ml-38", "s4-ml-39", "s4-ml-40", "s4-ml-41", "s4-ml-42", "s4-ml-43", "s4-ml-44", "s4-ml-45", "s4-ml-46", "s4-ml-47"],
          },
          {
            id: "s4-ml-33",
            status: "manual",
            titleKey: "tasks.s4ML33.title",
            descriptionKey: "tasks.s4ML33.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ml-34",
            status: "manual",
            titleKey: "tasks.s4ML34.title",
            descriptionKey: "tasks.s4ML34.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ml-35",
            status: "manual",
            titleKey: "tasks.s4ML35.title",
            descriptionKey: "tasks.s4ML35.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ml-36",
            status: "manual",
            titleKey: "tasks.s4ML36.title",
            descriptionKey: "tasks.s4ML36.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ml-37",
            status: "manual",
            titleKey: "tasks.s4ML37.title",
            descriptionKey: "tasks.s4ML37.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ml-38",
            status: "manual",
            titleKey: "tasks.s4ML38.title",
            descriptionKey: "tasks.s4ML38.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ml-39",
            status: "manual",
            titleKey: "tasks.s4ML39.title",
            descriptionKey: "tasks.s4ML39.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ml-40",
            status: "manual",
            titleKey: "tasks.s4ML40.title",
            descriptionKey: "tasks.s4ML40.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ml-41",
            status: "manual",
            titleKey: "tasks.s4ML41.title",
            descriptionKey: "tasks.s4ML41.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ml-42",
            status: "manual",
            titleKey: "tasks.s4ML42.title",
            descriptionKey: "tasks.s4ML42.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ml-43",
            status: "manual",
            titleKey: "tasks.s4ML43.title",
            descriptionKey: "tasks.s4ML43.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ml-44",
            status: "manual",
            titleKey: "tasks.s4ML44.title",
            descriptionKey: "tasks.s4ML44.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ml-45",
            status: "manual",
            titleKey: "tasks.s4ML45.title",
            descriptionKey: "tasks.s4ML45.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ml-46",
            status: "manual",
            titleKey: "tasks.s4ML46.title",
            descriptionKey: "tasks.s4ML46.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ml-47",
            status: "manual",
            titleKey: "tasks.s4ML47.title",
            descriptionKey: "tasks.s4ML47.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ml-48",
            status: "derived",
            titleKey: "tasks.s4ML48.title",
            descriptionKey: "tasks.s4ML48.description",
            rewards: [
              rewardOf("desire_guidepost"),
            ],
            childIds: ["s4-ml-17", "s4-ml-18", "s4-ml-19", "s4-ml-20", "s4-ml-21", "s4-ml-22", "s4-ml-23", "s4-ml-24", "s4-ml-25", "s4-ml-26", "s4-ml-27", "s4-ml-28", "s4-ml-29", "s4-ml-30", "s4-ml-31"],
          },
          {
            id: "s4-ml-49",
            status: "derived",
            titleKey: "tasks.s4ML49.title",
            descriptionKey: "tasks.s4ML49.description",
            rewards: [
              rewardOf("greed_without_price"),
            ],
            childIds: ["s4-ml-50", "s4-ml-51"],
          },
          {
            id: "s4-ml-50",
            status: "manual",
            titleKey: "tasks.s4ML50.title",
            descriptionKey: "tasks.s4ML50.description",
            rewards: [
              rewardOf("universal_support_certificate", 15),
              rewardOf("universal_tactics_certificate", 15),
            ],
            progressMax: 1,
            isChild: true,
          },
          {
            id: "s4-ml-51",
            status: "manual",
            titleKey: "tasks.s4ML51.title",
            descriptionKey: "tasks.s4ML51.description",
            rewards: [
              rewardOf("universal_support_certificate", 15),
              rewardOf("universal_tactics_certificate", 15),
            ],
            progressMax: 1,
            isChild: true,
          },
          {
            id: "s4-ml-52",
            status: "manual",
            titleKey: "tasks.s4ML52.title",
            descriptionKey: "tasks.s4ML52.description",
            rewards: [
              rewardOf("shattered_light_and_claw"),
            ],
            progressMax: 1,
          },
          {
            id: "s4-ml-53",
            status: "manual",
            titleKey: "tasks.s4ML53.title",
            descriptionKey: "tasks.s4ML53.description",
          },
          {
            id: "s4-ml-54",
            status: "manual",
            titleKey: "tasks.s4ML54.title",
            descriptionKey: "tasks.s4ML54.description",
          },
          {
            id: "s4-ml-55",
            status: "manual",
            titleKey: "tasks.s4ML55.title",
            descriptionKey: "tasks.s4ML55.description",
          },
          {
            id: "s4-ml-56",
            status: "manual",
            titleKey: "tasks.s4ML56.title",
            descriptionKey: "tasks.s4ML56.description",
          },
          {
            id: "s4-ml-57",
            status: "manual",
            titleKey: "tasks.s4ML57.title",
            descriptionKey: "tasks.s4ML57.description",
          },
          {
            id: "s4-ml-58",
            status: "manual",
            titleKey: "tasks.s4ML58.title",
            descriptionKey: "tasks.s4ML58.description",
          },
        ],
      },

      // ─── カオス究明 ─────────────────────────────────────────────
      {
        id: "chaos-analysis",
        tasks: [
          {
            id: "s4-ca-1",
            status: "manual",
            titleKey: "tasks.s4CA1.title",
            descriptionKey: "tasks.s4CA1.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("potencial_disk", 8),
            ],
          },
          {
            id: "s4-ca-2",
            status: "manual",
            titleKey: "tasks.s4CA2.title",
            descriptionKey: "tasks.s4CA2.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("potencial_disk", 8),
            ],
          },
          {
            id: "s4-ca-3",
            status: "manual",
            titleKey: "tasks.s4CA3.title",
            descriptionKey: "tasks.s4CA3.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("potencial_disk", 8),
            ],
          },
          {
            id: "s4-ca-4",
            status: "manual",
            titleKey: "tasks.s4CA4.title",
            descriptionKey: "tasks.s4CA4.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("potencial_disk", 8),
            ],
          },
          {
            id: "s4-ca-5",
            status: "manual",
            titleKey: "tasks.s4CA5.title",
            descriptionKey: "tasks.s4CA5.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("potencial_disk", 8),
            ],
          },
          {
            id: "s4-ca-6",
            status: "manual",
            titleKey: "tasks.s4CA6.title",
            descriptionKey: "tasks.s4CA6.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("potencial_disk", 8),
            ],
          },
          {
            id: "s4-ca-7",
            status: "manual",
            titleKey: "tasks.s4CA7.title",
            descriptionKey: "tasks.s4CA7.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("potencial_disk", 8),
            ],
          },
          {
            id: "s4-ca-8",
            status: "manual",
            titleKey: "tasks.s4CA8.title",
            descriptionKey: "tasks.s4CA8.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("potencial_disk", 8),
            ],
          },
          {
            id: "s4-ca-9",
            status: "manual",
            titleKey: "tasks.s4CA9.title",
            descriptionKey: "tasks.s4CA9.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("abyssal_survivor"),
            ],
          },
          {
            id: "s4-ca-10",
            status: "derived",
            titleKey: "tasks.s4CA10.title",
            descriptionKey: "tasks.s4CA10.description",
            rewards: [
              rewardOf("crystal", 20),
            ],
            childIds: ["s4-ca-18", "s4-ca-19", "s4-ca-20", "s4-ca-21", "s4-ca-22"],
          },
          {
            id: "s4-ca-11",
            status: "derived",
            titleKey: "tasks.s4CA11.title",
            descriptionKey: "tasks.s4CA11.description",
            rewards: [
              rewardOf("crystal", 20),
            ],
            childIds: ["s4-ca-16", "s4-ca-27", "s4-ca-28", "s4-ca-38", "s4-ca-48", "s4-ca-49"],
          },
          {
            id: "s4-ca-12",
            status: "derived",
            titleKey: "tasks.s4CA12.title",
            descriptionKey: "tasks.s4CA12.description",
            rewards: [
              rewardOf("crystal", 20),
            ],
            childIds: ["s4-ca-15", "s4-ca-29", "s4-ca-37"],
          },
          {
            id: "s4-ca-13",
            status: "derived",
            titleKey: "tasks.s4CA13.title",
            descriptionKey: "tasks.s4CA13.description",
            rewards: [
              rewardOf("crystal", 20),
            ],
            childIds: ["s4-ca-34", "s4-ca-35"],
          },
          {
            id: "s4-ca-14",
            status: "manual",
            titleKey: "tasks.s4CA14.title",
            descriptionKey: "tasks.s4CA14.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
          },
          {
            id: "s4-ca-15",
            status: "manual",
            titleKey: "tasks.s4CA15.title",
            descriptionKey: "tasks.s4CA15.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ca-16",
            status: "manual",
            titleKey: "tasks.s4CA16.title",
            descriptionKey: "tasks.s4CA16.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ca-17",
            status: "manual",
            titleKey: "tasks.s4CA17.title",
            descriptionKey: "tasks.s4CA17.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
          },
          {
            id: "s4-ca-18",
            status: "manual",
            titleKey: "tasks.s4CA18.title",
            descriptionKey: "tasks.s4CA18.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ca-19",
            status: "manual",
            titleKey: "tasks.s4CA19.title",
            descriptionKey: "tasks.s4CA19.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ca-20",
            status: "manual",
            titleKey: "tasks.s4CA20.title",
            descriptionKey: "tasks.s4CA20.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ca-21",
            status: "manual",
            titleKey: "tasks.s4CA21.title",
            descriptionKey: "tasks.s4CA21.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ca-22",
            status: "manual",
            titleKey: "tasks.s4CA22.title",
            descriptionKey: "tasks.s4CA22.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ca-23",
            status: "manual",
            titleKey: "tasks.s4CA23.title",
            descriptionKey: "tasks.s4CA23.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
          },
          {
            id: "s4-ca-24",
            status: "manual",
            titleKey: "tasks.s4CA24.title",
            descriptionKey: "tasks.s4CA24.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
          },
          {
            id: "s4-ca-25",
            status: "manual",
            titleKey: "tasks.s4CA25.title",
            descriptionKey: "tasks.s4CA25.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ca-26",
            status: "manual",
            titleKey: "tasks.s4CA26.title",
            descriptionKey: "tasks.s4CA26.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
          },
          {
            id: "s4-ca-27",
            status: "manual",
            titleKey: "tasks.s4CA27.title",
            descriptionKey: "tasks.s4CA27.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ca-28",
            status: "manual",
            titleKey: "tasks.s4CA28.title",
            descriptionKey: "tasks.s4CA28.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ca-29",
            status: "manual",
            titleKey: "tasks.s4CA29.title",
            descriptionKey: "tasks.s4CA29.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ca-30",
            status: "manual",
            titleKey: "tasks.s4CA30.title",
            descriptionKey: "tasks.s4CA30.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
          },
          {
            id: "s4-ca-31",
            status: "manual",
            titleKey: "tasks.s4CA31.title",
            descriptionKey: "tasks.s4CA31.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
          },
          {
            id: "s4-ca-32",
            status: "manual",
            titleKey: "tasks.s4CA32.title",
            descriptionKey: "tasks.s4CA32.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
          },
          {
            id: "s4-ca-33",
            status: "manual",
            titleKey: "tasks.s4CA33.title",
            descriptionKey: "tasks.s4CA33.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
          },
          {
            id: "s4-ca-34",
            status: "manual",
            titleKey: "tasks.s4CA34.title",
            descriptionKey: "tasks.s4CA34.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ca-35",
            status: "manual",
            titleKey: "tasks.s4CA35.title",
            descriptionKey: "tasks.s4CA35.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ca-36",
            status: "manual",
            titleKey: "tasks.s4CA36.title",
            descriptionKey: "tasks.s4CA36.description",
          },
          {
            id: "s4-ca-37",
            status: "manual",
            titleKey: "tasks.s4CA37.title",
            descriptionKey: "tasks.s4CA37.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ca-38",
            status: "manual",
            titleKey: "tasks.s4CA38.title",
            descriptionKey: "tasks.s4CA38.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ca-39",
            status: "manual",
            titleKey: "tasks.s4CA39.title",
            descriptionKey: "tasks.s4CA39.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
          },
          {
            id: "s4-ca-40",
            status: "manual",
            titleKey: "tasks.s4CA40.title",
            descriptionKey: "tasks.s4CA40.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
          },
          {
            id: "s4-ca-41",
            status: "manual",
            titleKey: "tasks.s4CA41.title",
            descriptionKey: "tasks.s4CA41.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
          },
          {
            id: "s4-ca-42",
            status: "manual",
            titleKey: "tasks.s4CA42.title",
            descriptionKey: "tasks.s4CA42.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
          },
          {
            id: "s4-ca-43",
            status: "manual",
            titleKey: "tasks.s4CA43.title",
            descriptionKey: "tasks.s4CA43.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
          },
          {
            id: "s4-ca-44",
            status: "manual",
            titleKey: "tasks.s4CA44.title",
            descriptionKey: "tasks.s4CA44.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
          },
          {
            id: "s4-ca-45",
            status: "manual",
            titleKey: "tasks.s4CA45.title",
            descriptionKey: "tasks.s4CA45.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
          },
          {
            id: "s4-ca-46",
            status: "manual",
            titleKey: "tasks.s4CA46.title",
            descriptionKey: "tasks.s4CA46.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
          },
          {
            id: "s4-ca-47",
            status: "manual",
            titleKey: "tasks.s4CA47.title",
            descriptionKey: "tasks.s4CA47.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
          },
          {
            id: "s4-ca-48",
            status: "manual",
            titleKey: "tasks.s4CA48.title",
            descriptionKey: "tasks.s4CA48.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ca-49",
            status: "manual",
            titleKey: "tasks.s4CA49.title",
            descriptionKey: "tasks.s4CA49.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ca-50",
            status: "manual",
            titleKey: "tasks.s4CA50.title",
            descriptionKey: "tasks.s4CA50.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
          },
          {
            id: "s4-ca-51",
            status: "manual",
            titleKey: "tasks.s4CA51.title",
            descriptionKey: "tasks.s4CA51.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
          },
          {
            id: "s4-ca-52",
            status: "manual",
            titleKey: "tasks.s4CA52.title",
            descriptionKey: "tasks.s4CA52.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
          },
          {
            id: "s4-ca-53",
            status: "manual",
            titleKey: "tasks.s4CA53.title",
            descriptionKey: "tasks.s4CA53.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
          },
          {
            id: "s4-ca-54",
            status: "manual",
            titleKey: "tasks.s4CA54.title",
            descriptionKey: "tasks.s4CA54.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
          },
          {
            id: "s4-ca-55",
            status: "manual",
            titleKey: "tasks.s4CA55.title",
            descriptionKey: "tasks.s4CA55.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
          },
          {
            id: "s4-ca-56",
            status: "manual",
            titleKey: "tasks.s4CA56.title",
            descriptionKey: "tasks.s4CA56.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
          },
          {
            id: "s4-ca-57",
            status: "manual",
            titleKey: "tasks.s4CA57.title",
            descriptionKey: "tasks.s4CA57.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
          },
          {
            id: "s4-ca-58",
            status: "manual",
            titleKey: "tasks.s4CA58.title",
            descriptionKey: "tasks.s4CA58.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
            isChild: true,
          },
          {
            id: "s4-ca-59",
            status: "manual",
            titleKey: "tasks.s4CA59.title",
            descriptionKey: "tasks.s4CA59.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
          },
          {
            id: "s4-ca-60",
            status: "manual",
            titleKey: "tasks.s4CA60.title",
            descriptionKey: "tasks.s4CA60.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
          },
          {
            id: "s4-ca-61",
            status: "manual",
            titleKey: "tasks.s4CA61.title",
            descriptionKey: "tasks.s4CA61.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
          },
          {
            id: "s4-ca-62",
            status: "manual",
            titleKey: "tasks.s4CA62.title",
            descriptionKey: "tasks.s4CA62.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
            ],
          },
          {
            id: "s4-ca-63",
            status: "manual",
            titleKey: "tasks.s4CA63.title",
            descriptionKey: "tasks.s4CA63.description",
            rewards: [
              rewardOf("ecstatic_crystal", 2000),
            ],
            isChild: true,
          },
          {
            id: "s4-ca-64",
            status: "derived",
            titleKey: "tasks.s4CA64.title",
            descriptionKey: "tasks.s4CA64.description",
            rewards: [
              rewardOf("pagna_invader"),
            ],
            childIds: ["s4-ca-15", "s4-ca-16", "s4-ca-25", "s4-ca-27", "s4-ca-28", "s4-ca-29", "s4-ca-37", "s4-ca-38", "s4-ca-48", "s4-ca-49", "s4-ca-58"],
          },
          {
            id: "s4-ca-65",
            status: "manual",
            titleKey: "tasks.s4CA65.title",
            descriptionKey: "tasks.s4CA65.description",
            rewards: [
              rewardOf("unknown_ecosystem"),
            ],
          },
          {
            id: "s4-ca-66",
            status: "derived",
            titleKey: "tasks.s4CA66.title",
            descriptionKey: "tasks.s4CA66.description",
            rewards: [
              rewardOf("glorious_metamorphosis"),
            ],
            childIds: ["s4-ca-63", "s4-ca-69"],
          },
          {
            id: "s4-ca-67",
            status: "manual",
            titleKey: "tasks.s4CA67.title",
            descriptionKey: "tasks.s4CA67.description",
          },
          {
            id: "s4-ca-68",
            status: "manual",
            titleKey: "tasks.s4CA68.title",
            descriptionKey: "tasks.s4CA68.description",
          },
          {
            id: "s4-ca-69",
            status: "manual",
            titleKey: "tasks.s4CA69.title",
            descriptionKey: "tasks.s4CA69.description",
            isChild: true,
          },
        ],
      },

      // ─── 戦闘報告 ──────────────────────────────────────────────
      {
        id: "battle-report",
        tasks: [
          {
            id: "s4-br-1",
            status: "manual",
            titleKey: "tasks.s4BR1.title",
            descriptionKey: "tasks.s4BR1.description",
            rewards: [
              rewardOf("prism_of_all_things"),
            ],
          },
          {
            id: "s4-br-2",
            status: "derived",
            titleKey: "tasks.s4BR2.title",
            descriptionKey: "tasks.s4BR2.description",
            rewards: [
              rewardOf("condensed_world"),
            ],
            childIds: ["s4-br-3", "s4-br-4", "s4-br-5", "s4-br-6"],
          },
          {
            id: "s4-br-3",
            status: "manual",
            titleKey: "tasks.s4BR3.title",
            descriptionKey: "tasks.s4BR3.description",
            rewards: [
              rewardOf("ecstatic_crystal", 500),
            ],
            isChild: true,
          },
          {
            id: "s4-br-4",
            status: "manual",
            titleKey: "tasks.s4BR4.title",
            descriptionKey: "tasks.s4BR4.description",
            rewards: [
              rewardOf("ecstatic_crystal", 500),
            ],
            isChild: true,
          },
          {
            id: "s4-br-5",
            status: "manual",
            titleKey: "tasks.s4BR5.title",
            descriptionKey: "tasks.s4BR5.description",
            rewards: [
              rewardOf("ecstatic_crystal", 500),
            ],
            isChild: true,
          },
          {
            id: "s4-br-6",
            status: "manual",
            titleKey: "tasks.s4BR6.title",
            descriptionKey: "tasks.s4BR6.description",
            rewards: [
              rewardOf("ecstatic_crystal", 500),
            ],
            isChild: true,
          },
          {
            id: "s4-br-7",
            status: "derived",
            titleKey: "tasks.s4BR7.title",
            descriptionKey: "tasks.s4BR7.description",
            rewards: [
              rewardOf("perfect_taxidermy"),
            ],
            childIds: ["s4-br-8", "s4-br-9", "s4-br-10", "s4-br-11", "s4-br-15"],
          },
          {
            id: "s4-br-8",
            status: "manual",
            titleKey: "tasks.s4BR8.title",
            descriptionKey: "tasks.s4BR8.description",
            rewards: [
              rewardOf("ecstatic_crystal", 1000),
            ],
            isChild: true,
          },
          {
            id: "s4-br-9",
            status: "manual",
            titleKey: "tasks.s4BR9.title",
            descriptionKey: "tasks.s4BR9.description",
            rewards: [
              rewardOf("ecstatic_crystal", 1000),
            ],
            isChild: true,
          },
          {
            id: "s4-br-10",
            status: "manual",
            titleKey: "tasks.s4BR10.title",
            descriptionKey: "tasks.s4BR10.description",
            rewards: [
              rewardOf("ecstatic_crystal", 1000),
            ],
            isChild: true,
          },
          {
            id: "s4-br-11",
            status: "manual",
            titleKey: "tasks.s4BR11.title",
            descriptionKey: "tasks.s4BR11.description",
            rewards: [
              rewardOf("ecstatic_crystal", 1000),
            ],
            isChild: true,
          },
          {
            id: "s4-br-12",
            status: "derived",
            titleKey: "tasks.s4BR12.title",
            descriptionKey: "tasks.s4BR12.description",
            rewards: [
              rewardOf("proof_of_the_fittest"),
            ],
            childIds: ["s4-br-13", "s4-br-14", "s4-br-16"],
          },
          {
            id: "s4-br-13",
            status: "manual",
            titleKey: "tasks.s4BR13.title",
            descriptionKey: "tasks.s4BR13.description",
            rewards: [
              rewardOf("ecstatic_crystal", 2000),
            ],
            isChild: true,
          },
          {
            id: "s4-br-14",
            status: "manual",
            titleKey: "tasks.s4BR14.title",
            descriptionKey: "tasks.s4BR14.description",
            rewards: [
              rewardOf("ecstatic_crystal", 2000),
            ],
            isChild: true,
          },
          {
            id: "s4-br-15",
            status: "manual",
            titleKey: "tasks.s4BR15.title",
            descriptionKey: "tasks.s4BR15.description",
            isChild: true,
          },
          {
            id: "s4-br-16",
            status: "manual",
            titleKey: "tasks.s4BR16.title",
            descriptionKey: "tasks.s4BR16.description",
            isChild: true,
          },
        ],
      },

      // ─── 壊滅作戦 ──────────────────────────────────────────────
      {
        id: "annihilation",
        tasks: [
          {
            id: "s4-an-1",
            status: "manual",
            titleKey: "tasks.s4AN1.title",
            descriptionKey: "tasks.s4AN1.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
              rewardOf("crystal", 20),
            ],
          },
          {
            id: "s4-an-2",
            status: "manual",
            titleKey: "tasks.s4AN2.title",
            descriptionKey: "tasks.s4AN2.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s4-an-3",
            status: "manual",
            titleKey: "tasks.s4AN3.title",
            descriptionKey: "tasks.s4AN3.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s4-an-4",
            status: "manual",
            titleKey: "tasks.s4AN4.title",
            descriptionKey: "tasks.s4AN4.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s4-an-5",
            status: "manual",
            titleKey: "tasks.s4AN5.title",
            descriptionKey: "tasks.s4AN5.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s4-an-6",
            status: "manual",
            titleKey: "tasks.s4AN6.title",
            descriptionKey: "tasks.s4AN6.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s4-an-7",
            status: "manual",
            titleKey: "tasks.s4AN7.title",
            descriptionKey: "tasks.s4AN7.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s4-an-8",
            status: "manual",
            titleKey: "tasks.s4AN8.title",
            descriptionKey: "tasks.s4AN8.description",
            rewards: [
              rewardOf("ecstatic_crystal", 50),
              rewardOf("memory_particles", 20),
            ],
          },
          {
            id: "s4-an-9",
            status: "manual",
            titleKey: "tasks.s4AN9.title",
            descriptionKey: "tasks.s4AN9.description",
            rewards: [
              rewardOf("ecstatic_crystal", 50),
              rewardOf("memory_particles", 20),
            ],
          },
          {
            id: "s4-an-10",
            status: "manual",
            titleKey: "tasks.s4AN10.title",
            descriptionKey: "tasks.s4AN10.description",
            rewards: [
              rewardOf("ecstatic_crystal", 50),
              rewardOf("memory_particles", 20),
            ],
          },
          {
            id: "s4-an-11",
            status: "manual",
            titleKey: "tasks.s4AN11.title",
            descriptionKey: "tasks.s4AN11.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
              rewardOf("crystal", 20),
            ],
          },
          {
            id: "s4-an-12",
            status: "manual",
            titleKey: "tasks.s4AN12.title",
            descriptionKey: "tasks.s4AN12.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s4-an-13",
            status: "manual",
            titleKey: "tasks.s4AN13.title",
            descriptionKey: "tasks.s4AN13.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s4-an-14",
            status: "manual",
            titleKey: "tasks.s4AN14.title",
            descriptionKey: "tasks.s4AN14.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s4-an-15",
            status: "manual",
            titleKey: "tasks.s4AN15.title",
            descriptionKey: "tasks.s4AN15.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s4-an-16",
            status: "manual",
            titleKey: "tasks.s4AN16.title",
            descriptionKey: "tasks.s4AN16.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s4-an-17",
            status: "manual",
            titleKey: "tasks.s4AN17.title",
            descriptionKey: "tasks.s4AN17.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s4-an-18",
            status: "manual",
            titleKey: "tasks.s4AN18.title",
            descriptionKey: "tasks.s4AN18.description",
            rewards: [
              rewardOf("ecstatic_crystal", 50),
              rewardOf("memory_particles", 20),
            ],
          },
          {
            id: "s4-an-19",
            status: "manual",
            titleKey: "tasks.s4AN19.title",
            descriptionKey: "tasks.s4AN19.description",
            rewards: [
              rewardOf("ecstatic_crystal", 50),
              rewardOf("memory_particles", 20),
            ],
          },
          {
            id: "s4-an-20",
            status: "manual",
            titleKey: "tasks.s4AN20.title",
            descriptionKey: "tasks.s4AN20.description",
            rewards: [
              rewardOf("ecstatic_crystal", 50),
              rewardOf("memory_particles", 20),
            ],
          },
          {
            id: "s4-an-21",
            status: "manual",
            titleKey: "tasks.s4AN21.title",
            descriptionKey: "tasks.s4AN21.description",
            rewards: [
              rewardOf("ecstatic_crystal", 200),
              rewardOf("crystal", 20),
            ],
          },
          {
            id: "s4-an-22",
            status: "manual",
            titleKey: "tasks.s4AN22.title",
            descriptionKey: "tasks.s4AN22.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s4-an-23",
            status: "manual",
            titleKey: "tasks.s4AN23.title",
            descriptionKey: "tasks.s4AN23.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s4-an-24",
            status: "manual",
            titleKey: "tasks.s4AN24.title",
            descriptionKey: "tasks.s4AN24.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s4-an-25",
            status: "manual",
            titleKey: "tasks.s4AN25.title",
            descriptionKey: "tasks.s4AN25.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s4-an-26",
            status: "manual",
            titleKey: "tasks.s4AN26.title",
            descriptionKey: "tasks.s4AN26.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s4-an-27",
            status: "manual",
            titleKey: "tasks.s4AN27.title",
            descriptionKey: "tasks.s4AN27.description",
            rewards: [
              rewardOf("ecstatic_crystal", 100),
              rewardOf("crystal", 10),
            ],
          },
          {
            id: "s4-an-28",
            status: "manual",
            titleKey: "tasks.s4AN28.title",
            descriptionKey: "tasks.s4AN28.description",
            rewards: [
              rewardOf("ecstatic_crystal", 50),
              rewardOf("memory_particles", 20),
            ],
          },
          {
            id: "s4-an-29",
            status: "manual",
            titleKey: "tasks.s4AN29.title",
            descriptionKey: "tasks.s4AN29.description",
            rewards: [
              rewardOf("ecstatic_crystal", 50),
              rewardOf("memory_particles", 20),
            ],
          },
          {
            id: "s4-an-30",
            status: "manual",
            titleKey: "tasks.s4AN30.title",
            descriptionKey: "tasks.s4AN30.description",
            rewards: [
              rewardOf("ecstatic_crystal", 50),
              rewardOf("memory_particles", 20),
            ],
          },
        ],
      },

    ],
  },
];

export const defaultSeasonId =
  seasons.find((season) => season.id === "season-4")?.id ?? seasons[0].id;
