#!/bin/sh

# Change to the directory containing this script
cd "$(dirname "$0")/.."

# Run jest with all arguments passed to this script
npm test -- "$@" 