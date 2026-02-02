## 2026-02-02 - Insecure PRNG for User Identifiers
**Vulnerability:** Use of `Math.random()` to generate student IDs in an "anonymous" platform.
**Learning:** For platforms where anonymity and non-traceability are core features, standard PRNGs like `Math.random()` are insufficient as they are not cryptographically secure and could potentially allow for ID prediction or collision.
**Prevention:** Use `crypto.randomUUID()` or `crypto.getRandomValues()` for any identifiers or tokens that require uniqueness and security.
