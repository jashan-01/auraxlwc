({
    publishMessage : function(cmp, evt, hpr) {
        var message_to_send = cmp.get('v.messageInput');
        var source = "From Aura";

        var message = {
            messageToSend: message_to_send,
            sourceSystem: source,
        };

        console.log('Published Message: ', message.messageToSend);

        var messageChannel = cmp.find("SAMPLEMC");
        messageChannel.publish(message);
    }
})