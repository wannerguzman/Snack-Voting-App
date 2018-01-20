import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ActionSequence } from 'selenium-webdriver';
import { firestore } from 'firebase/app';

export class Init{
    load(){
        if(localStorage.getItem('userNames')==null || localStorage.getItem('userNames')== undefined ){
            console.log("No Users Found... Creating...");
            var usersNames: Array<String> = new Array<String>();
            usersNames.push("John");
            usersNames.push("Jane");
            var usersVotes: Array<String> = new  Array<String>();
            usersVotes.push("Banana");
            usersVotes.push("Apple");
            var votes: number[] = [1,1,0,0];
            var snacks: string[] = ["Apple","Orange","Banana","Pineapple"]
            localStorage.setItem('usersVotes', JSON.stringify(usersVotes));
            localStorage.setItem('usersNames',JSON.stringify(usersNames));
            localStorage.setItem('votes',JSON.stringify(votes));
            localStorage.setItem('snacks',JSON.stringify(snacks));
            return;
        }
        else{
            console.log('Found Users...')
        }
    }  
}