// Primitive types
let appName: string = "My TypeScript App";
let version: number = 1.0;
let isProduction: boolean = true;

// Arrays
let users: string[] = ["Alice", "Bob", "Charlie"];

// Tuple
let userInfo: [number, string] = [1, "Admin"];

// Enum
enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
  
}

// Object type
type User = {
  id: number;
  name: string;
  role: Role;
  isActive?: boolean; // optional
};

// Function
function greetUser(user: User): string {
  return `Hello ${user.name}, your role is ${user.role}`;
}

// Arrow function
const add = (a: number, b: number): number => a + b;

// Class
class App {
  constructor(private name: string) {}

  start(): void {
    console.log(`${this.name} started 🚀`);
  }
}

// Usage
const admin: User = {
  id: 1,
  name: "Mitesh",
  role: Role.ADMIN,
};

console.log(greetUser(admin));
console.log("Sum:", add(10, 20));

const app = new App(appName);
app.start();
