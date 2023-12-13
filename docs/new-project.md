# Create a project

::: info
Blaze CLI is coming soon, you will be able to scaffold new projects with it. For now it is only possible to create a new project manually.
:::

## Requirements

- [Go](https://golang.org/doc/install) 1.20 or higher
- [golangci-lint](https://golangci-lint.run/usage/install/#local-installation)

## Scaffolding

There are two ways to create a new project:

- [Use the template](#use-the-template)
- [Clone the repository](#clone-the-repository)

### Use the template

Only for Github users.

1. Select the variant you want to use by switching branch
2. Click on the `Use this template` button on the [Github repo](https://github.com/paologaleotti/blaze)
3. Create a new repo based on the template

### Clone the repository

1. Clone the repository and remove the `.git` folder
```bash
git clone -b <branch> https://github.com/paologaleotti/blaze && rm -rf .git
```

Where `branch` can be:
- master (standard blaze)
- serverless (blaze/serverless)
- fullstack (blazefs)

2. Initialize your git repository
```bash
git init
```

3. Build the example project
```bash
make
```
Thanks to `go mod tidy`, all the dependencies will be downloaded automatically.