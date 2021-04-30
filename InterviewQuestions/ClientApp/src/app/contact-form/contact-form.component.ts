import { OnInit, Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'contact-form',
    templateUrl: 'conctact-form.component.html',
})
export class ContactFormComponent implements OnInit {
    contactForm: FormGroup;
    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.contactForm = this.fb.group({
            firstName: ['', [Validators.required, Validators.maxLength(3)]],
            lastName: '',
            email: '',

        });
    }

    save(): void {
        console.log(this.contactForm.valid);
        console.log('Saved: ' + JSON.stringify(this.contactForm.value));
    }
}