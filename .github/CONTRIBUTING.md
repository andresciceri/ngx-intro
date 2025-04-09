# Contributing to ngx-intro

By participating in this project, you agree to abide by the [code of conduct].

[code of conduct]: https://github.com/andresciceri/ngx-intro/blob/main/.github/CODE_OF_CONDUCT.md

## Best Practices

Before you post any issue or pull request, search [the issues][issues] and [the pull requests][pulls] to see if it has already been addressed. 

[issues]: https://github.com/andresciceri/ngx-intro/issues
[pulls]: https://github.com/andresciceri/ngx-intro/pulls

Here are some best practices that will help us accept/address pull requests and issues:

* Outline one, **and only one**, specific problem/feature that you are trying to address.
* Write a **good title** that summarizes the specific problem.
* Introduce the problem before you write any code.
* **Help us reproduce the problem** if applicable with a stackblitz demo or code example showcasing the need for a solution.

## Development Setup

This project uses the Nx workspace and Angular. To set up your development environment:

1. Fork, then clone the repo:

```bash
git clone git@github.com:your-username/ngx-intro.git
cd ngx-intro
```

2. Install dependencies:

```bash
npm install
```

3. Run the demo application:

```bash
nx serve ngx-intro
```

4. Make your changes to the library (located in the `libs/` directory)

## Testing Your Changes

Before submitting a PR, make sure your changes pass all tests:

```bash
# Run unit tests
nx test

# Run e2e tests
nx e2e ngx-intro-e2e
```

## Building the Library

You can build the library with:

```bash
nx build
```

## Pull Requests

After making your changes and ensuring tests pass:

1. Push to your fork
2. [Submit a pull request][pr]

[pr]: https://github.com/YOUR_USERNAME/ngx-intro/compare

At this point you're waiting on us. We may suggest some changes or improvements or alternatives.

## Style Guidelines

* Follow the Angular style guide
* Write clean, readable code
* Keep commits atomic and write meaningful commit messages
* Include appropriate tests for your changes

Thank you for contributing to ngx-intro!