import { SkillCard } from "../showCards";

/**
 * Интерфейс компонента Modal.
 */
export interface ModalProps {
  /**
   * Состояние компонента (Открыт, закрыт)
   */
  state: boolean;
  /**
   * Обработка события нажатия на кнопку
   */
  onCreate: (value: SkillCard) => void;
}
