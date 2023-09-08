import { Component, OnInit } from '@angular/core';
import { Post5Service } from '../post5.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post5 } from '../post5';
    
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
     
  busId!: number;
  post!: Post5;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public postService: Post5Service,
    private route: ActivatedRoute,
    private router: Router
   ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.busId = this.route.snapshot.params['postId'];
        
    this.postService.find(this.busId).subscribe((data: Post5)=>{
      this.post = data;
    });
  }
    
}