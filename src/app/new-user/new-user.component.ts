import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AvatarDialogComponent} from '../avatar-dialog/avatar-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {FirebaseService} from '../firebase.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  exampleForm: FormGroup;
  avatarLink: string = 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg';

  validation_messages = {
    'name': [
      {type: 'required', message: 'Name is required.'}
    ],
    'surname': [
      {type: 'required', message: 'Surname is required.'}
    ],
    'age': [
      {type: 'required', message: 'Age is required.'},
    ],
    // 'dateofbirth': [
    //   {type: 'required', message: 'Date Of Birth is required.'},
    // ]
  };

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    public firebaseService: FirebaseService
  ) {
  }

  // date = new FormControl(new Date());
  // serializedDate = new FormControl((new Date()).toISOString());

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.exampleForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
      // dateofbirth: ['', Validators.required]
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AvatarDialogComponent, {
      height: '400px',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.avatarLink = result.link;
      }
    });
  }

  resetFields() {
    this.avatarLink = 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg';
    this.exampleForm = this.fb.group({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      // dateofbirth: new FormControl('', Validators.required),
    });
  }

  onSubmit(value) {
    this.firebaseService.createUser(value, this.avatarLink)
      .then(
        res => {
          this.resetFields();
          this.router.navigate(['/home']);
        }
      );
  }

}
