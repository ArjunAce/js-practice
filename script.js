import { counter } from "design-patterns/Singleton/SingletonUsingObject";
import { helperMethod } from "./helper.js";

console.log("test script");
helperMethod();


counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount());