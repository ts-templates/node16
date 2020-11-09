# Modules

Place modules in this directory and use them from other modules.

## Example

`src/modules/add.ts`:

```ts
export function add (a: number, b: number): number {
  return a + b
}
```

`src/modules/index.ts`:

```ts
export * from './add'
```

`src/main.ts`

```ts
import { add } from './modules'

console.log(add(1, 2))
```
