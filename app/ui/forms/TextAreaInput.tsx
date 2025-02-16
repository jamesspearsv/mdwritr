import { InputProps } from '@/app/lib/definitions';
import { useState } from 'react';
import Markdown from 'marked-react';
import styles from './TextAreaInput.module.css';
import clsx from 'clsx';

export default function TextAreaInput(props: InputProps) {
  const [value, setValue] = useState(() => {
    if (!props.value) return '';
    return props.value;
  });
  const [preview, setPreview] = useState(false);

  return (
    <div>
      <div className={styles.actionButtons}>
        <button
          className={clsx(!preview && `${styles.active}`)}
          type="button"
          onClick={() => setPreview(false)}
        >
          Edit
        </button>
        <button
          className={clsx(preview && `${styles.active}`)}
          type="button"
          onClick={() => setPreview(true)}
        >
          Preview
        </button>
      </div>
      <input
        type="hidden"
        name={props.name}
        aria-label={props.label}
        value={value}
      />
      {!preview ? (
        <textarea
          className={styles.textarea}
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          placeholder="Start writing here..."
        />
      ) : (
        <div
          style={{
            backgroundColor: 'var(--primary-color-alt)',
            height: '100%',
            padding: 'var(--spacing-size-l)',
          }}
        >
          <Markdown
            value={value ? value : 'Write something to see a preview here'}
          />
        </div>
      )}
    </div>
  );
}
