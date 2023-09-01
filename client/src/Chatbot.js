import React, { useState } from 'react';
import './chatbot.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const sendMessage = async () => {
    if (inputMessage.trim() === '') return;

    // Simulação de resposta do chatbot
    const response = await simulateChatbotResponse(inputMessage);

    // Atualização do estado das mensagens com a mensagem do usuário e a resposta do chatbot
    setMessages([...messages, { text: inputMessage, user: true }, { text: response, user: false }]);
    setInputMessage('');
  };

  const simulateChatbotResponse = async (message) => {
    // Lógica de simulação de resposta do chatbot
    if (message.includes('Olá')) {
      return 'Olá! Bem-vindo ao nosso chatbot de suporte a produtos. Como posso ajudar você hoje?';
    } else if (message.includes('informações sobre smartphones')) {
      return 'Claro, estamos aqui para ajudar. Que tipo de informações você precisa sobre smartphones?';
    } else if (message.includes('modelo mais recente')) {
      return 'O modelo mais recente da nossa empresa é o Smartphone X10. Ele tem uma tela de 6,5 polegadas, câmera de 48MP e 128GB de armazenamento. Posso ajudar com mais detalhes?';
    } else if (message.includes('preço')) {
      return 'O preço do Smartphone X10 é de $999.99. Também oferecemos opções de parcelamento. Você deseja saber mais sobre preços ou alguma outra coisa?';
    } else if (message.includes('opções de cores')) {
      return 'O Smartphone X10 está disponível nas cores preto, prata e azul. Você tem alguma preferência de cor?';
    } else if (message.includes('comprar um Smartphone X10')) {
      return 'Para comprar um Smartphone X10, você pode visitar nossa loja online em [URL da loja]. Lá, você encontrará opções de compra e poderá escolher sua cor preferida. Também podemos ajudá-lo com o processo de compra.';
    } else if (message.includes('garantia')) {
      return 'Sim, todos os nossos smartphones vêm com uma garantia de 1 ano para defeitos de fabricação. Você também pode optar por estender a garantia por um custo adicional.';
    } else {
      return 'Desculpe, não entendi sua pergunta. Por favor, faça uma pergunta mais clara ou específica.';
    }
  };

  return (
    <div className="App">
      <div className="message-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.user ? 'user' : 'chatbot'}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Digite uma mensagem..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Enviar</button>
      </div>
    </div>
  );
}

export default App;
