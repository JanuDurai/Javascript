const fileSystem = {
    root: {
      files: ['file1.txt', 'file2.txt'],
      subdirectories: {
        folderA: {
          files: ['fileA1.txt', 'fileA2.txt'],
          subdirectories: {
            folderB: {
              files: ['fileB1.txt', 'fileB2.txt'],
            }
          }
        },
        folderC: {
          files: ['fileC1.txt', 'fileC2.txt'],
        }
      }
    }
  };

  let arrayFilePath=[];
  let path="";
function findfilepath(filesystem,path,fileSystem){
  console.log(` fie: ${filesystem}`);
  console.log("filesystem out loop root :" , Object.keys(filesystem));
   
     for(const property in filesystem){
        if(property=="root"){
          path= path.concat(property);          
           filesystem=[];
           filesystem.push("fileSystem",property);
           console.log(`filesystem root :  ${(filesystem.join("."))}`);
           filesystem=filesystem.join(".")
           findfilepath(filesystem,path,fileSystem)
        }
        if(property=="files"){
                 filesystem=filesystem.concat(".",property);
                 console.log(`filesystem fil : ${filesystem}`);

                //  filesystem.

        }
       
 }



  }

findfilepath(fileSystem,path,fileSystem);




// let file=fileSystem;


// function files(file){
//   console.log(`ghjkl..................${Object.keys(file)}`);
//   return fileSystem.concat(Object.keys(file))
// }
// file = files(file);
// file = files(file);




  //  console.log(Object.keys(fileSystem.root));
  //  console.log(Object.keys(fileSystem.root.subdirectories));
  //  console.log(Object.keys(fileSystem.root.subdirectories.folderA));
  //  console.log(Object.keys(fileSystem.root.subdirectories.folderA.subdirectories));
  //  console.log(Object.keys(fileSystem.root.subdirectories.folderA.subdirectories.folderB))
  //  console.log(Object.keys(fileSystem.root.subdirectories.folderC));






   





 //  From this obj get all the file paths as array. Output need to be 
 //  [
 //    'root/file1.txt',
 //    'root/file2.txt',
 //    'root/folderA/fileA1.txt',
 //    'root/folderA/fileA2.txt',
 //    'root/folderA/folderB/fileB1.txt',
 //    'root/folderA/folderB/fileB2.txt',
 //    'root/folderC/fileC1.txt',
 //    'root/folderC/fileC2.txt',
 //  ]



 