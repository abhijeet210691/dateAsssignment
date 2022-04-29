import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-date',
  templateUrl: './custom-date.component.html',
  styleUrls: ['./custom-date.component.scss']
})
export class CustomDateComponent implements OnInit {
  newFinalDate: any;

  constructor() { }
  dateForm:any
  daysInMonth:any;
  // year
  currentYear: any;
  startYear: any = 1950;
  allYears: any = [];
  allDaysInMonth:any = [];

  // month
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  currentDay = new Date();

  displayFinalDate: Date | undefined;

  ngOnInit(): void {

    this.dateForm=new FormGroup({
      date:new FormControl(''),
      month:new FormControl(''),
      year:new FormControl('')
    })
    
    this.currentYear = this.currentDay.getFullYear()
    for (var i = this.startYear; i <= this.currentYear; i++) {
      this.allYears.push(i)
    }
    
  }

  getDates(){
    this.newFinalDate="";
    this.dateForm.controls.date.reset(); 
    this.allDaysInMonth = [];
    this.daysInMonth = new Date(parseInt(this.dateForm.controls.year.value) ,(parseInt(this.dateForm.controls.month.value)+1) , 0).getDate();
    
    for (var i = 1; i <= this.daysInMonth; i++) {
      this.allDaysInMonth.push(i)
    }
  }

  finalDate(){
    
    this.displayFinalDate = new Date()
    this.displayFinalDate.setDate(this.dateForm.value.date);  
    this.displayFinalDate.setMonth(this.dateForm.value.month);  
    this.displayFinalDate.setFullYear(this.dateForm.value.year);
    this.newFinalDate = this.displayFinalDate;
    console.log(this.displayFinalDate.setDate(this.dateForm.value.date));
  }

  resetForm(){
    this.newFinalDate="";
    this.dateForm.controls.date.reset(); 
    this.dateForm.controls.month.reset();
    this.allDaysInMonth = [];
  }

}
