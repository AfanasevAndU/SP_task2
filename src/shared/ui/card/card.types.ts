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
   * Стиль карточки в зависимости от типа.
   * @default 'primary'
   */
  type?: "primary" | "secondary";
  /**
   * Размер карточки.
   * @default 'M'
   */
  size?: "M" | "L";
}
