<header>
  <p>My balance</p>
  <strong>$921.48</strong>
</header>

<style scoped>
  header {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-inline: 1.8rem;
    background: var(--color-red) url(/images/logo.svg) no-repeat calc(100% - 1.8rem) center;
    border-radius: clamp(10px, 7vw, 20px);
    height: 125px;
    color: var(--color-pale-cream);
    margin-bottom: 1.4rem;
  }

  p {
    font-size: clamp(15px, 4vw, 18px);
  }

  strong {
    font-size: clamp(24px, 5vw, 32px);
  }
</style>
