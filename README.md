# React Native Monorepo Example

This is a [**React Native**](https://reactnative.dev) monorepo project managed with [**Turborepo**](https://turbo.build/repo), featuring shared packages and configurations across multiple apps.

## Project Structure

```
.
├── apps/
│   └── awesomeproject/      # React Native application
├── packages/
│   ├── ui/                  # Shared UI components
│   ├── eslint-config/       # Shared ESLint configuration
│   └── typescript-config/   # Shared TypeScript configuration
└── turbo.json              # Turborepo configuration
```

## Prerequisites

- Node.js >= 22
- npm >= 11
- Complete the [React Native Environment Setup](https://reactnative.dev/docs/set-up-your-environment) guide

## Getting Started

### Install Dependencies

Install all dependencies for the monorepo:

```sh
npm install
```

### Available Scripts

From the root of the monorepo:

```sh
# Run all development servers
npm run dev

# Run dev server for specific app
npm run dev:awesomeproject

# Run linting across all packages
npm run lint

# Run tests across all packages
npm run test

# Build all packages
npm run build

# Type check all packages
npm run check-types
```

## Running the React Native App

### Step 1: Start Metro

Start the Metro bundler for the awesomeproject app:

```sh
npm run dev:awesomeproject
```

### Step 2: Build and run your app

With Metro running, open a new terminal window and use one of the following commands to build and run the app:

### Android

Navigate to the app directory and run:

```sh
cd apps/awesomeproject
npm run android
```

### iOS

For iOS, first install CocoaPods dependencies (run this on first clone or after updating native dependencies):

```sh
cd apps/awesomeproject/ios
bundle install
bundle exec pod install
cd ..
```

Then run the app:

```sh
npm run ios
```

For more information, visit the [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Open [apps/awesomeproject/App.tsx](apps/awesomeproject/App.tsx) in your editor and make changes. The app will automatically update thanks to [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Monorepo Features

### Shared Packages

This monorepo includes shared packages that can be used across multiple apps:

- **@acme/ui** - Shared React Native UI components
- **@acme/eslint-config** - Shared ESLint configuration
- **@acme/typescript-config** - Shared TypeScript configuration

### Turborepo Benefits

- **Smart caching** - Tasks are cached and never computed twice
- **Parallel execution** - Tasks run in parallel when possible
- **Task pipelines** - Define relationships between tasks
- **Remote caching** - Share cache across teams (when configured)

### Code Quality Tools

This project includes:

- **Husky** - Git hooks for pre-commit checks
- **lint-staged** - Run linters on staged files
- **ESLint** - Code linting
- **TypeScript** - Type checking
- **Prettier** - Code formatting

## Troubleshooting

If you're having issues, see the [React Native Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

## Learn More

### React Native Resources

- [React Native Website](https://reactnative.dev) - learn more about React Native
- [Getting Started](https://reactnative.dev/docs/environment-setup) - environment setup guide
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - guided tour of React Native basics
- [Blog](https://reactnative.dev/blog) - latest official React Native blog posts
- [`@facebook/react-native`](https://github.com/facebook/react-native) - GitHub repository for React Native

### Turborepo Resources

- [Turborepo Documentation](https://turbo.build/repo/docs) - learn about Turborepo features
- [Monorepo Handbook](https://turbo.build/repo/docs/handbook) - best practices for monorepos
