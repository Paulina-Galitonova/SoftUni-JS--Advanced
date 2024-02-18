class BookClub {
    constructor(library) {
      this.library = library;
      this.books = [];
      this.members = [];
    }

    addBook(title, author) {
        const existingBook = this.books.find(book => book.title === title && book.author === author);
    
        if (existingBook) {
          return `The book "${title}" by ${author} is already in ${this.library} library.`;
        }
    
        this.books.push({ title, author });
        return `The book "${title}" by ${author} has been added to ${this.library} library.`;
      }


      addMember(memberName){
        if(this.members.includes(memberName)){
            return `Member ${memberName} is already a part of the book club.`
        } else{
            this.members.push(memberName);
            return `Member ${memberName} has been joined to the book club.`
        }
      }


      assignBookToMember(memberName,bookTitle){
        const memberIndex=this.members.indexOf(memberName);
        const bookIndex = this.books.findIndex(book => book.title === bookTitle);

        if(memberIndex === -1){
            throw new Error (`Member ${memberName} not found.`);
        }
        if(bookIndex===-1){
            throw new Error(`Book "${bookTitle}" not found.`);
                }

        const assignedBook = this.books.splice(bookIndex, 1)[0];

        return `Member ${memberName} has been assigned the book "${assignedBook.title}" by ${assignedBook.author}.`;
    }


        generateReadingReport(){
            if(this.members.length<=0){
                return "No members in the book club.";
            }
            if(this.books.length<=0){
                return "No available books in the library."
            }

            let result =`Available Books in ${this.library} library:\n`;

            for (const info of this.books){
                const book=Object.values(info)[0];
                const author=Object.values(info)[1];
                result += `"${book}" by ${author}\n`;
            }

            return result.trim();

        }
        }


    
  
  

  
        const myBookClub = new BookClub('The Bookaholics');
        console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
        console.log(myBookClub.addBook("1984", "George Orwell"));
        console.log(myBookClub.addMember("Alice"));
        console.log(myBookClub.addMember("Peter"));
        console.log(myBookClub.assignBookToMember("Peter", "1984"));
        console.log(myBookClub.assignBookToMember("Alice", "To Kill a Mockingbird"));
        console.log(myBookClub.generateReadingReport());
        
  
  
  
