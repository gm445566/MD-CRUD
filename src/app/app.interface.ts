import { FormGroup } from '@angular/forms';

export interface IApp {
    Items: ClassApp[];
    Form: FormGroup;
    Insert(value: ClassApp);
    Update(id: number, value: ClassApp);
    Delete(id: number);
}

export class ClassApp {
    image: string;
    category: string;
    name: string;
    detail: string;
    date: Date;
    id: number;
}
