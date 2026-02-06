## 2026-02-04 - Mitigated ReDoS in @eslint/plugin-kit
**Vulnerability:** A Regular Expression Denial of Service (ReDoS) vulnerability was identified in the @eslint/plugin-kit dependency, which is used by ESLint. Versions of ESLint up to 9.26.0 were affected due to this transitive dependency.
**Learning:** Transitive dependencies can introduce critical vulnerabilities even if the primary package is up-to-date. In this case, @eslint/plugin-kit contained an inefficient regex that could be exploited.
**Prevention:** Pin dependencies to versions known to have fixes (e.g., ESLint 9.39.2) and regularly monitor security advisories for transitive dependencies.
