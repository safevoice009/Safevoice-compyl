# Sentinel Journal

## 2025-02-03 - [Vulnerability] ReDoS in @eslint/plugin-kit
**Vulnerability:** Regular Expression Denial of Service (ReDoS) in @eslint/plugin-kit < 0.3.4, affecting ESLint versions <= 9.26.0.
**Learning:** Modern tools like ESLint have deep dependency trees that can introduce vulnerabilities even if the tool itself is correctly configured. Specifically, the ConfigCommentParser was vulnerable.
**Prevention:** Regularly run `npm audit` and prefer specific, non-vulnerable versions (e.g., ESLint 9.39.2+) for core dev tooling to maintain a secure supply chain.
