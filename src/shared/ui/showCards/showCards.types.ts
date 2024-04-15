/**
 * Интерфейс компонента ShowCards.
 */
export interface ShowCardsProps {
  /**
   * Состояние компонента.
   */
  show: boolean;
  /**
   * Массив изученных навыков
   */
  knowSkills: SkillCard[];
  /**
   * Массив неизученных навыков
   */
  needKnowSkills: SkillCard[];
}

export type SkillCard = {
  src: string;
  alt?: string;
  color?: string;
  description: string;
  title: string;
  knowledge: number;
  id: number;
};
