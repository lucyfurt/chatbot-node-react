class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse = (message) => {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('hello')) {
      this.actionProvider.greet();
    } else {
      this.actionProvider.unknown();
    }
  };
}

export default MessageParser;
