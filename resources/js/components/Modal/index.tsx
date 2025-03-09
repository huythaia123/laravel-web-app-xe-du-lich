import { ReactNode } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog';

type ModalProps = {
  button?: ReactNode;
  title?: string;
  description?: ReactNode;
  buttonCancel?: ReactNode;
  buttonAction?: ReactNode;
};

const Modal = ({
  button,
  title,
  description,
  buttonCancel,
  buttonAction,
}: ModalProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{button}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          {title && <AlertDialogTitle>{title}</AlertDialogTitle>}
          {description && (
            <AlertDialogDescription>{description}</AlertDialogDescription>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          {buttonCancel && (
            <AlertDialogCancel asChild>{buttonCancel}</AlertDialogCancel>
          )}
          {buttonAction && (
            <AlertDialogAction asChild>{buttonAction}</AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Modal;
