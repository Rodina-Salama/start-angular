import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  image:string[]=[
    "assets/images/poert1.png",
    "assets/images/port2.png",
    "assets/images/port3.png"
  ]
getphoto(img:string){
    Swal.fire({
    
    // text: "Modal with a custom image.",
    imageUrl: img,
    background:"#fff",
  
  }); 
}
 }
