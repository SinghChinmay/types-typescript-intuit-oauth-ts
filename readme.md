# Intuit OAuth TypeScript Definitions

This repository provides TypeScript definitions for the `intuit-oauth` package, making it easier to use it in TypeScript projects. The type declarations provided here will help you leverage the full power of TypeScript's type checking and autocompletion capabilities while working with the `intuit-oauth` package.

## Installation

First, you need to install the `intuit-oauth` package:

```bash
npm install intuit-oauth
```

Next, copy the `intuit-oauth.d.ts` file from this repository into your project's source directory, preferably inside a `types` folder.

## Usage

In your TypeScript project, create a reference to the type declarations file by adding the following line at the top of your `.ts` file where you use the `intuit-oauth` package:

```typescript
/// <reference path="./types/intuit-oauth.d.ts" />
```

Now you can import the `OAuthClient` class and use it with full TypeScript support:

```typescript
import OAuthClient from 'intuit-oauth';

const oauthClient = new OAuthClient({
  clientId: '<your-client-id>',
  clientSecret: '<your-client-secret>',
  environment: 'sandbox',
  redirectUri: '<your-redirect-uri>',
});

// Use the oauthClient instance as needed
```

## Features

- Provides type definitions for the `intuit-oauth` package
- Supports autocompletion and type checking for method arguments and return types
- Ensures the correct usage of the `OAuthClient` class and its methods

## Contributing

Contributions are always welcome! If you find any issues with the type definitions or have suggestions for improvements, please [open an issue](https://github.com/yourusername/intuit-oauth-types/issues) or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.