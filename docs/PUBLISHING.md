# Publishing Guide

This guide explains how to publish the Next.js Mantine Boilerplate to npm so it can be installed via npx.

## Prerequisites

1. An npm account
2. Access to the `@ashutoshdash` scope on npm (or update the package name in `package.json`)

## Publishing Steps

### 1. Prepare for Publishing

Make sure you've:
- ✅ Updated the version in `package.json` if needed
- ✅ Tested the CLI locally
- ✅ Committed all changes
- ✅ Verified `.npmignore` excludes unnecessary files

### 2. Test Locally (Optional but Recommended)

You can test the package locally before publishing:

```bash
# Create a test directory
mkdir test-install
cd test-install

# Link the package locally
npm link ../path/to/nextjs-mantine-boilerplate

# Test the CLI
npx @ashutoshdash/nextjs-mantine-boilerplate
```

### 3. Login to npm

```bash
npm login
```

Make sure you're logged into the correct account with access to the `@ashutoshdash` scope.

### 4. Publish to npm

```bash
# Make sure you're in the project root
npm publish --access public
```

**Note:** The `--access public` flag is required for scoped packages (`@ashutoshdash/...`). If your package is unscoped, you can omit this flag.

### 5. Verify Installation

After publishing, test the installation:

```bash
# In a new directory
npx @ashutoshdash/nextjs-mantine-boilerplate
```

## Updating the Package

When you make changes and want to publish a new version:

1. Update the version in `package.json`:
   ```bash
   npm version patch  # for bug fixes (1.1.0 -> 1.1.1)
   npm version minor  # for new features (1.1.0 -> 1.2.0)
   npm version major  # for breaking changes (1.1.0 -> 2.0.0)
   ```

2. Publish:
   ```bash
   npm publish --access public
   ```

## Troubleshooting

### "You do not have permission to publish"

- Make sure you're logged in: `npm whoami`
- Verify you have access to the `@ashutoshdash` scope
- If you don't have access, either:
  - Get added to the organization, or
  - Change the package name in `package.json` to your own scope

### "Package name already exists"

- The package name is already taken. Update the name in `package.json` to something unique.

### CLI doesn't work after publishing

- Make sure `bin/cli.js` has the shebang: `#!/usr/bin/env node`
- Verify the `bin` field in `package.json` is correct
- Check that `bin/cli.js` is included in the published files

## Package Structure

The published package includes:
- `bin/cli.js` - The CLI script
- `src/` - Source code
- `public/` - Public assets
- Configuration files (`.json`, `.js`, `.ts`, `.config.*`)
- Documentation (`.md` files)

Excluded files (via `.npmignore`):
- `node_modules/`
- `.git/`
- Build outputs (`.next/`, `out/`, `build/`)
- Development files (`.husky/`, `.vscode/`, etc.)
- Environment files

## Usage

Once published, users can install the boilerplate with:

```bash
npx @ashutoshdash/nextjs-mantine-boilerplate
```

The CLI will:
1. Prompt for a project name
2. Create a new directory with the boilerplate code
3. Update `package.json` with the project name
4. Install dependencies automatically
5. Provide next steps

