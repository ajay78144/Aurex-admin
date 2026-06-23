import {
Component,
EventEmitter,
Input,
Output
} from '@angular/core';

@Component({
selector:'app-navbar',
standalone:false,
templateUrl:'./navbar.html',
styleUrl:'./navbar.css'
})

export class Navbar{

@Input() sidebarOpen=false;

@Output() toggleSidebar=new EventEmitter<void>();

onToggleSidebar(){

this.toggleSidebar.emit();

}

logout(){

localStorage.removeItem("token");

}

}