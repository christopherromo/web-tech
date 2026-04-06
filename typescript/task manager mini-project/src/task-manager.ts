/**
 * task-manager.ts
 *
 * a simple task manager that supports adding,
 * updating, filtering, and displaying tasks.
 *
 * author: christopher romo
 * created: 2026-04-05
 */

type Priority = "low" | "medium" | "high";
type Status = "todo" | "in-progress" | "done";
type TaskIdentifier = number | string;

type Task = {
  id: number;
  title: string;
  priority: Priority;
  status: Status;
  description?: string;
};

let nextTaskId: number = 1;
let tasks: Task[] = [];

function addTask(task: Task): void {
  tasks.push(task);
}

function getTask(identifier: TaskIdentifier): Task | undefined {
  // gets a task from the task manager via provided id or title
  if (typeof identifier === "number") {
    return tasks.find((task) => task.id === identifier);
  } else {
    return tasks.find((task) => task.title === identifier);
  }
}

function printTask(task: Task | undefined): void {
  if (!task) {
    console.error(`no such task.`);
    return;
  }

  if (task.description) {
    console.log(
      `[${task.id}] ${task.title} (${task.status}, ${task.priority} priority): ${task.description}`,
    );
  } else {
    console.log(
      `[${task.id}] ${task.title} (${task.status}, ${task.priority} priority)`,
    );
  }
}

function printTasks(listName: string, tasksToPrint: Task[]): void {
  if (tasksToPrint.length === 0) {
    console.log(`- no tasks in ${listName} -`);
  } else {
    console.log(`- all tasks in ${listName} -\n`);
    for (const task of tasksToPrint) {
      printTask(task);
    }
  }
}

function updateTaskStatus(id: number, status: Status): void {
  // finds task via provided id and updates its status
  let task = getTask(id);
  if (!task) {
    console.error(`no such task.`);
    return;
  }

  task.status = status;
}

function filterTasks(status: Status): Task[] {
  // filters the task manager via provided status
  return tasks.filter((task) => task.status === status);
}

function sortByPriority(tasksToSort: Task[]): Task[] {
  // sorts incoming Task array based on priority
  let sortedTasks: Task[] = [...tasksToSort].sort((a, b) => {
    if (a.priority === b.priority) {
      return 0;
    } else if (a.priority === "high") {
      return -1;
    } else if (a.priority === "medium" && b.priority === "low") {
      return -1;
    } else {
      return 1;
    }
  });

  return sortedTasks;
}

function main(): void {
  // uses various functions to interact with the task manager

  // add tasks to task manager
  addTask({
    id: nextTaskId++,
    title: "learn guitar",
    priority: "low",
    status: "todo",
    description: "one day",
  });
  addTask({
    id: nextTaskId++,
    title: "find a job",
    priority: "high",
    status: "in-progress",
  });
  addTask({
    id: nextTaskId++,
    title: "complete school",
    priority: "high",
    status: "done",
  });
  addTask({
    id: nextTaskId++,
    title: "work on projects",
    priority: "medium",
    status: "in-progress",
  });
  addTask({
    id: nextTaskId++,
    title: "cook dinner",
    priority: "medium",
    status: "todo",
    description: "yum",
  });

  console.log("// print some individual tasks");
  printTask(getTask("learn guitar"));
  printTask(getTask(2));

  console.log("\n// test tasks not in task manager");
  printTask(getTask("stress out"));
  printTask(getTask(6));

  console.log("\n// print all tasks in task manager");
  printTasks("task manager", tasks);

  console.log("\n// test empty task array");
  let emptyTasks: Task[] = [];
  printTasks("test task manager", emptyTasks);

  console.log("\n// update a tasks status");
  updateTaskStatus(5, "done");
  printTask(getTask(5));

  console.log("\n// get all todo tasks");
  let todoTasks: Task[] = filterTasks("todo");
  printTasks("todo tasks", todoTasks);

  console.log("\n// sort by priority");
  let sortedTasks: Task[] = sortByPriority(tasks);
  printTasks("sorted tasks", sortedTasks);
} // main

main();
