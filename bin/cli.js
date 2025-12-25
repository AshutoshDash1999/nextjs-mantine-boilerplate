#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ANSI color codes
const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  gray: "\x1b[90m",
};

function colorize(text, color) {
  return `${color}${text}${colors.reset}`;
}

function question(query) {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

function displayWelcomeBanner() {
  console.log("\n");
  console.log(
    colorize(
      "╔═══════════════════════════════════════════════════════════════╗",
      colors.cyan
    )
  );
  console.log(
    colorize(
      "║                                                               ║",
      colors.cyan
    )
  );
  console.log(
    colorize(
      "║  " +
        colorize(
          "🚀 Next.js Mantine Boilerplate",
          colors.bright + colors.white
        ) +
        "                    ║",
      colors.cyan
    )
  );
  console.log(
    colorize(
      "║  " +
        colorize(
          "   Production-Ready Dashboard Template",
          colors.dim + colors.gray
        ) +
        "         ║",
      colors.cyan
    )
  );
  console.log(
    colorize(
      "║                                                               ║",
      colors.cyan
    )
  );
  console.log(
    colorize(
      "╚═══════════════════════════════════════════════════════════════╝",
      colors.cyan
    )
  );
  console.log("\n");

  console.log(
    colorize(
      "✨ Major Features & Functionalities:",
      colors.bright + colors.magenta
    )
  );
  console.log("\n");

  const features = [
    {
      icon: "⚡",
      title: "Next.js 16 App Router",
      desc: "Latest Next.js with App Router architecture",
      color: colors.blue,
    },
    {
      icon: "⚛️",
      title: "React 19 + React Compiler",
      desc: "Cutting-edge React with compiler optimizations",
      color: colors.cyan,
    },
    {
      icon: "🎨",
      title: "Mantine UI v8",
      desc: "Beautiful, accessible components out of the box",
      color: colors.green,
    },
    {
      icon: "📘",
      title: "TypeScript 5",
      desc: "Full type safety throughout the codebase",
      color: colors.blue,
    },
    {
      icon: "🗄️",
      title: "State Management",
      desc: "Zustand + TanStack Query for client & server state",
      color: colors.yellow,
    },
    {
      icon: "🔌",
      title: "Simplified API Client",
      desc: "react-query-ease for zero-boilerplate API integration",
      color: colors.magenta,
    },
    {
      icon: "🌓",
      title: "Theme Support",
      desc: "Dark/light mode with system preference detection",
      color: colors.cyan,
    },
    {
      icon: "📱",
      title: "Responsive Design",
      desc: "Mobile-first, fully responsive layouts",
      color: colors.green,
    },
    {
      icon: "⚙️",
      title: "Developer Experience",
      desc: "Biome, Husky, lint-staged, commitlint",
      color: colors.yellow,
    },
    {
      icon: "🎯",
      title: "Dashboard-First",
      desc: "Pre-configured AppShell with header & sidebar",
      color: colors.magenta,
    },
  ];

  features.forEach((feature, index) => {
    const num = colorize(
      `${(index + 1).toString().padStart(2, "0")}.`,
      colors.gray
    );
    const icon = colorize(feature.icon, feature.color);
    const title = colorize(feature.title, colors.bright + colors.white);
    const desc = colorize(`  ${feature.desc}`, colors.dim + colors.gray);

    console.log(`  ${num} ${icon} ${title}`);
    console.log(`     ${desc}\n`);
  });

  console.log(colorize("💡 Perfect for:", colors.bright + colors.cyan));
  console.log(
    "   " +
      colorize("•", colors.cyan) +
      colorize(" Admin Dashboards", colors.gray) +
      "  " +
      colorize("•", colors.cyan) +
      colorize(" SaaS Applications", colors.gray) +
      "  " +
      colorize("•", colors.cyan) +
      colorize(" E-commerce Admin", colors.gray)
  );
  console.log(
    "   " +
      colorize("•", colors.cyan) +
      colorize(" Financial Dashboards", colors.gray) +
      "  " +
      colorize("•", colors.cyan) +
      colorize(" Internal Tools", colors.gray) +
      "  " +
      colorize("•", colors.cyan) +
      colorize(" Data Management", colors.gray)
  );
  console.log("\n");
  console.log(
    colorize(
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      colors.dim + colors.gray
    )
  );
  console.log("\n");
}

function shouldIgnoreFile(filePath, projectName) {
  const ignorePatterns = [
    "node_modules",
    ".git",
    ".next",
    "out",
    "build",
    ".vercel",
    "coverage",
    ".DS_Store",
    "*.log",
    ".env.local",
    ".env.development",
    ".env.production",
    "package-lock.json",
    ".pnp",
    ".yarn",
    "*.tsbuildinfo",
    "next-env.d.ts",
    ".husky",
    ".cursor",
    ".vscode",
    ".idea",
    "bin", // Don't copy the CLI bin directory
  ];

  const relativePath = path.relative(process.cwd(), filePath);
  const fileName = path.basename(filePath);

  // Ignore if it's the destination directory itself
  if (
    relativePath === projectName ||
    relativePath.startsWith(projectName + path.sep)
  ) {
    return true;
  }

  // Check ignore patterns
  for (const pattern of ignorePatterns) {
    if (pattern.includes("*")) {
      const regex = new RegExp(pattern.replace("*", ".*"));
      if (regex.test(fileName) || regex.test(relativePath)) {
        return true;
      }
    } else {
      if (
        fileName === pattern ||
        relativePath.includes(path.sep + pattern + path.sep) ||
        relativePath.startsWith(pattern + path.sep) ||
        relativePath.endsWith(path.sep + pattern)
      ) {
        return true;
      }
    }
  }

  return false;
}

function getAllFiles(dirPath, arrayOfFiles = [], baseDir = dirPath) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    const relativePath = path.relative(baseDir, filePath);

    if (!shouldIgnoreFile(filePath, "")) {
      if (fs.statSync(filePath).isDirectory()) {
        arrayOfFiles = getAllFiles(filePath, arrayOfFiles, baseDir);
      } else {
        arrayOfFiles.push({
          fullPath: filePath,
          relativePath,
        });
      }
    }
  });

  return arrayOfFiles;
}

function updatePackageJson(packageJsonPath, projectName) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
  packageJson.name = projectName.toLowerCase().replace(/\s+/g, "-");
  packageJson.private = true;
  // Remove bin field if it exists (it's only for the CLI package)
  delete packageJson.bin;
  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2) + "\n"
  );
}

async function main() {
  displayWelcomeBanner();

  console.log(
    colorize(
      "Welcome! Let's set up your new project.",
      colors.bright + colors.white
    )
  );
  console.log("\n");

  // Get project name
  let projectName = await question(
    colorize("📝 What is your project name? ", colors.cyan)
  );
  projectName = projectName.trim();

  if (!projectName) {
    console.error(
      colorize("❌ Project name cannot be empty!", colors.red + colors.bright)
    );
    process.exit(1);
  }

  // Validate project name (npm package name rules)
  if (!/^[a-z0-9-]+$/i.test(projectName)) {
    console.error(
      colorize(
        "❌ Project name can only contain letters, numbers, and hyphens!",
        colors.red + colors.bright
      )
    );
    process.exit(1);
  }

  const targetDir = path.join(process.cwd(), projectName);

  // Check if directory already exists
  if (fs.existsSync(targetDir)) {
    const overwrite = await question(
      colorize(
        `⚠️  Directory "${colorize(projectName, colors.yellow)}" already exists. Overwrite? (y/N): `,
        colors.yellow
      )
    );
    if (overwrite.toLowerCase() !== "y" && overwrite.toLowerCase() !== "yes") {
      console.log(
        colorize("❌ Installation cancelled.", colors.red + colors.bright)
      );
      process.exit(0);
    }
    console.log(colorize("🗑️  Removing existing directory...", colors.yellow));
    fs.rmSync(targetDir, {
      recursive: true,
      force: true,
    });
  }

  console.log(
    `\n${colorize("📦 Creating project", colors.cyan + colors.bright)} ${colorize(`"${projectName}"`, colors.bright + colors.white)}...\n`
  );

  // Get the source directory (where this CLI is running from)
  // When installed via npx, __dirname will be in the package's bin directory
  // The package root should be the parent of bin directory
  let sourceDir = path.join(__dirname, "..");

  // Verify this is the correct package by checking package.json
  const packageJsonPath = path.join(sourceDir, "package.json");
  if (fs.existsSync(packageJsonPath)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
      // If this is the boilerplate package, use it
      if (pkg.name === "@ashutoshdash/nextjs-mantine-boilerplate") {
        // sourceDir is already correct
      } else {
        // If not found, try looking in parent directories (for local development)
        let currentDir = path.dirname(sourceDir);
        let foundPackage = false;

        while (currentDir !== path.dirname(currentDir)) {
          const testPackageJsonPath = path.join(currentDir, "package.json");
          if (fs.existsSync(testPackageJsonPath)) {
            const testPkg = JSON.parse(
              fs.readFileSync(testPackageJsonPath, "utf8")
            );
            if (testPkg.name === "@ashutoshdash/nextjs-mantine-boilerplate") {
              sourceDir = currentDir;
              foundPackage = true;
              break;
            }
          }
          currentDir = path.dirname(currentDir);
        }

        if (!foundPackage) {
          console.warn(
            "⚠️  Warning: Could not find package source. Using default directory."
          );
        }
      }
    } catch (error) {
      console.warn(`⚠️  Warning: Could not read package.json: ${error.message}`);
    }
  }

  // Get all files to copy
  const filesToCopy = getAllFiles(sourceDir, [], sourceDir);

  // Copy files
  console.log(colorize("📋 Copying files...", colors.cyan));
  let copiedCount = 0;

  filesToCopy.forEach(({ fullPath, relativePath }) => {
    const destPath = path.join(targetDir, relativePath);
    const destDir = path.dirname(destPath);

    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, {
        recursive: true,
      });
    }

    try {
      fs.copyFileSync(fullPath, destPath);
      copiedCount++;
    } catch (error) {
      console.warn(
        colorize(
          `⚠️  Warning: Could not copy ${relativePath}: ${error.message}`,
          colors.yellow
        )
      );
    }
  });

  console.log(
    colorize(`✅ Copied ${copiedCount} files`, colors.green + colors.bright) +
      "\n"
  );

  // Update package.json in the new project
  const newPackageJsonPath = path.join(targetDir, "package.json");
  if (fs.existsSync(newPackageJsonPath)) {
    console.log(colorize("📝 Updating package.json...", colors.cyan));
    updatePackageJson(newPackageJsonPath, projectName);
    console.log(
      colorize("✅ Updated package.json", colors.green + colors.bright) + "\n"
    );
  }

  // Install dependencies
  console.log(
    colorize("📦 Installing dependencies...", colors.cyan + colors.bright)
  );
  console.log(
    colorize("This may take a few minutes...", colors.dim + colors.gray) + "\n"
  );

  try {
    process.chdir(targetDir);
    execSync("npm install", {
      stdio: "inherit",
    });
    console.log(
      "\n" +
        colorize(
          "✅ Dependencies installed successfully!",
          colors.green + colors.bright
        ) +
        "\n"
    );
  } catch (error) {
    console.error(
      "\n" +
        colorize(
          "❌ Error installing dependencies:",
          colors.red + colors.bright
        )
    );
    console.error(colorize(error.message, colors.red));
    console.log(
      "\n" +
        colorize(
          "💡 You can install dependencies manually by running:",
          colors.yellow
        )
    );
    console.log(
      colorize(`   cd ${projectName}`, colors.cyan) +
        "\n" +
        colorize("   npm install", colors.cyan)
    );
    process.exit(1);
  }

  // Success message
  console.log(
    colorize(
      "╔═══════════════════════════════════════════════════════════════╗",
      colors.green
    )
  );
  console.log(
    colorize(
      "║                                                               ║",
      colors.green
    )
  );
  console.log(
    colorize(
      "║  " +
        colorize(
          "🎉 Project created successfully!",
          colors.bright + colors.white
        ) +
        "                    ║",
      colors.green
    )
  );
  console.log(
    colorize(
      "║                                                               ║",
      colors.green
    )
  );
  console.log(
    colorize(
      "╚═══════════════════════════════════════════════════════════════╝",
      colors.green
    )
  );
  console.log("\n");

  console.log(colorize("📋 Next steps:", colors.bright + colors.cyan));
  console.log(
    colorize(`   cd ${projectName}`, colors.white) +
      "\n" +
      colorize("   npm run dev", colors.white)
  );
  console.log("\n");
  console.log(
    colorize("📚 Documentation:", colors.bright + colors.cyan) +
      " " +
      colorize(
        "https://github.com/AshutoshDash1999/nextjs-mantine-boilerplate",
        colors.blue
      )
  );
  console.log("\n");

  rl.close();
}

main().catch((error) => {
  console.error(
    "\n" + colorize("❌ An error occurred:", colors.red + colors.bright)
  );
  console.error(colorize(error.message || error, colors.red));
  rl.close();
  process.exit(1);
});
