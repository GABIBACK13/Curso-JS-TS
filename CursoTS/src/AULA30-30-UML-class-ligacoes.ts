// interface use
interface People {
  name: string;
  lastName: string;
  fullName: () => string;
}
// Type Alias
type Action = {
  do: string;
  with: "strength" | "careful" | "hate";
};

// class associate && interface implements

export class Tool {
  constructor(
    public name: string,
    public action: Action,
  ) {}

  use(): string {
    return ` ${this.action.do} with ${this.action.with} using ${this.name}`;
  }
}

export class Writer implements People {
  private _tool: Tool | null;
  constructor(
    public name: string,
    public lastName: string,
  ) {
    this._tool = null;
  }
  set tool(tool: Tool) {
    this._tool = tool;
  }

  get tool(): string | null {
    if (!this._tool) return null;
    return this._tool.name;
  }

  useTool(): string {
    if (!this._tool) return "no tool set up";
    return this._tool.use();
  }

  fullName = () => this.name + " " + this.lastName;
}

const foucault = new Writer('Friedrich', 'Sartre');
console.log(foucault.lastName, foucault.useTool());

foucault.tool = new Tool('critical thinking', {do: 'think', with: "hate"});
console.log(foucault.lastName, foucault.useTool());
