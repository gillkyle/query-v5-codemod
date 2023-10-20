# query-codemod

`src/hooks.ts` shows some examples of common instances in my codebase that weren't covered, you can verify pulling this repo and running:

```
bun install
```

```
npx jscodeshift ./src/ \
  --extensions=ts,tsx \
  --parser=tsx \
  --transform=./node_modules/@tanstack/react-query/build/codemods/src/v5/remove-overloads/remove-overloads.js
```
