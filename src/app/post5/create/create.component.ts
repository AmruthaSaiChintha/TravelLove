import { Component, OnInit } from '@angular/core';
import { Post5Service } from '../post5.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';   
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    
  form!: FormGroup;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public postService: Post5Service,
    private router: Router
  ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      busName: new FormControl('', Validators.required),
      source: new FormControl('', Validators.required),
      destination: new FormControl('', Validators.required),
      departureDate: new FormControl('', Validators.required),
      departureTime: new FormControl('', Validators.required),
      charges: new FormControl('', Validators.required),
  });
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);
    this.postService.create(this.form.value).subscribe((res:any) => {
         console.log('User created successfully!');
         this.router.navigateByUrl('post/index');
    })
  }
  
}