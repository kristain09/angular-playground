import {Component} from "@angular/core";

@Component({
  selector: "app-header",
  standalone: true, // ignore aja dulu, ini fitur angular 18 -> not necessarry to decalred in ng module
  templateUrl: "header.component.html", // ngasih tahu html mana, kalau mau plain string pakai template
  styleUrl: "header.component.css", // can be collection of files using stulesUrls
  styles: [] // array of inline styles
})
export class HeaderComponent {}
