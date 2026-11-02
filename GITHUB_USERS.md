# Switching Between GitHub Users

## Overview

If you have multiple GitHub accounts, you'll need to configure Git to use the correct credentials for each repository.

## Method 1: Using Git Config (Recommended for Single Repo)

### Option A: Configure Current Repository Only

```bash
# Navigate to your repository
cd "balasree-arts-academy"

# Set Git user for this repository only
git config user.name "Your Name"
git config user.email "your-email@example.com"

# Verify the configuration
git config user.name
git config user.email
```

This only affects the current repository (stored in `.git/config`).

### Option B: Configure Globally (All Repositories)

```bash
# Set Git user globally (for all your repositories)
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"

# Verify global configuration
git config --global user.name
git config --global user.email
```

This affects all repositories on your computer (stored in `~/.gitconfig`).

## Method 2: Using SSH Keys (Best for Multiple Accounts)

This is the most secure and recommended method for managing multiple GitHub accounts.

### Step 1: Generate SSH Keys for Each Account

```bash
# Generate SSH key for first account
ssh-keygen -t ed25519 -C "first-account@example.com" -f ~/.ssh/id_ed25519_github1

# Generate SSH key for second account
ssh-keygen -t ed25519 -C "second-account@example.com" -f ~/.ssh/id_ed25519_github2
```

Press Enter when prompted for a passphrase (or add one for extra security).

### Step 2: Add SSH Keys to SSH Agent

```bash
# Start SSH agent
eval "$(ssh-agent -s)"

# Add first key
ssh-add ~/.ssh/id_ed25519_github1

# Add second key
ssh-add ~/.ssh/id_ed25519_github2

# List added keys
ssh-add -l
```

### Step 3: Add Public Keys to GitHub

```bash
# Copy first public key
cat ~/.ssh/id_ed25519_github1.pub
# Copy the output and add to GitHub account 1

# Copy second public key
cat ~/.ssh/id_ed25519_github2.pub
# Copy the output and add to GitHub account 2
```

**On GitHub:**
1. Go to **Settings** → **SSH and GPG keys**
2. Click **New SSH key**
3. Paste the public key
4. Give it a title (e.g., "balasree-academy-key")
5. Click **Add SSH key**

### Step 4: Configure SSH Config File

Create or edit `~/.ssh/config`:

```
# Account 1
Host github.com-account1
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_github1

# Account 2
Host github.com-account2
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_github2
```

### Step 5: Clone Using SSH Aliases

```bash
# Clone using account 1
git clone git@github.com-account1:username1/balasree-arts-academy.git

# Clone using account 2
git clone git@github.com-account2:username2/balasree-arts-academy.git
```

### Step 6: Update Existing Repository Remote

If you already cloned with HTTPS, change to SSH:

```bash
# Check current remote
git remote -v

# Remove HTTPS remote
git remote remove origin

# Add SSH remote using the account you want
git remote add origin git@github.com-account1:username1/balasree-arts-academy.git

# Verify
git remote -v
```

## Method 3: Using Credential Helper (For HTTPS)

### Step 1: Configure Credential Helper

```bash
# Use macOS keychain (macOS)
git config --global credential.helper osxkeychain

# Use Windows credential manager (Windows)
git config --global credential.helper manager-core

# Use Linux credential cache (Linux)
git config --global credential.helper cache
```

### Step 2: Remove Old Credentials

**macOS:**
```bash
# Remove from Keychain
security delete-internet-password -s github.com
```

**Windows:**
Use Credential Manager to remove old GitHub credentials.

**Linux:**
```bash
git credential-cache exit
```

### Step 3: Next Git Operation

When you push/pull, Git will prompt for credentials. Enter the credentials for the account you want to use.

## Quick Commands Reference

```bash
# Check current user (repository-level)
git config user.name
git config user.email

# Check global user
git config --global user.name
git config --global user.email

# Set user for current repo
git config user.name "Your Name"
git config user.email "your@email.com"

# Set global user
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# View all Git config
git config --list

# Remove repository-level config
git config --unset user.name
git config --unset user.email
```

## Switching Between Accounts Workflow

### Using SSH (Recommended):

```bash
# Push using account 1 (uses ~/.ssh/id_ed25519_github1)
git push origin main

# Switch remote to account 2
git remote set-url origin git@github.com-account2:username2/repo-name.git

# Push using account 2 (uses ~/.ssh/id_ed25519_github2)
git push origin main
```

### Using Git Config:

```bash
# Set user for current repo to account 1
git config user.name "Account1 Name"
git config user.email "account1@example.com"
git push origin main

# Switch to account 2
git config user.name "Account2 Name"
git config user.email "account2@example.com"
git push origin main
```

## Troubleshooting

### "Permission denied (publickey)" Error

```bash
# Check SSH agent has keys
ssh-add -l

# If empty, add keys
ssh-add ~/.ssh/id_ed25519_github1
ssh-add ~/.ssh/id_ed25519_github2

# Test connection
ssh -T git@github.com
```

### Wrong User Pushing

```bash
# Check current user
git config user.name
git config user.email

# Update for this repo
git config user.name "Correct Name"
git config user.email "correct@email.com"
```

### Credentials Keep Getting Rejected

```bash
# Clear cached credentials
git config --global credential.helper ""

# Re-enter when prompted on next operation
git push origin main
```

## For Your Balasree Arts Academy Project

```bash
# Navigate to project
cd "balasree-arts-academy"

# Set your GitHub user
git config user.name "Your GitHub Username"
git config user.email "your-github-email@example.com"

# Verify
git config user.name
git config user.email

# Now you can push
git push origin main
```

## Recommended Setup

**Best practice for multiple accounts:**

1. **Use SSH keys** (more secure, no password needed each time)
2. **Configure each account** with unique SSH key
3. **Use SSH config aliases** for easy switching
4. **Set repository-level user** for correct attribution

This ensures:
- ✅ Secure authentication
- ✅ Correct user attribution in commits
- ✅ Easy switching between accounts
- ✅ No credential conflicts

---

**Summary:**
- **Quick switch:** `git config user.name "Name"` + `git config user.email "email"`
- **Permanent switch:** Add `--global` flag
- **Best method:** SSH keys with SSH config aliases
