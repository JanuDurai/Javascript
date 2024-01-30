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


function filePath(dir_path,filesys){
    dir_path.map((element)=>{
           if (element=="root"){
               let path = "root";
                
               filePath(Object.getOwnPropertyNames(filesys.path),fileSystem.path);
               console.log(path);
           }
           if(element == files){
               
           }
    })
       let iterator = Object.getOwnPropertyNames(filepath);
       iterator.forEach((element) => {
        path+=`/${iterator}`;
        // console.log(path);
            //    if(iterator=='files'){
            //         filespath
            //    }
       });
}


var filepath_array=[],path=Object.getOwnPropertyNames(fileSystem);
filePath(Object.getOwnPropertyNames(fileSystem),fileSystem);

      


    //   let iterator = Object.getOwnPropertyNames(fileSystem.root.subdirectories.folderA.subdirectories.folderB.files); 
    //   console.log(iterator)

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



 