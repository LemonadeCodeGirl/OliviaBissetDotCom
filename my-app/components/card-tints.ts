export const CARD_TINTS = [
  "card-tint-blue",
  "card-tint-sage",
  "card-tint-cream",
  "card-tint-accent",
  "card-tint-forest",
] as const;

export function cardTint(index: number): (typeof CARD_TINTS)[number] {
  return CARD_TINTS[index % CARD_TINTS.length];
}
