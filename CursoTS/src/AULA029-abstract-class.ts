type Position = {
  x: number;
  y: number;
};
type maxStack = 1 | 64;
type Inventory = {
  inventorySize: 10 | 20;
  inventoryItems: Array<Item | null>;
};
type LogTypes = "attack" | "death" | "loot";

// ABSTRACT CLASS

export abstract class Entity {
  protected abstract name: string;
  protected abstract position: Position;
  abstract collision: boolean;

  isOnFloor(floorX: number): boolean {
    return this.position.x === floorX;
  }
}

export abstract class Creature extends Entity {
  protected abstract life: number;
  protected abstract aggressive: boolean;
  protected abstract damage: number;
  protected abstract drops: Array<Item | null>;
  abstract isDead: boolean;
  protected abstract defense?: number;

  constructor(
    protected position: Position,
    public collision: boolean,
  ) {
    super();
  }

  attack(target: Creature): void {
    if (this.isDead || target.isDead) return;

    const calcDamage = target.defense
      ? target.defense - this.damage
      : this.damage * -1;
    const totalDamage = calcDamage <= 0 ? calcDamage * -1 : 0;

    target.life = target.life - totalDamage;
    this.log("attack", target, totalDamage);

    if (target.life <= 0) {
      target.death();
      this.log("death", target);
      return;
    }
    if (target.aggressive) target.attack(this);
    return;
  }

  protected death(): Array<Item | null> | null {
    this.isDead = true;
    this.log("loot", this);
    if (this.drops && this.drops.length > 0) return this.drops;
    return null;
  }

  log(logType: LogTypes, target: Creature, totalDamage?: number): void {
    switch (true) {
      case logType === "attack":
        console.log(
          `${this.name} attack ${target.name} with ${totalDamage} damage`,
        );
        console.log(`${target.name} life: ${target.life} \n`);
        break;

      case logType === "death":
        console.log(
          `\n ${target.name} see the eyes of death by hands of ${this.name}`,
        );
        break;

      case logType === "loot":
        console.log(`\n ${target.name} drooped some items`);
        break;

      default:
        break;
    }
  }
}

export abstract class Item extends Entity {
  abstract itemName: string;
  abstract itemMaxStack: maxStack;
  abstract stocked: boolean;
}

export class Player extends Creature {
  protected inventory: Inventory;
  protected readonly drops: Array<Item | null>;
  isDead: boolean;

  constructor(
    position: Position,
    collision: boolean,
    protected life: number,
    protected aggressive: boolean,
    protected damage: number,
    protected name: string,
    protected defense?: number,
  ) {
    super(position, collision);
    this.isDead = false;
    this.inventory = {
      inventorySize: 10,
      inventoryItems: [],
    };
    this.drops = this.inventory.inventoryItems.map((slot) => {
      if (slot) return slot as Item;
      return null;
    });
  }
}

export class Mob extends Creature {
  isDead: boolean;

  constructor(
    protected position: Position,
    collision: boolean,
    protected name: string,
    protected life: number,
    protected aggressive: boolean,
    protected damage: number,
    protected readonly drops: Array<Item | null>,
    protected defense?: number,
  ) {
    super(position, collision);
    this.isDead = false;
  }
}

const lancelot = new Player(
  { x: 0, y: 1 },
  true,
  3200,
  true,
  650,
  "Lancelot",
  200,
);
const goblin = new Mob({ x: 1, y: 1 }, true, "gobchi", 550, true, 100, [], 100);
const miner = new Mob(
  { x: 1, y: 1 },
  true,
  "dave",
  550,
  true,
  600,
  [],
  600,
);

lancelot.attack(goblin);
console.log("\n ================== second fight ===================== \n");
miner.attack(lancelot);
