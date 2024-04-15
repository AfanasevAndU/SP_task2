import { MouseEventHandler } from "react";

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
  onClick: MouseEventHandler<HTMLButtonElement>;
}
