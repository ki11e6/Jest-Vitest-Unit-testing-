import { it, expect ,vi} from "vitest";
import {promises as fs} from 'fs'

import writeData from "./io";

//handling side effects
//promise is returned so returned value is checked here.
// it("should execute the witeFile method", () => {
//   const testData = "test";
//   const testFileName = "test.txt";
//   return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
// });

//we are going to use mock to test 

// jest.mock()

vi.mock('fs')
vi.mock('path',()=>{
  return {
    default:{
      join:(...args)=>{
        return args[args.length-1]
      }
    }
  }
})
it("should execute the witeFile method", () => {
  const testData = "test";
  const testFileName = "test.txt";
  writeData(testData, testFileName)
  // return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
  // expect(fs.writeFile).toBeCalled();
  expect(fs.writeFile).toBeCalledWith(testFileName,testData);
});
