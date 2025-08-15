'use client';

import { useState } from 'react';
import styles from './contact.module.css';

export default function MessageForm() {
  const [name, setName] = useState('');
  const [from, setFrom] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const to = 'sales@anythingelectronic.co.nz';
    const subject = `Website enquiry from ${name || 'AE visitor'}`;
    const body =
`Name: ${name || '-'}
Email: ${from || '-'}
---
${message || ''}`;

    // open user's email client with prefilled draft
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="name">Name</label>
        <input
          id="name"
          className={styles.input}
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">Email</label>
        <input
          id="email"
          className={styles.input}
          type="email"
          autoComplete="email"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="you@example.com"
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">Message</label>
        <textarea
          id="message"
          className={styles.textarea}
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="How can we help?"
          required
        />
      </div>

      <div className={styles.actions}>
        <button type="submit" className={styles.submitBtn}>
          Send message
        </button>
        <a href="mailto:sales@anythingelectronic.co.nz" className={styles.altLink}>
          Or email us directly →
        </a>
      </div>
    </form>
  );
}
