#!/bin/bash

semver_compare() {
  local version_a version_b pr_a pr_b
  version_a=$(echo "${1//v/}" | awk -F'-' '{print $1}')
  version_b=$(echo "${2//v/}" | awk -F'-' '{print $1}')

  if [ "$version_a" \= "$version_b" ]; then
    pr_a=$(echo "$1" | awk -F'-' '{print $2}')
    pr_b=$(echo "$2" | awk -F'-' '{print $2}')
    [ "$pr_a" \= "$pr_b" ] && echo 0 && return 0
    [ -z "$pr_a" ] || [ "$pr_a" \> "$pr_b" ] && [ -n "$pr_b" ] && echo 1 && return 0
    echo -1 && return 0
  fi
  arr_version_a=(${version_a//./ })
  arr_version_b=(${version_b//./ })
  cursor=0
  while [ "$([ "${arr_version_a[$cursor]}" -eq "${arr_version_b[$cursor]}" ] && [ $cursor -lt ${#arr_version_a[@]} ] && echo true)" == true ]; do
    cursor=$((cursor+1))
  done
  [ "${arr_version_a[$cursor]}" -gt "${arr_version_b[$cursor]}" ] && echo 1 || echo -1
}

[ -n "$1" ] && echo $(semver_compare $1 $2)
