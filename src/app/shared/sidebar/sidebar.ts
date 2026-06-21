import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

  @Input() isSidebarOpen = false;

  @Output() closeSidebar = new EventEmitter<void>();

  closeMenu() {
    this.closeSidebar.emit();
  }

}