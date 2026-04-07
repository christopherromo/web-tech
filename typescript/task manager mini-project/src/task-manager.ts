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
const tasks: Task[] = [];

function addTask(task: Task): void {
  tasks.push(task);
}

function getTask(identifier: TaskIdentifier): Task | undefined {
  if (typeof identifier === "number") {
    return tasks.find((task) => task.id === identifier);
  } else {
    return tasks.find((task) => task.title === identifier);
  }
}

function printTask(task: Task): void {
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

function printTaskByIdentifier(identifier: TaskIdentifier): void {
  // prints a task if found, returns otherwise
  const task = getTask(identifier);
  if (!task) {
    console.error(`${identifier} is not a valid task identifier.`);
    return;
  }
  printTask(task);
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

function updateTaskStatus(status: Status, task: Task): void {
  task.status = status;
}

function updateTaskStatusByIdentifier(
  status: Status,
  identifier: TaskIdentifier,
): void {
  // updates a task if found, returns otherwise
  const task = getTask(identifier);
  if (!task) {
    console.error(`${identifier} is not a valid task identifier.`);
    return;
  }
  updateTaskStatus(status, task);
}

function filterTasks(status: Status): Task[] {
  return tasks.filter((task) => task.status === status);
}

function sortByPriority(tasksToSort: Task[]): Task[] {
  const sortedTasks: Task[] = [...tasksToSort].sort((a, b) => {
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
  printTaskByIdentifier("learn guitar");
  printTaskByIdentifier(2);

  console.log("\n// test tasks not in task manager");
  printTaskByIdentifier("stress out");
  printTaskByIdentifier(6);

  console.log("\n// print all tasks in task manager");
  printTasks("task manager", tasks);

  console.log("\n// test empty task manager");
  const emptyTasks: Task[] = [];
  printTasks("empty task manager", emptyTasks);

  console.log("\n// update a tasks status");
  updateTaskStatusByIdentifier("done", 5);
  printTaskByIdentifier(5);

  console.log("\n// get all done tasks");
  const doneTasks: Task[] = filterTasks("done");
  printTasks("done tasks", doneTasks);

  console.log("\n// sort by priority");
  const sortedTasks: Task[] = sortByPriority(tasks);
  printTasks("sorted tasks", sortedTasks);
  console.log("\n");
} // main

main();
