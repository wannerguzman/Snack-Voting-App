import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service";
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  usersNames: Array<String>;

  usersVotes: Array<String>;

  name: string;

  snacks: string[];

  size: number;

  voter: string;


  /**
   * This will store the number of fruits for each fruits.
   * Each index will be designated to a fruit.
   * The size for this array will be 4. Index 0 will be for apple,
   * index 1 for orange, index 2 for banana and index 3 for pineapple.
   */
  votes: number[];

  dVotes: number[];

  /**
   * constructor to inialize the instance variables
   */
  constructor(private _usersService: UsersService) { 
    this.votes = [0,0,0,0];
    this.snacks = ["Apple","Orange","Banana","Pineapple"]
    this.usersNames = new Array<String>();
    this.usersVotes = new Array<String>(); 
    this.size = 0;
    this.voter  = "";
    this.name = "";
  }

  ngOnInit() {
    this.snacks = this._usersService.getSnacks();
    this.usersNames = this._usersService.getUsersNames();
    this.usersVotes = this._usersService.getUsersVotes();
    this.votes = this._usersService.getVotes();
  }
  /**
   * Method to add users to the database.
   */
  addUsers(): void{
    console.log("User: ", this.name);
    var index: number = this.usersNames.indexOf(this.name)
    if(index!=-1){
      this.voter = this.name + " already voted for " + this.usersVotes[index];
      this.name = "";
    }
    else{
      this.voter = "";
      this.size+=1;
      this.usersNames.push(this.name);
    }
  }
  /**
   * Method to check which fruit was pressed.
   * Then increment the votes for that fruit.
   * If the user alreay exist no action will take affect
   * when pressing any of the buttons, so we exit method.
   * 
   * @param n 
   */
  buttonPressed(n): void{
    if(this.name=="")return;
    if(n==0){
      if(this.snacks[0]=="Apple"){
        this.votes[0]+=1;
        this.usersVotes.push("Apple");
        this._usersService.addUser(this.name,"Apple");
      }
      else if(this.snacks[0]=="Orange"){
        this.votes[1]+=1;
        this.usersVotes.push("Orange");
        this._usersService.addUser(this.name,"Orange");
      }
      else if(this.snacks[0]=="Banana"){
        this.votes[2]+=1;
        this.usersVotes.push("Banana");
        this._usersService.addUser(this.name,"Banana");
      }
      else if(this.snacks[0]=="Pineapple"){
        this.votes[3]+=1;
        this.usersVotes.push("Pineapple");
        this._usersService.addUser(this.name,"Pineapple");
      }
    }
    else if(n==1){
      if(this.snacks[1]=="Apple"){
        this.votes[0]+=1;
        this.usersVotes.push("Apple");
        this._usersService.addUser(this.name,"Apple");
      }
      else if(this.snacks[1]=="Orange"){
        this.votes[1]+=1;
        //this.usersVotes.push("Orange");
        this._usersService.addUser(this.name,"Orange");
      }
      else if(this.snacks[1]=="Banana"){
        this.votes[2]+=1;
        this.usersVotes.push("Banana");
        this._usersService.addUser(this.name,"Banana");
      }
      else if(this.snacks[1]=="Pineapple"){
        this.votes[3]+=1;
        //this.usersVotes.push("Pineapple");
        this._usersService.addUser(this.name,"Pineapple");
      }
    }
    else if(n==2){
      if(this.snacks[2]=="Apple"){
        this.votes[0]+=1;
        this.usersVotes.push("Apple");
        this._usersService.addUser(this.name,"Apple");
      }
      else if(this.snacks[2]=="Orange"){
        this.votes[1]+=1;  
        this.usersVotes.push("Orange"); 
        this._usersService.addUser(this.name,"Orange");             
      }
      else if(this.snacks[2]=="Banana"){
        this.votes[2]+=1;
        this.usersVotes.push("Banana");
        this._usersService.addUser(this.name,"Banana");
      }
      else if(this.snacks[2]=="Pineapple"){
        this.votes[3]+=1;
        this.usersVotes.push("Pineapple");
        this._usersService.addUser(this.name,"Pineapple");
      }
    }
    else if(n==3){
      if(this.snacks[3]=="Apple"){
        this.votes[0]+=1;
        this.usersVotes.push("Apple");
        this._usersService.addUser(this.name,"Apple");
      }
      else if(this.snacks[3]=="Orange"){
        this.votes[1]+=1;
        this.usersVotes.push("Orange");
        this._usersService.addUser(this.name,"Orange");
      }
      else if(this.snacks[3]=="Banana"){
        this.votes[2]+=1;
        this.usersVotes.push("Banana");
        this._usersService.addUser(this.name,"Banana");
      }
      else if(this.snacks[3]=="Pineapple"){
        this.votes[3]+=1;
        this.usersVotes.push("Pineapple");
        this._usersService.addUser(this.name,"Pineapple");
      }
    }
    this.name = "";
    this.sort();
    this._usersService.storeSnakcOrder(this.snacks);
    this._usersService.storeVotes(this.votes);
  }
  /**
   * Method will create another snack and votes array for temporary use, so we don't 
   * modify the actual ones. We call the findMaxIndex function 4 times to sort the
   * fruits and check the id to see what fruit we are inserting into the temporary
   * array and then make the temporary array the new snacks array.
   */
  sort(): void{
    var sortedSnacks: string[] = ["","","",""];
    var temp: number[] = [this.votes[0], this.votes[1], this.votes[2], this.votes[3]];
    for(let counter in sortedSnacks){
      let id: number = this.findMaxIndex(temp);
      temp[id] = -1;
      if(Number(counter)==0){
        if(id==0){
          sortedSnacks[counter] = "Apple";
        }
        else if(id==1){
          sortedSnacks[counter] = "Orange";
        }
        else if(id==2){
          sortedSnacks[counter] = "Banana";
        }
        else if(id==3){
          sortedSnacks[counter] = "Pineapple"
        }
      }
      else if(Number(counter)==1){
        if(id==0){
          sortedSnacks[counter] = "Apple";
        }
        else if(id==1){
          sortedSnacks[counter] = "Orange";
        }
        else if(id==2){
          sortedSnacks[counter] = "Banana";
        }
        else if(id==3){
          sortedSnacks[counter] = "Pineapple"
        }
        this.snacks = sortedSnacks;
      }
      else if(Number(counter)==2){
        if(id==0){
          sortedSnacks[counter] = "Apple";
        }
        else if(id==1){
          sortedSnacks[counter] = "Orange";
        }
        else if(id==2){
          sortedSnacks[counter] = "Banana";
        }
        else if(id==3){
          sortedSnacks[counter] = "Pineapple"
        }
      }
      else if(Number(counter)==3){
        if(id==0){
          sortedSnacks[counter] = "Apple";
        }
        else if(id==1){
          sortedSnacks[counter] = "Orange";
        }
        else if(id==2){
          sortedSnacks[counter] = "Banana";
        }
        else if(id==3){
          sortedSnacks[counter] = "Pineapple"
        }
      }
    }
  }
  /**
   * Method to find the max value of an array.
   * @param sn
   */
  findMaxIndex(sn): number{
     let result: number = 0;
     let max: number = sn[result];
     for(let i in sn){
       if(sn[i]>max){
         result = Number(i);
         max = sn[i];
       }
     }
     return result;
  }
}
