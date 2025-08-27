import { useState } from 'react';

export interface ConfirmableButtonProps {
  initialText: string;
  confirmText: string;
  onConfirm: () => Promise<void>;
  classList: string;
}

export const ConfirmableButton = ({
  initialText,
  confirmText,
  onConfirm,
  classList
}: ConfirmableButtonProps) => {
  const [isPrimed, setIsPrimed] = useState<boolean>(false);

  const onClick = () => {
    if (isPrimed) {
      onConfirm();
      return;
    }

    setIsPrimed(true);
  };

  const onMouseLeave = () => {
    setIsPrimed(false);
  };

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
      onMouseLeave={onMouseLeave}
      className={`${isPrimed ? 'confirmable-primed' : ''} ${classList}`}
      style={{ width: 'fit-content' }}>
      {isPrimed ? confirmText : initialText}
    </button>
  );
};
