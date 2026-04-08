/**
 * inventory-manager.ts
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

// Type is a generic that can only be of type InventoryItem
function addItem<Type extends InventoryItem>(item: Omit<Type, "id">): void {
  const newItem: Type = {
    id: nextId++,
    ...item,
  } as Type;
  inventory.push(newItem);
}

function getItem(identifier: ItemIdentifier): InventoryItem | undefined {
  if (typeof identifier === "number") {
    return inventory.find((item) => item.id === identifier);
  } else {
    return inventory.find((item) => item.name === identifier);
  }
}

function main(): void {
  addItem<Grocery>({
    name: "cinnamon",
    price: 2,
    category: "grocery",
    expirationDate: "tomorrow",
  });

  let item = getItem(1);
  if (item) {
    console.log(item);
  }
}

main();
