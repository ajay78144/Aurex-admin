import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../services/contact';

@Component({
  selector: 'app-contact-list',
  standalone: false,
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css'
})
export class ContactList implements OnInit {

  contacts:any[] = [];

  constructor(
    private contactService: ContactService
  ){}

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(){

    this.contactService
    .getContacts()
    .subscribe({

      next:(res:any)=>{
        this.contacts = res;
      },

      error:(err:any)=>{
        console.log(err);
      }

    });

  }

  deleteContact(id:string){

    if(confirm('Delete Contact Message?')){

      this.contactService
      .deleteContact(id)
      .subscribe({

        next:()=>{
          this.getContacts();
        },

        error:(err:any)=>{
          console.log(err);
        }

      });

    }

  }

}