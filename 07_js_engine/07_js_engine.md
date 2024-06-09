# JavaScript Engine

```mermaid
flowchart TD
    a["code"]
    b["parsing \n // converting code into tokens"]
    c["compilation \n // JIT(just in time compilation)"]
    d["execution \n // memory, heap & call stack"]
    a --> b
    b -- abstract syntax tree (AST) --> c
    c --> d
```

| **JIT (Just in time compilation)** | **AOT (Ahead of time compilation)** |
| ---------------------------------- | ----------------------------------- |
| AST is passed to interpreter which converts code to bytecode and compiler optimize code on the go for execution phase | AST is provided to compiler and optimize the code before rendering and then finally after compilation phase finishes, code is directly executed |