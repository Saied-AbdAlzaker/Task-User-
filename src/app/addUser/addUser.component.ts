import { ToastrModule } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addUser',
  templateUrl: './addUser.component.html',
  styleUrls: ['./addUser.component.scss']
})
export class AddUserComponent implements OnInit {

  photo: string = 'Upload Photo';
  cancel: string = 'Cancel';
  save: string = 'Save';

  url: string = ''

  constructor(private _ContactsService: ContactsService, private _Router: Router, private toastr: ToastrModule) { }

  getImg(event: any) {
    // let files = event.target.files;
    console.log(event);
    // Upload Image
    if (event.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        console.log(event.target);
        this.url = event.target.result;
      }
      reader.readAsDataURL(event);
    }
  }

  user: any[] = [];

  userForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required, Validators.maxLength(15), Validators.minLength(3)]),
    lastName: new FormControl(null, [Validators.required, Validators.maxLength(15), Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required, Validators.pattern('/^01[0125][0-9]{8}$/')]),
    picture: new FormControl(null, [Validators.required])
  })

  submitForm() {
    // if(this.userForm.invalid){
    //   return;
    // }
    console.log(this.userForm.value);

    this._ContactsService.addUsers(this.userForm.value).subscribe((user) => {
      console.log(user.data.message);

      if (user.data.message == 'success') {
        // this.toastr.success('Logged In Success' , 'login page');
        this._Router.navigateByUrl("/listUser");
      } else {
        // this.toastr.error(user.message , 'Error Message');
        alert(user.data.message);
      }

    })
  }

  // onUpdateUsers(id:string){
  //   this._ContactsService.updateUsers(this.userForm.value , id).subscribe((user)=>{
  //     console.log(user.data);
  //     this._Router.navigateByUrl('/listUser');
  //     this.user = user.data;
  //   })
  // }


  ngOnInit(): void {

  }

}


