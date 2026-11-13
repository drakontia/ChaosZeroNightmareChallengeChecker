import { describe, expect, test } from "vitest";
import { rewardOf } from "@/lib/rewardHelper";

describe("rewardOf", () => {
  test("returns correct image and altKey for a season3 reward", () => {
    const reward = rewardOf("flawless_melody");

    expect(reward.image).toBe("/rewards/season3/flawless_melody.png");
    expect(reward.altKey).toBe("rewards.season3.flawless_melody");
    expect(reward.amount).toBeUndefined();
  });

  test("returns correct image and altKey for a common (non-season3) reward", () => {
    const reward = rewardOf("support_data");

    expect(reward.image).toBe("/rewards/support_data.png");
    expect(reward.altKey).toBe("rewards.support_data");
  });

  test("includes amount when provided", () => {
    const reward = rewardOf("flawless_melody", 100);

    expect(reward.amount).toBe(100);
    expect(reward.image).toBe("/rewards/season3/flawless_melody.png");
    expect(reward.altKey).toBe("rewards.season3.flawless_melody");
  });

  test("omits amount when not provided", () => {
    const reward = rewardOf("hidemarie_sword");

    expect(reward.amount).toBeUndefined();
  });

  test("returns correct image for a reward with special characters in name", () => {
    const reward = rewardOf("singing_voice_resonates_across_the_galaxy");

    expect(reward.image).toBe("/rewards/season3/singing_voice_resonates_across_the_galaxy.png");
    expect(reward.altKey).toBe("rewards.season3.singing_voice_resonates_across_the_galaxy");
  });

  test("maps phantom theater rewards to temporary image paths", () => {
    const profile = rewardOf("phantom_theater_profile");
    const theater = rewardOf("phantom_theater");

    expect(profile.image).toBe("/rewards/crystal.png");
    expect(profile.altKey).toBe("rewards.season3.phantom_theater_profile");
    expect(theater.image).toBe("/rewards/crystal.png");
    expect(theater.altKey).toBe("rewards.season3.phantom_theater");
  });

  test("maps season 5 rewards to their dedicated images", () => {
    const rewards = [
      ["promise_exchanged_in_snow_blazebell", "/rewards/season5/promise_exchanged_in_snow_blazebell.png"],
      ["vivians_horn", "/rewards/season5/vivians_horn.png"],
      ["blaze_bells_horn", "/rewards/season5/blaze_bells_horn.png"],
      ["frozen_civilization_legacy", "/rewards/season5/frozen_civilization_legacy.png"],
      ["rossweisse_dual_swords", "/rewards/season5/rossweisse_dual_swords.png"],
      ["sig_ornament", "/rewards/season5/sig_ornament.png"],
      ["promise_exchanged_in_snow_rossweisse", "/rewards/season5/promise_exchanged_in_snow_rossweisse.png"],
      ["unfrozen_will", "/rewards/season5/unfrozen_will.png"],
      ["promise_exchanged_in_snow", "/rewards/season5/promise_exchanged_in_snow.png"],
    ] as const;

    for (const [key, image] of rewards) {
      expect(rewardOf(key).image).toBe(image);
    }
  });

  test("each reward key maps to a unique image path", () => {
    const keys = [
      "flawless_melody",
      "hidemarie_sword",
      "auroras_coat_of_arms",
      "hidemarie",
      "support_data",
      "all_collector",
      "glory_of_elinad",
      "nameless_artist",
      "unknown_audition",
      "credit_collector",
      "release_of_the_curtain_call",
      "thousand_faces",
      "monopoly_on_stage",
    ] as const;

    const images = keys.map((k) => rewardOf(k).image);
    const unique = new Set(images);

    expect(unique.size).toBe(keys.length);
  });
});
