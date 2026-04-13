/**
 * inventory-manager.ts
 *
 * a simple inventory manager that supports adding,
 * updating, filtering, and displaying items.
 *
 * author: christopher romo
 * created: 2026-04-08
 */

type Category = "electronics" | "clothing" | "grocery";
type ItemIdentifier = number | string;

type BaseItem = {
  id: number;
  name: string;
  price: number;
  category: Category;
};

type Electronics = BaseItem & {
  category: "electronics";
  warrantyYears: number;
};

type Clothing = BaseItem & {
  category: "clothing";
  size: "S" | "M" | "L";
};

type Grocery = BaseItem & {
  category: "grocery";
  expirationDate: string;
};

type InventoryItem = Electronics | Clothing | Grocery;

let inventory: InventoryItem[] = [];
let nextId: number = 1;

// T is a generic that can only be of type InventoryItem
function addItem<T extends InventoryItem>(item: Omit<T, "id">): void {
  const newItem = {
    id: nextId++,
    ...item,
  } as T;

  inventory.push(newItem);
}

function getItem(identifier: ItemIdentifier): InventoryItem | undefined {
  if (typeof identifier === "number") {
    return inventory.find((item) => item.id === identifier);
  } else {
    return inventory.find((item) => item.name === identifier);
  }
}

function printItem(item: InventoryItem): void {
  if (item.category === "electronics") {
    console.log(
      `[${item.id}] ${item.name} $${item.price} (Warranty Years: ${item.warrantyYears})`,
    );
  } else if (item.category === "clothing") {
    console.log(
      `[${item.id}] ${item.name} $${item.price} (Size: ${item.size})`,
    );
  } else {
    console.log(
      `[${item.id}] ${item.name} $${item.price} (Expiration Date: ${item.expirationDate})`,
    );
  }
}

function printItems(listName: string, itemsToPrint: InventoryItem[]): void {
  if (itemsToPrint.length === 0) {
    console.log(`- no items in ${listName} -`);
  } else {
    console.log(`- all items in ${listName} -\n`);
    for (const item of itemsToPrint) {
      printItem(item);
    }
  }
}

function printItemByIdentifier(identifier: ItemIdentifier): void {
  // prints an item if found, returns otherwise
  const item = getItem(identifier);
  if (!item) {
    console.error(`${identifier} is not a valid item identifier.`);
    return;
  }
  printItem(item);
}

function updateItem<C extends Category>(
  id: number,
  category: C,
  updates: Partial<
    Omit<Extract<InventoryItem, { category: C }>, "id" | "category">
  >,
): void {
  /**
   * extract: narrows the InventoryItem union to the member whose category
   * matches the passed in category. Since each union member has a distinct
   * category, this resolves to a single type.
   *
   * omit: removes the id and category properties so they can't be updated.
   *
   * partial: makes all remaining properties optional.
   */
  //
  let item = getItem(id);
  if (!item) {
    console.error(`${id} is not a valid item id.`);
    return;
  }
  if (item.category !== category) {
    console.error(`Expected category "${category}", got "${item.category}".`);
    return;
  }

  Object.assign(item, updates);
}

function getItemsByCategory(category: Category): InventoryItem[] {
  return inventory.filter((item) => item.category === category);
}

function sortByPrice(items: InventoryItem[]): InventoryItem[] {
  return [...items].sort((a, b) => a.price - b.price);
}

function findItems<T extends InventoryItem>(
  items: T[],
  predicate: (item: T) => boolean,
): T[] {
  // predicate is a function that returns a boolean
  let foundItems: T[] = [];
  for (const item of items) {
    if (predicate(item)) {
      foundItems.push(item);
    }
  }

  return foundItems;
}

function main(): void {
  // uses various functions to interact with the inventory manager

  // add items to inventory
  addItem<Electronics>({
    name: "tv",
    price: 1000,
    category: "electronics",
    warrantyYears: 3,
  });
  addItem<Electronics>({
    name: "computer",
    price: 1500,
    category: "electronics",
    warrantyYears: 5,
  });
  addItem<Clothing>({
    name: "sweater",
    price: 20,
    category: "clothing",
    size: "M",
  });
  addItem<Clothing>({
    name: "hoodie",
    price: 30,
    category: "clothing",
    size: "L",
  });
  addItem<Grocery>({
    name: "cinnamon",
    price: 2,
    category: "grocery",
    expirationDate: "2027",
  });
  addItem<Grocery>({
    name: "honey",
    price: 5,
    category: "grocery",
    expirationDate: "2028",
  });
  addItem<Grocery>({
    name: "vanilla",
    price: 8,
    category: "grocery",
    expirationDate: "2028",
  });

  console.log("// print some individual items");
  printItemByIdentifier("tv");
  printItemByIdentifier(2);

  console.log("\n// test items not in inventory");
  printItemByIdentifier("cake");
  printItemByIdentifier(8);

  console.log("\n// print all items in inventory");
  printItems("inventory", inventory);

  console.log("\n// test empty inventory");
  const emptyItems: InventoryItem[] = [];
  printItems("empty inventory", emptyItems);

  console.log("\n// update an items status correctly");
  updateItem(5, "grocery", { price: 3, expirationDate: "2028" });
  printItemByIdentifier(5);
  updateItem(1, "electronics", { name: "television" });
  printItemByIdentifier(1);

  console.log("\n// update an items status incorrectly");
  updateItem(8, "grocery", { price: 2 });
  updateItem(1, "clothing", { name: "socks" });

  console.log("\n// get all clothing items");
  const clothingItems: InventoryItem[] = getItemsByCategory("clothing");
  printItems("clothing inventory", clothingItems);

  console.log("\n// sort by price");
  const sortedItems: InventoryItem[] = sortByPrice(inventory);
  printItems("sorted inventory", sortedItems);

  console.log("\n// find items with a certain condition");
  const foundItems: InventoryItem[] = findItems(
    inventory,
    (item) => item.price > 25,
  );
  printItems("inventory ($25+)", foundItems);
  console.log("\n");
} // main

main();
