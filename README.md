# Node.js HTTP Server Bug: Unhandled Errors and Ungraceful Shutdown

This repository demonstrates a common error in Node.js HTTP servers: the lack of proper error handling and a mechanism for graceful shutdown.  The `bug.js` file showcases the problematic code, while `bugSolution.js` provides a corrected version.

## Bug Description

The `bug.js` server starts successfully, but it doesn't handle potential errors (e.g., network issues) and lacks a way to gracefully shut down, potentially leading to resource leaks and unexpected behavior.

## Bug Solution

The `bugSolution.js` file addresses these issues by:

1. Adding error handling to the `createServer` method.
2. Implementing a graceful shutdown mechanism using the `SIGTERM` signal.