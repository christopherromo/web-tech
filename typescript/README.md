# TypeScript Workspace

##### Created by Christopher Romo
##### Spring 2026

---

These are mini-projects created to help me learn TypeScript.

## Task Manager Mini-Project

### Features 📄

   - **Basic Types:** Types like *number* and *string*, showcased with variables like *id* and *title*, respectively.

   - **Literal Types:** Types restricted to specific values, such as certain *number* or *string* values. Showcased with *Priority* and *Status*.

   - **Custom Types:** A shape for data, as it defines properties an object must have to be considered that type. Showcased with the *Task* type, with properties like *id: number*, *title: string*, etc.

   - **Optional Properties:** Properties for a custom type can be made optional by using "?", as shown with *description?: string*.

   - **Unions:** Allow multiple types as an acceptable value by using " | ". The *Priority* and *Status* types are unions of string literals.

### Running the Project 🎬

1. Clone the repository.

2. Ensure Node.js is installed on your computer.

3. Open a terminal in the `task manager mini-project/` directory.

4. Install dependencies:
    ```bash
    npm install
    ```

5. Run the project:
    ```bash
    npm run dev
    ```

## Inventory Manager Mini-Project

### Features 📄

   - **Type Narrowing:** The process of finding a variable's type. This can be seen with the *getItem* function, where the incoming *ItemIdentifier*'s specific type is found before the logic.

   - **Extract Utility Type:** Finds members of a union that match a certain criterion. For example, the *updateItem* function expects a category argument, which it uses with the extract utility type to extract members of the InventoryItem union whose categories match.

   - **Omit Utility Type:** Ensures certain properties of a type are left out. For example, the *updateItem* function finds the expected type of the incoming object through use of the extract utility type. That type is then used with the omit utility type to ensure the *id* and *category* properties are absent from the incoming object.

   - **Partial Utility Type:** Allows all properties to be optional. For example, after *id* and *category* properties are ensured absent, the rest of the remaining properties are made optional.

   - **Generics:** Allow functions to work with flexible, reusable types while keeping type safety. For example, the *addItem* and *findItems* functions use generics with *InventoryItem* types.


### Running the Project 🎬

1. Clone the repository.

2. Ensure Node.js is installed on your computer.

3. Open a terminal in the `inventory manager mini-project/` directory.

4. Install dependencies:
    ```bash
    npm install
    ```

5. Run the project:
    ```bash
    npm run dev
    ```
