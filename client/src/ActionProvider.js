class ActionProvider {
    constructor(setMessages) {
      this.setMessages = setMessages;
    }
  
    greet = () => {
      const message = {
        type: 'text',
        content: 'Hello! How can I assist you today?',
      };
      this.addMessageToState(message);
    };
  
    unknown = () => {
      const message = {
        type: 'text',
        content: "I'm sorry, I didn't understand that.",
      };
      this.addMessageToState(message);
    };
  
    addMessageToState = (message) => {
      this.setMessages((prevMessages) => [...prevMessages, message]);
    };
  }
  
  export default ActionProvider;
  