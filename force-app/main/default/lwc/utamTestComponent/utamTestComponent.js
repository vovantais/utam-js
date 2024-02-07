import {LightningElement, wire} from 'lwc';
import {getRecord} from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Name';

export default class UtamTestComponent extends LightningElement {
    userId = Id;
    greeting = 'World';
    name;

    @wire(getRecord, {recordId: '$userId', fields: [NAME_FIELD]})
    wiredRecord({ data }) {
        if (data) {
            this.name = data.fields.Name.value;
        }
    }
}