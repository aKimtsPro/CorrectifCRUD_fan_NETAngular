import { AbstractControl, ValidationErrors } from "@angular/forms";

export function ValidAge(control: AbstractControl): ValidationErrors | null {
  
    if(control.value){
        const date = new Date(control.value);
        const years = new Date().getFullYear() - date.getFullYear();

        if( years >= 13 )
            return null;
        else
            return {
                'age': 'devrait être plus agé que 13 ans' 
            }
    }
    return null;

}