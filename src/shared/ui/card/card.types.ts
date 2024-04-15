import { ReactNode } from "react";

/**
 * интерфейс компонента Card.
 */
export interface CardProps {
  /**
   * Контент компонента.
   */
  children: ReactNode;
  /**
   * Задает id в DOM дереве для компонента.
   */
  id?: string;
  /**
   * Размер карточки.
   * @default 'M'
   */
  size?: "M" | "L";
}
