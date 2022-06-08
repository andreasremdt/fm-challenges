<footer>
  <div>
    <h2>Total this month</h2>
    <p class="total">$478.33</p>
  </div>

  <div class="increasage">
    <p><strong>+2.4%</strong> from last month</p>
  </div>
</footer>

<style scoped>
  footer {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 1.8rem;
    padding-top: 2.2rem;
    border-top: 2px solid var(--color-cream);
    font-size: clamp(15px, 3vw, 18px);
  }

  h2 {
    font-weight: normal;
    font-size: clamp(15px, 3vw, 18px);
  }

  .total {
    color: var(--color-dark-brown);
    font-size: clamp(30px, 7vw, 48px);
    font-weight: bold;
    line-height: 1.1;
    margin-top: 0.3125rem;
  }

  strong {
    display: block;
    color: var(--color-dark-brown);
  }

  .increasage {
    text-align: right;
  }
</style>
