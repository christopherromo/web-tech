# SQL Workspace

These are mini-projects created to help me learn SQL.

## Pokemon API Mini-Project

### Features 📄

   - **better-sqlite3 database:** Uses better-sqlite3 for a lightweight local database. `database.js` creates the database connection, `schema.js` builds the pokedex table, and `seed.js` loads 25 Pokemon.

   - **Model layer:** Keeps the SQL query logic in one place. Controllers request data from the model, and the model handles the actual *SELECT*, *INSERT*, *UPDATE*, and *DELETE* statements.

   - **SQL-focused endpoints:** Includes routes that practice common SQL patterns and operators, such as */fire-or-electric* for *OR*, */level-range* for *BETWEEN*, */sort* for *ORDER BY*, and */stats* for aggregate functions.

### Running the Project 🎬

1. Clone the repository.

2. Ensure Node.js is installed on your computer.

3. Open a terminal in the `pokemon api mini-project/` directory.

4. Install dependencies:
    ```bash
    npm install
    ```

5. Initialize database:
    ```bash
    npm run db:init
    ```

6. Run the project:
    ```bash
    npm run start
    ```
