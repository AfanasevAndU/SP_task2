/**
 * Интерфейс компонента Image.
 */
export interface ImageProps {
  /**
   * Путь к картинке.
   */
  src: string;
  /**
   * Задает id в DOM дереве для компонента.
   */
  id?: string;
  /**
   * Текстовая метка картинки
   */
  alt?: string;
}
