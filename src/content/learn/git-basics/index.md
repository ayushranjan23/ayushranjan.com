---
title: "Git and GitHub Basics"
description: "Essential Git commands and GitHub workflows for version control and collaboration."
date: "09/15/2024"
tags: ["git", "github", "version-control"]
---

## What is Git?

Git is a distributed version control system that helps you track changes in your code and collaborate with others.

## Essential Git Commands

### Setting Up a Repository

```bash
git init                    # Initialize a new repository
git clone <url>            # Clone an existing repository
```

### Basic Workflow

```bash
git status                 # Check the status of your files
git add <file>            # Stage files for commit
git add .                 # Stage all changes
git commit -m "message"   # Commit staged changes
```

### Branching

```bash
git branch                 # List branches
git branch <name>         # Create a new branch
git checkout <branch>     # Switch to a branch
git checkout -b <branch>  # Create and switch to new branch
git merge <branch>        # Merge branch into current branch
```

### Remote Repositories

```bash
git remote add origin <url>   # Add a remote repository
git push origin main          # Push changes to remote
git pull origin main          # Pull changes from remote
git fetch                     # Fetch changes without merging
```

## GitHub Workflow

### Forking and Pull Requests

1. **Fork** a repository to your GitHub account
2. **Clone** your fork to your local machine
3. **Create a branch** for your changes
4. **Make changes** and commit them
5. **Push** to your fork
6. **Create a Pull Request** on GitHub

### Best Practices

- Write clear, descriptive commit messages
- Keep commits small and focused
- Pull regularly to stay up to date
- Review your changes before committing
- Use branches for new features or fixes

## Common Git Scenarios

### Undoing Changes

```bash
git checkout -- <file>        # Discard changes in working directory
git reset HEAD <file>         # Unstage a file
git revert <commit>           # Create new commit that undoes changes
```

### Viewing History

```bash
git log                       # View commit history
git log --oneline            # Condensed commit history
git diff                     # View changes not yet staged
```

## Conclusion

Git and GitHub are essential tools for modern software development. Mastering these basics will make you a more effective developer and enable better collaboration with your team.

## Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Interactive Git Tutorial](https://learngitbranching.js.org/)
