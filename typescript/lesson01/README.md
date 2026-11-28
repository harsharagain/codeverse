# TypeScript

## 1. Getting Started with TypeScript

### 1.1 Install TypeScript Globally

Install TypeScript using npm:

```bash
npm install -g typescript
```

### 1.2 Create the Project Files

Create the following files:

```text
lesson01/
├── index.html
└── main.ts
```

- **index.html** – HTML structure of the webpage.
- **main.ts** – TypeScript code.

In VS Code, open `index.html`, type `!` and press `Tab` to generate the basic HTML boilerplate.

### 1.3 Compile TypeScript into JavaScript

Open the terminal and navigate to the project directory:

```bash
cd lesson01
```

Compile the TypeScript file:

```bash
tsc main.ts
```

This generates a JavaScript file:

```text
lesson01/
├── index.html
├── main.ts
└── main.js
```

**Important:** Browsers execute JavaScript, not TypeScript directly. The TypeScript compiler (`tsc`) converts TypeScript into JavaScript.

Include the generated JavaScript file in HTML:

```html
<script src="main.js"></script>
```

### 1.4 Automatic Compilation (Watch Mode)

Instead of manually compiling every time you modify the TypeScript file, use:

```bash
tsc main.ts --watch
```

Or its shorthand:

```bash
tsc main.ts -w
```

- Watches the TypeScript file for changes.
- Automatically recompiles whenever you save changes.
- Updates the generated `main.js` file.

Stop watch mode using `Ctrl + C`.

---

## 2. TypeScript Project Configuration

### 2.1 Organising the Project

Create two folders:

- `src` – Contains TypeScript source files.
- `build` – Contains the final files required by the application.

Rearrange the project structure:

```text
lesson01/
├── src/
│   └── main.ts
│
├── build/
│   ├── index.html
│   ├── css/
│   └── js/
│
└── tsconfig.json
```

Delete the previously generated JavaScript files before proceeding.

### 2.2 Create tsconfig.json

In the terminal, run:

```bash
tsc --init
```

This generates a `tsconfig.json` file.

**Purpose:** `tsconfig.json` specifies the compiler options and configuration for a TypeScript project.

### 2.3 Configure Root and Output Directories

Open `tsconfig.json`.

Uncomment and modify the following options:

**rootDir**

```json
"rootDir": "./src",
```

- Specifies the directory containing TypeScript source files.
- Here, all TypeScript source files should be inside `src`.

**outDir**

```json
"outDir": "./build/js",
```

- Specifies where the compiled JavaScript files should be generated.
- Here, compiled JavaScript files are placed inside `build/js`.

### 2.4 Automatic Compilation with the Configuration File

Now, instead of:

```bash
tsc main.ts -w
```

Use:

```bash
tsc -w
```

This makes the compiler use the settings specified in `tsconfig.json`.

Whenever you modify a `.ts` file inside `src`, the corresponding `.js` file is automatically generated inside `build/js`.

**Example:**

Create a new file:

```text
src/
├── main.ts
└── test.ts
```

Even if `test.ts` is empty, the compiler can generate its corresponding JavaScript file:

```text
build/
└── js/
    ├── main.js
    └── test.js
```

### 2.5 Restrict Compilation to the src Folder

Suppose you accidentally create a TypeScript file directly inside `lesson01`, instead of inside `src`:

```text
lesson01/
├── main.ts
├── src/
│   └── test.ts
├── build/
└── tsconfig.json
```

Without restricting the included files, TypeScript may also pick up files outside the intended source directory.

To restrict compilation, add the following property to `tsconfig.json`:

```json
"include": [
    "src"
]
```

**Purpose:**
- Tells TypeScript to include files from the `src` directory.
- Prevents unrelated TypeScript files outside `src` from being included in the project compilation.

### 2.6 Prevent JavaScript Generation When Errors Exist

Add the following compiler option to `tsconfig.json`:

```json
"noEmitOnError": true,
```

**Purpose:**
- Prevents JavaScript output from being generated when TypeScript compilation encounters errors.
- Helps avoid generating JavaScript from code containing TypeScript errors.

Alternatively, use the command-line option:

```bash
tsc --noEmitOnError -w
```

### 2.7 Important tsconfig.json Options

| Option | Purpose |
|---|---|
| `module` | Specifies the module system used for generated JavaScript. |
| `moduleDetection` | Controls how TypeScript determines whether a file is a module. |
| `target` | Specifies the JavaScript version to compile into. |
| `rootDir` | Specifies the source directory. |
| `outDir` | Specifies the output directory. |
| `include` | Specifies which files should be included in compilation. |
| `noEmitOnError` | Prevents output generation when compilation errors occur. |

Example configuration:

```json
{
    "compilerOptions": {
        "module": "ESNext",
        "moduleDetection": "legacy",
        "target": "ES2016",
        "rootDir": "./src",
        "outDir": "./build/js",
        "noEmitOnError": true
    },
    "include": [
        "src"
    ]
}
```

**Remember:** When using `tsconfig.json`, run `tsc -w` rather than specifying an individual TypeScript file. Specifying input files directly causes the compiler to ignore `tsconfig.json`.