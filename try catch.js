//JavaScript Demo: Statement - Try...Catch

try {
    nonExistentFunction();
  } catch (error) {
    console.error(error);
    // Expected output: ReferenceError: nonExistentFunction is not defined
    // (Note: the exact output may be browser-dependent)
  }

  
  //The finally block

  /* The finally block contains statements to execute after the try block and catch block(s) execute, but before the statements following the try...catch...finally block. Control flow will always enter the finally block, which can proceed in one of the following ways:

Immediately before the try block finishes execution normally (and no exceptions were thrown);
Immediately before the catch block finishes execution normally;
Immediately before a control-flow statement (return, throw, break, continue) is executed in the try block or catch block.
If an exception is thrown from the try block, even when there's no catch block to handle the exception, the finally block still executes, in which case the exception is still thrown immediately after the finally block finishes executing.
*/
openMyFile();
try {
  // tie up a resource
  writeMyFile(theData);
} finally {
  closeMyFile(); // always close the resource
}

