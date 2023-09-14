import { LightningElement, wire } from 'lwc';
import { subscribe, createMessageContext, releaseMessageContext, MessageContext } from 'lightning/messageService';
import SAMPLEMC from '@salesforce/messageChannel/myMessageChannel__c'
 
export default class subscriberLWC extends LightningElement {
    receivedMessage;
    myMessage;
    subscription;
 
    @wire(MessageContext)
    context;

 
    connectedCallback(){
        this.subscribeToMessageChannel();
    }
 
    subscribeToMessageChannel(){
        if(!this.subscription){
            this.subscription = subscribe(
                this.context,
                SAMPLEMC,
                (message) => this.handleMessage(message),
            );
        }
    }
 
    handleMessage(message){
        if(message.messageToSend){
            this.receivedMessage = message.messageToSend;
        }
    }
 
    disconnectedCallback(){
        if(this.subscription){
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    }
}