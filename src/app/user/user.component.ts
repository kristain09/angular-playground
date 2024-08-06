import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() public avatarUri!: string;
  @Input() public name!: string;
  get imagePath(): string {
    return "assets/users/" + this.avatarUri;
  }

  onSelectedUser() {

  }
}

