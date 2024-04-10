/**
 * Интерфейс компонента Text.
 */
export interface TextProps {
  /**
   * Текст.
   */
  children: string;
  /**
   * Задает id в DOM дереве для компонента.
   */
  id?: string;
  /**
   * Задает класс стилей компонента
   */
  className?: string;
}
