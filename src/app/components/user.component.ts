import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>Hello {{name}}</h1>
  <h3>Welcome to your budget planner.</h3>
  <p>How often do you receive a paycheck?</p>
  <p>How much do you receive in your paycheck? ($)</p>
  <p>Do you receive any other form of income?</p>
  <p>How often do you receive this secondary income?</p>
  <p>How much do you receive in secondary income?</p>
  <p>In which freqency would you like to plan your budget? </p>
  `,
})
export class UserComponent  { 
  
  name : string;
  paycheckFrequency : paycheckFrequency; 
  otherIncomeFrequency: otherIncomeFrequency; 
  budgetFrequency : budgetFrequency; 
   
  constructor(){
    this.name = 'World';
    this.paycheckFrequency = {
      weekly: false,
      biweekly: false,
      monthly: false
    }
    this.budgetFrequency = {
      daily: false,
      weekly: false,
      monthly: false
    }
    this.otherIncomeFrequency = {
      relevant : false, 
      weekly : false,
      biweekly : false,
      monthly : false
    }
  }
}

interface paycheckFrequency{
  weekly : boolean;
  biweekly : boolean; 
  monthly : boolean;
}

interface budgetFrequency{
  daily: boolean;
  weekly : boolean; 
  monthly : boolean; 
}

interface otherIncomeFrequency{
  relevant : boolean; 
  weekly: boolean; 
  biweekly : boolean; 
  monthly : boolean; 
}