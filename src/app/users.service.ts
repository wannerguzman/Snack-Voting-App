import { Injectable } from '@angular/core';
import { Init } from './init-users';

@Injectable()
export class UsersService extends Init{

  constructor() {
    super();
    console.log("Users Services Initialized......");
    this.load();
   }
   /**
    * Method to get the keys from local storage/
    */
  getUsersNames(): Array<String>{
     var usersNames: Array<String> = JSON.parse(localStorage.getItem('usersNames'));
     console.log(usersNames);
     return usersNames;
  } 
  getUsersVotes(): Array<String>{
    var usersVotes: Array<String> = JSON.parse(localStorage.getItem('usersVotes'));
    console.log(usersVotes);
    return usersVotes;
  }
  /**
   * Method to get the Snacks from local Storage
   */
  getSnacks(){
    var snacks: string[] = JSON.parse(localStorage.getItem('snacks'));
    return snacks;
  }
  /**
   * Method to get the votes from local Storage
   */
  getVotes(){
    var votes: number[] = JSON.parse(localStorage.getItem('votes'));
    return votes;
  }
  /**
   * Method to re-store the snacks.
   * @param snacks 
   */
  storeSnakcOrder(snacks:string[]){
    localStorage.setItem('snacks', JSON.stringify(snacks))
  }
  /**
   * Method to re-store the votes
   * @param votes 
   */
  storeVotes(votes: number[]){
    localStorage.setItem('votes',JSON.stringify(votes));
  }
  /**
   * Method to add users to localStorage
   * @param name 
   * @param vote 
   */
  addUser(name:String, vote:String): void{
    var usersNames: Array<String> = JSON.parse(localStorage.getItem('usersNames'));
    var usersVotes: Array<String> = JSON.parse(localStorage.getItem('usersVotes'));
    //Add new User
    usersNames.push(name);
    usersVotes.push(vote);
    //set the item.
    localStorage.setItem('usersNames',JSON.stringify(usersNames));
    localStorage.setItem('usersVotes',JSON.stringify(usersVotes));
  }
}
