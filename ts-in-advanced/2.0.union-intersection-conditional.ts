// Union string or number
type StringOrNumber = string | number;

type StyleProps = {
  backgroundColor: string;
  color: string;
  margin: string;
  padding: string;
}
// Button component has onClick and everything of style Props
type ButtonProps = {
  onClick: (event?: MouseEvent) => void;
} & StyleProps;


// Conditional type

interface IdLabel {
  id: number;
}
interface NameLabel {
  name: string;
}
// Note: For every new type createLabel can handle, the number of overloads grows exponentially.
function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw "unimplemented";
}

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

// Usage

const _name = createLabel("nus_tech");
const _id = createLabel(1);

