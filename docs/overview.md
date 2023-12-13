# Overview

Blaze is a high-performance, minimal and low overhead template for backend applications in Go.

## Features

- Based on `net/http` standard library
- Essential and utility-driven structure following [Go standard layout](https://github.com/golang-standards/project-layout)
- No hidden magic
- Zero overhead http router with middleware support using [chi](https://github.com/go-chi/chi)
- Extremely fast build times
- Easily extensible and customizable
- Fast as hell🔥

## Variants

Blaze comes in three variants:

- **blaze**: standard project layout with a basic example
- **blaze/serverless**: standard layout including AWS Lamdba entrypoints and basic infrastructure
- **blazefs**: blaze/serverless including a fast static file server to build a monorepo fullstack application