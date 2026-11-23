#!/usr/bin/env bash
set -euo pipefail

trap 'echo "GitHub Pages auto-deploy failed. Check the Git error above; no force push was attempted." >&2; exit 2' ERR

export GIT_TERMINAL_PROMPT=0

if [[ -n "$(git ls-files -u)" ]]; then
  echo "Resolve Git conflicts before deploying." >&2
  exit 2
fi

git fetch --no-tags origin main >&2
if ! git merge-base --is-ancestor FETCH_HEAD HEAD; then
  echo "origin/main is not an ancestor of this branch. Reconcile the branches before deploying." >&2
  exit 2
fi

git add -A
if ! git diff --cached --quiet; then
  git commit -m "Update site for GitHub Pages" \
    -m "Co-authored-by: Copilot App <223556219+Copilot@users.noreply.github.com>" >&2
fi

if [[ "$(git rev-parse HEAD)" != "$(git rev-parse FETCH_HEAD)" ]]; then
  echo '{"type":"progress","message":"Pushing changes to main for GitHub Pages deployment."}'
  git push origin HEAD:refs/heads/main >&2
fi
