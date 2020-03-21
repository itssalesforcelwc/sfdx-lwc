import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {

    @track title ="welcome to Salesforce Lightning web Componenet World";

    @track showFeatures = true;

    get features(){

        return [
            {
                label: 'Edit the name and description of your component.',
                icon: 'utility:edit',
            },
            {
                label:
                    'Create permanent, shareable URLs that anyone can view within your org.',
                icon: 'utility:save',
            },
            {
                label: 'View changes to code instantly with Live Compilation.',
                icon: 'utility:refresh',
            },
            {
                label: 'Style your components with SLDS.',
                icon: 'utility:brush',
            },
            {
                label: 'Download and upload components as zip files.',
                icon: 'utility:download',
            },
        ];

    }
}