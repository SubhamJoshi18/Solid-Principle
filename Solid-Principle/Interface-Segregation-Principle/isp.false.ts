// interface DocumentManager {
//   openDocument(): void;
//   saveDocument(): void;
//   scanDocument(): void;
//   closeDocument(): void;
// }

interface DocumentOpener {
  openDocument(): void;
}

interface DocumentCloser {
  closeDocument(): void;
}

interface DocumentScanner {
  scanDocument(): void;
}

interface DocumentSaveer {
  saveDocument(): void;
}

//The class which implement ths interface this should use this all the function
//segregrating the Interface and in typescript we can implement multiple interface hai

class BasicEditor implements DocumentOpener, DocumentCloser, DocumentSaveer {
  openDocument(): void {}

  saveDocument(): void {}

  closeDocument(): void {}

  scanDocument(): void {
    console.log("Dont do Anything");
  }
}
