#!/usr/bin/env bash

require_command() {
  for command_name in "$@"; do
    if ! command -v "${command_name}" > /dev/null 2>&1; then
      printf "ERROR: missing required command: %s\n" "${command_name}" >&2
      exit 1
    fi
  done
}

require_env() {
  for var_name in "$@"; do
    if [[ -z "${!var_name:-}" ]]; then
      printf "ERROR: missing required environment variable: %s\n" "${var_name}" >&2
      exit 1
    fi
  done
}

ensure_writable_dir() {
  local path="$1"

  mkdir -p "${path}"

  if [[ -w "${path}" ]]; then
    return
  fi

  require_command sudo
  sudo chown -R "$(id -u):$(id -g)" "${path}"
}
