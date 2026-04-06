/* *
 * index.ts
 *
 * task manager mini-project
 *
 * author: christopher romo
 * created: 2026-04-05
 */

type Priority = "low" | "medium" | "high";

type Status = "todo" | "in-progress" | "done";

type Task = {
  id: number;
  title: string;
  priority: Priority;
  status: Status;
  description?: string;
};

type TaskIdentifier = number | string;

let nextTaskId: number = 1;
let tasks: Task[] = [];

function addTask(task: Task): void {
  // adds a task to the task manager
  tasks.push(task);
} // addTask

function getTask(identifier: TaskIdentifier): Task | undefined {
  // gets a task from the task manager via provided id or title
  let task: Task | undefined;

  if (typeof identifier === "number") {
    task = tasks.find((task) => task.id === identifier);
    if (!task) {
      console.error(`${identifier} is not a valid task id.`);
      return;
    }
  } else {
    task = tasks.find((task) => task.title === identifier);
    if (!task) {
      console.error(`${identifier} is not a valid task title.`);
      return;
    }
  }

  return task;
} // getTask

function printTask(task: Task | undefined): void {
  // prints a singular task
  if (!task) {
    console.error(`no task to print.`);
    return;
  }

  if (task.description !== undefined) {
    console.log(
      `[${task.id}] ${task.title} (${task.status}, ${task.priority} priority): ${task.description}`,
    );
  } else {
    console.log(
      `[${task.id}] ${task.title} (${task.status}, ${task.priority} priority)`,
    );
  }
} // printTask

function printTasks(listName: string, tasksToPrint: Task[]): void {
  // prints incoming Task array
  if (tasksToPrint.length === 0) {
    console.log(`no tasks in ${listName}`);
  } else {
    console.log(`all tasks in ${listName}\n`);
    for (const task of tasksToPrint) {
      printTask(task);
    }
  }
  console.log(`\n`);
} // printTasks

function updateTaskStatus(id: number, status: Status): void {
  // finds task via provided id and updates its status
  let task = getTask(id);
  if (!task) {
    return;
  }

  task.status = status;
} // updateTaskStatus

function filterTasks(status: Status): Task[] {
  // filters the task manager via provided status
  let filteredTasks: Task[] = [];

  for (const task of tasks) {
    if (task.status === status) {
      filteredTasks.push(task);
    }
  }

  return filteredTasks;
} // filterTasks

function main(): void {
    // uses various functions to interact with the task manager

  addTask({
    id: nextTaskId++,
    title: "task 1",
    priority: "high",
    status: "in-progress",
  });
  addTask({
    id: nextTaskId++,
    title: "task 2",
    priority: "low",
    status: "done",
    description: "hello",
  });
  addTask({
    id: nextTaskId++,
    title: "task 3",
    priority: "medium",
    status: "todo",
  });
  addTask({
    id: nextTaskId++,
    title: "task 4",
    priority: "medium",
    status: "todo",
    description: "goodbye",
  });

  // get some tasks and print them in the console
  printTask(getTask("task 2"));
  printTask(getTask(1));
  printTask(getTask(4));
  printTask(getTask("task 3"));
  printTask(getTask(7));

  updateTaskStatus(1, "done");
  updateTaskStatus(2, "todo");

  printTasks("task manager", tasks);

  let todoTasks: Task[] = filterTasks("todo");

  printTasks("task manager (todo only)", todoTasks);
} // main

main();
