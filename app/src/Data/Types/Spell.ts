export default interface Spell {
  readonly School: School;
  readonly PipCost: number;
  readonly ShadowPipCost: number;
  readonly ShadowEnhanced: boolean;
  readonly Accuracy: string;
  readonly Description: string;
  readonly NoEnchant?: string;
  readonly Type: string;
  readonly Type2?: string;
  readonly Subtype?: string;
  readonly Enchantment1?: string;
  readonly Enchantment2?: string;
  readonly Enchantment3?: string;
  readonly Enchantable: boolean;
  readonly CreatureOnly: boolean;
  readonly Polymorph?: string;
  readonly Trainer1?: string;
  readonly Trainer2?: string;
  readonly ReqSpell1?: string;
  readonly ReqSpell2?: string;
  readonly ReqSpell3?: string;
  readonly PreSpell1?: string;
  readonly PreSpell2?: string;
  readonly PreSpell3?: string;
  readonly ReqTrainingPoint: boolean;
  readonly Minion?: string;
  readonly Minion1?: string;
  readonly Minion1Pips?: number;
  readonly Minion1Look?: string;
  readonly Minion1Rank?: number;
  readonly Minion1Health?: number;
  readonly Minion2?: string;
  readonly Minion2Pips?: number;
  readonly Minion2Look?: string;
  readonly Minion2Rank?: number;
  readonly Minion2Health?: number;
  readonly Minion3?: string;
  readonly Minion3Pips?: number;
  readonly Minion3Look?: string;
  readonly Minion3Rank?: number;
  readonly Minion3Health?: number;
}
