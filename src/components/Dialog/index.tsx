import { ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react';
import styles from './style.module.css';
import type { ToastContentProps } from 'react-toastify';
import { ButtonDefault } from '../ButtonDefault';

export function Dialog({ closeToast, data }: ToastContentProps<string>) {
  return (
    <>
      <div className={styles.container}>
        <p>{data}</p>

        <div className={styles.buttonsContainer}>
          <ButtonDefault
            onClick={() => closeToast(true)}
            aria-label='Confirmar ação e fechar'
            title='Confirmar ação e fechar'
          >
            <ThumbsUpIcon />
          </ButtonDefault>
          <ButtonDefault
            onClick={() => closeToast(false)}
            color='red'
            aria-label='Cancelar ação e fechar'
            title='Cancelar ação e fechar'
          >
            <ThumbsDownIcon />
          </ButtonDefault>
        </div>
      </div>
    </>
  );
}