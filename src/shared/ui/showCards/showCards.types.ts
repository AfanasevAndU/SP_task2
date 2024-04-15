/**
 * Интерфейс компонента ShowCards.
 */
export interface ShowCardsProps {
  /**
   * Состояние компонента.
   */
  show: boolean;
  knowSkills: SkillCard[];
  needKnowSkills: SkillCard[];
}

export type SkillCard = {
  src: string;
  alt?: string;
  color?: string;
  title: string;
  knowledge: number;
  id: number;
};
