# Sentinel Journal - Critical Security Learnings

## 2025-02-01 - Missing .gitignore protection for environment variables
**Vulnerability:** The project's `.gitignore` file did not include patterns for environment variable files (`.env*`).
**Learning:** In a newly initialized or broken repository state, basic security configurations like `.gitignore` can be overlooked, leading to accidental exposure of secrets if they are later added to the project.
**Prevention:** Always ensure a robust `.gitignore` baseline is established early in the project lifecycle, specifically covering common secret-containing files.
